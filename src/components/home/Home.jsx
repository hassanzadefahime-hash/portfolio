import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

import {
  GitHub,
  Instagram,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

import { network } from "../../constanse/particles";

const Home = () => {
  const [init, setInit] = useState(false);
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const colors = {
    background: isDark ? "#000000" : "#ffffff",
    heading: isDark ? "#E83001" : "#FF3C00",
    text: isDark ? "#D1D5DC" : "#030712",
    description: isDark ? "#9CA3AF" : "#575757",
  };

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: <GitHub />,
    },
    {
      label: "Telegram",
      href: "https://telegram.org/",
      icon: <Telegram />,
    },
    {
      label: "Instagram",
      href: "https://instagram.com/",
      icon: <Instagram />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/",
      icon: <WhatsApp />,
    },
  ];

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: colors.background,
      }}
    >
      {/* Particles */}
      {init && (
        <Particles
          id="tsparticles"
          options={network}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        />
      )}

      {/* Background overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: isDark
            ? "linear-gradient(0deg, rgba(168, 31, 0, 0) 0%, rgb(9, 9, 9) 40%)"
            : "linear-gradient(0deg, rgba(168, 31, 0, 0) 0%, rgb(249, 249, 249) 45%)",
        }}
      />

      {/* Hero content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          px: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 760,
          }}
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Typography
              component="h1"
              sx={{
                color: colors.heading,
                fontWeight: 700,
                fontSize: {
                  xs: "2rem",
                  sm: "2.7rem",
                  md: "3.5rem",
                },
                mb: 1,
              }}
            >
              کاربر وبسایت
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{
                color: colors.text,
                fontWeight: 500,
                mb: 2,
                fontSize: {
                  xs: "1rem",
                  sm: "1.15rem",
                  md: "1.3rem",
                },
              }}
            >
              توسعه دهنده وب | علاقه‌مند به طراحی رابط کاربری
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: colors.description,
                lineHeight: 2,
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                },
              }}
            >
              ساخت وبسایت‌های مدرن، سریع و رسپانسیو با استفاده از
              تکنولوژی‌های روز دنیا
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: colors.description,
                lineHeight: 2,
                fontSize: {
                  xs: "0.9rem",
                  sm: "1rem",
                },
              }}
            >
              ایده‌پردازی، طراحی و کدنویسی حرفه‌ای
            </Typography>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease: "easeOut",
            }}
          >
            <Typography
              sx={{
                mt: 2,
                mb: 3,
                color: isDark ? "#B8A69C" : "#6E5246",
                fontWeight: 500,
              }}
            >
              برنامه‌نویس
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                mb: 3,
              }}
            >
              <Button
                variant="button"
                href="#projects"
                sx={{
                  color:"white",
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  background: "linear-gradient(153deg,rgba(255, 121, 54, 1) 0%, rgba(176, 59, 0, 1) 78%)",
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "0 8px 25px rgba(232, 48, 1, 0.25)",
                  },
                }}
              >
                مشاهده نمونه کارها
              </Button>

              <Button
                variant="button"
                href="#contact"
                sx={{
                  px: 3,
                  py: 1,
                  borderRadius: 3,
                  color: colors.text,
                  border: isDark ?"#FF7936 1px solid" : "#FF7936 1px solid",
                  
                  "&:hover": {
                    borderColor: colors.heading,
                    color: colors.heading,
                    backgroundColor: "transparent",
                  },
                }}
              >
                ارتباط با من
              </Button>
            </Box>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    width: 40,
                    height: 40,
                    color: colors.text,
                    transition: "all 0.25s ease",

                    "&:hover": {
                      color: colors.heading,
                      backgroundColor: isDark
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(0,0,0,0.06)",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;