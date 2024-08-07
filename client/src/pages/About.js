
import React from "react";
import { Card, CardHeader, Container, Grid } from "@mui/material";
import FullWidthBox from "../components/FullWidthBox";
import ThirdBox from "../components/ThirdBox";
import logoWithName from "../images/biocompute.png";
import "../App.css";

export default function About() {
  return (
    <Card className="about-main">
      <FullWidthBox
        link=""
        title="Our Mission"
        content="A documentation interface for bioinformatics experiments workflow in a 
        standardized human and machine-readable format. Improve and ease communication of
        HTS data and information between the research community, the clinical community,
        and regulatory organizations."
        image={logoWithName}
        imageAlt="BioCompute logo and name"
      />
      <FullWidthBox
        link=""
        title="Our Story"
        content="BioCompute is built through collaboration between the George Washington University 
            and the Food and Drug Administration (FDA) and approved as an official standard of IEEE 
            2791-2020. BioCompute brings transparency of the workflow and clear expectations for data 
            sharing between communities. The project has worked with individuals from NIH, Harvard, 
            several biotech and pharma companies, EMBL-EBI, Galaxy Project, and many more, and can 
            be integrated with any existing standard for HTS data. Associate tools have been developed 
            by popular bioinformatics platforms such as DNAnexus, Seven Bridges, and Galaxy for BCO 
            submission with minimal effort. More information about The current BioCompute standard 
            can be found on the Open Science Foundation website (where the standard is developed 
            and maintained), the HIVE website, and the Research Objects discussion of BioCompute."
        image=""
      />
      <CardHeader title="Funding Sources"/>
      <FullWidthBox
        link="https://smhs.gwu.edu/news/gw-led-consortium-receives-22m-grant-fund-biocompute-object-specification-project"
        title=""
        content="FDA BAA-19-00123"
        image=""
      />
      <FullWidthBox
        link="https://commonfund.nih.gov/dataecosystem"
        title=""
        content="Common Fund Data Ecosystem (CFDE) OT2 OD032092"
        image=""
      />
      <Grid container justifyContent="center" spacing={2}>
        <Container className="home-margintop" maxWidth={false}>
          {/* <FullWidthBox
            link=""
            title="Our Goals"
            content="BioCompute is a plat"
            image=""
          /> */}
        </Container>
      </Grid>

    </Card>)
}