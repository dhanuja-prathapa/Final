// components/Footer.tsx
import React from "react";
import Image from 'next/image';
import {
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { Space, Box, Text, Group, Container, Paper, Title } from '@mantine/core';
import styles from '../pages/styles.module.css';

const Footer = () => {
  return (
    <Paper shadow="sm" className={styles.footer}>
    <Container size="sm">
      <Title order={5} className={styles.footerTitle}>
       
    <footer>
      
  <Group style={{ display: 'flex', justifyContent: 'center', minHeight: 'auto' }} gap='1px'>

      <h4 className="text-base mb-1">Buddha Dhamma School International</h4>
      <Space h="xs" />
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
     <a href="https://www.sanghaqld.org/" target="_blank" rel="noopener noreferrer">
     <div style={{ marginTop: '-8px' }}>
        <Image
        src="/QSA.png"
        alt="QSA Logo"
        width= {34} height= {30} 
      />{" "}
     </div> 
        </a>   
        <a href="https://www.youtube.com/@HappinesstheBuddhistWay/videos" target="_blank" rel="noopener noreferrer">
        <IoLogoYoutube />{" "}
        </a>
        <a href="https://www.linkedin.com/in/tanuja-sarath-chandra-5112501/?originalSubdomain=au" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />{" "}
        </a>
        <a
          href="https://www.facebook.com/hapiness.the.buddhist.way"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillFacebook />{" "}
        </a>
        </Group> 
      
    </footer>
    </Title>
    </Container>
    </Paper>
  );
};

export default Footer;
