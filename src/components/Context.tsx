"use client";
import { User } from "@/lib/types-schemas";
import { createContext, useContext, useEffect, useState } from "react";

export const UsersContext = createContext<User[]>([]);

export function UsersContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://65b6a5cada3a3c16ab010722.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
}

export function useUsersContext() {
  const users = useContext(UsersContext);
  return users;
}
