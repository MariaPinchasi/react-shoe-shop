
const Form = ({ handleSubmit, handleChange, shoe, errors, btnText }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={shoe.name} onChange={handleChange} />
                <div className="error-message">{errors.name}</div>
            </div>
            <div className="input-group">
                <label htmlFor="brand">Brand</label>
                <input type="text" name="brand" value={shoe.brand} onChange={handleChange} />
                <div className="error-message">{errors.brand}</div>
            </div>
            <div className="input-group">
                <label htmlFor="image">Image</label>
                <input type="text" name="image" value={shoe.image} onChange={handleChange} />
                <div className="error-message">{errors.image}</div>

            </div>
            <div className="input-group">
                <label htmlFor="price">Price</label>
                <input type="number" name="price" value={shoe.price} onChange={handleChange} />
                <div className="error-message">{errors.price}</div>
            </div>

            <button className="btn update-btn" type="submit">{btnText}</button>
        </form>
    )
}

export default Form