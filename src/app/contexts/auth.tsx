"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import LoginModal from "../components/modals/login";
import { useRouter } from "next/router";
type AuthContextProps = {
  isAuthenticated: boolean;
};

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

type AuthControllerProps = {
  children: ReactNode;
};
export const AuthController = ({ children }: AuthControllerProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
