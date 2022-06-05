/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { connectStateResults, Pagination } from "react-instantsearch-dom";
import { SymbolIcon } from "@dynamic-devs/symbol-react";
import { CustomCurrentRefinements } from "./CustomCurrentRefinements";
import { CustomHits } from "./CustomHits";
import { CustomSortBy } from "./CustomSortBy";

const StateResults = ({
  searching,
  searchResults,
}: {
  searching: boolean;
  searchResults: any;
}) => {
  const router = useRouter();
  const results: boolean = searchResults && searchResults.nbHits !== 0;
  return (
    <>
      <div className="mb-5 flex items-center justify-between">
        <div className="">
          <span className="font-bold">Assets found</span> (
          {searchResults?.nbHits})
        </div>
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

      {!!searching && (
        <div
          className={`animate-pulse grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
        >
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
            <div
              key={index}
              className="w-full h-38 md:h-96 rounded-xl shadow-md bg-dy-gray-1"
            ></div>
          ))}
        </div>
      )}

      {results && (
        <>
          <div className="mb-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <CustomHits />
          </div>
          <Pagination showLast />
        </>
      )}
      {!results && (
        <div className="text-center">
          <SymbolIcon name="question" iconClass="symbol-2xl" type="solid" />
          <div className="mb-5 font-bold text-center">No assets found</div>
          <button
            className="py-2 px-4 border border-dy-purple rounded-md text-dy-purple
              hover:bg-dy-purple hover:text-white capitalize"
            onClick={() => router.push(`/`)}
          >
            Go to home!
          </button>
        </div>
      )}
    </>
  );
};

export const CustomStateResults = connectStateResults(StateResults);
