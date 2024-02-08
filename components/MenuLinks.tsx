'use client'
import React from 'react';
import { useMantineTheme, Button } from "@mantine/core";
import Link from 'next/link';
import { useRouter } from 'next/router';
 

const links = [
  { label: 'Home', url: '/' },
  { label: 'School', url: '/school' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

 const MenuLinks = () =>  {

  const theme = useMantineTheme();
  const router = useRouter();
  return (
    <>
      {links.map((link, index) => (
        <Link key={link.label} href={link.url} passHref>
          {/* You can use either Button or Text, depending on your styling preference */}
      <Button style={{ marginRight: index < links.length - 1 ? '5px' : '0', marginBottom: '10px', backgroundColor: router.pathname === link.url ?  theme.colors.red[8]  : theme.colors.blue[7] ,
              color: router.pathname === link.url ? 'white' : 'white', }}> 
          {link.label}
      </Button>
      
        </Link>
      ))}
      </> 
      
 );
      }
      export default MenuLinks








