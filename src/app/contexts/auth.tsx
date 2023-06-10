"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import LoginModal from "../components/modals/login";
import { useRouter, usePathname } from "next/navigation";

export const userInfo = "user_info";

type AuthContextProps = {
  isAuthenticated: boolean;
  userName: string;
  login: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  userName: "",
  login: () => {},
});

type AuthControllerProps = {
  children: ReactNode;
};
export const AuthController = ({ children }: AuthControllerProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("");
  const pathname = usePathname();
  const { push } = useRouter();
  const [showLogin, setShowLogin] = useState<boolean>(false);
  useEffect(() => {
    if (!isAuthenticated && pathname != "/") {
      setShowLogin(true);
    } else if (isAuthenticated) {
      const user = localStorage.getItem(userInfo);

      if (user) {
        setUserName(user);
        setShowLogin(false);
        push("/dashboard");
      }
    }
  }, [pathname, isAuthenticated]);

  const login = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, userName }}>
      <LoginModal
        openState={[showLogin, setShowLogin]}
        title="Login to Continue"
      ></LoginModal>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
