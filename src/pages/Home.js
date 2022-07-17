import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import User from "../components/User";

const Home = () => {
  const userList = useSelector((state) => state.users.users);

  return (
    <div>
      <Header />
      <h1 className="text-4xl antialiased text-center pt-10 pb-5 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500">
        USERS
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {userList.map((user) => (
          <User
            key={user.id}
            path={`/user/${user.id}`}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            imgUrl={user.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
