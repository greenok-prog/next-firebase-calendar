import { createContext, FC, ReactNode, useState } from "react";
type dateContextType = {
  changeCurrentDate: (date: Date) => void;
  changeCurrentDay: (day: Date) => void;
  currentDate: Date;
  currentDay: Date;
};
type Props = {
  children: ReactNode;
};
const dateContextDefaultFalue: dateContextType = {
  currentDate: new Date(),
  changeCurrentDate: () => {},
  changeCurrentDay: () => {},
  currentDay: new Date(),
};
export const DateContext = createContext(dateContextDefaultFalue);

export const DateProvider: FC<Props> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDay, setCurrentDay] = useState(new Date());
  const chanageCurrentDate = (date: Date) => {
    setCurrentDate(date);
  };
  const changeCurrentDay = (day: Date) => {
    setCurrentDay(day);
  };
  const value: dateContextType = {
    currentDate: currentDate,
    currentDay: currentDay,
    changeCurrentDay: changeCurrentDay,
    changeCurrentDate: chanageCurrentDate,
  };

  return (
    <>
      <DateContext.Provider value={value}>{children}</DateContext.Provider>
    </>
  );
};
