import { useState, useEffect, useRef, useCallback } from "react";
import "components/HomeComp4/Carousel.css";
import image1 from "./assets/Rectangle 79.png";
import image2 from "./assets/Rectangle 80.png";
import image3 from "./assets/Rectangle 81.png";
import symbol from "./assets/symbol.svg";

const _items= [
  {
    title: "Efren Reyes",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: image1,
    role: "client",
  },
  {
    title: "Efren Reyes I",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: image2,
    role: "client",
  },
  {
    title: "Efren Reyes II",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: image3,
    role: "client",
  },
];

const Card = (props) => {
  return (
    <li className="card">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <div className="disc">
        <img src={symbol} alt="symb" />
        <span>&quot;</span>
        <p>{props.desc}</p>
      </div>
      <span>{props.role}</span>
    </li>
  );
};

const Carousel= () => {
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
            image={t.image}
            title={t.title}
            desc={t.desc}
            role={t.role}
          />
        ))}
      </ul>
    </div>
  );
};
export default Carousel;
