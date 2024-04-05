"use client";

import { useSession } from "next-auth/react";
import { clientApi } from "~/trpc/react";

const DummyComp = () => {
  const mutation = clientApi.user.createUser.useMutation();
  const users = clientApi.user.getUsers.useQuery();
  const { data: session } = useSession();
  console.log({ session, users: users.data });
  const handleAdd = async () => {
    mutation.mutate({
      name: "ajay",
      email: "ajay29@gmail.com",
      role: "User",
      password: "passwo",
    });
  };
  return (
    <>
      <div>Dummy component</div>
      <button onClick={handleAdd}>user</button>
    </>
  );
};

export default DummyComp;
