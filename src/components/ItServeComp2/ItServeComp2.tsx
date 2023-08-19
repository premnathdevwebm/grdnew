import styles from "components/ItServeComp2/ItServeComp2.module.css";
import ScroolText from "components/ItServeComp2/ScrollingText";
import image1 from "components/ItServeComp2/assets/consultant 1.png";
import image2 from "components/ItServeComp2/assets/world 1.png";
import image3 from "components/ItServeComp2/assets/cloud-service 1.png";
const items = [
  {
    image: image1,
    title: "IT CONSULTING",
    description:
      "Our seasoned consultants work closely with you to understand your business goals, challenges, and requirements. We provide strategic guidance and help you make informed decisions when it comes to technology adoption, infrastructure planning, and IT strategy development.",
  },
  {
    image: image2,
    title: "NETWORK DESIGN & IMPLEMENTATION",
    description:
      "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations.",
  },
  {
    image: image3,
    title: "CLOUD SERVICES",
    description:
      "We design and implement robust, scalable, and secure networks that form the backbone of your IT infrastructure. Our team ensures seamless connectivity, optimized performance, and enhanced reliability for your business-critical operations.",
  },
];

const ItServeComp2 = () => {
  return (
    <div className={styles.container}>
      <ScroolText />
      <div className={styles.content}>
        <h3>IT SERVICES AND SOLUTIONS</h3>
        <p>
          Here's an overview of the IT services we offer at Golden Royce Designs
        </p>
      </div>
      <div className={styles.flexcont}>
        <div className={styles["flex-container"]}>
          {items.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.circle}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div> 
          ))}
        </div>
      </div>
      <div className={styles.btnCont}>
        <button>Other Services</button>
      </div>
    </div>
  );
};

export default ItServeComp2;
