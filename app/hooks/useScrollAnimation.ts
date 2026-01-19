import { useEffect } from "react";

export const useScrollAnimation = (selector: string = ".fade-in") => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => el.classList.add("visible"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
};
