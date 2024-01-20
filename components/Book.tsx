// components/Book.tsx
import React from "react";
import Image from "next/image";
import { Paper, Text, Title } from "@mantine/core";

interface BookProps {
  book: {
    title: string;
    author: string;
    genre: string;
    published: string;
    downloadLink: string;
    imageLink: string;
  };
}

const Book: React.FC<BookProps> = ({ book }) => {
  return (
   
  <a href={book.downloadLink} className="text-blue-500 hover:text-red-700" target="_blank" rel="noopener noreferrer">  
    <Paper shadow="md"  radius="md" className="p-4" style={{ maxWidth: 340, minWidth: 340 }} >
      <Image src={book.imageLink} alt={book.title} width={340} height={470} />
      <Title order={5}>{book.title}</Title>
      <Text size="sm">{book.author}</Text>
      <Text size="sm">Genre: {book.genre[0]}, {book.genre[1]}, {book.genre[2]}</Text>
      <Text size="sm">{book.published}</Text>
      <span className="text-blue-500 hover:text-red-700">
         Click on Card to Download
        </span>
      
    </Paper>
  </a>

  );
};

export default Book;
