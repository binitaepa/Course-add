

import './Courses.css'
import Carts from '../Carts/Carts';
import { useEffect, useState } from 'react';
import { FaDollarSign } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState([]);
    const [remaining, setRemaining] = useState(20);
    const [totalCredit, setTotalCredit] = useState(0);
  
    
    useEffect(() => {
        fetch("./course-data.json")
          .then((res) => res.json())
          .then((data) => setAllCourses(data));
      }, []);
      
     
      const handleSelectedCourse=(courses)=>{
        const isExist = selectedCourse.find((item) => item.id == courses.id);

        let cost = courses.credit;
    
        if (isExist) {
           toast("Ops! This course is already been selected");
           
        } else {
          selectedCourse.forEach((item) => {
            cost = cost + item.credit;
          });
       
          const remaining = 20 - cost;
          
          if (cost >20) {
            toast("Sorry! Credit can not exit 20 also remaining credit can not be less than 0.");
           
            
          } 
          else {
            setRemaining(remaining);
    
            setTotalCredit(cost);
    
            setSelectedCourse([...selectedCourse,courses]);
          }
        }
        

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
        <div className='course-details-container'><ToastContainer position="top-center"
></ToastContainer><Carts selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit}></Carts></div>
                </div>
    );
};

export default Courses;