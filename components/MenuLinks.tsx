'use client'
import React from 'react';
import { Button } from "@mantine/core";
import Link from 'next/link';


const links = [
  { label: 'Home', url: '/' },
  { label: 'School', url: '/school' },
  { label: 'About', url: '/about' },
  { label: 'Contact', url: '/contact' },
];

 const MenuLinks = () => (
  
    <>
      {links.map((link, index) => (
        <Link key={link.label} href={link.url} passHref>
          {/* You can use either Button or Text, depending on your styling preference */}
      <Button style={{ marginRight: index < links.length - 1 ? '5px' : '0', marginBottom: '10px' }}> 
          {link.label}
      </Button>
      
        </Link>
      ))}
      </> 
      );

      export default MenuLinks








