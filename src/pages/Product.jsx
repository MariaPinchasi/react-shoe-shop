import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getShoe, onDelete } from '../api/api';
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../hooks/useGlobalContext";


const Product = () => {
    const { shoeId } = useParams();
    const [shoe, setShoe] = useState({});
    const navigate = useNavigate();

    const fetchShoe = async () => {
        const shoeData = await getShoe(shoeId);
        setShoe(shoeData);
    }
    useEffect(() => {
        fetchShoe();
    }, []);
    const handleDelete = () => {
        onDelete(shoe.id);
        navigate('/delete');
    }
    const { isAdmin } = useGlobalContext();

    return (
        <main className='single-shoe-container'>
            <div className='shoe-container'>
                <h3 className='shoe-name'>
                    {shoe.name}
                </h3>
                <h2 className='shoe-brand'>{shoe.brand}</h2>
                <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                {/* description */}
                <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                {isAdmin &&
                    <Link to={`/products/${shoe.id}/edit`} className="btn">Edit</Link>
                }
                {isAdmin &&
                    <button onClick={handleDelete} className="btn">Delete</button>
                }


            </div>
        </main>

    )


}

export default Product