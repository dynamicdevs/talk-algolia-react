import { InstantSearch, SearchBox } from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";
import { CustomHits } from "@/components";

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
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <CustomHits />
          </div>
        </InstantSearch>
      </div>
    </>
  );
};

export default Search;
