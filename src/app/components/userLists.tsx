import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useTransition } from "react";
type UserListsProps = {
  listViewController: [string, Dispatch<SetStateAction<string>>];
};

const UserLists = ({ listViewController }: UserListsProps) => {
  // We Will Likely Query The Lists From a Database
  const [userLists, setUserLists] = useState<string[]>(["Test List 2"]);
  const [currentListView, setCurrentListView] = listViewController;

  const [isPending, startTransition] = useTransition();

  const generateListItems = (): JSX.Element[] => {
    const items: JSX.Element[] = userLists.map((anItem, idx) => {
      return (
        <div key={idx}>
          <div
            onClick={() => {
              setCurrentListView(anItem);
            }}
            className="text-md cursor-pointer"
          >
            {anItem}
          </div>
        </div>
      );
    });

    return items;
  };

  return (
    <div className="mt-2 flex w-full flex-col rounded-md bg-gradient-to-t from-deep-green/30 bg-blur-green p-2 backdrop-blur-sm drop-shadow-lg">
      <div className="mt-2 w-full items-center justify-center rounded-md border-2 bg-white p-2 text-black">
        <h2 className="text-center">Your Lists</h2>
      </div>
      <div className="flex flex-col items-center py-2">
        {generateListItems()}
      </div>
    </div>
  );
};

export default UserLists;
