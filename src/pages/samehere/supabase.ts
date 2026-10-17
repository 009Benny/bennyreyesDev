/**
 * The Supabase project Same Here runs on — the same values the iOS app ships
 * with (SameHere/Secrets.xcconfig).
 *
 * The anon key is MEANT to be public: it is in every copy of the app, and Row
 * Level Security is what protects the data. NEVER put the service_role key here
 * (or anywhere in this repo) — this file ends up in the browser bundle.
 */
export const SUPABASE_URL = 'https://eezdoyozyffmfxjmtvfg.supabase.co';
export const SUPABASE_ANON_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlemRveW96eWZmbWZ4am10dmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzNjE5MTksImV4cCI6MjEwMzkzNzkxOX0._dDWfuC7LfWidSWIxvdWGvi-4jkLDYysRzZavN1v22g';

/** Same rule as the app (AuthPolicy.passwordMinLength). */
export const PASSWORD_MIN_LENGTH = 8;

type AuthError = { status: number; code: string };

const headers = (accessToken?: string): HeadersInit => ({
    apikey: SUPABASE_ANON_KEY,
    'Content-Type': 'application/json',
    ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
});

async function authError(res: Response): Promise<AuthError> {
    const body = await res.json().catch(() => ({}));
    return { status: res.status, code: String(body.error_code ?? body.code ?? '') };
}

/**
 * Trades a `token_hash` (when the email template links with {{ .TokenHash }})
 * for a session. Not needed for the default {{ .ConfirmationURL }} links, which
 * arrive with the access token already in the URL fragment.
 */
export async function verifyRecoveryToken(tokenHash: string): Promise<string> {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/verify`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ type: 'recovery', token_hash: tokenHash }),
    });
    if (!res.ok) throw await authError(res);
    const body = await res.json();
    if (!body.access_token) throw { status: 400, code: 'no_session' } satisfies AuthError;
    return body.access_token as string;
}

export async function updatePassword(accessToken: string, password: string): Promise<void> {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: 'PUT',
        headers: headers(accessToken),
        body: JSON.stringify({ password }),
    });
    if (!res.ok) throw await authError(res);
}

/** Ends the one-off session the email link opened. The app keeps its own. */
export function signOutLocal(accessToken: string) {
    fetch(`${SUPABASE_URL}/auth/v1/logout?scope=local`, {
        method: 'POST',
        headers: headers(accessToken),
    }).catch(() => {});
}

export const isAuthError = (e: unknown): e is AuthError =>
    typeof e === 'object' && e !== null && 'status' in e && 'code' in e;
