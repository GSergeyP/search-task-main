import { useContext, useEffect, useState } from "react";
import { SearchContext, DEFAULTSTATE } from "../../context/SearchContext/SearchContext";
import { SearchApi } from '../../api/SearchApi/SearchApi';
import "./styles.css";

export function SearchForm() {

  const { setUsers } = useContext(SearchContext);
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    SearchApi(searchText)
      .then(data => {
        if(data == 'error') {
          setUsers(DEFAULTSTATE.users)
        } else {
          setUsers(data.users)
        }
      })
  }, [setUsers, searchText])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  }

  return (
    <div className="searchForm">
      <form>
        <input 
          type="text" 
          value={searchText} 
          onChange={handleChange} 
          placeholder="Имя"
        />
      </form>
    </div>
  );
}


