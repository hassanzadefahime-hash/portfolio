import { Box } from "@mui/material";
const TabPanel = (props) => {
    const { index, value, children, ...other } = props;
    return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{height:"100vh"}}>
          {children}
        </Box>
      )}
    </div>
  );
  };

  export default TabPanel;