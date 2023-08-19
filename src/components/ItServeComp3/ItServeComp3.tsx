import styles from "components/ItServeComp3/ItServeComp3.module.css"
import image1 from "components/ItServeComp3/assets/internet-security.png"
import image2 from "components/ItServeComp3/assets/support.png"
import image3 from "components/ItServeComp3/assets/data-recovery.png"
import image4 from "components/ItServeComp3/assets/ux.png"
import image5 from "components/ItServeComp3/assets/web-development.png"
const items = [
  {
    image: image1,
    title: "IT SUPPORT & MANAGED SERVICE",
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
    title: "DATA BACKUP AND RECOVERY",
    description:
      "We implement robust backup and disaster recovery solutions to safeguard your critical data. Our strategies ensure business continuity in the face of unexpected events, protecting you from data loss and minimizing the impact of disruptions.",
  },
  {
    image: image4,
    title: "CYBER SECURITY",
    description:
      "We prioritize the security of your digital assets and information. Our cybersecurity services include risk assessments, vulnerability management, threat detection, incident response, and employee awareness training. We work diligently to safeguard your networks, systems, and sensitive data from ever-evolving cyber threats.",
  },
  {
    image: image5,
    title: "SOFTWARE DEVELOPEMENT",
    description:
      "Our talented software development team crafts custom applications, tailored software solutions, and mobile apps to meet your unique business requirements. We combine innovation, creativity, and technical expertise to deliver user-friendly, scalable, and secure software solutions.",
  }
];

const ItServeComp3 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flxCont}>
      <div className={styles["flex-container"]}>
      {items.map((item, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.circle}>
            <img src={item.image} alt={item.title} className={styles.image} />
          </div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default ItServeComp3