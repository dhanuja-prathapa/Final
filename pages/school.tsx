'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import booksData from "../components/books.json";
import Book from "../components/Book";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Center, Text, Title, Box, Grid, Container, Pagination } from '@mantine/core';
import useMediaQueries from '../components/useMediaQueries';
import getItemsPerPage  from '../components/itemsPerPage';
import styles from './styles.module.css';

function School() {

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
<div >
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
        <h4 className={styles.homeTitle}>School</h4>
      <Title order={5} c='blue' p='10'>School structure:</Title>
      <Text p='10px' size="sm" ta="center" c="teal.7">
      The purpose of the Buddha Dhamma School International is to help an interested person to learn Buddhism from the beginning, essentially by reading the recommended books and consulting a Buddhist Counsellor when necessary. The author is familiar with Theravada Buddhism; his knowledge of Mahayana Buddhism is limited. However, the text of the books does not attempt at raising the profile of any single tradition of Buddhism.</Text>
      <Text p='10px' size="sm" ta="center" c="red.7">
The first 12 books are aimed at students in the primary and secondary schools in the school systems of most English-speaking countries. 
Any level study after the secondary level is called post-secondary.
Material suited to individuals is covered in the self-development level.
</Text>
<Text p='10px' size="sm" ta="center" c="teal.7">
Adults will find it useful to read from the grade 1 book upwards though they might think these are too simple. Looking at these closely, the material is not that simple. The material might be easy to understand. This is suggested irrespective of whether the reader is a Buddhist or otherwise. It will also equip them to becomes teachers, or Buddhist Counsellors in the future. 

      </Text>
      </Box>

           {/* Grid Container for Books */}
           <Container size="2xl" style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1400px' }}>
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
    justifyContent: 'center' }} value={activePage} onChange={setActivePage} total={Math.ceil(booksData.length / itemsPerPage)} withEdges />
    <div>
    <Footer />
    </div>
    </div>
    </div>
    </>
  )
}

export default School