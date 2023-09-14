

import './Courses.css'
import Carts from '../Carts/Carts';
import { useEffect, useState } from 'react';



const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch("./course-data.json")
          .then((res) => res.json())
          .then((data) => setAllCourses(data));
      }, []);
    
    return (
        <div className='main-container'>
        <div className='course-container'>
            {
                allCourses.map((course)=>(<div key={course.id} >
                <div className="card-img">
                  <img  src={course.img} alt="" />
                </div>
                <h2>{course.course_name}</h2>
                <p>
                  <small>
                    {course.description}
                  </small>
                </p>
                <div className="info">
                  <p>salary:{course.price} $</p>
                  <p>{course.credit}</p>
                </div>
                <button
                  
                  className="card-btn"
                >
                  Select
                </button>
              </div>
  
                    ))
            }
        </div>
        <div className='course-details-container'><Carts></Carts></div>
                </div>
    );
};

export default Courses;