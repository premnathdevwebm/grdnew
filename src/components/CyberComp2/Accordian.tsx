import { useState } from "react";
import "./Accordian.css"
const datas = [
  {
    id: 1,
    title: "Vulnerability Assessments",
    info: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    title: "Penetration Testing",
    info: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    title: "Security Audits",
    info: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    title: "Incident Response",
    info: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    title: "Security Awareness Training",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
  {
    id: 6,
    title: "Network Monitoring",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
  {
    id: 7,
    title: "Data Encryption and Protection",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
  {
    id: 8,
    title: "Security Policy Development",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
  {
    id: 9,
    title: "Other VA/PT",
    info: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ",
  },
];

function SingleAccordian({ title, info }: {title: string, info: string}) {
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
        </div>
        {show && <div className="accordianText">{info}</div>}
      </div>
    );
  }

const Accordian = () => {
  return <div className="accordian">
  {datas.map((data) => {
    return <SingleAccordian key={data.id} {...data} />;
  })}
</div>;
};

export default Accordian;
