import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from "react-instantsearch-dom";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";

const searchClient = instantMeiliSearch(
  `${process.env.NEXT_PUBLIC_MEILISEARCH_BASEURL}`,
  `${process.env.NEXT_PUBLIC_MEILISEARCH_API_KEY}`
);
const Hit = ({ hit }: { hit: any }) => <Highlight attribute="name" hit={hit} />;

const Search = () => {
  return (
    <>
      <div>
        <InstantSearch
          indexName="steam-video-games"
          searchClient={searchClient}
        >
          <SearchBox />
          <Hits hitComponent={Hit} />
        </InstantSearch>
      </div>
    </>
  );
};

export default Search;
