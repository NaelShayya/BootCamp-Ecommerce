import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./explore.css";
import axios from "axios";
import illustration from '../../assets/Search.gif';
import course1 from '../../assets/course1.jpg';
import course2 from '../../assets/course2.jpg';
import course3 from '../../assets/course3.jpg';
import course4 from '../../assets/course4.jpg';
import course5 from '../../assets/course5.jpg';
import '../courses/course.css';

const Explore = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [rating, setRating] = useState(0);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/api/category/getAll')
      .then(response => setCategories(response.data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/products/getAllProducts')
      .then(response => {
        const productImages = [course1, course2, course3, course4, course5];
        const updatedCourses = response.data.products.map((course, index) => ({
          ...course,
          product_image: productImages[index % productImages.length]
        }));
        setCourses(updatedCourses);
        setFilteredCourses(updatedCourses);  // Initially, all courses are displayed
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  useEffect(() => {
    let filtered = courses;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(course => course.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(course => selectedCategories.includes(course.categoryId));
    }

    setFilteredCourses(filtered);
  }, [searchTerm, selectedCategories, courses]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(selectedCategories.includes(category.id)
      ? selectedCategories.filter(id => id !== category.id)
      : [...selectedCategories, category.id]);
  };

  return (
    <div className="explore-content">
      <h1 className="text-left text-2xl font-bold mb-4">Explore Courses</h1>
      <div className="e1">
        <form className="flex items-center" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            className="search-input"
            placeholder="Search courses"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            required
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <img className="searchimg" src={illustration} alt="Search" />
      </div>
      <form>
    <div className="text-left text-2l font-bold mb-4 relative w-full">
      <h6>Course Categories</h6>
      <br />
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <input
              type="checkbox"
              id={`category-${category.id}`}
              checked={selectedCategories.includes(category.id)}
              onChange={() => handleCategoryChange(category)}
            />
            <label htmlFor={`category-${category.id}`}>{category.name}</label>
          </div>
        ))}
      </div>
    </div>
  </form>
      <hr style={{ width: "90%", margin: "0 auto" , backgroundColor: " #ff282e"}} />
      <div className="courses-list">
        {filteredCourses.map(product => (
          <div key={product.id} className="product">
            <Link to={`/course/${product.slug}`}>
              <img src={product.product_image} alt={product.name} />
            </Link>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
