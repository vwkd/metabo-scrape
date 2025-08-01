import { join, parse } from "@std/path";
import type { ApiResponse } from "./types/api.ts";

const BASE_URL = "https://www.metabo.com";
const API_URL = join(BASE_URL, "/api/cms/get");

const USER_AGENT = Deno.env.get("USER_AGENT");

if (!USER_AGENT) {
  throw new Error("Missing 'USER_AGENT' environment variable");
}

/**
 * Fetch page data from client-side routing API
 *
 * @param url URL of page
 * @returns JSON for page
 */
export async function get(url: string): Promise<ApiResponse> {
  const path = new URL(url).pathname;
  const { dir: parentPath } = parse(url);
  const body = JSON.stringify({ path });

  const res = await fetch(API_URL, {
    method: "POST",
    body,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Origin": BASE_URL,
      "Referer": parentPath,
      "User-Agent": USER_AGENT!,
    },
  });

  if (!res.ok) {
    throw new Error(`Got error: ${res.status} ${res.statusText}`);
  }

  const json: ApiResponse = await res.json();

  return json;
}
