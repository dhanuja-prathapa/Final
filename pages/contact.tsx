'use client'
import React from 'react';
import { useState, useEffect, useMemo } from 'react';
import booksData from "../components/books.json";
import Book from "../components/Book";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Center, Box, Image, Text, Title, Grid, Container, Pagination } from '@mantine/core';
import useMediaQueries from '../components/useMediaQueries';
import getItemsPerPage  from '../components/itemsPerPage';
import classes from './styles.module.css';
import styles from './styles.module.css';
import { useMantineColorScheme } from '@mantine/core';



function Contact() {

  const [computedColorScheme, setComputedColorScheme] = useState('light');

  const toggleColorScheme = () => {
    setComputedColorScheme((prevScheme) => (prevScheme === 'light' ? 'dark' : 'light'));
  };
  
  const { colorScheme } = useMantineColorScheme();

  const headerStyle = useMemo(() => {
    return {
      '--header-background': colorScheme === 'dark' ? 'black' : 'white',
    };
  }, [colorScheme]);

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

<Container style={{ margin: 'auto', display: 'flex', flexDirection: 'column', maxWidth: '1400px' }}>
        <h4 className={styles.homeTitle}>Contact Us</h4>
    
      <Title order={5} c='blue' p='10' ta="center">Buddhist Counsellors:</Title>
    <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '500px' }}>
      <Image radius="md" h={200}
      w="auto"
      fit="contain" src='Rahu.png' alt='Dhanu' mx="auto"/>
      <div style={{ marginLeft: '20px' }}>
      <Image radius="md" h={200}
      w="auto"
      fit="contain" src='Rahu2.png' alt='Rahu2' mx="auto"/>
      </div>
    </Box>   
      <Text
      p='10px' size="sm" ta="center" >
       Rahubadde Sarath-Chandra
      </Text>
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email: -   
      </Text>
      <a href="mailto:infoqsa@gmail.com" color="blue" style={{ marginLeft: '5px' }}>
      infoqsa@gmail.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Call Mobile:   
      </Text>
        <a href="tel:+61732789021" color="blue" style={{ marginLeft: '5px' }}>
           (+61) 732 789 021
        </a>
      </Box>
     
      <Image radius="md" h={200}
      w={200}
      fit="contain" src='Tanuja.jpeg' alt='Dhanu' mx="auto" mt='10px'/>
      <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center" >
      Tanuja Yasanga Sarath-Chandra
      </Text>
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email: -   
      </Text>
      <a href="mailto:tanuja4@gmail.com" color="blue" style={{ marginLeft: '5px' }}>
      tanuja4@gmail.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Call Mobile:   
      </Text>
        <a href="tel:+61413485411" color="blue" style={{ marginLeft: '5px' }}>
           (+61) 413 485 411
        </a>
      </Box>

      <Title order={5} c='blue' p='10' ta="center">IT Specialists:</Title>
      <Image radius="md" w={200} h={200}
      
      fit="contain" src='Dhanu.gif' alt='Dhanu' mx="auto"/>
      <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center">
      Dhanuja Prathapa Ranawake
      </Text>
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email: -   
      </Text>
      <a href="mailto:dhanujaprathapa@gmail.com" color="blue" style={{ marginLeft: '5px' }}>
      dhanujaprathapa@gmail.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Call Mobile:   
      </Text>
        <a href="tel:+61472511125" color="blue" style={{ marginLeft: '5px' }}>
           (+61) 472 511 125
        </a>
      </Box>

      <Image radius="md" w={200} h={200}
      fit="contain" src='Neil.png' alt='Neil' mx="auto" mt='10px'/>
      <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center">Neil Ranawake</Text>
      
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email: -   
      </Text>
      <a href="mailto:neilranawake@yahoo.com" color="blue" style={{ marginLeft: '5px' }}>
      neilranawake@yahoo.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Call Mobile:   
      </Text>
        <a href="tel:+94772057719" color="blue" style={{ marginLeft: '5px' }}>
           (+94)77 2057719
        </a>
      </Box>
    </Container>

           {/* Grid Container for Books */}
           <Container size="2xl" style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1400px', marginTop:'10px'}}>
      <Grid justify="center" align="flex-start" gutter='xl' >
        {filteredBooks.map((book, index) => (
          <Grid.Col span={{ xs: 12, sm: 6, md: 5, lg: 4, xl: 3 }} key={index} style={{ margin: 'auto', display: 'flex', flexDirection: 'row', marginBottom: '16px'}}>
            <Center>
            <Book book={book} />
            </Center>
          </Grid.Col>
        ))}
      </Grid>
        </Container>

    <Pagination style={{ marginBottom: '10px', display: 'flex',
    justifyContent: 'center'}} value={activePage} onChange={setActivePage} total={Math.ceil(booksData.length / itemsPerPage)} withEdges />
    <div>
    <Footer />
    </div>

      </div>
      </div>
    </>
  )
}
export default Contact