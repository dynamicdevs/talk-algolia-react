import { connectCurrentRefinements } from "react-instantsearch-dom";

const ClearRefinements = ({ items, refine }: { items: any; refine: any }) => (
  <>
    {!!items.length && (
      <button
        onClick={() => refine(items)}
        className="py-2 px-4 border rounded-md capitalize border-dy-purple
        text-dy-purple hover:bg-dy-purple hover:text-white"
      >
        Clear all refinements
      </button>
    )}
  </>
);

export const CustomClearRefinements =
  connectCurrentRefinements(ClearRefinements);
