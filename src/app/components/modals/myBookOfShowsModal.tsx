import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
  Fragment,
} from "react";
import { Dialog, Transition } from "@headlessui/react";
// import XMark from "heroicons/24/solid/x-mark.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type BookOfShowsModalProps = {
  children: ReactNode;
  openState: [boolean, Dispatch<SetStateAction<boolean>>];
  dialogTitle?: String;
  extraOnClose?: () => void;
  colorScheme?: string;
  preventClosing?: boolean;
};

const BookOfShowsModal = ({
  children,
  openState,
  dialogTitle,
  extraOnClose,
  colorScheme,
  preventClosing,
}: BookOfShowsModalProps) => {
  const [open, setOpen] = openState;
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className={`relative z-10 ${
          colorScheme ? colorScheme : ""
        } bg-[#E0E1BC]`}
        onClose={() => (extraOnClose ? extraOnClose() : "")}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 bg-[#000000]/50" aria-hidden="true">
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Dialog.Panel
                  className={`w-full max-w-md transform overflow-hidden rounded-2xl ${
                    colorScheme ? colorScheme : "bg-white"
                  }  p-2 text-left align-middle shadow-xl transition-all`}
                >
                  {!preventClosing ? (
                    <div className="pb-2">
                      <button onClick={() => setOpen(false)}>
                        <XMarkIcon height={25} width={25} />
                      </button>
                    </div>
                  ) : (
                    <div className="p-2"></div>
                  )}
                  {dialogTitle && (
                    <Dialog.Title
                      as="h3"
                      className="px-3 text-[24px] font-bold leading-6 text-gray-900 text-center"
                    >
                      {dialogTitle}
                    </Dialog.Title>
                  )}
                  {children}
                </Dialog.Panel>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default BookOfShowsModal;
