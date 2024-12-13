import React, { useState } from "react";
import { DatePicker, TimePicker, Button, Select } from "antd";
import dayjs from "dayjs";
import axios from "axios";
import { Input } from "@nextui-org/react";

const skinRoutines = [
  { id: 1, name: "Hydrating Facial" },
  { id: 2, name: "Brightening Treatment" },
  { id: 3, name: "Acne Control" },
  { id: 4, name: "Anti-Aging Therapy" },
];

const businessHours = { start: 9, end: 17 }; // 9 AM to 5 PM

const BookingSection = () => {
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [availableDays, setAvailableDays] = useState([1, 3, 5]); // Example: Mon, Wed, Fri
  const [availableHours, setAvailableHours] = useState([]);

  const handleRoutineSelect = (routineId) => {
    setSelectedRoutine(routineId);
    setSelectedDate(null);
    setSelectedTime(null);
    // Fetch available dates and times for the selected routine (example simulation)
    setAvailableDays([1, 2, 4]); // Days: Mon, Tue, Thu
    setAvailableHours([10, 11, 14]); // Hours: 10 AM, 11 AM, 2 PM
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedRoutine && selectedDate && selectedTime) {
      const whatsappApiUrl = "https://api.whatsapp.com/send";
      const phone = "+256786085633"; // Business WhatsApp number
      const message = `Name:${name}\nBooking Request:\nRoutine: ${
        skinRoutines.find((r) => r.id === selectedRoutine).name
      }\nDate: ${dayjs(selectedDate).format(
        "YYYY-MM-DD"
      )}\nTime: ${selectedTime} Hrs`;

      window.open(
        `${whatsappApiUrl}?phone=${phone}&text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="booking-section p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Book a Routine</h2>
      <div className="flex flex-wrap gap-2 mb-4">
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name To select routine"
        />
      </div>
      <div className="flex flex-wrap gap-2 mb-4 custom-btn-group-container">
        {skinRoutines.map((routine, rindx) => (
          <button
            key={rindx}
            disabled={name !== "" ? false : true}
            className={`custom-btn-item ${
              selectedRoutine === routine.id ? "selected" : ""
            }`}
            // type={selectedRoutine === routine.id ? "primary" : "default"}
            onClick={() => handleRoutineSelect(routine.id)}
          >
            {routine.name}
          </button>
        ))}
      </div>
      {selectedRoutine && (
        <div className="mb-4">
          <DatePicker
            disabledDate={(current) => !availableDays.includes(current.day())}
            onChange={(date) => handleDateChange(date)}
            className="w-full"
          />
        </div>
      )}
      {selectedDate && (
        <div className="mb-4">
          <Select
            className="w-full"
            placeholder="Select Time"
            onChange={handleTimeChange}
            options={availableHours.map((hour) => ({
              label: `${hour}:00`,
              value: hour,
            }))}
          />
        </div>
      )}
      <button
        className="bg-[#a15d44] text-white rounded-md px-3 py-1 hover:bg-opacity-85 transition-all ease-in-out duration-250"
        disabled={!selectedRoutine || !selectedDate || !selectedTime}
        onClick={handleBooking}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookingSection;
