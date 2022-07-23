import React, { useEffect, useState } from "react";

const useIntersect = (intersectRef, optionsObject) => {
  const [isIntersect, setIsIntersect] = useState(false);
  const { root = null, rootMargin = "0px", threshold = 1 } = optionsObject;

  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold,
  };

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setIsIntersect(true);
    } else {
      setIsIntersect(false);
    }
  };

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
