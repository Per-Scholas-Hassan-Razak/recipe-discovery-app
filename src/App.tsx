import { Container } from "@mui/material";
import MealCategory from "./components/MealCategory";
import MealList from "./components/MealList";

function App() {



  return (
    <>
    <Container maxWidth='lg'>

      <MealCategory />
      <MealList />
      
    </Container>
    </>
  );
}

export default App;
