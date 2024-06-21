import React, { useState } from 'react';


import BlogCard from '../BlogCard';
import "../../assets/NewFiles/Css/searchcomponent.css"

const data = [
  { 
    treeName: 'Oak Tree', 
    uploadedBy: 'User A', 
    uploadedOn: '2023-06-15', 
    plantedOn: '2023-05-10', 
    location: 'Location 1',
    image: '/images/newfiles/images/01.jpg'
  },
  { 
    treeName: 'Pine Tree', 
    uploadedBy: 'User B', 
    uploadedOn: '2023-06-16', 
    plantedOn: '2023-05-11', 
    location: 'Location 2',
    image: '/images/newfiles/images/01.jpg'
  },
  { 
    treeName: 'Maple Tree', 
    uploadedBy: 'User C', 
    uploadedOn: '2023-06-17', 
    plantedOn: '2023-05-12', 
    location: 'Location 3',
    image: '/images/newfiles/images/01.jpg'
  },
  { 
    treeName: 'Oak Tree', 
    uploadedBy: 'User A', 
    uploadedOn: '2023-06-15', 
    plantedOn: '2023-05-10', 
    location: 'Location 1',
    image: '/images/newfiles/images/01.jpg'
  },
  { 
    treeName: 'Pine Tree', 
    uploadedBy: 'User B', 
    uploadedOn: '2023-06-16', 
    plantedOn: '2023-05-11', 
    location: 'Location 2',
    image: '/images/newfiles/images/01.jpg'
  },
  { 
    treeName: 'Maple Tree', 
    uploadedBy: 'User C', 
    uploadedOn: '2023-06-17', 
    plantedOn: '2023-05-12', 
    location: 'Location 3',
    image: '/images/newfiles/images/01.jpg'
  },
];


const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    treeName: false,
    uploadedBy: false,
    location: false,
  });

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const filteredData = data.filter((item) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      (!filters.treeName || item.treeName.toLowerCase().includes(lowerSearchTerm)) &&
      (!filters.uploadedBy || item.uploadedBy.toLowerCase().includes(lowerSearchTerm)) &&
      (!filters.location || item.location.toLowerCase().includes(lowerSearchTerm))
    );
  });

  return (
    <div className="search-component">
    <div className="filters">
      <div className="checkbox-group">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
        <label>
          <input
            type="checkbox"
            name="treeName"
            checked={filters.treeName}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          Tree Name
        </label>
        <label>
          <input
            type="checkbox"
            name="uploadedBy"
            checked={filters.uploadedBy}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          Uploaded By
        </label>
        <label>
          <input
            type="checkbox"
            name="location"
            checked={filters.location}
            onChange={handleCheckboxChange}
            className="checkbox-input"
          />
          Location
        </label>
      </div>
    </div>
    <BlogCard data={filteredData} />
  </div>
  );
};

export default SearchComponent;
