import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FilterTypes } from "../global-types/types";
import { useForm, SubmitHandler } from "react-hook-form";

type SearchAndFilterProps = {
  filterController: [FilterTypes, Dispatch<SetStateAction<FilterTypes>>];
  searchController: [string, Dispatch<SetStateAction<string>>];
};

const SearchAndFilter = ({
  filterController,
  searchController,
}: SearchAndFilterProps) => {
  const [filter, setFilter] = filterController;
  const [searchItem, setSearchitem] = searchController;

  type searchInput = {
    anItem: string;
  };

  const { handleSubmit } = useForm<searchInput>();

  const onSubmit: SubmitHandler<searchInput> = (data) => {
    if (data.anItem) {
      setSearchitem(data.anItem);
    }
  };

  return (
    <div className="flex w-full flex-col items-center rounded-md bg-gradient-to-t from-deep-green/30 bg-blur-green p-4 backdrop-blur-sm">
      <form className="flex w-[10vw] flex-col items-center gap-3 py-2">
        <input id="add_item" className="w-full items-center rounded-lg"></input>
        <label
          htmlFor="add_item"
          className="rounded-lg border-2 bg-white px-2 text-sm text-black"
        >
          Add Item
        </label>
      </form>
      <div className="flex w-full flex-col items-center gap-2 pb-2">
        <p>Filter By:</p>
        <select className="flex w-[10vw] flex-col  items-center justify-center rounded-md text-center text-black">
          <option className="text-center">Hello</option>
        </select>
      </div>
    </div>
  );
};

export default SearchAndFilter;
