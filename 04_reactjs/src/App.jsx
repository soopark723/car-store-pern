import { useEffect, useState } from "react";
import Car from "./components/Car.jsx";
import './App.css';

const App = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('/api/v1/cars')
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error('Error fetching cars:', err));
    }, []);

    return (
        <div className="container">
            <h1>Welcome to Cars</h1>
            <p className="subtitle">Discover our premium selection of vehicles</p>
            
            <div className="cars-grid">
                {cars.length === 0 ? (
                    <p className="loading">Loading cars...</p>
                ) : (
                    cars.map(car => (
                        <Car key={car.id} {...car} />
                    ))
                )}
            </div>
        </div>
    );
};

export default App;