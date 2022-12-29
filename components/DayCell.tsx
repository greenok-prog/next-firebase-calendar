import React, { FC, useContext } from "react";
import classNames from "classnames";
import { DateContext } from "../context/dateContext";
interface DayCellProps {
  day: Date;
}
const abbreviatedMonths = [
  "янв",
  "февр",
  "мар",
  "апр",
  "мая",
  "июн",
  "июл",
  "авг",
  "сент",
  "окт",
  "нояб",
  "дек",
];
const DayCell: FC<DayCellProps> = ({ day }) => {
  const { currentDay, changeCurrentDay, changeCurrentDate } =
    useContext(DateContext);
  const dateClickHandler = (date: Date) => {
    changeCurrentDay(date);
  };
  const dayText = `${day.getDate()} ${
    day.getDate() === 1 ? abbreviatedMonths[day.getMonth()] : ""
  }`;
  const isCurrentDay = currentDay.getDate() === day.getDate();
  const isCurrentMonth = day.getMonth() === currentDay.getMonth();
  const isActive = isCurrentDay && isCurrentMonth;

  return (
    <div
      style={{ width: "14.26%", height: "115px" }}
      onClick={() => dateClickHandler(day)}
      className={classNames({
        "px-2 py-2 border": true,
        "bg-blue-200": isActive,
      })}
    >
      <div
        className={classNames({
          "text-gray-600 text-sm mt-2 tracking-wide font-normal text-center":
            true,
        })}
      >
        {dayText}
      </div>
    </div>
  );
};

export default DayCell;
