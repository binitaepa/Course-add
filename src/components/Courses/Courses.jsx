

import './Courses.css'
import Carts from '../Carts/Carts';
import { useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";


const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    useEffect(() => {
        fetch("./course-data.json")
          .then((res) => res.json())
          .then((data) => setAllCourses(data));
      }, []);
     
      const handleSelectedCourse=(courses)=>{
        setSelectedCourse([...selectedCourse,courses]);

      }
    
    return (
        <div className='main-container'>
        <div className='course-container'>
            {
                allCourses.map((course)=>(<div key={course.id} className='course-card' >
                <div className="image">
                  <img  src={course.img} alt="" />
                </div>
                <h2 className='title'>{course.course_name}</h2>
                <p className='description'>
                  <small>
                    {course.description}
                  </small>
                </p>
                <div className="info">
                  <p><FaDollarSign></FaDollarSign>Price:{course.price}$ </p>
                  <p> Credit:{course.credit}hr <FaBookOpen></FaBookOpen></p>
                </div>
                <button
                onClick={()=>handleSelectedCourse(course)}
                  
                  className="card-btn"
                >
                  Select
                </button>
              </div>
  
                    ))
            }
        </div>
        <div className='course-details-container'><Carts selectedCourse={selectedCourse}></Carts></div>
                </div>
    );
};

export default Courses;