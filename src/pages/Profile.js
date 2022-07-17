import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const Profile = () => {
  const [newFirstName, setNewFirstName] = useState("");
  const [edit, setEdit] = useState(false);
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.users);
  const { id } = useParams();
  const [updateUsername, setUpdateUsername] = useState("");

  const handleUpdate = () => {
    axios
      .put(`https://reqres.in/api/users/${id}`, {
        first_name: newFirstName,
      })
      .then((res) => {
        setUpdateUsername(res.data);
        dispatch(updateUsername({ id: user.id, first_name: newFirstName }));
      });
  };

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => setUser(res.data.data));
  }, [id]);

  return (
    <>
      <Header />
      <div className=" w-full h-full flex flex-col flex-wrap items-center justify-center mt-10">
        <div className="flex flex-col  items-center ">
          <div className="flex flex-col justify-center items-center mb-1 border-y-green border-green-700 bg-white w-[220px] h-[220px] ">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-[200px] h-[200px] "
            />
          </div>
          <div className="bg-white min-w-[200px] h-full p-5 ml-2">
            <div className="flex m-5">
              <p className="mr-10 text-lg text-blue-900">First name:</p>
              <p className="mr-10 text-lg font-bold text-blue-900 flex-1">
                {user.first_name}
              </p>
              <button
                onClick={() => setEdit(!edit)}
                className="bg-blue-600 p-2 text-white rounded-lg"
              >
                Edit
              </button>
            </div>
            <div className="flex m-5">
              <p className="mr-10 text-lg text-blue-900">Last name:</p>
              <p className="mr-10 text-lg font-bold text-blue-900 flex-1">
                {user.last_name}
              </p>
            </div>
            <div className="flex m-5">
              <p className="mr-10 text-lg text-blue-900">Email:</p>
              <p className="mr-10 text-lg font-bold text-blue-900 flex-1">
                {user.email}
              </p>
            </div>
          </div>
          <p className="font-bold text-lg text-center">
            {updateUsername.first_name}
          </p>
          <p className="font-bold text-lg text-center">
            {updateUsername.updatedAt}
          </p>
        </div>
        {edit && (
          <div className="mt-5">
            <input
              className="p-2 border-2 border-blue-600 rounded-lg"
              onChange={(e) => setNewFirstName(e.target.value)}
              value={newFirstName}
              type="text"
              placeholder="Enter new first name"
            />
            <button
              className="ml-1 bg-blue-700 text-white p-1"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
