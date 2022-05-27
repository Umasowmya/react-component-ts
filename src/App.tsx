import React from 'react';
import Book  from './Components/Book';
import book from './Components/1.jpg';




const App:React.FC = ()=> {
  return (
    <div className="App">
     <Book image={book} time={15} reads={10}/>
    </div>
  );
}

export default App;

