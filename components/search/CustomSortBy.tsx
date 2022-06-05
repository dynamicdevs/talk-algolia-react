import React, { useState } from "react";
import { connectSortBy } from "react-instantsearch-dom";
import { SymbolIcon } from "@dynamic-devs/symbol-react";

const SortBy = ({
  items,
  refine,
}: {
  items: any;
  currentRefinement: string;
  refine: any;
}) => {
  const [list, setList] = useState({
    currentLabel: items[0]?.label,
    isHidden: true,
  });

  return (
    <div className="relative">
      <div
        onClick={() => setList((_) => ({ ..._, isHidden: !_.isHidden }))}
        className="py-2 px-6 flex justify-between items-center 
          rounded-full shadow-md lg:space-x-12 font-bold bg-white cursor-pointer"
      >
        <div className="flex-grow">Sort by: {list.currentLabel}</div>
        {!list.isHidden ? (
          <SymbolIcon
            name="arrow_up"
            iconClass="symbol-md"
            type="solid"
            className="flex-shrink-0"
          />
        ) : (
          <SymbolIcon
            name="arrow_down"
            iconClass="symbol-md"
            type="solid"
            className="flex-shrink-0"
          />
        )}
      </div>
      {!list.isHidden && (
        <ul
          className="absolute top-[39px] left-0 z-10 
            w-full shadow-md rounded-md bg-white"
        >
          {items.map((item: any) => (
            <li
              key={item.value}
              className={`py-2 px-6 hover:bg-dy-input cursor-pointer 
                ${item.isRefined ? "font-bold" : ""}`}
              onClick={(event) => {
                event.preventDefault();
                refine(item.value);
                setList((_) => ({
                  currentLabel: item.label,
                  isHidden: true,
                }));
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const CustomSortBy = connectSortBy(SortBy);
