import { SelectRefinementList } from "./SelectRefinementList";

export const Filters = () => {
  return (
    <>
      <div className="font-bold">Filters</div>
      <SelectRefinementList label="Genres" attribute="genres" />
      <SelectRefinementList label="Players" attribute="players" />
      <SelectRefinementList label="Platforms" attribute="platforms" />
    </>
  );
};
