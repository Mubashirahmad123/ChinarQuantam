import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";


interface SearchProps {
  onSearch: (city: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="text-center">
        <input 
          type="text" 
          placeholder="Enter city" 
          value={city} 
          onChange={handleChange} 
          className="border p-2 mr-2 rounded-xl bg-slate-400"
        />
        <button type="submit" className= "  mx-auto mt-5   p-2 rounded hover:bg-blue-600">
  <BsSearch className="inline-block   h-6 w-6" />
</button>


      </form>
    </div>
  );
};

export default Search;
