import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./explore.css";
import axios from "axios";
import illustration from '../../assets/Search.gif';


const Explore = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [rating, setRating] = useState(0);
  const [products, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    // Fetch category data from an API
    axios.get('http://localhost:3001/api/category/getAll')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);  // Empty dependency array to fetch categories only once when the component mounts

  const handleRatingClick = (index) => {
    // Update the rating state when a star is clicked
    setRating(index + 1);
  };

  const level = [
    "Beginner",
    "Intermediate",
    "Professional",
  ];

const handleLevelChange = (level) => {
  if (selectedLevels.includes(level)) {
    setSelectedLevels(selectedLevels.filter(item => item !== level));
  } else {
    setSelectedLevels([...selectedLevels, level]);
  }
};

  useEffect(() => {
    // Fetch course data from an API
    axios.get('http://localhost:3001/api/products/getAllProducts')
      .then(response => {
        setCourses(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  return (
    <div className="explore-content">
      <h1 className="text-left text-2xl font-bold mb-4">Explore Courses</h1>
      <br />
      <br />
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-1/2">
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search courses" required />
        </div>
        <button type="submit" className="px-4 py-2.5 ms-2 text-sm font-medium text-white bg-maroon-700 rounded-lg border border-maroon-700 hover:bg-maroon-lighter-hover focus:ring-4 focus:outline-none focus:ring-maroon-lighter-focus dark:bg-maroon-600 dark:hover:bg-maroon-lighter-hover dark:focus:ring-maroon-lighter-focus">
          Search
        </button>
        <br />
        <br />
        <div className="explore">
          <img src={illustration} alt="Search" />
        </div>
      </form>
      <br />
      <br />
      <hr style={{ width: "90%", margin: "0 auto" }} />
      <br />
      <form>
        <div className="text-left text-2l font-bold mb-4 relative w-full">
          <h6>course categories</h6>
          <br />
          <div className="category-container">
            {categories.map((category, index) => (
              <div key={index} className="category-item">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={`category-${index}`}>{category.name}</label>
              </div>
            ))}
          </div>
        </div>
      </form>
      <br />
      <hr style={{ width: "90%", margin: "0 auto" }} />
      <br />
      <form>
        <div className="rating-level">
          <div className="text-2l font-bold mb-4 relative w-full">
            <h6>Rating Course</h6>
            <br />
            <div className="rating-container">
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  onClick={() => handleRatingClick(index)} // Handle click event
                  className={`w-7 h-7 text-black-300 ms-6 cursor-pointer ${index < rating ? 'text-black-500' : 'text-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
          <div className="text-2l font-bold mb-4 relative w-full">
            <h6>Level Course</h6>
            <br />
            <div className="level-container">
              {level.map((level, index) => (
                <div key={level} className="level-item">
                <input
                  type="checkbox"
                  id={`level-${level}`}
                  checked={selectedLevels.includes(level)}
                  onChange={() => handleLevelChange(level)}
                />
                <label htmlFor={`level-${level}`}>{level}</label>
              </div>
              ))}
            </div>
          </div>
        </div>
      </form>
      <br />
      <hr style={{ width: "90%", margin: "0 auto" }} />
      <br />
      <form>
        <div className="text-left text-2l font-bold mb-4 relative w-full">
          <h6>Recommended Courses for you</h6>
          <br />
          <div className="courses-list">
            {products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.product_image} alt={product.name} className="product-image" />
                <div className="course-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div> </div>
      </form>
    </div>
  );
}

export default Explore;
