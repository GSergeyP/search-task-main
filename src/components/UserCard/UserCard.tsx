import type { IUsers } from '../../context/SearchContext/SearchContext.type';
import "./style.css";

export function UserCard(props: IUsers) {

  return (
    <div className="userCard">
      <img className="userPic" src={props.image} />
      <div className="userInfo">
        <div>{`${props.firstName} ${props.lastName}`}</div>
        <div>{props.address.city}</div>
      </div>
    </div>
  );
}