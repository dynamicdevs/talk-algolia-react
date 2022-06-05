import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { InstantSearch, SearchBox, Configure } from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { Filters, CustomStateResults } from "@/components";

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
              <CustomStateResults />
            </div>
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default Search;
