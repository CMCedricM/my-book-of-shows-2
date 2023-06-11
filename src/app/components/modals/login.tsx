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
import { loginFieldsTypes } from "@/app/global-types/types";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";

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
  const [loginError, setLoginError] = useState<string>("");

  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginFieldsTypes>();

  useEffect(() => {
    reset();
  }, [isAuthenticated, reset]);

  const onSubmit: SubmitHandler<loginFieldsTypes> = async (data) => {
    // Login Logic
    let success = false;
    await setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        await signInWithEmailAndPassword(auth, data.email, data.password).then(
          () => {
            success = true;
            setLoginError("");
          }
        );
      })
      .catch((err) => {
        console.log(`There was an errorr ${err}`);
        setLoginError(`${err}`);
      });

    if (!success) {
      reset({ password: "" });
      return;
    }
    // Save user name to local store
    localStorage.setItem("user_info", data.email);
    // Close Modal
    setOpen(false);
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
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            ></input>
            {errors.email && (
              <div className="text-red pl-1">{`Invalid Email`}</div>
            )}
          </div>
          <div className="flex flex-col h-full w-full gap-2">
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="rounded-lg p-2 text-black"
              {...register("password", {
                required: true,
              })}
            ></input>
            {errors.password && (
              <div className="text-red pl-1">{`Invalid Password`}</div>
            )}
          </div>
          <div className="h-full w-full mt-3 gap-2 flex flex-col items-center justify-center">
            {loginError && <div>{loginError}</div>}
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
