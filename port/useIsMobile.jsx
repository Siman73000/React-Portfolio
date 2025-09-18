import { useState, useEffect } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const detectMobile = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const mobileUA = /android|iphone|ipad|ipod|windows phone|blackberry/i;
      const hasTouch = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;

      return mobileUA.test(ua) || hasTouch;
    };

    setIsMobile(detectMobile());
  }, []);

  return isMobile;
}
