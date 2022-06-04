/* eslint-disable @next/next/no-img-element */
import { Highlight, connectHits } from "react-instantsearch-dom";

const Hits = ({ hits }: { hits: any }) => {
  console.log(hits);
  return (
    <>
      {hits.map((hit: any) => (
        <div
          key={hit.objectID}
          className="p-4 border border-dy-blueishgrey rounded-xl shadow-md
          space-y-2 bg-white"
        >
          <div className="hit-name text-dy-purple">
            <Highlight attribute="name" hit={hit} />
          </div>
          <img
            src={hit.image}
            alt={hit.name}
            className="h-52 w-full object-cover"
          />
          <div className="ellipsis-2">{hit.description}</div>
          <div className="flex items-center justify-between">
            <div>
              <span className="capitalize font-bold">price:</span> {hit.price}
            </div>
            <div>
              <span className="capitalize font-bold">release date:</span>{" "}
              {hit.releaseDate}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export const CustomHits = connectHits(Hits);
