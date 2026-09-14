import { Grid, useTheme } from "@mui/material";

const SliderProvider = ({ children }) => {
  const theme = useTheme();
  return (
    <Grid
      size={{ xs: 0, sm: 0, md: 3, lg: 2, xl: 2 }}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#151515" : "#ffffff",
        height: "100vh",
        overflowX: "hidden",
        overflowY: "auto",
        boxShadow:
          theme.palette.mode === "dark"
            ? "5px 0 8px 2px #000000"
            : "5px 0 8px 1px #b0b0b0",
        zIndex: "10",
      }}
    >
      {children}
    </Grid>
  );
};
export default SliderProvider;
