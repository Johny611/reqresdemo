import React from "react";
import { Link } from "react-router-dom";

const User = ({ first_name, last_name, email, imgUrl, path }) => {
  return (
    <Link to={path} class="p-10">
      <div class="bg-white hover:cursor-pointer pt-5 max-w-xs overflow-hidden shadow-lg flex flex-col items-center  divide-y divide-slate-300 mx-auto rounded-xl w-80">
        <img
          class="w-1rem pb-3 rounded-full align-middle"
          src={imgUrl}
          alt={first_name}
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {first_name} {last_name}
          </div>
          <p class="text-gray-700 text-base">{email}</p>
        </div>
      </div>
    </Link>
  );
};

export default User;
