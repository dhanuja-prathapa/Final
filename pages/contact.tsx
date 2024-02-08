'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import Book, {BookProps} from "../components/myBookCard";
import EasyHeader from '../components/EasyHeader';
import Footer from '../components/Footer';
import { Title, Image, Center, Text, Box, Grid, Container} from '@mantine/core';
import useMediaQueries from '../components/useMediaQueries';
import styles from './styles.module.css';


function Contact () {

  const [booksData, setBooksData] = useState<any[]>([]);
  //const books: BookProps[] = booksData.map((book) => ({ book }));
  const screenSize = useMediaQueries();
  const [filteredBooks, setFilteredBooks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    console.log('booksData', booksData);
    console.log('filteredBooks', filteredBooks);
    
  }, [booksData, filteredBooks]);
  

   // Use the useEffect hook to fetch data when the component mounts
   useEffect(() => {
    // Define a function to fetch books from the server
    const fetchmyBooksData = async () => {
      try {
        // Make a GET request to your server's /books endpoint
        const response = await fetch('http://localhost:5000/myBooks');
        const data = await response.json();

        // Update the state with the fetched data
        setBooksData(data);
        setFilteredBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    // Call the fetchBooks function
    fetchmyBooksData();
   
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts
 

  return (
    <>
    {/* Fixed Header */}
    
<div >
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
      Email:  
      </Text>
      <a href="mailto:infoqsa@gmail.com" color="blue" style={{ marginLeft: '5px' }}>
      infoqsa@gmail.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Mobile:   
      </Text>
        <a href="tel:+61732789021" color="blue" style={{ marginLeft: '5px' }}>
           (+61) 732 789 021
        </a>
      </Box>
     
      <Image radius="md" h={200}
      w={200}
      fit="contain" src='Tanuja.jpeg' alt='Dhanu' mx="auto" mt='10px'/>
     {/*} <Text
       style={{ color: computedColorScheme === 'light' ? 'dark' : 'light' }}
      p='10px' size="sm" ta="center" >
      Tanuja Yasanga Sarath-Chandra
</Text>*/}
      <Text
      p='10px' size="sm" ta="center" >
      Tanuja Yasanga Sarath-Chandra
      </Text>
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email:   
      </Text>
      <a href="mailto:tanuja4@gmail.com" color="blue" style={{ marginLeft: '5px' }}>
      tanuja4@gmail.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Mobile:   
      </Text>
        <a href="tel:+61413485411" color="blue" style={{ marginLeft: '5px' }}>
           (+61) 413 485 411
        </a>
      </Box>

      <Title order={5} c='blue' p='10' ta="center">IT Specialists:</Title>
      <Image radius="md" w={200} h={200}
      
      fit="contain" src='Dhanu.gif' alt='Dhanu' mx="auto"/>
      <Text
      p='10px' size="sm" ta="center">
      Dhanuja Prathapa Ranawake
      </Text>
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email:   
      </Text>
      <a href="mailto:dhanujaprathapa@gmail.com" color="blue" style={{ marginLeft: '5px' }}>
      dhanujaprathapa@gmail.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Mobile:   
      </Text>
        <a href="tel:+61472511125" color="blue" style={{ marginLeft: '5px' }}>
           (+61) 472 511 125
        </a>
      </Box>

      <Image radius="md" w={200} h={200}
      fit="contain" src='Neil.png' alt='Neil' mx="auto" mt='10px'/>
      <Text
      p='10px' size="sm" ta="center">Neil Ranawake</Text>
      
      <Box style={{ margin: 'auto', display: 'flex', flexDirection: 'row', maxWidth: '1000px' }}> 
      <Text p='3px' size="sm" ta="center" c="teal.7">
      Email:   
      </Text>
      <a href="mailto:neilranawake@yahoo.com" color="blue" style={{ marginLeft: '5px' }}>
      neilranawake@yahoo.com
        </a>
        <Text p='3px' size="sm" ta="center" c="teal.7" style={{ marginLeft: '10px' }}>
        Mobile:   
      </Text>
        <a href="tel:+94772057719" color="blue" style={{ marginLeft: '5px' }}>
           (+94) 77 205 7719
        </a>
      </Box>
    </Container>
    <Container style={{ margin: 'auto', display: 'flex', flexDirection: 'column', maxWidth: '800px' }}>
    <Text p='3px' mt='10px' mb='10px' size="sm" ta="center" style={{ marginLeft: '10px' }}> As an author, Neil Ranawake has published two books in sinhala language for the Sri Lankan community in close association of Most Ven Madihe Pannasiha Thero, Ven Gangodawila Soma Thero, Ven Maduluwave Sobhitha Thero etc. who also took precedence at the book launch. You are kindly invited to download and read them 
    </Text>
    </Container>

{/* Grid Container for Books */}
{filteredBooks.length > 0 ? (
<Container style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap', marginTop:'10px'}}>
           {filteredBooks.map((book, index) => ( 
               <Center key={index} style={{ margin: 'auto', display: 'flex', marginBottom: '16px'}}>
               <Book book={book} />
               </Center>
           ))}        
</Container>
           
) : (
  
  <p>Database not connected ! No books to display...</p>)}

    <div>
    <Footer />
    </div>

      </div>
      </div>
    </>
  )
}
export default Contact