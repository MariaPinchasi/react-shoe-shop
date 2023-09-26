import { Link } from 'react-router-dom';

const Delete = () => {
    return (
        <>
            <p className='delete-message'>Item Deleted</p>
            <Link to={`/`} className="btn back-btn">Back</Link>
        </>
    )
}

export default Delete