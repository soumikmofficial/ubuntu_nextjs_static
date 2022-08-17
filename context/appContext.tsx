import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IAppContext {
  isHomePage: boolean;
  isMenuActive: boolean;
  setIsHomePage: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<IAppContext>({
  isHomePage: false,
  setIsHomePage: () => {},
  isMenuActive: false,
  setIsMenuActive: () => {},
});

export const AppProvider = ({ children }: IProps) => {
  const { route } = useRouter();

  const [isHomePage, setIsHomePage] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    route === "/" ? setIsHomePage(true) : setIsHomePage(false);
  }, [route]);
  const value = {
    isHomePage,
    isMenuActive,
    setIsHomePage,
    setIsMenuActive,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
