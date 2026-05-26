import './Pictures.css';
import vitz from '../../assets/vitz.jpg';
import mazda from '../../assets/mazda.jpg';
import subaru from '../../assets/subaru.jpg';
import fielder from '../../assets/fielder.jpg';
import land from '../../assets/land.jpg';
import note from '../../assets/note.jpg';
import honda from '../../assets/honda.jpg';
import volk from '../../assets/volk.jpg';

export default function Pictures() {
  return (
    <div className="picture-holder">
      <img src={land} alt="Land Cruiser" />
      <img src={vitz} alt="Toyota Vitz" />
      <img src={mazda} alt="Mazda CX-5" />
      <img src={subaru} alt="Subaru" />
      <img src={fielder} alt="Toyota Fielder" />
      <img src={note} alt="Nissan Note" />
    </div>
  );
}