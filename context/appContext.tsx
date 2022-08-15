import React, { useContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

interface IAppContext {
  currentPage: string;
  isMenuActive: boolean;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = React.createContext<IAppContext>({
  currentPage: "home",
  setCurrentPage: () => {},
  isMenuActive: false,
  setIsMenuActive: () => {},
});

export const AppProvider = ({ children }: IProps) => {
  const [currentPage, setCurrentPage] = useState("home");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const value = {
    currentPage,
    isMenuActive,
    setCurrentPage,
    setIsMenuActive,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
