"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import LoginModal from "../components/modals/login";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/firebase/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import Router from "next/router";

export const userInfo = "user_info";

type AuthContextProps = {
  isAuthenticated: boolean;
  userName: string;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  userName: "",
  login: () => {},
  logout: () => {},
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
  const [stateReset, setStateReset] = useState<boolean>(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setShowLogin(false);
        setIsAuthenticated(true);
        localStorage.setItem(userInfo, user.displayName ?? "user");
      } else {
        const currUser = localStorage.getItem(userInfo);
        if (currUser) {
          localStorage.removeItem(userInfo);
        }
      }
    });
  }, []);
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
  }, [pathname, isAuthenticated, push]);

  const login = () => {
    setIsAuthenticated(true);
  };

  // This just ensures that once the username is empty reset the state
  useEffect(() => {
    if (!userName) {
      const timer = setTimeout(() => setIsAuthenticated(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [userName]);

  const logout = async () => {
    await signOut(auth)
      .then(async () => {
        console.log("exited");
        localStorage.removeItem(userInfo);
        setUserName("");
        push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, userName, logout }}>
      <LoginModal
        openState={[showLogin, setShowLogin]}
        title="Login to Continue"
      ></LoginModal>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
