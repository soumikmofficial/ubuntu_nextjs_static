import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IAppContext {
  isLightBg: boolean;
  setIsLightBg: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<IAppContext>({
  isLightBg: false,
  setIsLightBg: () => {},
});

export const AppProvider = ({ children }: IProps) => {
  const { route } = useRouter();

  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    route === "/" || "/about" ? setIsLightBg(true) : setIsLightBg(false);
  }, [route]);
  const value = {
    isLightBg,
    setIsLightBg,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
