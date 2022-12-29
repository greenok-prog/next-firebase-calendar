import classNames from "classnames";
import React from "react";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const DaysOfTheWeek = () => {
  return (
    <>
      {DAYS.map((day, index) => (
        <div style={{ width: "14.26%" }} className="px-2 py-2 " key={index}>
          <div
            className={classNames({
              "text-gray-600 text-sm uppercase tracking-wide font-bold text-center":
                true,
            })}
          >
            {day}
          </div>
        </div>
      ))}
    </>
  );
};

export default DaysOfTheWeek;
