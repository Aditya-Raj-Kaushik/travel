import React from 'react';
import Header from "./Header";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Form = () => {
  const apiKey = import.meta.env.REACT_APP_GOOGLE_PLACES_API_KEY; // Corrected this line

  return (
    <div>
      <Header />
      <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences</h2>
        <p className='mt-3 text-gray-500 text-xl'>
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>
        
        <div className='mb-4 mt-10'>
          <label className='block text-lg font-medium' htmlFor='destination'>Destination</label>
          {/* GooglePlaceAutocomplete component */}
          <GooglePlacesAutocomplete
            apiKey={apiKey} // Corrected this line
            selectProps={{
              placeholder: 'Where do you want to go?',
              onChange: (value) => {
                console.log(value); // Handle the selected value
              }
            }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Form;
