import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    display: 'block',
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    padding: '0.1rem 0rem',
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <CustomContainer>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Solutions
            </Typography>

            <FooterLink>Learning Management System</FooterLink>
            <br />
            <FooterLink>Digital Content</FooterLink>
            <br />
            <FooterLink>Assessments</FooterLink>
            <br />
            <FooterLink>Student Information System</FooterLink>
            <br />
            <FooterLink>Fee Management</FooterLink>
            <br />
            <FooterLink>Admission Management</FooterLink>
            <br />
            <FooterLink>Student Tracking System</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Home</FooterLink>
            <br />
            <FooterLink>Features</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
            <br />
            <FooterLink>Partner</FooterLink>
            <br />
            <FooterLink>Privacy Policy</FooterLink>
            <br />
            <FooterLink>Terms of Service</FooterLink>
            <br />
            <FooterLink>Software Service Agreement</FooterLink>
            <br />
            <FooterLink>Annual Report</FooterLink>
            <br />
            <FooterLink>Glossary</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Open Tools
            </Typography>

            <FooterLink>TimeTable Maker</FooterLink>
            <br />
            <FooterLink>Worksheet Maker</FooterLink>
            <br />
            <FooterLink>Lesson Planner</FooterLink>
            <br />
            <FooterLink>CBSE Result analyser</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Contact
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#7A7A7E",
                fontWeight: "500",
                mb: 2,
              }}
            >
              5th Floor, SJR Primus,<br /> 20th Main Rd,<br /> next to Raheja Arcade,<br /> 5th Block, Koramangala,<br /> Bengaluru, Karnataka 560034
            </Typography>

            <IconBox>
              <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
              <img
                src={twitterIcon}
                alt="twitterIcon"
                style={{ cursor: "pointer" }}
              />
              <img
                src={linkedinIcon}
                alt="linkedinIcon"
                style={{ cursor: "pointer" }}
              />
            </IconBox>
          </Box>
        </CustomContainer>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
