'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import EasyHeader from '../components/EasyHeader';
import Footer from '../components/Footer';
import { Text, Box } from '@mantine/core';
import useMediaQueries from '../components/useMediaQueries';
import getItemsPerPage  from '../components/itemsPerPage';
import styles from './styles.module.css';
import CardsCarousel from '../components/CardsCarousel';

function About() {

  const screenSize = useMediaQueries();
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(screenSize));


  useEffect(() => {
    // Initialize itemsPerPage with the correct value based on screen size
    setItemsPerPage(getItemsPerPage(screenSize));
  }, [screenSize]);
  
  return (
    <>
    {/* Fixed Header */}
<div>
      <EasyHeader/>    
</div>
    
<div className={styles.wrapper}>
<div className={styles.body}> 
{screenSize === 'small' && (
  <div>
    <Text c='red.8' mx={20} mt={4} size='lg' ta='center' style={{ fontWeight: 'bold' }}>
      Buddha Dhamma School International
    </Text>
  </div>
)}
       <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'column', maxWidth: '1400px' }}>
        <h4 className={styles.homeTitle}>About Us</h4>
      <Text p='10px' size="sm" ta="center">
      The Buddha Dhamma School International (BDSI) is affiliated to the Queensland Sangha Association Inc, Brisbane, Australia, commonly called the QSA. QSA has provided services for about eighteen years mostly in Queensland and in Australia in a limited way.
BDSI is not just another Dhamma School. It aims at a specific purpose. Spiritual progress of every individual right up to enlightenment is our aim. What is important is that every individual gets a fair chance of reaching the highest level. Whether or not each one attains this or that level is not crucial. 
Our assumption is that every individual is gifted. What needs improvement is the method of communication. At times when the Lord Buddha was living there was no problem of method. 2600 years on, we certainly need to be conscious of the methods used. It appears that there is not enough interest in this matter.
BDSI is fully devoted to researching current methods of Dhamma communication and make decisive improvements. One of the reforms attempted is in the recognition of the psychology of children at different ages.
Another type of reform is regarding teaching techniques. In these times, the reliance on classroom teaching is excessive. There are other techniques available. 
There is a need to examine the application of technology in teaching. Information technology is particularly useful. Things like electrical circuitry can be used. Ideas of gravitation, magnetism, gene science are also available.
The novel systems adopted by BDSI draw a good deal from new areas.

      </Text>
      </Box>
      <CardsCarousel />
    <div>
    <Footer />
    </div>
</div>
</div>
    </>
  )
}

export default About