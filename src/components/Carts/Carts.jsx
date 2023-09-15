import PropTypes from 'prop-types';
import './Carts.css'

const Carts = ({selectedCourse,remaining,totalCredit}) => {
    
    return (
        <div>
            <h1 className='credit'>Credit hour Remaining :{remaining}hr</h1>
            <hr />
            <div>
                <p>Course Name</p>
                <hr />
                <div><ol className='order-list'>
                    
                         {selectedCourse.map((course) => (
                            <li key={course.id}>{course.course_name}</li>
                          ))}
                    
                    </ol>
                    </div>
                    <hr />
                    <p>Total Credit Hour: {totalCredit} </p>
            </div>
            
        </div>
    );
};

Carts.propTypes = {
    selectedCourse: PropTypes.object.isRequired,
    totalCredit:PropTypes.object.isRequired,
    remaining:PropTypes.object.isRequired
};

export default Carts;