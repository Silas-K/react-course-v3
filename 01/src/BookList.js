import Book from "./Book";
import { books } from "./books";

const BookList = () => {
  const parentFunction = (msg) => {
    console.log("hello from parent function");
    console.log(msg);
  };

  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => (
          <Book
            {...book}
            key={book.id}
            callback={parentFunction}
            index={index}
          />
        ))}
      </section>
    </>
  );
};

export default BookList;
