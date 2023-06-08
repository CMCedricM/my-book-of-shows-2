"use client";
import LoginModal from "./components/modals/login";
import { useState } from "react";

export default function Home() {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginModal
        openState={[openLogin, setOpenLogin]}
        title="Login"
      ></LoginModal>
    </main>
  );
}
