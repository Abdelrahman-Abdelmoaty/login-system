"use client";
import { User } from "@/lib/types-schemas";
import { createContext, useContext, useEffect } from "react";

export const UsersContext = createContext<User[]>([]);

export function UsersContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const users: User[] = [];
  useEffect(() => {
    fetch("https://65b6a5cada3a3c16ab010722.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => users.push(data));
  }, []);
  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
}

export function useUsersContext() {
  const users = useContext(UsersContext);
  return users;
}
