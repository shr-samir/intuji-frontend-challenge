import { icons } from "../assets/icons";

interface SearchProps {
  query: string;
  setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const clearInput = () => setQuery("");

  return (
    <div className="flex items-center gap-3 rounded-full px-6 py-3 md:py-5 bg-white text-sm md:text-base">
      <img src={icons.search} alt="search" />
      <input
        type="text"
        placeholder="Search here ..."
        className="w-full outline-none"
        value={query}
        onChange={handleQueryChange}
      />

      {query.length > 0 && (
        <button type="button" className="cursor-pointer" onClick={clearInput}>
          <img src={icons.x} alt="clear" />
        </button>
      )}
    </div>
  );
};

export default Search;
