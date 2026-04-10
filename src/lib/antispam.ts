const submissions = new Map<string, number[]>();

const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = submissions.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) return true;

  recent.push(now);
  submissions.set(ip, recent);
  return false;
}

export function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export function isHoneypotFilled(body: Record<string, unknown>): boolean {
  return Boolean(body.website || body._gotcha);
}

const MIN_SUBMIT_TIME_MS = 2_000;

export function isTooFast(timestamp: unknown): boolean {
  if (typeof timestamp !== "number") return false;
  return Date.now() - timestamp < MIN_SUBMIT_TIME_MS;
}

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY ?? "";
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstile(
  token: unknown,
  ip: string
): Promise<boolean> {
  if (!TURNSTILE_SECRET) return true;
  if (typeof token !== "string" || !token) return false;

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: token,
        remoteip: ip,
      }),
    });

    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export function isValidOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const allowed = [
    "https://tufiscalista.com",
    "https://www.tufiscalista.com",
    "http://localhost:3000",
  ];
  return allowed.some((a) => origin.startsWith(a));
}
