import { useContext, useEffect, useState } from "react";
import DayCell from "../components/DayCell";
import DaysOfTheWeek from "../components/DaysOfTheWeek";
import { DateContext } from "../context/dateContext";

export default function Home() {
  const [daysOfSelectedMonth, setDaysOfSelectedMonth] = useState<Date[]>([]);
  const { currentDate } = useContext(DateContext);

  const fillCurrentMonth = () => {
    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );
    const days: Array<Date> = [];
    const lastDay = lastDayOfMonth.getDate();

    for (let i = 1; i <= lastDay; i++) {
      const nextDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      days.push(nextDate);
    }
    setDaysOfSelectedMonth(days);
  };

  useEffect(() => {
    fillCurrentMonth();
  }, [currentDate]);
  return (
    <main className="">
      <div className="mx-auto px-4 py-2">
        <div className="bg-white rounded-lg  overflow-hidden">
          <div className="flex items-center justify-between px-6">
            <div>
              <span className="text-lg font-bold text-gray-800"></span>
              <span className="ml-1 text-lg text-gray-600 font-normal"></span>
            </div>
            <div
              className="border rounded-lg px-1"
              style={{ paddingTop: "2px" }}
            ></div>
          </div>
          <div className="">
            <div className="flex flex-wrap h-100">
              <DaysOfTheWeek />
              {daysOfSelectedMonth.map((el, index) => (
                <DayCell key={index} day={el} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
