"use client";
import { useState, useContext } from "react";
import { FilterTypes } from "../global-types/types";
import DesktopView from "../components/desktop_view/desktopView";
import MobileView from "../components/mobile_view/mobileView";

const Dashboard = () => {
  const [filter, setFilter] = useState<FilterTypes>(FilterTypes.None);
  const [itemToFind, setItemToFind] = useState<string>("");

  const [currentListView, setCurrentListView] = useState<string>("Test List");
  return (
    <div className="flex h-full w-full flex-col">
      <div className="md:flex md:w-full md:h-full hidden ">
        <DesktopView
          filterController={[filter, setFilter]}
          itemToSearchController={[itemToFind, setItemToFind]}
          listViewController={[currentListView, setCurrentListView]}
        ></DesktopView>
      </div>
      <div className="flex w-full h-full md:hidden">
        <MobileView
          filterController={[filter, setFilter]}
          itemToSearchController={[itemToFind, setItemToFind]}
          listViewController={[currentListView, setCurrentListView]}
        ></MobileView>
      </div>
    </div>
  );
};

export default Dashboard;
