import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getShoe, onDelete } from '../api/api';
import { Link } from 'react-router-dom';
import { useGlobalContext } from "../hooks/useGlobalContext";


const Product = () => {
    const { shoeId } = useParams();
    const navigate = useNavigate();

    const [shoe, setShoe] = useState({});
    const { userName } = useGlobalContext();
    const userPass = JSON.parse(localStorage.getItem('userPass'));

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

    return (
        <main className='single-shoe-container'>
            <div className='shoe-container'>
                <h3 className='shoe-name'>
                    {shoe.name}
                </h3>
                <h2 className='shoe-brand'>{shoe.brand}</h2>
                <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                {userName === 'admin' && userPass === 'adminpass' &&
                    <Link to={`/products/${shoe.id}/edit`} className="btn">Edit</Link>
                }
                {userName === 'admin' && userPass === 'adminpass' &&
                    <button onClick={handleDelete} className="btn">Delete</button>
                }


            </div>
        </main>

    )


}

export default Product