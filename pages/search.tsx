import { InstantSearch, SearchBox, SortBy } from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { CustomHits, Filters } from "@/components";

const searchClient = instantMeiliSearch(
  `${process.env.NEXT_PUBLIC_MEILISEARCH_BASEURL}`,
  `${process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY}`
);

const Search = () => {
  return (
    <>
      <div>
        <InstantSearch
          indexName="steam-video-games"
          searchClient={searchClient}
        >
          <SearchBox />
          <div className="flex space-x-5">
            <div className="flex-shrink-0 w-80 space-y-3">
              <Filters />
            </div>
            <div className="space-y-5">
              <div className="flex justify-end">
                <SortBy
                  defaultRefinement="steam-video-games"
                  items={[
                    { value: "steam-video-games", label: "Relevant" },
                    {
                      value: "steam-video-games:recommendationCount:desc",
                      label: "Most Recommended",
                    },
                    {
                      value: "steam-video-games:recommendationCount:asc",
                      label: "Least Recommended",
                    },
                  ]}
                />
              </div>
              <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CustomHits />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default Search;
