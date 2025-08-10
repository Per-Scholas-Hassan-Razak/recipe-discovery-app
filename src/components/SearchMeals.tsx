import { Box, TextField } from "@mui/material"

const SearchMeals = () => {
    return (
           <Box
      component="form"
      sx={{ '& > :not(style)': { ml:2, width: '60ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search meals" variant="outlined" />
    </Box>
    )
}

export default SearchMeals