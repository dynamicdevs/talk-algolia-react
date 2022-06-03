import { SymbolIcon } from "@dynamic-devs/symbol-react";

export const SearchInput = ({ className }: { className?: string }) => {
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
      <input className="flex-grow focus:outline-none" />
    </div>
  );
};
