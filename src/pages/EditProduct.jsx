import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getShoe, updateAPIData } from '../api/api';
import Form from '../components/Form';
import useForm from '../hooks/useForm';

const EditProduct = () => {
    const { shoeId } = useParams();

    const [shoe, setShoe] = useState({
        name: '',
        brand: '',
        image: '',
        price: '',
    });
    const [errors, setErrors] = useState({
        name: null,
        brand: null,
        image: null,
        price: null
    });

    const fetchShoe = async () => {
        const shoeData = await getShoe(shoeId);
        setShoe(shoeData);
    }
    useEffect(() => {
        fetchShoe();
    }, []);

    const { handleChange, handleSubmit } = useForm(shoe, setShoe, setErrors, updateAPIData)

    return (
        <div className="single-shoe-container">
            <h2>Edit Product</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} shoe={shoe} errors={errors} btnText='Update' />
        </div>)
}

export default EditProduct