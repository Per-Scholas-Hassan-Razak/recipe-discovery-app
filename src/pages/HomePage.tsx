import { Box } from "@mui/material";
import MealCategory from "../components/MealCategory";
import MealList from "../components/MealList";

const HomePage = () => {
  return (
    <><Box sx={{
      display: 'flex'
    }}>
      <MealCategory />
    </Box><MealList /></>
  );
};

export default HomePage;
