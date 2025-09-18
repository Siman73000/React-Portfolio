import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(null); // start with null

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const mobileUA = /android|iphone|ipad|ipod|windows phone|blackberry|mobile/i;
    const hasTouch = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;

    setIsMobile(mobileUA.test(ua) || hasTouch);
  }, []);

  return isMobile;
}
