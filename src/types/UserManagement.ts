interface User {
  id: string;
  name: string;
  age: number;
}

type State = User[];

type Action = { type: "add"; user: User } | { type: "remove"; id: string } | { type: "clear" };
