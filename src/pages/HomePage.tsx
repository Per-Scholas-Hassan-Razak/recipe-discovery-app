import { Box } from "@mui/material";
import MealCategory from "../components/MealCategory";
import MealList from "../components/MealList";
import SearchMeals from "../components/SearchMeals";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          marginTop:4, 
          alignItems:'center',
          width:'100%', 
          justifyContent:'space-between'
        }}
      >
        <MealCategory />
        <SearchMeals />
      </Box>
      <MealList />
    </>
  );
};

export default HomePage;
