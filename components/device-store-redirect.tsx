"use client";

import { useEffect } from "react";

/**
 * Backup for devices whose browser hides the phone in the user agent,
 * mainly iPadOS, which reports itself as a Mac.
 */
export function DeviceStoreRedirect({
  playStoreUrl,
  appStoreUrl,
}: {
  playStoreUrl: string;
  appStoreUrl: string;
}) {
  useEffect(() => {
    const ua = navigator.userAgent;
    const touchMac =
      /Macintosh/i.test(ua) && navigator.maxTouchPoints > 1;

    if (/iPhone|iPad|iPod/i.test(ua) || touchMac) {
      window.location.replace(appStoreUrl);
      return;
    }

    if (/Android|HarmonyOS|OpenHarmony/i.test(ua)) {
      window.location.replace(playStoreUrl);
    }
  }, [appStoreUrl, playStoreUrl]);

  return null;
}
