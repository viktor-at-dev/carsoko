import cars from '../../assets/cars.jpg'
import './Background.css'
export default function Background(){
    return(
        <div className="background-container">
            <img src={cars} alt="car-background"className="cars"/>
            <div className="text">
                <h2>Landcruiser</h2>
                <h2>Prado j250</h2>
            </div>
        </div>
    )
}