"use client";
import { useState, useContext, Dispatch, SetStateAction } from "react";
import { FilterTypes } from "@/app/global-types/types";
import UserLists from "../userLists";
import SearchAndFilter from "../searchAndFilter";
import CurrentListView from "../currentListView";
import AuthContext from "@/app/contexts/auth";

type DesktopViewProps = {
  filterController: [FilterTypes, Dispatch<SetStateAction<FilterTypes>>];
  itemToSearchController: [string, Dispatch<SetStateAction<string>>];
  listViewController: [string, Dispatch<SetStateAction<string>>];
};

const DesktopView = ({
  filterController,
  itemToSearchController,
  listViewController,
}: DesktopViewProps) => {
  const [filter, setFilter] = filterController;
  const [itemToFind, setItemToFind] = itemToSearchController;

  const [currentListView, setCurrentListView] = listViewController;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full w-full flex-row gap-4 ">
        <div id="Sidebar" className="flex w-[15vw] flex-col gap-3">
          <div className="flex h-max w-full rounded-lg">
            <SearchAndFilter
              filterController={[filter, setFilter]}
              searchController={[itemToFind, setItemToFind]}
            ></SearchAndFilter>
          </div>
          <div className=" flex h-full w-full rounded-lg">
            <UserLists
              listViewController={[currentListView, setCurrentListView]}
            ></UserLists>
          </div>
        </div>
        <div className="flex h-full w-full">
          <CurrentListView
            listViewController={[currentListView, setCurrentListView]}
          ></CurrentListView>
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
