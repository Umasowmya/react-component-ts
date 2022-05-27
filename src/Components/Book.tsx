import React from 'react'
import BookCard from "./BookCard";


interface Props{
  image:string;
  time:number;
  reads:number;
}

const Book:React.FC<Props> =({image,time,reads})=>{
  return (
    <div>
        <BookCard image={image} time={time} reads={reads} />
    </div>
  )
}


export default Book
