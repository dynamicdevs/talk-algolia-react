import { SymbolIcon } from "@dynamic-devs/symbol-react";
import { connectCurrentRefinements } from "react-instantsearch-dom";
import { CustomClearRefinements } from "./CustomClearRefinements";

const CurrentRefinements = ({ items, refine }: { items: any; refine: any }) => {
  return (
    <div
      className={`${
        !!items.length && "mb-5"
      } flex flex-wrap items-center space-x-3`}
    >
      {items.map((item: any) => (
        <>
          {item.items && (
            <ul
              key={item.label}
              className="flex flex-wrap items-center space-x-3"
            >
              {item.items.map((nested: any) => (
                <li
                  key={nested.label}
                  className="py-[7px] lg:py-[14px] px-[10px] lg:px-8
                  flex items-center space-x-5 rounded-full shadow-md border
                  bg-white text-dy-blueishgrey text-sm font-bold capitalize"
                >
                  <div>{nested.label}</div>
                  <SymbolIcon
                    onClick={(event) => {
                      event.preventDefault();
                      refine(nested.value);
                    }}
                    name="exit"
                    iconClass="symbol-sm"
                    type="solid"
                    className="cursor-pointer"
                  />
                </li>
              ))}
            </ul>
          )}
        </>
      ))}
      <CustomClearRefinements />
    </div>
  );
};
export const CustomCurrentRefinements =
  connectCurrentRefinements(CurrentRefinements);
