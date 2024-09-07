"use client"

import React, { useState } from "react";

function DogOnboarding() {
  const [formData, setFormData] = useState({
    ownerName: "",
    dogName: "",
    breed: "",
    age: "",
    weight: "",
    size: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-orange-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-orange-600 text-3xl font-bold mb-4">🐶 Dog Onboarding</h1>
        <p className="text-gray-600 mb-6">
          Please provide information about your furry friend
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="ownerName" className="block text-gray-700 font-medium mb-2">
              🧑 Owner's Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dogName" className="block text-gray-700 font-medium mb-2">
              🐕 Dog's Name
            </label>
            <input
              type="text"
              id="dogName"
              name="dogName"
              value={formData.dogName}
              onChange={handleChange}
              placeholder="Your dog's name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="breed" className="block text-gray-700 font-medium mb-2">
              ❤️ Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              placeholder="Dog's breed"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
              🐕‍🦺 Age
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Dog's age in years"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-medium mb-2">
              ⚖️ Weight (lbs)
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Dog's weight in pounds"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">📝 Size</label>
            <div className="flex items-center">
              <input
                type="radio"
                id="small"
                name="size"
                value="Small"
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="small" className="mr-4">
                Small
              </label>
              <input
                type="radio"
                id="medium"
                name="size"
                value="Medium"
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="medium" className="mr-4">
                Medium
              </label>
              <input
                type="radio"
                id="large"
                name="size"
                value="Large"
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="large">Large</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default DogOnboarding;