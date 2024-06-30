import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMicrophone } from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center ml-2">
      <input 
        type="text" 
        placeholder="Search" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white border border-gray-300 text-sm rounded-lg p-2 pl-10 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      <FaSearch className="absolute left-3 text-red-500" />
      <FaMicrophone className="ml-2 text-red-500" />
    </form>
  );
}

export default SearchBar;
