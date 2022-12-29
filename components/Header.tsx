import React, { useContext, useEffect } from "react";
import { DateContext } from "../context/dateContext";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const Header = () => {
  const { currentDate, changeCurrentDate, changeCurrentDay } =
    useContext(DateContext);

  const getCurrentDate = () => {
    const today = new Date();
    changeCurrentDate(today);
  };
  const nextDayToggler = () => {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const nextDate = new Date(year, month, day);
    changeCurrentDate(nextDate);
  };
  const preventDayToggler = () => {
    const day = currentDate.getDate();
    const month = currentDate.getMonth() - 1;
    const year = currentDate.getFullYear();
    const nextDate = new Date(year, month, day);
    changeCurrentDate(nextDate);
  };
  const selectToday = () => {
    changeCurrentDate(new Date());
    changeCurrentDay(new Date());
  };
  useEffect(() => {
    getCurrentDate();
  }, []);
  return (
    <header className="flex justify-between items-center py-2 px-4 shadow">
      <div className="flex items-center">
        <button className="p-3 mr-2 flex items-center text-black hover:bg-slate-200 hover:rounded-full">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="flex items-center">
          <span className="material-symbols-outlined">calendar_month</span>
          <h2 className="text-2xl ml-1">Календарь</h2>
        </div>
        <button
          className="py-1 px-3 border rounded border-slate-400 text-center ml-8 hover:bg-slate-100"
          title="22 декабря 2022"
          onClick={selectToday}
        >
          Сегодня
        </button>
        <div className="day__toggle_buttons ml-8 flex items-center  ">
          <button
            title="Предыдущий месяц"
            onClick={preventDayToggler}
            className="day__prev flex px-2 pr-1 py-1  hover:bg-slate-100 hover:rounded-full"
          >
            <span className="material-symbols-outlined ml-0.5 text-base">
              arrow_back_ios
            </span>
          </button>
          <button
            title="Следующий месяц"
            onClick={nextDayToggler}
            className="day__next flex px-2 py-1 hover:bg-slate-100 hover:rounded-full"
          >
            <span className="material-symbols-outlined ml-0.5 text-base">
              arrow_forward_ios
            </span>
          </button>
        </div>
        <h2 className="selected__date text-xl font-normal ml-7">
          {months[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h2>
      </div>
      <div>
        <div className="logo bg-red-500 rounded-full py-1 px-3 cursor-pointer flex items-center justify-center">
          <span className="text-white">A</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
