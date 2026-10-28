// Security utilities for private access gating and client-side anti-tampering guards

const AUTH_STORAGE_KEY = 'cee1_auth_token_v1';
const FAILED_ATTEMPTS_KEY = 'cee1_failed_attempts';
const LOCKOUT_UNTIL_KEY = 'cee1_lockout_until';

// SHA-256 hash of the access code "101"
const PASSCODE_HASH = '16dc368a89b428b2485484313ba67a3912ca03f2b2b42429174a4f8b3dc84e44';

export async function hashString(str: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  // Simple fallback hash if crypto.subtle is unavailable
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash.toString();
}

export async function verifyPasscode(input: string): Promise<boolean> {
  const clean = input.trim();
  // Fast path & cryptographic hash verification
  if (clean === '101') {
    return true;
  }
  const computedHash = await hashString(clean);
  return computedHash === PASSCODE_HASH;
}

export function isSessionAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(AUTH_STORAGE_KEY) === 'granted';
  } catch {
    return false;
  }
}

export function setSessionAuthenticated(authenticated: boolean): void {
  try {
    if (authenticated) {
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'granted');
      localStorage.removeItem(FAILED_ATTEMPTS_KEY);
      localStorage.removeItem(LOCKOUT_UNTIL_KEY);
    } else {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
    }
  } catch {
    // ignore
  }
}

export function getSecurityLockoutState(): {
  isLocked: boolean;
  remainingSeconds: number;
  failedCount: number;
} {
  try {
    const lockoutUntil = parseInt(localStorage.getItem(LOCKOUT_UNTIL_KEY) || '0', 10);
    const now = Date.now();
    const failedCount = parseInt(localStorage.getItem(FAILED_ATTEMPTS_KEY) || '0', 10);

    if (lockoutUntil > now) {
      const remainingSeconds = Math.ceil((lockoutUntil - now) / 1000);
      return { isLocked: true, remainingSeconds, failedCount };
    }
    return { isLocked: false, remainingSeconds: 0, failedCount };
  } catch {
    return { isLocked: false, remainingSeconds: 0, failedCount: 0 };
  }
}

export function recordFailedAttempt(): {
  isLocked: boolean;
  remainingSeconds: number;
  failedCount: number;
} {
  try {
    const failedCount = parseInt(localStorage.getItem(FAILED_ATTEMPTS_KEY) || '0', 10) + 1;
    localStorage.setItem(FAILED_ATTEMPTS_KEY, failedCount.toString());

    // Lock for 30 seconds after 5 failed attempts
    if (failedCount >= 5) {
      const lockUntil = Date.now() + 30000;
      localStorage.setItem(LOCKOUT_UNTIL_KEY, lockUntil.toString());
      return { isLocked: true, remainingSeconds: 30, failedCount };
    }
    return { isLocked: false, remainingSeconds: 0, failedCount };
  } catch {
    return { isLocked: false, remainingSeconds: 0, failedCount: 1 };
  }
}

export function setupSecurityGuards(): () => void {
  if (typeof window === 'undefined') return () => {};

  // 1. Disable context menu (right click)
  const handleContextMenu = (e: MouseEvent) => {
    e.preventDefault();
  };

  // 2. Disable devtools shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, etc.)
  const handleKeyDown = (e: KeyboardEvent) => {
    // F12
    if (e.key === 'F12') {
      e.preventDefault();
      return;
    }
    // Ctrl+Shift+I or Cmd+Option+I
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      return;
    }
    // Ctrl+Shift+J or Cmd+Option+J (console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      return;
    }
    // Ctrl+Shift+C (inspect element)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      return;
    }
    // Ctrl+U or Cmd+U (view source)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      return;
    }
  };

  window.addEventListener('contextmenu', handleContextMenu);
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('contextmenu', handleContextMenu);
    window.removeEventListener('keydown', handleKeyDown);
  };
}
