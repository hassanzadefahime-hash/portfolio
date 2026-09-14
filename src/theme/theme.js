
import { createTheme } from "@mui/material";
export const darkTheme = createTheme({
  direction: "rtl",
  
  palette: {
    mode: "dark",
    primary: {
      main: "#CAD5E2",
    },
    secondary: {
      main: "#020618",
    },
    
    green: {
      main: "#6eb148",
    },
    orange:{
      main:"#FF7518"
    },

    text: {
      main: "#F5F5F5",
    },
    
   
    blue:{
      main:"#49aa34"
    }
  },

  typography: {
    fontFamily: ["vazir"],
    fontSize: 16,
  },
});
export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#CAD5E2",
    },
    secondary: {
      main: "#020618",
    },

    orange:{
      main:"#FF7518"
    },
    text: {
      main: "#000000",
    },
    blue:{
      main:"#49aa34"
    }
  },

  typography: {
    fontFamily: ["vazir"],
    fontSize: 16,
  },
});
