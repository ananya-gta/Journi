import React from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Create Your Ideal Travel Plan</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Let us know your travel preferences and goals. Our smart AI generator
        will produce a custom plan that fits your unique tastes and travel
        dreams.
      </p>

      <div className="mt-10">
        <div>
          <h2 className="text-xl my-3 font-medium">What is your destination?</h2>
          <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}/>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
