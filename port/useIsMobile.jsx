import { useState, useEffect } from "react";

export default function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent || navigator.vendor || window.opera;
      const mobileUA = /android|iphone|ipad|ipod|windows phone|blackberry/i;
      const hasTouch = "maxTouchPoints" in navigator && navigator.maxTouchPoints > 0;

      return window.innerWidth <= breakpoint || mobileUA.test(ua) || hasTouch;
    };

    setIsMobile(checkMobile());

    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
