import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { FilterTypes, searchInput } from "@/app/global-types/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SearchAndFilter from "../searchAndFilter";
import { ControlContext } from "@/app/contexts/control";
import { useForm, SubmitHandler } from "react-hook-form";
type MobileViewProps = {
  filterController: [FilterTypes, Dispatch<SetStateAction<FilterTypes>>];
  itemToSearchController: [string, Dispatch<SetStateAction<string>>];
  listViewController: [string, Dispatch<SetStateAction<string>>];
};

const MobileView = ({
  filterController,
  itemToSearchController,
  listViewController,
}: MobileViewProps) => {
  const { addItem, jsxDisplay } = useContext(ControlContext);
  const [filter, setFilter] = filterController;
  const [itemToFind, setItemToFind] = itemToSearchController;
  const [currentListView, setCurrentListView] = listViewController;
  type formData = {
    show_name: string;
  };

  const { register, reset, handleSubmit } = useForm<formData>();
  const onSubmit: SubmitHandler<formData> = (data) => {
    if (data.show_name) {
      addItem(data.show_name);
      reset({ show_name: "" });
    }
  };

  return (
    <div className="w-full h-full flex flex-col border-2">
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-3xl text-center">{currentListView}</p>
        <button>
          <ChevronDownIcon height={25} width={25}></ChevronDownIcon>
        </button>
      </div>
      <div className="w-full flex flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-row items-center justify-center gap-4 p-4"
        >
          <button>Filter</button>
          <input
            type="text"
            className="rounded-md w-[35vw] py-1 text-black px-2"
            id="add_item"
            {...register("show_name")}
          ></input>
          <button className="rounded-md bg-white text-black px-3 py-1">
            Add
          </button>
        </form>
      </div>
      {jsxDisplay && (
        <div className="w-full h-full border-2 mt-2 p-2 flex flex-col gap-5">
          {jsxDisplay}
        </div>
      )}
    </div>
  );
};

export default MobileView;
