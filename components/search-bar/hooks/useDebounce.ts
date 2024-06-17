import {UseDebounceProps} from "./interfaces";
import {useEffect, useState} from "react";

const useDebounce = ({text, delay}: UseDebounceProps) => {
  const [debounce, setDebounce] = useState(text);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [text, delay]);

  return debounce;
};

export default useDebounce;
