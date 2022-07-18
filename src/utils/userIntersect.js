import React, { useEffect, useCallback, useState } from "react";

const useIntersect = (intersectRef, optionsObject) => {
  const [isIntersect, setIsIntersect] = useState(false);
  const { root = null, rootMargin = "0px", threshold = 1 } = optionsObject;

  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold,
  };

  // const IncreasePage = useCallback(() => {
  //   if (datatFinish === false) {
  //     setPage((prev) => prev + 1);
  //   }
  // });

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersect(true);
    } else {
      setIsIntersect(false);
    }
  };

  // const handleScrolling = useCallback(([entry]) => {
  //   if (entry.isIntersecting) {
  //     IncreasePage();
  //   }
  // });

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options);
    if (intersectRef.current) observer.observe(intersectRef.current);
    return () => observer.disconnect();
  }, []);
  return {
    isIntersect,
  };
};

export default useIntersect;
