import { useState } from "react";
import "./Accordian.css";
import vulnerablityassesment from "components/CyberComp2/assets/vulnerablityassesment.png";
import penetrationtest from "components/CyberComp2/assets/penetrationtest.png";
import securityaudit from "components/CyberComp2/assets/securityaudit.png";
import incidentresponse from "components/CyberComp2/assets/incidentresponse.png";
import securityawarnesstraining from "components/CyberComp2/assets/securityawarnesstraining.png";
import networkmonitoring from "components/CyberComp2/assets/networkmonitoring.png";
import dataencryption from "components/CyberComp2/assets/dataencryption.png";
import securitypolicydevelopment from "components/CyberComp2/assets/securitypolicydevelopment.png";
import othervat from "components/CyberComp2/assets/othervat.png";
const datas = [
  {
    id: 1,
    title: "Vulnerability Assessments",
    info: "We conduct thorough assessments of your digital infrastructure to identify potential vulnerabilities and provide actionable insights to fortify your systems.",
    image: vulnerablityassesment,
  },
  {
    id: 2,
    title: "Penetration Testing",
    info: "Our skilled ethical hackers simulate real-world cyber attacks to test the strength of your defenses and identify areas for improvement.",
    image: penetrationtest,
  },
  {
    id: 3,
    title: "Security Audits",
    info: "We perform detailed audits of your existing security measures to ensure compliance with industry standards and best practices.",
    image: securityaudit,
  },
  {
    id: 4,
    title: "Incident Response",
    info: "In the unfortunate event of a security breach, our incident response team is available 24/7 to mitigate the impact and restore normalcy swiftly.",
    image: incidentresponse,
  },
  {
    id: 5,
    title: "Security Awareness Training",
    info: "We believe that human error is one of the most significant factors in cyber breaches. Our training programs educate your employees about the latest threats, equipping them with the knowledge to make informed decisions and adopt secure practices.",
    image: securityawarnesstraining,
  },
  {
    id: 6,
    title: "Network Monitoring",
    info: "Our advanced monitoring systems keep a vigilant eye on your network, detecting any suspicious activities in real-time and enabling proactive threat response.",
    image: networkmonitoring,
  },
  {
    id: 7,
    title: "Data Encryption and Protection",
    info: "We implement robust encryption techniques to safeguard your sensitive data, both in transit and at rest, ensuring confidentiality and integrity.",
    image: dataencryption,
  },
  {
    id: 8,
    title: "Security Policy Development",
    info: "We assist in creating comprehensive security policies tailored to your organization's needs, providing a strong foundation for a secure environment.",
    image: securitypolicydevelopment,
  },
  {
    id: 9,
    title: "Other VA/PT",
    info: "Cyber Intelligence, Vulnerablity Audit, Cloud Security Audit,    Cyber Forensics Audit",
    image: othervat,
  },
];

function SingleAccordian({
  title,
  info,
  image,
}: {
  title: string;
  info: string;
  image: any;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={`singleAccordian ${show ? "open" : ""}`}>
      <div
        className="accordianTitle"
        onClick={() => {
          setShow(!show);
        }}
      >
        <span>{title}</span>
        <span className="toggleSign">{show ? "-" : "+"}</span>
      </div>
      {show && (
        <div className="accordianText">
          <p>{info}</p>
          <img src={image} alt={title} className="accordianImage" />
        </div>
      )}
    </div>
  );
}

const Accordian = () => {
  return (
    <div className="accordian">
      {datas.map((data) => {
        return <SingleAccordian key={data.id} {...data} />;
      })}
    </div>
  );
};

export default Accordian;
