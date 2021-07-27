
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Slider from "react-slick";

const GovernmentProjectss = (props) => {
  const titles = ["مشروعات", "المحافظة"];
  const contents = [
    "By for this spent ancient light thou adversity did. It they from joyless childe most in say to and, high soul departed so loathed his weary into fondly. Loved pilgrimage but known brow each talethis did ah. Blast mighty satiety nor albions where. Be way to birth it revel in sad venerable whom. The with upon into few to. His cheer monks present a festal. In feere nor now run him are he be. For childe would favour a pollution was had power, but left love since sins evil. Which as worse knew chill save. Flee ear sun was feere.",
    "Dolor vero rebum voluptua dolor ut dolores justo vero, ut est diam gubergren takimata amet magna ipsum. No takimata tempor at dolor sit sit sit elitr ea, et erat takimata sit vero tempor sea takimata nonumy. Dolores et accusam eos et ut diam sed sit, nonumy sea sadipscing ipsum dolores."];
  const images = ["./assets/m.jpg", "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270"]

  const [counter, setCounter] = useState(1);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container-fluid col-12">
      <div className="d-flex mb-3 justify-content-center justify-content-md-start">
        <FontAwesomeIcon icon={faCogs} className="titleIcon me-md-5" />
        <p className="titles mb-1">,,,,,,,,,,مشروعات المحافظة</p>
      </div>
      <div className="d-flex justify-content-around">
        <div className="row">
            <div className="col-12">
            <div>
              <img src={images[0]} />
               
            </div>
            <Slider {...settings}>
            
            <div>
            <h1>
               2   </h1> 
            </div>
            <div>
            <h1>
              3   </h1>             <h1>
              3   </h1>             <h1>
              3   </h1>             <h1>
              3   </h1> 
            </div>
     
        
        </Slider>
            </div>
        </div>
   
        {/* <FontAwesomeIcon icon={faChevronLeft} className="fa-5x leftIcon" onClick={onLeftClickHandler} /> */}
      </div>
      <div className="line my-5 mx-auto"></div>
    </div>
  );
};

export default GovernmentProjectss;
