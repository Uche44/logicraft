import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: "ease-in-out",
    });
  }, []);
}
