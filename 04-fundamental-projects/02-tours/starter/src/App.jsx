import { useState } from "react";
import { useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const data = await resp.json();
      setTours(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRemove = (id) => {
    setTours(tours.filter((t) => t.id !== id));
  };

  if (isLoading) return <Loading />;

  if (isError) return <div>Error</div>;

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchData()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <h2>Our Tours</h2>
      <Tours tours={tours} onRemove={onRemove} />
    </main>
  );
};
export default App;

export const Tours = ({ tours, onRemove }) => {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Tour {...tour} key={tour.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export const Tour = ({ id, name, info, image, price, onRemove }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="single-tour">
      <img src={image} alt={name} className="img" />
      <div className="tour-price">{price}</div>
      <div className="tour-info">
        <h5>{name}</h5>

        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>

        <button
          type="button"
          className="btn delete-btn"
          onClick={() => onRemove(id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export const Loading = () => {
  return <div>...Loading</div>;
};
