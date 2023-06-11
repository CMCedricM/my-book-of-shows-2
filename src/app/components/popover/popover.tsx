import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Fragment, ReactNode, useContext } from "react";
import AuthContext from "@/app/contexts/auth";

type ShowsPopOversProps = {
  title?: string;
};

const ShowsPopOvers = ({ title }: ShowsPopOversProps) => {
  const { logout } = useContext(AuthContext);
  return (
    <div className="flex flex-row items-center justify-center w-[10vw] border-2 rounded-md">
      <Popover className={`relative w-full`}>
        {({ open }) => (
          <>
            <Popover.Button className={`w-full overflow-hidden`}>
              <div className="flex flex-row items-center justify-center text-center w-full px-2">
                <p className="overflow-hidden w-full">{title}</p>
                <ChevronDownIcon height={20} width={20}></ChevronDownIcon>
              </div>
            </Popover.Button>
            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-3"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel
                className={` rounded-md flex flex-col w-full items-center justify-center  mt-2 py-1 absolute border-2 backdrop-blur-lg bg-blur-green/60 `}
              >
                <div
                  onClick={() => {
                    logout();
                  }}
                >
                  <button>Logout</button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default ShowsPopOvers;
