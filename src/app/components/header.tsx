"use client";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";
import AuthContext from "../contexts/auth";
import LoginModal from "./modals/login";
import ShowsPopOvers from "./popover/popover";

const MyHeader = () => {
  const { push } = useRouter();
  const { isAuthenticated, userName, logout } = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  return (
    <div className="mt-2 z-10 flex w-full flex-row items-center justify-center gap-4 rounded-md bg-blur-green py-4 drop-shadow-lg backdrop-blur-sm">
      <LoginModal openState={[showLogin, setShowLogin]}></LoginModal>
      <h1
        className="absolute text-center text-lg font-medium md:text-[24px] cursor-pointer"
        onClick={() => push("/")}
      >
        My Book Of Shows
      </h1>
      <div className="flex flex-row items-center justify-end w-full">
        {isAuthenticated && (
          <div className="pr-4 text-right cursor-pointer">
            <ShowsPopOvers title={`Hello, ${userName}`}></ShowsPopOvers>
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
    </div>
  );
};

export default MyHeader;
