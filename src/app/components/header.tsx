"use client";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import AuthContext from "../contexts/auth";
import LoginModal from "./modals/login";

const MyHeader = () => {
  const { push } = useRouter();
  const { isAuthenticated, userName, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  return (
    <div className="mt-2 flex w-full flex-row items-center justify-center gap-4 rounded-md bg-blur-green py-4 drop-shadow-lg backdrop-blur-sm">
      <LoginModal openState={[showLogin, setShowLogin]}></LoginModal>
      <h1
        className="grow text-center text-lg font-medium md:text-[24px] cursor-pointer"
        onClick={() => push("/")}
      >
        My Book Of Shows
      </h1>
      {isAuthenticated && (
        <div className="pr-4 text-right" onClick={() => logout()}>
          {userName}
        </div>
      )}
      {!isAuthenticated && (
        <div
          className="pr-4 text-right cursor-pointer"
          onClick={() => setShowLogin(true)}
        >
          Login
        </div>
      )}
    </div>
  );
};

export default MyHeader;
