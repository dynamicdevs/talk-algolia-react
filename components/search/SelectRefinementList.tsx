import React, { useState } from "react";
import { SymbolIcon } from "@dynamic-devs/symbol-react";
import { connectRefinementList } from "react-instantsearch-dom";

const RefinementList = ({ items, refine }: { items: any; refine: any }) => {
  return (
    <ul className="space-y-1">
      {items.map((item: any, index: number) => (
        <li
          key={index}
          onClick={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
          className={`px-6 py-4 rounded-full cursor-pointer
          capitalize ${
            item.isRefined ? "font-bold bg-dy-input shadow-md" : ""
          }`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
const CustomRefinementList = connectRefinementList(RefinementList);

export const SelectRefinementList = ({
  label,
  attribute,
}: {
  label: string;
  attribute: string;
}) => {
  const [isFiltersListHidden, setIsFiltersListHidden] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsFiltersListHidden((_) => !_)}
        className="mb-2 px-6 py-4 flex items-center rounded-full 
        text-dy-purple bg-white shadow-md cursor-pointer"
      >
        <div className="flex-grow font-bold">{label}</div>
        {isFiltersListHidden ? (
          <SymbolIcon name="arrow_down" iconClass="symbol-md" type="solid" />
        ) : (
          <SymbolIcon name="arrow_up" iconClass="symbol-md" type="solid" />
        )}
      </div>
      <div className={`${isFiltersListHidden ? "hidden" : "block"}`}>
        <CustomRefinementList attribute={attribute} />
      </div>
    </div>
  );
};
