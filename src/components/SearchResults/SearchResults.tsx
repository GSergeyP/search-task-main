import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext/SearchContext";
import { UserCard } from "../UserCard/UserCard";
import "./style.css";

export function SearchResults() {
  
  const { users } = useContext(SearchContext);

  return (
    <div className="usersList">
      {users.map((user, index: number) => (
        <UserCard key={index} {...user} />
      ))}
    </div>
  );
}
