import { useState, useEffect } from "react";

export default function useMount(opened, ANIMATION_TIME) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (opened && !isMounted) {
      setIsMounted(true);
    } else if (!opened && !isMounted) {
      setTimeout(() => {
        setIsMounted(false);
      }, ANIMATION_TIME);
    }
  }, [opened]);

  return {
    isMounted
  }
}
