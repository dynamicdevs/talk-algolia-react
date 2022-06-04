import { connectCurrentRefinements } from "react-instantsearch-dom";
import { SelectRefinementList } from "./SelectRefinementList";

const ClearRefinements = ({ items, refine }: { items: any; refine: any }) => (
  <button
    onClick={() => refine(items)}
    disabled={!items.length}
    className={`py-2 px-4 border rounded-md capitalize ${
      !items.length
        ? "cursor-not-allowed bg-dy-gray-1"
        : "border-dy-purple text-dy-purple hover:bg-dy-purple hover:text-white"
    }`}
  >
    Clear all refinements
  </button>
);

const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);

export const Filters = () => {
  return (
    <>
      <div className="font-bold">Filters</div>
      <CustomClearRefinements />
      <SelectRefinementList label="Genres" attribute="genres" />
      <SelectRefinementList label="Players" attribute="players" />
      <SelectRefinementList label="Platforms" attribute="platforms" />
    </>
  );
};
