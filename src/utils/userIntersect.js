import React, { useEffect, useCallback } from "react";

const useIntersect = (props) => {
  const handleScrolling = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      IncreasePage();
    }
  });

  useEffect(() => {
    let observer;
    const { current } = target;
    if (current) {
      setIsLoader(true);
      // 관찰요소와 40%만큼 겹쳤을 때 onIntersect을 수행
      observer = new IntersectionObserver(handleScrolling, { threshold: 1 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScrolling]);
};

export default useIntersect;
