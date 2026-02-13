import React, { useState } from 'react';

const LibrarySystem = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "React Basics", author: "John Doe", category: "Programming" },
    { id: 2, title: "Tailwind CSS Guide", author: "Jane Smith", category: "Design" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "", category: "Programming" });

  const addBook = (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.author) return alert("Fields cannot be empty!");
    setBooks([...books, { ...newBook, id: Date.now() }]);
    setNewBook({ title: "", author: "", category: "Programming" });
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 text-center">Library Management System</h1>

      <form onSubmit={addBook} className="bg-amber-50 border border-amber-200 p-5 rounded-xl mb-6 grid grid-cols-1 md:grid-cols-4 gap-3">
        <input 
          type="text" placeholder="Book Title" className="border border-amber-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
          value={newBook.title} onChange={(e) => setNewBook({...newBook, title: e.target.value})}
        />
        <input 
          type="text" placeholder="Author" className="border border-amber-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200"
          value={newBook.author} onChange={(e) => setNewBook({...newBook, author: e.target.value})}
        />
        <select 
          className="border border-amber-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-200" value={newBook.category}
          onChange={(e) => setNewBook({...newBook, category: e.target.value})}
        >
          <option value="Programming">Programming</option>
          <option value="Design">Design</option>
          <option value="Business">Business</option>
        </select>
        <button className="bg-teal-600 text-white font-semibold py-2 rounded-lg hover:bg-teal-700">Add Book</button>
      </form>

      <div className="mb-6">
        <input 
          type="text" placeholder="🔍 Search books by title..." 
          className="w-full p-3 rounded-lg border border-amber-300 focus:border-teal-500 outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="bg-white p-5 rounded-xl border border-slate-200 flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg text-slate-800">{book.title}</h3>
              <p className="text-slate-600 italic">by {book.author}</p>
              <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded mt-2 inline-block">{book.category}</span>
            </div>
            <button 
              onClick={() => removeBook(book.id)}
              className="text-rose-600 hover:bg-rose-50 p-2 rounded-full transition-colors"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
      
      {filteredBooks.length === 0 && <p className="text-center text-slate-500 mt-10">No books found.</p>}
    </div>
  );
};

export default LibrarySystem;