import { useEffect, useState } from 'react'
import { getAllShoes } from '../api/api';
import { Link } from 'react-router-dom';

const Home = () => {
    const [apiData, setApiData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchShoes = async () => {
        const shoesData = await getAllShoes();
        setApiData(shoesData);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchShoes();
    }, []);

    if (isLoading) {
        return <div className='loading'>Loading...</div>
    }

    return (
        <section className='shoes-container'>
            {apiData.map(shoe => {
                return (
                    <div key={shoe.id} className='shoe-container'>
                        <h3 className='shoe-name'>
                            <Link to={`/products/${shoe.id}`}>
                                {shoe.name}
                            </Link>
                        </h3>
                        <h2 className='shoe-brand'>{shoe.brand}</h2>
                        <img className='shoe-img' src={shoe.image} alt='shoe-img' />
                        <h2 className='shoe-price'>{`${shoe.price}$`}</h2>
                    </div>
                )
            })}
        </section>
    )
}

export default Home