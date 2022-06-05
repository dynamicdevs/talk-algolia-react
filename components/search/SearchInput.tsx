import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SymbolIcon } from "@dynamic-devs/symbol-react";

export const SearchInput = ({ className }: { className?: string }) => {
  const router = useRouter();
  const [search, setSearch] = useState({
    value: "",
  });
  useEffect(() => {
    const { query } = router.query;
    if (!!query) setSearch((_: any) => ({ ..._, value: query }));
  }, [router.query]);

  return (
    <div
      className={`p-1 flex items-center md:w-[400px] space-x-2
      border border-dy-blueishgrey rounded-md ${className}`}
    >
      <SymbolIcon
        name="search"
        type="solid"
        className="w-5 h-5 text-dy-purple"
      />
      <input
        value={search.value}
        onChange={(event) => {
          setSearch((_) => ({ ..._, value: event.target.value }));
        }}
        className="flex-grow focus:outline-none"
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            event.preventDefault();
            router.push(`/search?query=${event.currentTarget.value}`);
          }
        }}
      />
    </div>
  );
};
