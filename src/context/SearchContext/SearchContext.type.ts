interface IAddress {
  city: string
}

interface IUsers {
  id: number,
  firstName: string,
  lastName: string,
  image: string,
  address: IAddress
}

interface IContextType {
  users: IUsers[],
  setUsers: (users: IUsers[]) => void;
}

export type { IUsers, IContextType }