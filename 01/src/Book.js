const Book = (props) => {
  const { img, title, author, callback, index } = props;

  const handleClick = (e) => {
    alert(`CLICKED \n ${title}`);
  };
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
      <button
        type="button"
        onClick={handleClick}
        style={{ backgroundColor: "#69a1fa" }}
      >
        Click me
      </button>
      <p className="number">{index + 1}</p>
    </article>
  );
};
export default Book;
