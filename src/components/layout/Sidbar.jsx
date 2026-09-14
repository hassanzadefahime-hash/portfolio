import {
  
  TerminalRounded,
  ConnectWithoutContact,
  HomeRounded,
  Face4Rounded,
  MessageRounded,
  CopyrightTwoTone,
  
} from "@mui/icons-material";
import { Box, Tab, Tabs, useTheme } from "@mui/material";
import { Avatar, Typography } from "@mui/material";


import ThemeActionButton from "../common/ThemeActionButton";
const Sidebar = ({ handleChange, value, setDrawerOpen, handleMode }) => {
  const tabPanel = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };
  const handleClose = () => {
    setDrawerOpen(false);
  };
  const theme = useTheme();

  return (
    <Box sx={{ height:'100%'  , display:"flex " , flexDirection:"column" ,  justifyContent:"space-between" , backgroundColor: theme.palette.mode === "dark" ? "#151515" : "#ffffff",
  }}>
      <Box sx={{display:"flex " , flexDirection:"column" , gap:2}}>
      <Box

        sx={{

          display: "flex",
          "::-webkit-scrollbar-button": {
            display: "none",
          },
          flexDirection: "column",
          alignItems: "center",
          pt:2
        }}
      >
        <ThemeActionButton handleMode={handleMode} />

        <Avatar
          alt="fa"
          src={require("../../assets/images/avatarmain.png")}
          variant="square"
          sx={{
            height: "150px",
            width: "150px",
            objectFit: "contain",
            display: { xs: "none", sm: "none", md: "block" },
          }}
        />

        <Typography
          color="rgb(255, 55, 0)"

        >
          کاربر وبسایت{" "}
        </Typography>
        <Typography
          color="rgb(255, 55, 0)"
          sx={{
            marginTop: 1,
            fontSize: "14px",


          }}
        >
          
          برنامه نویس
        </Typography>
      </Box>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        scrollButtons="auto"
        onChange={handleChange}
        value={value}
        aria-label="Vertical tabs example"
        indicatorColor="none"
        sx={{
          paddingY: "1rem",
          "& .Mui-selected": {
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(0deg,rgba(168, 31, 0, 1) 0%, rgba(255, 42, 0, 1) 55%, rgba(255, 106, 0, 1) 100%)"
                : "linear-gradient(0deg,rgba(168, 31, 0, 1) 0%, rgba(255, 42, 0, 1) 55%, rgba(255, 106, 0, 1) 100%)",
            // theme.palette.mode === "dark"
            //   ? "linear-gradient(0deg,rgb(12, 65, 0) 0%, rgb(22, 144, 1) 28%, rgb(29, 196, 0) 50%, rgb(38, 255, 0)100%)"
            //   : "linear-gradient(0deg,rgb(12, 65, 0) 0%, rgb(22, 144, 1) 28%, rgb(29, 196, 0) 50%, rgb(38, 255, 0)100%)",
            border: "none",
          },
        }}
        textColor={theme.palette.mode === "dark" ? "primary" : "primary"}
      >
        <Tab
          {...tabPanel(0)}
          label={"خانه"}
          icon={<HomeRounded sx={{ fontSize: "1.3em" }} />}
          iconPosition="start"
          onClick={handleClose}
          sx={{
            fontSize: "1rem",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(0deg,rgba(13, 13, 13, 1) 20%, rgba(36, 36, 36, 1) 100%)"
                : "linear-gradient(0deg,rgb(234, 234, 234) 0%, rgb(255, 255, 255) 30% , rgb(255, 255, 255) 100%)",
            color: theme.palette.mode === "dark" ? "#bcbcbe" : "#161616",
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            marginRight: 1.5,
            borderBottom:
              theme.palette.mode === "dark"
                ? "1px solid #191919"
                : " 2px solid #f4f4f4",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 5px  7px 2px #000 "
                : "0px 3px 5px #8f8f8f",
            marginY: 1,
            minHeight: "2.8rem",
            borderTop:
              theme.palette.mode === "dark"
                ? "1px solid #000000"
                : "1px solid #e1e1e1",

            "&.Mui-selected": {
              color: "whitesmoke",
            },
          }}
        ></Tab>
        <Tab
          {...tabPanel(1)}
          label={"درباره من"}
          icon={<Face4Rounded sx={{ fontSize: "1.3em" }} />}
          iconPosition="start"
          onClick={handleClose}
          sx={{
            fontSize: "1rem",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(0deg,rgba(13, 13, 13, 1) 20%, rgba(36, 36, 36, 1) 100%)"
                : "linear-gradient(0deg,rgb(234, 234, 234) 0%, rgb(255, 255, 255) 30% , rgb(255, 255, 255) 100%)",
            color: theme.palette.mode === "dark" ? "#bcbcbe" : "#161616",
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            marginRight: 1.5,
            borderBottom:
              theme.palette.mode === "dark"
                ? "1px solid #191919"
                : " 2px solid #f4f4f4",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 5px  7px 2px #000 "
                : "0px 3px 5px #8f8f8f",
            marginY: 1,
            minHeight: "2.8rem",
            borderTop:
              theme.palette.mode === "dark"
                ? "1px solid #000000"
                : "1px solid #e1e1e1",

            "&.Mui-selected": {
              color: "whitesmoke",
            },
          }}
        ></Tab>
        
        <Tab
          {...tabPanel(2)}
          label={"نمونه کارها"}
          icon={<TerminalRounded sx={{ fontSize: "1.3em" }} />}
          iconPosition="start"
          onClick={handleClose}
          sx={{
            fontSize: "1rem",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(0deg,rgba(13, 13, 13, 1) 20%, rgba(36, 36, 36, 1) 100%)"
                : "linear-gradient(0deg,rgb(234, 234, 234) 0%, rgb(255, 255, 255) 30% , rgb(255, 255, 255) 100%)",
            color: theme.palette.mode === "dark" ? "#bcbcbe" : "#161616",
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            marginRight: 1.5,
            borderBottom:
              theme.palette.mode === "dark"
                ? "1px solid #191919"
                : " 2px solid #f4f4f4",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 5px  7px 2px #000 "
                : "0px 3px 5px #8f8f8f",
            marginY: 1,
            minHeight: "2.8rem",
            borderTop:
              theme.palette.mode === "dark"
                ? "1px solid #000000"
                : "1px solid #e1e1e1",

            "&.Mui-selected": {
              color: "whitesmoke",
            },
          }}
        ></Tab>
        <Tab
          {...tabPanel(3)}
          label={"ارتباط با من"}
          icon={<ConnectWithoutContact sx={{ fontSize: "1.3em" }} />}
          iconPosition="start"
          onClick={handleClose}
          sx={{
            fontSize: "1rem",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(0deg,rgba(13, 13, 13, 1) 20%, rgba(36, 36, 36, 1) 100%)"
                : "linear-gradient(0deg,rgb(234, 234, 234) 0%, rgb(255, 255, 255) 30% , rgb(255, 255, 255) 100%)",
            color: theme.palette.mode === "dark" ? "#bcbcbe" : "#161616",
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            marginRight: 1.5,
            borderBottom:
              theme.palette.mode === "dark"
                ? "1px solid #191919"
                : " 2px solid #f4f4f4",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 5px  7px 2px #000 "
                : "0px 3px 5px #8f8f8f",
            marginY: 1,
            minHeight: "2.8rem",
            borderTop:
              theme.palette.mode === "dark"
                ? "1px solid #000000"
                : "1px solid #e1e1e1",

            "&.Mui-selected": {
              color: "whitesmoke",
            },
          }}
        ></Tab>
        <Tab
          {...tabPanel(4)}
          label={"نظرات دانشجویان"}
          icon={<MessageRounded sx={{ fontSize: "1.3em" }} />}
          iconPosition="start"
          onClick={handleClose}
          sx={{
            fontSize: "1rem",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(0deg,rgba(13, 13, 13, 1) 20%, rgba(36, 36, 36, 1) 100%)"
                : "linear-gradient(0deg,rgb(234, 234, 234) 0%, rgb(255, 255, 255) 30% , rgb(255, 255, 255) 100%)",
            color: theme.palette.mode === "dark" ? "#bcbcbe" : "#161616",
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            marginRight: 1.5,
            borderBottom:
              theme.palette.mode === "dark"
                ? "1px solid #191919"
                : " 2px solid #f4f4f4",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 5px  7px 2px #000 "
                : "0px 3px 5px #8f8f8f",
            marginY: 1,
            minHeight: "2.8rem",
            borderTop:
              theme.palette.mode === "dark"
                ? "1px solid #000000"
                : "1px solid #e1e1e1",

            "&.Mui-selected": {
              color: "whitesmoke",
            },
          }}
        ></Tab>
      </Tabs>
      </Box>
      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          py: 2,
          alignItems:"center",
          
          
          
          
          "&.Mui-selected": {
            color: "whitesmoke",
          },
        }}
      >
        
        

        <Typography
          variant="caption"
          sx={{
            // textShadow: " 0px 0px 2px  #000000",
            color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
            
          }}
        >
          طراحی شده با 🧡
        </Typography>
        <Typography
          variant="caption"
          sx={{
            // textShadow: " 0px 0px 2px  #000000",
            color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
          }}
        >
          کپی رایت ۱۴۰۴{" "}
          <CopyrightTwoTone sx={{ verticalAlign: "text-top", height: 16 }} />
        </Typography>
      </Box>
    </Box>
  );
};
export default Sidebar;
