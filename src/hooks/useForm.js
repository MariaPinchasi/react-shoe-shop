import { useNavigate } from 'react-router'

const useForm = (shoe, setShoe, setErrors, apiFunction) => {
    const navigate = useNavigate();
    const handleChange = (e) => {
        setShoe({
            ...shoe,
            [e.target.name]: e.target.value,
        });
        setErrors(prevState => (
            {
                ...prevState,
                [e.target.name]: null
            }));
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const imgRegex = /(https?:\/\/.*\.(?:png|jpg|jpeg))/;
        const newErrors = {};
        if (shoe.name.length < 3) {
            newErrors.name = "name must bo at least 3 characters long";
            isValid = false;
        }
        if (shoe.brand.length < 2) {
            newErrors.brand = "brand must bo at least 2 characters long";
            isValid = false;
        }
        if (!imgRegex.test(shoe.image)) {
            newErrors.image = "img url is not valid";
            isValid = false;
        }
        if (shoe.price < 1) {
            newErrors.price = "Price must be greater than 1$";
            isValid = false;
        }
        setErrors(newErrors);
        if (isValid) {
            apiFunction(shoe, shoe.id);
            navigate('/');
        }
    };
    return { handleChange, handleSubmit }
}

export default useForm