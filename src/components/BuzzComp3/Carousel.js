import { useState, useEffect, useRef, useCallback } from "react";
import "components/BuzzComp3/Carousel.css";
import image1 from "./assets/Rectangle 141.png";
import image2 from "./assets/Rectangle 142.png";
import image3 from "./assets/Rectangle 143.png";

const _items = [
  {
    title: "DIGITAL MEDIA MARKETING",
    items: [
      "Social Media Marketing",
      "Lead Generation",
      "Content Marketing",
      "Search Engine Marketing",
      "Influencer Marketing",
      "Email Marketing",
      "Search Engine Optimization",
    ],
    image: image1,
  },
  {
    title: "PRINTING AND DESIGN",
    items: [
      "Brochures & Catalogues",
      " Pitch Decks",
      "Newsletter",
      "Annual Report",
      "Company Profile",
      "Calendar Design",
      "Flyers & Posters",
    ],
    image: image2,
  },
  {
    title: "CONTENT CREATION",
    items: [
      "Website Content",
      "Branding Content",
      "Social Media Content",
      "Translation",
      "Copywriting",
    ],
    image: image3,
  },
];
const Card = (props) => {
  const backgroundClass = props.index % 2 === 0 ? 'yellow-bg' : 'white-bg';

  return (
    <li className="card">
      <div className="image-container">
        <img className="card-image" src={props.image} alt={props.title} />
      </div>
      <div className={`carddic ${backgroundClass}`}>
        <h3>{props.title}</h3>
        <ul className={`disc ${backgroundClass}`}>
          {props.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};


const Carousel = () => {
  const [moveClass, setMoveClass] = useState("");
  const [carouselItems, setCarouselItems] = useState(_items);
  const carouselRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--num", carouselItems.length);
  }, [carouselItems]);

  const handleAnimationEnd = useCallback(() => {
    if (moveClass === "prev") {
      shiftNext([...carouselItems]);
    } else if (moveClass === "next") {
      shiftPrev([...carouselItems]);
    }
    setMoveClass("");
  }, [moveClass, carouselItems]);

  useEffect(() => {
    const carouselElement = carouselRef.current;
    carouselElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      carouselElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [carouselItems, handleAnimationEnd]);

  const shiftPrev = (copy) => {
    let lastcard = copy.pop();
    copy.unshift(lastcard);
    setCarouselItems(copy);
  };

  const shiftNext = (copy) => {
    let firstcard = copy.shift();
    copy.push(firstcard);
    setCarouselItems(copy);
  };

  return (
    <div className="carouselwrapper module-wrapper">
      <div className="ui">
        <button onClick={() => setMoveClass("prev")} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass("next")} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul ref={carouselRef} className={`${moveClass} carousel`}>
        {carouselItems.map((t, index) => (
          <Card
            key={t.title + index}
            index={index}
            image={t.image}
            title={t.title}
            items={t.items}
          />
        ))}
      </ul>
    </div>
  );
};
export default Carousel;
