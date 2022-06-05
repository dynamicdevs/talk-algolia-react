import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  InstantSearch,
  SearchBox,
  Pagination,
  Configure,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import {
  CustomHits,
  Filters,
  CustomSortBy,
  CustomCurrentRefinements,
} from "@/components";

const searchClient = instantMeiliSearch(
  `${process.env.NEXT_PUBLIC_MEILISEARCH_BASEURL}`,
  `${process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY}`
);

const Search = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState<any>(router.query);

  const onSearchStateChange = (updatedSearchState: any) => {
    setSearchState(updatedSearchState);
  };

  useEffect(() => {
    onSearchStateChange(router.query);
  }, [router]);

  return (
    <>
      <div>
        <div>{JSON.stringify(router.query)}</div>
        <InstantSearch
          indexName="steam-video-games"
          searchClient={searchClient}
          searchState={searchState}
          onSearchStateChange={onSearchStateChange}
        >
          <Configure hitsPerPage={12} />
          <SearchBox className="hidden" />
          <div className="flex space-x-5">
            <div className="flex-shrink-0 w-80 space-y-3">
              <Filters />
            </div>
            <div className="flex-grow">
              <div className="mb-5 flex justify-end">
                <CustomSortBy
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
              <CustomCurrentRefinements />
              <div className="mb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <CustomHits />
              </div>
              <Pagination showLast />
            </div>
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default Search;
