'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import booksData from "../components/books.json";
import Book from "../components/Book";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Text, Box, Grid, Container, Pagination } from '@mantine/core';
import useMediaQueries from '../components/useMediaQueries';
import getItemsPerPage  from '../components/itemsPerPage';
import classes from './Demo.module.css';
import styles from './Demo.module.css';
import { useMantineColorScheme } from '@mantine/core';

function About() {

  const { colorScheme } = useMantineColorScheme();

  const headerStyle = {
    '--header-background': colorScheme === 'dark' ? 'black' : 'white',
  };

  const books: Book[] = booksData as Book[];
  const screenSize = useMediaQueries();
  const [activePage, setActivePage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage(screenSize));


  useEffect(() => {
    // Initialize itemsPerPage with the correct value based on screen size
    setItemsPerPage(getItemsPerPage(screenSize));
  }, [screenSize]);

  useEffect(() => {
    // Filter books based on search term
    const filtered = booksData.filter(
      (book) => book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Ensure active page doesn't exceed the total number of pages
    const totalPages = Math.ceil((filtered.length || booksData.length) / itemsPerPage);
    const validActivePage = activePage > totalPages ? totalPages : activePage;
  
    // Update active page to a valid page if needed
    if (activePage !== validActivePage) {
      setActivePage(validActivePage);
    }
  
    // Update filteredBooks with the current range
    const startIndex = (validActivePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newFilteredBooks = filtered.slice(startIndex, endIndex);
  
    // Update filteredBooks only if there are results or when searchTerm is empty
    setFilteredBooks((prevFilteredBooks) => {
      if (filtered.length > 0) {
        return newFilteredBooks;
      } else {
        // If no results and searchTerm is not empty, reset to all books
        return booksData.slice(startIndex, endIndex);
      }
    });
  }, [itemsPerPage, activePage, searchTerm, screenSize]);
  
  return (
    <>
    {/* Fixed Header */}
<div className={classes.fixedHeader} style={headerStyle}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />    
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
      <Text p='10px' size="sm" ta="center" c="teal.7">
      The Buddha Dhamma School International (BDSI) is affiliated to the Queensland Sangha Association Inc, Brisbane, Australia, commonly called the QSA. QSA has provided services for about eighteen years mostly in Queensland and in Australia in a limited way.
BDSI is not just another Dhamma School. It aims at a specific purpose. Spiritual progress of every individual right up to enlightenment is our aim. What is important is that every individual gets a fair chance of reaching the highest level. Whether or not each one attains this or that level is not crucial. 
Our assumption is that every individual is gifted. What needs improvement is the method of communication. At times when the Lord Buddha was living there was no problem of method. 2600 years on, we certainly need to be conscious of the methods used. It appears that there is not enough interest in this matter.
BDSI is fully devoted to researching current methods of Dhamma communication and make decisive improvements. One of the reforms attempted is in the recognition of the psychology of children at different ages.
Another type of reform is regarding teaching techniques. In these times, the reliance on classroom teaching is excessive. There are other techniques available. 
There is a need to examine the application of technology in teaching. Information technology is particularly useful. Things like electrical circuitry can be used. Ideas of gravitation, magnetism, gene science are also available.
The novel systems adopted by BDSI draw a good deal from new areas.

      </Text>
      </Box>
      
       {/* Grid Container for Books */}
       <Container size="xl" style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1400px' }}>
      <Grid justify="center" align="flex-start" gutter={{ base: 5, xs: 'sm', md: 'xl', lg:'lg', xl: 150 }} >
        {filteredBooks.map((book, index) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 5, lg: 4, xl: 3 }} key={index} style={{ margin: 'auto', display: 'flex', flexDirection: 'row', marginBottom: '16px'}}>
            <Book book={book} />
            
          </Grid.Col>
        ))}
      </Grid>
        </Container>

    <Pagination style={{ marginBottom: '10px', display: 'flex',
    justifyContent: 'center' }} value={activePage} onChange={setActivePage} total={Math.ceil(booksData.length / itemsPerPage)} withEdges />
    <div>
    <Footer />
    </div>
</div>
</div>
    </>
  )
}

export default About