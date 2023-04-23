import { useEffect, useState } from "react";

type IUseLocalStorageProps = {
  key: string;
  initValue: string | object | number;
};

export const useLocalStorage = ({ key, initValue }: IUseLocalStorageProps) => {
  const getStateValue = () => {
    if (typeof window === "undefined") {
      return null;
    }
    const keyLocalStorageValue = localStorage.getItem(key);
    if (keyLocalStorageValue) {
      return JSON.parse(keyLocalStorageValue);
    }
    localStorage.setItem(key, JSON.stringify(initValue));
    return initValue;
  };

  const [value, setValue] = useState(() => getStateValue());

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
