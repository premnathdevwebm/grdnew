import styles from "components/PolicyComp2/PolicyComp2.module.css";
import * as React from "react";
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
          <Typography>Data Security Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Protecting our clients' and company's data is a top priority at
            GOLDEN ROYCE DESIGN. Our Data Security Policy establishes protocols
            for handling, transmitting, and storing sensitive information.
            Employees are required to follow security practices such as password
            protection, encryption, regular data backups, and reporting of
            security incidents.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Privacy Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Respecting your privacy is crucial to us. Our Privacy Policy
            explains how we collect, use, and safeguard personal information. We
            are committed to transparent data practices and compliance with
            privacy regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Intellectual Property Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As an IT company, we produce valuable intellectual property. Our Intellectual Property Policy clarifies the ownership of work produced by employees and contractors during their time at GOLDEN ROYCE DESIGN. This policy also outlines the procedures for protecting our intellectual property assets.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Remote Work Policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In an evolving work landscape, our Remote Work Policy provides guidelines for employees working remotely. This includes expectations for communication, security measures, and productivity. By following this policy, we aim to ensure that remote work remains efficient and secure.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>
          Harassment and Discrimination Policy
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          At GOLDEN ROYCE DESIGN, we are committed to maintaining a respectful and inclusive workplace. Our Harassment and Discrimination Policy outlines our stance against any form of harassment, discrimination, or retaliation. We provide clear channels for reporting incidents and assure employees that complaints will be handled promptly and confidentially.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Code of Conduct</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our Code of Conduct reflects our company's values and standards of behavior. It covers ethical conduct, professional interactions, teamwork, and the importance of maintaining a positive company culture. All employees and representatives of GOLDEN ROYCE DESIGN are expected to uphold this code.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQComp2;
