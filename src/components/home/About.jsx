import {
  CodeRounded,
  EmailOutlined,
  FolderCopyOutlined,
  GitHub,
  Instagram,
  MenuBook,
  StarOutlineRounded,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import CountUp from "react-countup";

import pic from "../../assets/images/avatar.png";
import Skill from "./Skills";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // -----------------------------
  // Colors
  // -----------------------------

  const colors = {
    accent: "#FF6200",
    text: isDark ? "#D1D5DC" : "#030712",
    secondaryText: isDark ? "#9CA3AF" : "#575757",
    cardBackground: isDark
      ? "rgba(0, 0, 0, 0.2)"
      : "rgba(255, 255, 255, 0.65)",
    cardBorder: isDark
      ? "1px solid rgba(255, 255, 255, 0.08)"
      : "1px solid rgba(0, 0, 0, 0.08)",
    timelineText: isDark ? "#E8E8E8" : "#333333",
    timelineSecondary: isDark ? "#777777" : "#888888",
  };

  // -----------------------------
  // Social Links
  // -----------------------------

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

  // -----------------------------
  // Statistics
  // -----------------------------

  const statistics = [
    {
      value: 3,
      label: "سال تجربه",
      icon: <StarOutlineRounded fontSize="small" />,
    },
    {
      value: 5,
      label: "تکنولوژی",
      icon: <CodeRounded fontSize="small" />,
    },
    {
      value: 3,
      label: "پروژه انجام شده",
      icon: <FolderCopyOutlined fontSize="small" />,
    },
  ];

  // -----------------------------
  // Education
  // -----------------------------

  const education = [
    {
      title: "دیپلم-ریاضی",
      date: "۱۳۹۹-۱۳۹۹",
    },
    {
      title: "لیسانس مهندسی کامپیوتر",
      date: "۱۴۰۱",
    },
  ];

  return (
    <Card
      sx={{
        minHeight: "100vh",
        overflow: "auto",
        backgroundColor: isDark ? "#0f0f0f" : "#fff",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* =================================
            Profile Section
        ================================= */}

        <Grid
          container
          spacing={{ xs: 3, md: 2 }}
          sx={{
            my: { xs: 2, md: 4 },
          }}
        >
          {/* Profile Information */}
          <Grid
            size={{ xs: 12, md: 9 }}
            sx={{
              order: { xs: 2, md: 1 },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                alignItems: "stretch",
              }}
            >
              {/* Statistics */}
              <Grid
                size={{ xs: 12, md: 5 }}
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                <Box
                  sx={{
                    minHeight: 150,
                    px: 2,
                    py: 2,
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 1,

                    background: colors.cardBackground,
                    border: colors.cardBorder,
                    backdropFilter: "blur(12px)",
                    borderRadius: "8px",
                  }}
                >
                  {statistics.map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 1,
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          color: colors.accent,
                          fontWeight: 600,
                        }}
                      >
                        <CountUp start={0} end={item.value} duration={2} /> +
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: "text.primary",
                        }}
                      >
                        {item.label}
                      </Typography>

                      <Box
                        sx={{
                          color: colors.accent,
                          display: "flex",
                        }}
                      >
                        {item.icon}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* About Me */}
              <Grid
                size={{ xs: 12, md: 7 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  textAlign: "left",
                  gap: 1,
                }}
              >
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  فهیمه حسن زاده
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: colors.secondaryText,
                  }}
                >
                  Front-End Developer
                </Typography>

                <Box
                  sx={{
                    my: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 2,
                    }}
                  >
                    طراحی و توسعه وب سایت‌های مدرن، سریع و رسپانسیو
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      lineHeight: 2,
                    }}
                  >
                    علاقه‌مند به ساخت تجربه‌های کاربری زیبا و کاربردی
                  </Typography>
                </Box>

                {/* Email */}
                <Typography
                  variant="body2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    fontWeight: "bold",
                    direction: "ltr",
                  }}
                >
                  f.hasanzade@gmail.com
                  <EmailOutlined
                    fontSize="small"
                    sx={{
                      color: colors.accent,
                    }}
                  />
                </Typography>

                {/* Social Links */}
                <Box
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "flex-end",
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
                        width: 36,
                        height: 36,
                        color: colors.text,
                        transition: "all 0.25s ease",

                        "&:hover": {
                          color: colors.accent,
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
              </Grid>
            </Grid>
          </Grid>

          {/* Avatar */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{
              order: { xs: 1, md: 2 },
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Avatar
              src={pic}
              alt="فهیمه حسن زاده"
              sx={{
                width: {
                  xs: 120,
                  sm: 140,
                  md: 150,
                },
                height: {
                  xs: 120,
                  sm: 140,
                  md: 150,
                },
                display: {
                  xs: "block",
                  md: "block",
                },
                mt: { xs: 1, md: 0 },

                border: `2px solid ${colors.accent}`,
                boxShadow: isDark
                  ? "0 0 20px rgba(255, 98, 0, 0.15)"
                  : "0 0 15px rgba(0, 0, 0, 0.12)",
              }}
            />
          </Grid>
        </Grid>

        {/* =================================
            Skills + Education
        ================================= */}

        <Grid container spacing={1}>
          {/* Skills */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Skill />
          </Grid>

          {/* Education */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box
              sx={{
                width: "100%",

                background: colors.cardBackground,
                border: colors.cardBorder,
                backdropFilter: "blur(12px)",
                borderRadius: "8px",

                boxShadow: isDark
                  ? "0 4px 30px rgba(0, 0, 0, 0.2)"
                  : "0 4px 30px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Education Header */}
              <Typography
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  gap: 0.5,

                  textAlign: "right",
                  fontWeight: "bold",
                  py: 2,
                  px: 2,
                }}
              >
                تحصیلات
                <MenuBook
                  fontSize="small"
                  
                />
              </Typography>

              {/* Timeline */}
              <Box
                sx={{
                  width: "100%",
                  direction: "ltr",
                  pr: 2,
                  pb: 1,
                  boxSizing: "border-box",
                }}
              >
                <Timeline
                  sx={{
                    direction: "rtl",
                    p: 0,
                    m: 0,

                    "& .MuiTimelineItem-root": {
                      minHeight: "75px",

                      "&::before": {
                        display: "none",
                        flex: 0,
                        padding: 0,
                      },
                    },

                    "& .MuiTimelineSeparator-root": {
                      marginLeft: 0,
                    },
                  }}
                >
                  {education.map((item, index) => (
                    <TimelineItem key={item.title}>
                      <TimelineSeparator>
                        <TimelineDot
                          sx={{
                            width: 8,
                            height: 8,
                            m: 0,

                            background:
                              "radial-gradient(circle, rgba(255, 42, 0, 1) 0%, rgba(168, 31, 0, 1) 100%)",
                          }}
                        />

                        {index < education.length - 1 && (
                          <TimelineConnector
                            sx={{
                              background:
                                "linear-gradient(180deg, #FF2A00 0%, #A81F00 100%)",
                            }}
                          />
                        )}
                      </TimelineSeparator>

                      <TimelineContent
                        sx={{
                          textAlign: "left",
                          pb: 2,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: colors.timelineText,
                            fontWeight: 500,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="caption"
                          sx={{
                            color: colors.timelineSecondary,
                          }}
                        >
                          {item.date}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
