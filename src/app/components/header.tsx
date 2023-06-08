"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
const MyHeader = () => {
  const { push } = useRouter();
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  return (
    <div className="mt-2 flex w-full flex-row items-center justify-center gap-4 rounded-md bg-blur-green py-4 drop-shadow-lg backdrop-blur-sm">
      <h1
        className="grow text-center text-lg font-medium md:text-[24px] cursor-pointer"
        onClick={() => push("/")}
      >
        My Book Of Shows
      </h1>
      {userLoggedIn && <div className="pr-4 text-right">User</div>}
    </div>
  );
};

export default MyHeader;
