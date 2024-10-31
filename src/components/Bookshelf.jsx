import { useState } from 'react';
const Bookshelf = () => {
const [books, setBooks] = useState([
    { title: 'Fourth Wing', author: 'Rebecca Yarros' },
    { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' }
])
const[newBook, setNewBook] = useState({
    title: '', author: ''
})
const handleInputChange = (event) =>{
        setNewBook({...newBook, [event.target.name]: event.target.value})
}
const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBooks = [...books, {...newBook}]
    setBooks(updatedBooks)
    setNewBook({title: '', author: ''})
}
console.log(newBook)
return (
    <>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
    <form onSubmit={handleSubmit}>
        <input id="title"
        name="title"
        value={newBook.title}
        onChange={handleInputChange}
        placeholder= "title"
        />
        <input id="author"
        name="author"
        value={newBook.author}
        onChange={handleInputChange}
        placeholder="author"
        />
        <button type='submit'>Submit new book!</button>
    </form>
  </div>
  
  <div className="bookCardsDiv">
  </div>
  {books.map((book, index) => {
        return <div key={index}>{book.title} by : {book.author}</div>
    }
    )}
</div>
</>
)}
export default Bookshelf