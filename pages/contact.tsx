'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import booksData from "../components/books.json";
import Book from "../components/Book";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Box, Image, Text, Title, Grid, Container, Pagination } from '@mantine/core';
import useMediaQueries from '../components/useMediaQueries';
import getItemsPerPage  from '../components/itemsPerPage';
import classes from './Demo.module.css';
import styles from './Demo.module.css';


function Contact() {

  const [computedColorScheme, setComputedColorScheme] = useState('light');

  const toggleColorScheme = () => {
    setComputedColorScheme((prevScheme) => (prevScheme === 'light' ? 'dark' : 'light'));
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
    <Box style={{ background: computedColorScheme === 'light' ? 'dark' : 'light' }}>
<div className={classes.fixedHeader}>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />    
</div>
    </Box>
    
<div className={styles.wrapper}>
<div className={styles.body}> 
        <h4 className={styles.homeTitle}>Contact Us</h4>
    
      <Title order={5} c='blue' p='10'>Buddhist Counsellors:</Title>
   
      <Image radius="md" h={200}
      w="auto"
      fit="contain" src='Rahu.png' alt='Dhanu' mx="auto"/>
      <Text
      
      p='10px' size="sm" ta="center" >
       Rahubadde Sarath-Chandra
      </Text>
      <Text p='10px' size="sm" ta="center" c="teal.7">
      Email: rahubadde@gmail.com   -   Mobile: (+46)77 8765689
      </Text>
      <Image radius="md" h={200}
      w="auto"
      fit="contain" src='Tanuja.jpeg' alt='Dhanu' mx="auto"/>
      <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center" >
      Tanuja Yasanga Sarath-Chandra
      </Text>
      <Text p='10px' size="sm" ta="center" c="teal.7">
      linkedin.com/in/tanuja-sarath-chandra-5112501   -   Mobile: (+46)77 7665433
      </Text>

      <Title order={5} c='blue' p='10'>IT Specialists:</Title>
      <Image radius="md" h={200}
      w="auto"
      fit="contain" src='Dhanu.gif' alt='Dhanu' mx="auto"/>
      <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center">
      Dhanuja Prathapa Ranawake
      </Text>
      <Text p='10px' size="sm" ta="center" c="teal.7">
      Email: dhanujaprathapa@gmail.com   -   Mobile: (+46)77 6355267
      </Text>

      <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center">
      Neil Ranawake
      </Text>
      <Text p='10px' size="sm" ta="center" c="teal.7">
      Email: neilranawake@yahoo.com   -   Mobile: (+94)77 2057719
      </Text>

           {/* Grid Container for Books */}
           <Container size="xl" className="" >
      <Grid justify="center" gutter='sm' >
        {filteredBooks.map((book, index) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 5, lg: 4, xl: 3 }} key={index} className="flex-row-md" style={{ marginBottom: '16px' }}>
            <Book book={book} />
            
          </Grid.Col>
        ))}
      </Grid>
    </Container>

    <Pagination style={{ marginBottom: '10px' }} value={activePage} onChange={setActivePage} total={Math.ceil(booksData.length / itemsPerPage)} withEdges />
    <div>
    <Footer />
    </div>

      </div>
      </div>
    </>
  )
}
export default Contact