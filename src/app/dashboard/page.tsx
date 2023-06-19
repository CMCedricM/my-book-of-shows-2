"use client";
import { useState, useContext } from "react";
import { FilterTypes } from "../global-types/types";
import DesktopView from "../components/desktop_view/desktopView";
import MobileView from "../components/mobile_view/mobileView";
import { Controller, ControlContext } from "../contexts/control";

const Dashboard = () => {
  const [filter, setFilter] = useState<FilterTypes>(FilterTypes.None);
  const [itemToFind, setItemToFind] = useState<string>("");
  const {
    addItem,
    removeItem,
    changeListView,
    currentItems,
    currentListView,
    jsxDisplay,
  } = useContext(ControlContext);

  const [currentList, setCurrentListView] = useState<string>("Test List");
  return (
    <Controller>
      <div className="flex h-full w-full flex-col">
        <div className="md:flex md:w-full md:h-full hidden ">
          <DesktopView
            filterController={[filter, setFilter]}
            itemToSearchController={[itemToFind, setItemToFind]}
            listViewController={[currentList, setCurrentListView]}
          ></DesktopView>
        </div>
        <div className="flex w-full h-full md:hidden">
          <MobileView
            filterController={[filter, setFilter]}
            itemToSearchController={[itemToFind, setItemToFind]}
            listViewController={[currentList, setCurrentListView]}
          ></MobileView>
        </div>
      </div>
    </Controller>
  );
};

export default Dashboard;
