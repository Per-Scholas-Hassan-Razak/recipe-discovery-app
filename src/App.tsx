import { useEffect, useState } from "react";

function App() {

  const [categories,setCategories] = useState([])

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (!response.ok) {
        throw new Error("API End point ");
      }
      const data = await response.json();
      setCategories(data.categories)
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
    } finally {
      console.log("in the finally");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return <></>;
}

export default App;
