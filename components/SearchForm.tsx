import { SearchIcon } from "lucide-react";
import Form from "next/form";
import ResetButton from "./ResetButton";
import { Button } from "../components/ui/button";
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form
      action={"/"}
      scroll={false}
      className="flex-center relative search-form"
    >
      <input
        type="text"
        placeholder="Search"
        name="query"
        defaultValue={query}
        className="w-md rounded-full border-none bg-white px-4 py-3 text-black placeholder:text-black/50 pr-10"
      />
      <Button
        type="submit"
        className="absolute right-2 bg-black rounded-full p-1 top-1/2 -translate-y-1/2 cursor-pointer"
      >
        <SearchIcon className="h-5 w-5 text-white " />
      </Button>
      {query && <ResetButton />}
    </Form>
  );
};

export default SearchForm;
