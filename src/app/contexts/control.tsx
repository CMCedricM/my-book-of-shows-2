"use client";

import { ReactNode, createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ShowType } from "../global-types/types";
import { userInfo } from "./auth";
import { set } from "react-hook-form";
import { format } from "path";
type ControlContextProps = {
  addItem: (item: string) => void;
  removeItem: () => void;
  changeListView: () => void;
  currentListView: string;
  currentItems: ShowType[];
  jsxDisplay: JSX.Element[];
};

let key = 0;

export const ControlContext = createContext<ControlContextProps>({
  addItem: (item: string) => {},
  removeItem: () => {},
  changeListView: () => {},
  currentItems: [],
  currentListView: "",
  jsxDisplay: [],
});

type ControlProps = {
  children: ReactNode;
};

export const Controller = ({ children }: ControlProps) => {
  const [currentItems, setCurrentItems] = useState<ShowType[]>([]);
  const [jsxDisplay, setJSXDisplay] = useState<JSX.Element[]>([]);
  const [currentListView, setcurrentListView] = useState<string>("");
  //   May save some time when generating data
  const [newItems, setNewItems] = useState<ShowType[]>([]);
  useEffect(() => {
    const tempJSX: JSX.Element[] = [];
    // Create the items
    newItems.forEach((item, idx) => {
      const temp: JSX.Element = (
        <div
          key={key++}
          className="flex flex-row items-center border-2 rounded-md p-2"
        >
          <div>{item.show_name}</div>
        </div>
      );
      tempJSX.push(temp);
    });
    const jsxNew = [...jsxDisplay.flat(), tempJSX.flat()];
    const formatJSX = (
      <div className="flex flex-col items-center gap-5">{jsxNew.flat()}</div>
    );
    setJSXDisplay(jsxNew.flat());
  }, [newItems]);

  const addItem = (item: string) => {
    const user = localStorage.getItem(userInfo);
    if (!user) {
      return;
    }
    const newItem: ShowType = {
      show_id: uuidv4(),
      show_name: item,
      user_id: user,
      watch_status: false,
      date_added: new Date(),
      list_id: "",
    };
    console.log(newItem);
    setNewItems([newItem]);
  };

  const removeItem = () => {
    console.log("Removed");
  };

  const changeListView = () => {
    console.log("changed");
  };
  return (
    <ControlContext.Provider
      value={{
        addItem,
        removeItem,
        changeListView,
        currentItems,
        currentListView,
        jsxDisplay,
      }}
    >
      {children}
    </ControlContext.Provider>
  );
};
