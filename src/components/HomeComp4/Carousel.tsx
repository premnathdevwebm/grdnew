import { useState, useEffect } from "react";
import styles from "components/HomeComp4/Carousel.module.css";
import img1 from "components/HomeComp4/assets/Rectangle 79.png"
import img2 from "components/HomeComp4/assets/Rectangle 79.png"
import img3 from "components/HomeComp4/assets/Rectangle 79.png"
import img4 from "components/HomeComp4/assets/Rectangle 79.png"
type Item = {
  title: string;
  desc: string;
  image: string;
  role: string;
};

const slideWidth = 30;
const _items: Item[] = [
  {
    title: "Efren Reyes",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: img1,
    role: "client",
  },
  {
    title: "Efren Reyes",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: img2,
    role: "client",
  },
  {
    title: "Efren Reyes",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: img3,
    role: "client",
  },
  {
    title: "Efren Reyes",
    desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
    image: img4,
    role: "client",
  },
];
const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

type CarouselItem = {
  styles: React.CSSProperties;
  title: string;
  desc: string;
  image: string;
  role: string;
};

const createItem = (position: number, idx: number): CarouselItem => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    } as React.CSSProperties,
    ..._items[idx],
  };
  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: "grayscale(1)" };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }
  return item;
};

type CarouselSlideItemProps = {
  pos: number;
  idx: number;
  activeIdx: number;
};

const CarouselSlideItem: React.FC<CarouselSlideItemProps> = ({
  pos,
  idx,
  activeIdx,
}) => {
  const item = createItem(pos, idx);
  return (
    <li className={styles.slideItem} style={item.styles}>
      <img src={item.image} alt={item.title} />
      <div className={styles.body}>
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
      </div>
    </li>
  );
};

const Carousel: React.FC = () => {
  const [items, setItems] = useState(Array.from(Array(_items.length).keys()));
  const [isTicking, setIsTicking] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1): void => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => prev.map((_, i) => prev[(i + jump) % bigLength]));
    }
  };

  const nextClick = (jump = 1): void => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) =>
        prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
      );
    }
  };
  const handleDotClick = (idx: number): void => {
    idx < activeIdx
      ? prevClick(activeIdx - idx)
      : idx > activeIdx && nextClick(idx - activeIdx);
  };

  useEffect(() => {
    isTicking && sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length);
  }, [items]);
  return (
    <div className={styles.wrap}>
      <button className={styles.btnPrev} onClick={() => prevClick()}></button>
      <div className={styles.container}>
        <ul className={styles.slideList}>
          {items.map((pos, i) => (
            <CarouselSlideItem
              key={i}
              idx={i}
              pos={pos}
              activeIdx={activeIdx}
            />
          ))}
        </ul>
      </div>
      <button className={styles.btnNext} onClick={() => nextClick()}></button>
      <div className={styles.dots}>
        {items.slice(0, length).map((pos, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={i === activeIdx ? styles.dotActive : styles.dot}
          />
        ))}
      </div>
    </div>
  );
};
export default Carousel;
