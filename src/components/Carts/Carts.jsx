import PropTypes from 'prop-types';
import './Carts.css'

const Carts = props => {
    return (
        <div>
            <h1 className='credit'>Credit hour Remaining</h1>
            <hr />
            <div>
                <p>Course Name</p>
                <hr />
                <div><ul>
                    </ul></div>
                    <hr />
                    <p>Total credit hour: </p>
            </div>
            
        </div>
    );
};

Carts.propTypes = {
    
};

export default Carts;