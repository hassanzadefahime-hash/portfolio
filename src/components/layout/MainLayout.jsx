import { useEffect, useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import {
  Box,
  Drawer,
  Fab,
  Grid,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { MenuRounded } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";

import TabPanel from "../common/TabPanel";
import Sidebar from "./Sidbar";

import Home from "../home/Home";
import About from "../home/About";
import Cources from "../home/Projects";
import Comments from "../home/Comments";
import Contact from "../home/Contact";

import SliderProvider from "./SliderProvider";
import { darkTheme, lightTheme } from "../../theme/theme";

const MainLayout = ({ children, mode, handleMode }) => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // -----------------------------
  // RTL Cache
  // -----------------------------
  const rtlCache = useMemo(
    () =>
      createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      }),
    []
  );

  // -----------------------------
  // Theme
  // -----------------------------
  const theme = mode === "dark" ? darkTheme : lightTheme;

  const currentTheme = useTheme();
  const isMdUp = useMediaQuery(currentTheme.breakpoints.up("md"));

  // -----------------------------
  // Tab Change
  // -----------------------------
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const handleSwipeChange = (newValue) => {
    setValue(newValue);
  };

  // -----------------------------
  // Close drawer on desktop
  // -----------------------------
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>وبسایت شخصی</title>
            <meta
              name="description"
              content="وبسایت شخصی و نمونه کارهای برنامه نویسی"
            />
          </Helmet>

          <Grid
            container
            sx={{
              height: "100vh",
              width: "100%",
              overflow: "hidden",
              direction: "ltr",
            }}
          >
            <SliderProvider>
              {/* =========================
                  Mobile Menu Button
              ========================== */}
              <Box
                sx={{
                  position: "fixed",
                  top: 12,
                  left: 12,
                  zIndex: 1300,
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                  },
                }}
              >
                <Fab
                  size="small"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="باز کردن منو"
                  sx={{
                    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                  }}
                >
                  <MenuRounded />
                </Fab>
              </Box>

              {/* =========================
                  Desktop Sidebar
              ========================== */}
              <Box
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                <Sidebar
                  handleChange={handleChange}
                  value={value}
                  setDrawerOpen={setDrawerOpen}
                  handleMode={handleMode}
                />
              </Box>

              {/* =========================
                  Mobile Drawer
              ========================== */}
              <Drawer
                anchor="left"
                open={drawerOpen}
                variant="temporary"
                onClose={() => setDrawerOpen(false)}
                ModalProps={{
                  keepMounted: true,
                }}
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                  },

                  "& .MuiDrawer-paper": {
                    width: {
                      xs: "280px",
                      sm: "300px",
                    },
                    boxSizing: "border-box",
                  },
                }}
              >
                <Sidebar
                  handleChange={handleChange}
                  value={value}
                  setDrawerOpen={setDrawerOpen}
                  handleMode={handleMode}
                />
              </Drawer>
            </SliderProvider>

            {/* =========================
                Main Content
            ========================== */}
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 9,
                lg: 10,
                xl: 10,
              }}
              sx={{
                height: "100vh",
                minWidth: 0,
                overflow: "hidden",
                backgroundColor:
                  mode === "dark" ? "#0f0f0f" : "#f5f5f5",
              }}
            >
              <SwipeableViews
                axis="x-reverse"
                index={value}
                onChangeIndex={handleSwipeChange}
                dir="rtl"
                enableMouseEvents
                style={{
                  height: "100%",
                }}
                containerStyle={{
                  height: "100%",
                }}
              >
                {/* Home */}
                <TabPanel value={value} index={0}>
                  <Home />
                </TabPanel>

                {/* About */}
                <TabPanel value={value} index={1}>
                  <About />
                </TabPanel>

                {/* Courses / Projects */}
                <TabPanel value={value} index={2}>
                  <Cources />
                </TabPanel>

                {/* Contact */}
                <TabPanel value={value} index={3}>
                  <Contact />
                </TabPanel>

                {/* Comments */}
                <TabPanel value={value} index={4}>
                  <Comments />
                </TabPanel>
              </SwipeableViews>
            </Grid>
          </Grid>

          {/* Additional children */}
          {children}
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;