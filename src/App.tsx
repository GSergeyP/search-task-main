import { useState } from "react";
import { SearchForm } from "./components/SearchFrom/SearchForm";
import { SearchContext, DEFAULTSTATE } from "./context/SearchContext/SearchContext";
import { SearchResults } from "./components/SearchResults/SearchResults";


export default function App() {
  const [users, setUsers] = useState(DEFAULTSTATE.users);
  
  return (
    <SearchContext.Provider value={{ users, setUsers }}>
      <SearchForm />
      <SearchResults />
    </SearchContext.Provider>
  );
}
