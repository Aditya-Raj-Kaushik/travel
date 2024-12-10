import React, { useState } from "react";
import Header from "./Header";
import { SelectBudgetOptions, SelectTravelsList } from "../constants/Options";

function Form() {
  const [places, setPlaces] = useState("");
  const [days, setDays] = useState("");
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [selectedTravelers, setSelectedTravelers] = useState(null);

  const handleSubmit = () => {
    if (!places || !days || !selectedBudget || !selectedTravelers) {
      alert("Please fill out all fields!");
      return;
    }
    // Proceed to generate trip
    console.log("Trip Details:", {
      places,
      days,
      selectedBudget,
      selectedTravelers,
    });
  };

  return (
    <div>
      <Header />
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
        <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
        <p className="mt-3 text-gray-500 text-xl">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your preferences.
        </p>
        <div className="mt-20">
          {/* Input for Destination */}
          <div>
            <h2 className="text-xl my-3 font-medium">
              Where's your next adventure? Share your dream city here:
            </h2>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your dream destination..."
              value={places}
              onChange={(e) => setPlaces(e.target.value)}
            />
          </div>

          {/* Dropdown for Trip Duration */}
          <div>
            <h2 className="text-xl my-3 font-medium">
              How many days will your trip last?
            </h2>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black appearance-none"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              style={{
                backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23666666' d='M2 0L0 2h4L2 0zM0 3l2 2 2-2H0z'/%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "0.65rem",
              }}
            >
              <option value="" disabled hidden>
                Select trip duration...
              </option>
              <option value="1-3">1-3 days</option>
              <option value="4-7">4-7 days</option>
              <option value="8-14">8-14 days</option>
              <option value="15+">15+ days</option>
            </select>
          </div>

          {/* Budget Options */}
          <div>
            <h2 className="text-xl my-3 font-medium">
              What’s your budget range?
            </h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg text-center cursor-pointer ${
                    selectedBudget === item.title
                      ? "bg-gray-200 border-black"
                      : ""
                  } hover:shadow-lg`}
                  onClick={() => setSelectedBudget(item.title)}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Group Options */}
          <div>
            <h2 className="text-xl my-3 font-medium">
              How many people are traveling?
            </h2>
            <div className="grid grid-cols-2 gap-6 mt-5">
              {SelectTravelsList.map((item, index) => (
                <div
                  key={index}
                  className={`p-6 pb-8 border rounded-lg text-center cursor-pointer ${
                    selectedTravelers === item.people
                      ? "bg-gray-200 border-black"
                      : ""
                  } transform transition duration-300 hover:shadow-lg`}
                  onClick={() => setSelectedTravelers(item.people)}
                >
                  <h2 className="text-4xl mb-3">{item.icon}</h2>
                  <h2 className="font-bold text-lg text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <p className="text-sm font-medium text-gray-700 mt-2">
                    {item.people}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Trip Button */}
          <div className="my-10 flex justify-end">
            <button
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
              onClick={handleSubmit}
            >
              Generate Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
