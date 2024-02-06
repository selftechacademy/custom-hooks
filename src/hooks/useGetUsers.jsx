import React, { useCallback, useEffect, useMemo, useState } from "react";

const useGetUsers = () => {
  //we want call an api, and get users.
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    };
    getUsers();
  }, [reload]);

  return { isLoading, users, setReload, reload };
};

export default useGetUsers;
