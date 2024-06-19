import { useState, useEffect } from "react";
import axios from "axios";

export default function Random() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data: todos } = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(todos.slice(0, 5));
    } catch (e) {
      setError("An Error occured!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <ul>
        {data?.map((item, index) => (
          <li key={item.id} style={{ marginBottom: "20px" }}>
            <p>
              Todo
              {/* {index + 1}: {item.title} */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
