"use client";
import { useState } from "react";
import { FilterTypes } from "../global-types/types";
import UserLists from "../components/userLists";
import SearchAndFilter from "../components/searchAndFilter";
import CurrentListView from "../components/currentListView";

const Dashboard = () => {
  const [filter, setFilter] = useState<FilterTypes>(FilterTypes.None);
  const [itemToFind, setItemToFind] = useState<string>("");

  const [currentListView, setCurrentListView] = useState<string>("Test List");

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

export default Dashboard;
