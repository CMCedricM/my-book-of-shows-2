import BookOfShowsModal from "./myBookOfShowsModal";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";
import AuthContext from "@/app/contexts/auth";
import { useForm, SubmitHandler } from "react-hook-form";

type LoginProps = {
  openState: [boolean, Dispatch<SetStateAction<boolean>>];
  title?: string;
  preventClosing?: boolean;
  reload?: [boolean, Dispatch<SetStateAction<boolean>>];
};

const LoginModal = ({
  openState,
  title,
  preventClosing,
  reload,
}: LoginProps) => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [open, setOpen] = openState;
  const [reloadPage, setReload] = reload ?? [null, null];

  type loginFieldsTypes = {
    email: string;
    password: string;
  };
  const { register, watch, handleSubmit, reset } = useForm<loginFieldsTypes>();

  const onSubmit: SubmitHandler<loginFieldsTypes> = (vals) => {
    // Login Logic

    // Save user name to local store
    localStorage.setItem("user_info", vals.email);
    // For now just allow through
    login();
  };
  return (
    <BookOfShowsModal
      openState={[open, setOpen]}
      colorScheme="bg-deep-purple"
      preventClosing={preventClosing}
    >
      <div className="flex flex-col w-full h-full">
        <h2 className="text-center text-[24px] font-semibold">{title}</h2>
        <form
          className="h-full w-full p-4 flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-md font-semibold">
              Email
            </label>
            <input
              id="username"
              type="text"
              className="rounded-lg p-2 text-black"
              {...register("email")}
            ></input>
          </div>
          <div className="flex flex-col h-full w-full gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="rounded-lg p-2 text-black"
              {...register("password")}
            ></input>
          </div>
          <div className="h-full w-full mt-3 flex items-center justify-center">
            <button
              type="submit"
              className="bg-white text-black rounded-md px-7 py-2 font-semibold"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </BookOfShowsModal>
  );
};

export default LoginModal;
