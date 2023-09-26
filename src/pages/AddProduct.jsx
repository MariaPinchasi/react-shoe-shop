import { useState } from 'react'
import { postData } from '../api/api';
import Form from '../components/Form';
import useForm from '../hooks/useForm';

const AddProduct = () => {

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

    const { handleChange, handleSubmit } = useForm(shoe, setShoe, setErrors, postData)

    return (
        <div className="single-shoe-container">
            <h2>Add Product</h2>
            <Form handleChange={handleChange} handleSubmit={handleSubmit} shoe={shoe} errors={errors} btnText='Add' />

        </div>)

}

export default AddProduct