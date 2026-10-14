export type StorePlatform = "ios" | "android";

const BOT =
  /googlebot|adsbot-google|mediapartners-google|bingbot|applebot|duckduckbot|baiduspider|yandexbot|slurp|facebookexternalhit|facebot|twitterbot|whatsapp|slackbot|telegrambot|linkedinbot|embedly|pinterestbot|redditbot|discordbot|ia_archiver|semrush|ahrefs|petalbot|bytespider|gptbot|claudebot|amazonbot/i;

/**
 * Pick a store from the device that opened the link.
 * Desktop browsers and link-preview crawlers get no redirect so they can
 * see both store buttons.
 */
export function preferredStore(
  userAgent: string,
  hints?: { platform?: string | null; mobile?: string | null },
): StorePlatform | null {
  const ua = userAgent ?? "";
  if (BOT.test(ua)) return null;

  const platform = (hints?.platform ?? "").replaceAll('"', "");
  const mobile = hints?.mobile ?? "";

  if (/android|harmonyos|openharmony/i.test(ua) || /android/i.test(platform)) {
    return "android";
  }

  if (
    /iPhone|iPad|iPod/i.test(ua) ||
    /^ios$/i.test(platform) ||
    (/Macintosh/i.test(ua) && mobile === "?1")
  ) {
    return "ios";
  }

  return null;
}
