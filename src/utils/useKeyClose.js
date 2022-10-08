import { useEffect } from "react";

export const useKeyClose = (closeThing) => {
  useEffect(() => {
    const escKeyModalClose = (e) => {
      if (e.keyCode === 27) {
        closeThing();
      }
    };
    window.addEventListener("keydown", escKeyModalClose);
    return () => window.removeEventListener("keydown", escKeyModalClose);
  }, []);
};
