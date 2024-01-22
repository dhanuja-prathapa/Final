// components/Footer.tsx
import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { Box, Text, Group, Container, Paper, Title } from '@mantine/core';

const Footer = () => {
  return (
    <Paper shadow="sm" style={{
    bottom: 10,
    left: 10,
    right: 10,
    width: 'auto',
    zIndex: 'auto', 
    borderTop: '1px solid #000000',
        
    padding: '10px',
    opacity: 0.7, }}>
    <Container size="sm">
      <Title order={5} style={{ textAlign: 'center', opacity: 0.7 }}>
       
    <footer>
      
  <Group style={{ display: 'flex', justifyContent: 'center', minHeight: 'auto' }}>

      <h4 className="text-base mb-1">Buddha Dhamma School International</h4>
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
        <Text>Owned by: Queensland Sangha Association Inc., Australia</Text>
        <a href="tel:+61732789021" color="blue" style={{ marginLeft: '20px' }}>
          Call us at +61 (07) 3278 9021
        </a>
      </Box>
        <Text className="opacity-50">Commenced on: 1 January 2024</Text>
      </Group>
      
      {/* socials */}
     <Group style={{ display: 'flex', justifyContent: 'center', minHeight: 'auto', fontSize: '2.5rem', gap: '1rem', color: '#636363' }}>
        <a href="https://www.youtube.com/@HappinesstheBuddhistWay/videos" target="_blank" rel="noopener noreferrer">
        <IoLogoYoutube />{" "}
        </a>
        <a href="https://www.linkedin.com/in/tanuja-sarath-chandra-5112501/?originalSubdomain=au" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />{" "}
        </a>
        <a href="https://www.sanghaqld.org/" target="_blank" rel="noopener noreferrer">
        <img
        src="QSA.png"
        alt="QSA Logo"
        style={{ width: "34px", height: "34px"  }}
      />{" "}
        </a>
        <a
          href="https://www.facebook.com/hapiness.the.buddhist.way"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />{" "}
        </a>
        </Group>
      {/*</Box>*/}
      
      
    </footer>
    </Title>
    </Container>
    </Paper>
  );
};

export default Footer;
