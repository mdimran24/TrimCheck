import { calc } from "antd/es/theme/internal";
import { useAppointmentsContext } from "../hooks/useAppointmentsContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";

const BarberDetails = ({ barber }) => {
  function calculateAverage(ratings) {
    var total = 0;
    var count = 0;

    ratings.forEach(function (item, index) {
      if (item.star) {
        total += item.star;
        // console.log(item.star);
        count++;
      }
    });

    return Math.round((total / count) * 100) / 100;
  }

  return (
    <div className=" max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-white-900 dark:text-slate-900">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt=""
        className="w-32 h-32 mx-auto rounded-2xl dark:bg-gray-500"
      />
      <div className="space-y-4 text-center divide-y dark:divide-gray-700">
        <div className="my-2 space-y-1">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {barber.firstName}
          </h2>
        </div>
        <div className=" mx-auto pt-2 ">
          <ReactStars
            value={calculateAverage(barber.ratings)}
            classNames="mx-auto"
            activeColor = "#ffd700"
            isHalf={true}
            size={24}
            edit={false}
          />
        <p>Rating: {calculateAverage(barber.ratings)}</p>
        </div>
      </div>
    </div>
  );
};

export default BarberDetails;
