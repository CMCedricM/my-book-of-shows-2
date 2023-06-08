import { useState, useEffect, Dispatch, SetStateAction } from "react";

type CurrentListViewProps = {
  listViewController: [string, Dispatch<SetStateAction<string>>];
};

const CurrentListView = ({ listViewController }: CurrentListViewProps) => {
  const [currentList, setCurrentList] = listViewController;

  return (
    <div className="flex max-h-full w-full max-w-full resize flex-col rounded-md bg-gradient-to-t from-deep-green/30 bg-blur-green backdrop-blur-md drop-shadow-md">
      <div className="px-2 py-4">
        <div className=" flex w-full flex-col items-center rounded-md bg-white p-4">
          <h2 className="text-[24px] font-semibold text-black">
            {currentList}
          </h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CurrentListView;
