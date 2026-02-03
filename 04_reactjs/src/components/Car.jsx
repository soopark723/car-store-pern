const Car = ({ id, make, model, year, price }) => {
    return (
        <div className="car-card">
            <h2>{make} {model}</h2>
            <p>{year} Model</p>
            <p className="year">{year}</p>
            <p className="price">${Number(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
            <button className="btn">View Details</button>
        </div>
    );
};

export default Car;