import React from "react";
import Contact from "./Contact";
import Education from "./Education";
import Work from "./Work";
import { Flex, Box } from '@rebass/grid'
// import Skills from "./Skills";

const Resume = () => (
  <section id="resume">
    <Education />
    <Flex alignItems="center" flexDirection="column">
      <Box px={2} width={[1, 1 / 2]}>
        <h2>Make An Appointment</h2>
        <Contact />
      </Box>
    </Flex>
    <Work />
    {/* <Skills /> */}
  </section>
);

export default Resume;
