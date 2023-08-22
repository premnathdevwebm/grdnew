import * as React from "react";
import styles from "components/FAQComp2/FAQComp2.module.css";
import { styled } from "@mui/material/styles";
import Icon from "@mui/material/Icon";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const ArrowForwardIosSharpIcon = () => {
  return (
    <Icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M10 6v12l4-6z" />
      </svg>
    </Icon>
  );
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon />} {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQComp2 = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <div className={styles.container}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What services does our GRD company offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a wide range of services including graphic design, web
            design, software development, mobile app development, IT consulting,
            and more. Our goal is to provide comprehensive solutions that meet
            your design and technology needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Can we handle both design and IT projects?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Our integrated team of designers and IT experts work
            collaboratively to deliver projects that seamlessly combine creative
            design and cutting-edge technology.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>What industries do we serve?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We serve a diverse range of industries including but not limited to
            e-commerce, healthcare, finance, education, and entertainment. Our
            expertise allows us to cater to various business sectors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>What types of design services do we offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer graphic design services for branding, logos, marketing
            collateral, UI/UX design for websites and apps, as well as design
            for brochures, flyers, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
            Can we help create a brand identity for my business?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we specialize in creating unique and impactful brand
            identities. Our design team can develop logos, color palettes, and
            brand guidelines that resonate with your target audience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Do we offer custom website design?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! We create custom websites tailored to your business
            goals and user experience requirements. Our designs are responsive
            and user-friendly.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>What IT solutions do we provide?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a range of IT services including software development, web
            application development, mobile app development, cybersecurity
            solutions, IT infrastructure setup, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>
            Can we develop a custom software solution for my business?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we specialize in developing custom software solutions that
            address your specific business needs. Our experienced developers
            will work closely with you to create a solution that aligns with
            your goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>How long does it take to complete a project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Project timelines can vary depending on the complexity and scope. We
            provide estimates based on your specific project requirements and
            strive to deliver within agreed-upon timelines.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel10"}
        onChange={handleChange("panel10")}
      >
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>How do I get started with a project?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Getting started is easy! Simply contact us through our website,
            phone, or email. We'll schedule an initial discussion to understand
            your needs and provide you with a customized proposal.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQComp2;
