import React from "react";
import ContentList from "./components/ContentList";
import { TrainingSession } from "../data/TrainingSession";

const mockedDataForCalendarView: TrainingSession[] = [
  {
    start_time: "15:00",
    end_time: "17:00",
    trainer: "David",
    location: "Spirit Boulder Budaörs",
    description: "Gyerek edzés 8-14 éves korig",
    training_type: "Gyerek",
  },
  {
    start_time: "10:00",
    end_time: "20:30",
    trainer: "James",
    location: "Urban Climb Central",
    description: "Intensive strength training",
    training_type: "Erőnléti",
  },
  // ...rest of the data
];

const Calendar: React.FC = () => {
  const date = new Date();
  const currentDay = date.getDate();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth(); // January is 0, December is 11

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center w-full max-w-4xl font-sans">
      <div className="text-xl font-semibold mb-4">
        Calendar - {currentMonth + 1}/{currentYear}
      </div>
      <div className="grid grid-cols-7 gap-1 w-full">
        {/* Empty spaces for days before the first day of the month */}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="h-20"></div>
        ))}
        {/* Days of the month */}
        {daysArray.map((day) => (
          <div
            key={day}
            className={`flex flex-col justify-start items-start border border-gray-300 p-2 h-40 ${
              day === currentDay ? "bg-blue-100" : ""
            }`}
          >
            <div className="font-medium text-sm mb-2">Day {day}</div>
            <ContentList tasks={mockedDataForCalendarView} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
