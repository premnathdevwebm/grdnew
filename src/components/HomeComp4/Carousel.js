import { useState, useEffect, useRef, useCallback } from "react";
import "components/HomeComp4/Carousel.css";
import image1 from "./assets/Rectangle 79.png";
import image2 from "./assets/Rectangle 80.png";
import image3 from "./assets/Rectangle 81.png";
import image4 from "./assets/Rectangle 82.png";
import image5 from "./assets/Rectangle 83.png";
import symbol from "./assets/symbol.svg";

const _items= [
  {
    title: "Gopinath",
    desc: "GRD played a pivotal role in launching our startup's online presence. Their design team crafted a stunning website that perfectly captured our brand's essence.",
    image: image1,
    role: "CEO - MediTech",
  },
  {
    title: "Sherene",
    desc: "Partnering with GRD was a game-changer for our company. Their design team breathed new life into our branding, giving it a modern and appealing look.",
    image: image2,
    role: "PRO - Ranger",
  },
  {
    title: "Aravinthakrishnan",
    desc: "GRD IT solutions optimized our checkout process, ensuring secure transactions. It's clear that their expertise lies in marrying design with technology.",
    image: image3,
    role: "Lead - Designer Infosys",
  },
  {
    title: "Guna",
    desc: "Thanks to the exceptional expertise of their hacking IT service, our company's cybersecurity has been fortified beyond expectations.",
    image: image4,
    role: "Founder - Good Life",
  },
  {
    title: "Rithish",
    desc: 'GRD managed to retrieve crucial files that I thought were lost forever. Their quick response and effective solutions turned a potential disaster into a success story.',
    image: image5,
    role: "Founder - FarmVilla",
  },
];

const Card = (props) => {
  return (
    <li className="card1">
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <div className="disc1">
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
    <div className="carouselwrapper1 module-wrapper">
      <div className="ui1">
        <button onClick={() => setMoveClass("prev")} className="prev">
          <span className="material-icons">chevron_left</span>
        </button>
        <button onClick={() => setMoveClass("next")} className="next">
          <span className="material-icons">chevron_right</span>
        </button>
      </div>
      <ul ref={carouselRef} className={`${moveClass} carousel1`}>
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
