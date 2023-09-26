import axios from "axios";


export const getAllShoes = async () => {
    try {
        const res = await axios.get(
            "https://6508868856db83a34d9c779e.mockapi.io/shoes"
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getShoe = async (shoeId) => {
    try {
        const res = await axios.get(
            `https://6508868856db83a34d9c779e.mockapi.io/shoes/${shoeId}`
        );
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const updateAPIData = (shoe, shoeId) => {
    axios.put(`https://6508868856db83a34d9c779e.mockapi.io/shoes/${shoeId}`, shoe)
}

export const postData = (shoe) => {
    axios.post(`https://6508868856db83a34d9c779e.mockapi.io/shoes`, shoe)
}

export const onDelete = (shoeId) => {
    axios.delete(`https://6508868856db83a34d9c779e.mockapi.io/shoes/${shoeId}`)
}