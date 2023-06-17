import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FilterTypes, searchInput } from "@/app/global-types/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import SearchAndFilter from "../searchAndFilter";
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
  const [filter, setFilter] = filterController;
  const [itemToFind, setItemToFind] = itemToSearchController;
  const [currentListView, setCurrentListView] = listViewController;
  return (
    <div className="w-full h-full flex flex-col border-2">
      <div className="flex flex-row items-center justify-center gap-2">
        <p className="text-3xl text-center">{currentListView}</p>
        <button>
          <ChevronDownIcon height={25} width={25}></ChevronDownIcon>
        </button>
      </div>
      <div className="w-full flex flex-row">
        <form className="w-full flex flex-row items-center justify-center gap-4 p-4">
          <button>Filter</button>
          <input
            type="text"
            className="rounded-md w-[35vw] py-1"
            id="add_item"
          ></input>
          <button className="rounded-md bg-white text-black px-3 py-1">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobileView;
