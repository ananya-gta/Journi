import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Input } from "../components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "../constants/options.jsx";

function CreateTrip() {
  const [place, setPlace] = useState();

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 px-5 mt-10">
      <h2 className="font-bold text-3xl">Create Your Ideal Travel Plan</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Let us know your travel preferences and goals. Our smart AI generator
        will produce a custom plan that fits your unique tastes and travel
        dreams.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (value) => {
                setPlace(value);
                console.log(value);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            For how many days are you planning your trip?
          </h2>
          <Input placeholder={"Ex.3"} type="number" />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
          What is your budget?
          </h2>
          <div>
            {SelectBudgetOptions.map((item, index)=> {
              <div key={index}>
                <h2>{item.icon}</h2>

              </div>
            })}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
          Who do you plan on traveling with on your next adventure?
          </h2>
          <div>
            {SelectTravelsList.map((item, i)=> {
              <div key={i}>
                <h2>{item.icon}</h2>
              </div>
            })}
          </div>
        </div>


      </div>
    </div>
  );
}

export default CreateTrip;
