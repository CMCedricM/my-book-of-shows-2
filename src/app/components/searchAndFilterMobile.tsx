import { FilterTypes } from "../global-types/types";
import { Dispatch, SetStateAction } from "react";

type SearchAndFilterProps = {
  filterController: [FilterTypes, Dispatch<SetStateAction<FilterTypes>>];
  searchController: [string, Dispatch<SetStateAction<string>>];
};

const SearchAndFilterMobile = ({
  filterController,
  searchController,
}: SearchAndFilterProps) => {
  type searchInput = {
    anItem: string;
  };
  return (
    <div className="w-full h-full flex flex-row items-center">
      <div></div>
    </div>
  );
};

export default SearchAndFilterMobile;
