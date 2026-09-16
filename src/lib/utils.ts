import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function sanitizeInput(input: string): string {
  if (!input) return "";
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limit: number;
  private windowMs: number;

  constructor(limit: number = 5, windowMs: number = 60000) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  isRateLimited(key: string): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    const windowStart = now - this.windowMs;
    
    const validTimestamps = timestamps.filter(ts => ts > windowStart);
    
    if (validTimestamps.length >= this.limit) {
      this.requests.set(key, validTimestamps);
      return true;
    }
    
    validTimestamps.push(now);
    this.requests.set(key, validTimestamps);
    return false;
  }
}
