import './Cards.css'
import vitz from '../../assets/vitz.jpg'
import mazda from '../../assets/mazda.jpg'
import subaru from '../../assets/subaru.jpg'
import fielder from '../../assets/fielder.jpg'
import land from '../../assets/land.jpg'
import note from '../../assets/note.jpg'
import honda from '../../assets/honda.jpg'
import volk from '../../assets/volk.jpg'

export default function Cards(){
  const vehicles = [
    {
      id: 1,
      title: "Toyota Vitz 2019",
      usage: "foreign-used",
      engine: "1000cc",
      fuelType: "petrol",
      image: vitz, // FIX: Pass only the variable reference
      costKsh: 1350000
    },
    {
      id: 2,
      title: "Mazda CX-5 2018",
      usage: "foreign-used",
      engine: "2200cc",
      fuelType: "diesel",
      image: mazda, // FIX: Pass only the variable reference
      costKsh: 3200000
    },
    {
      id: 3,
      title: "Toyota Fielder 2018",
      usage: "foreign-used",
      engine: "1500cc",
      fuelType: "petrol",
      image: fielder,
      costKsh: 1850000
    },
    {
      id: 4,
      title: "Subaru Forester 2018",
      usage: "foreign-used",
      engine: "2000cc",
      fuelType: "petrol",
      image: subaru,
      costKsh: 3400000
    },
    {
      id: 5,
      title: "Nissan Note 2019",
      usage: "foreign-used",
      engine: "1200cc",
      fuelType: "petrol",
      image: note,
      costKsh: 1250000
    },
    {
      id: 6,
      title: "Toyota  Prado 2017",
      usage: "foreign-used",
      engine: "2800cc",
      fuelType: "diesel",
      image: land,
      costKsh: 5800000
    },
    {
      id: 7,
      title: "Honda Fit 2018",
      usage: "foreign-used",
      engine: "1300cc",
      fuelType: "petrol",
      image: honda,
      costKsh: 1400000
    },
    {
      id: 8,
      title: "Volkswagen Golf TSi 2018",
      usage: "foreign-used",
      engine: "1400cc",
      fuelType: "petrol",
      image: volk,
      costKsh: 2100000
    }
  ];

  return (
    <div className="card-holder">
      {vehicles.map((vehicle) => {
        return (
          <div key={vehicle.id} className="card">
            {/* The src now receives a clean variable reference path */}
            <img src={vehicle.image} alt={vehicle.title} />
            <h2>{vehicle.title}</h2>
            <p>Vehicle-usage: {vehicle.usage}</p>
            <p>Fuel: {vehicle.fuelType}</p>
            <p>Engine: {vehicle.engine}</p>
            <h3>Cost: KSh {vehicle.costKsh.toLocaleString()}</h3>
          </div>
        )
      })} 
    </div>
  );
}