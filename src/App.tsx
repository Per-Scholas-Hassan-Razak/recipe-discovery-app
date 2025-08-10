import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MealDetailPage from "./pages/MealDetailPage";
import CategoryProvider from "./providers/CategoryProvider";
import SelectedCategoryProvider from "./providers/SelectedCategoryProvider";
import { Container } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Container maxWidth="lg">
      <CategoryProvider>
        <SelectedCategoryProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/meals/:mealId" element={<MealDetailPage />} />
          </Routes>
        </SelectedCategoryProvider>
      </CategoryProvider>
    </Container>
  );
}

export default App;
