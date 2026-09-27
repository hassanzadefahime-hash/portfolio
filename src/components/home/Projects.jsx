import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import { WestOutlined } from "@mui/icons-material";
import portfolio from "../../assets/images/portfolio.webp";
import shop from "../../assets/images/shop.webp";
import asmine from "../../assets/images/asmine.webp"
import contact from "../../assets/images/contacts.webp"
import weblog from "../../assets/images/weblog.webp"
const Cources = () => {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const courses = [
    {
      title: "پورتفولیو شخصی",
      image: portfolio,
      caption: "وبسایت شخصی برای معرفی مهارت‌ها،... باطراحی مدرن و مینیمال",
      tag: "وبسایت",
    },
    {
      title: "فروشگاه لوازم جانبی موبایل",
      image: shop,
      caption:
        "یک فروشگاه اینترنتی مدرن برای خرید قاب، گلس و لوازم جانبی موبایل با طراحی رسپانسیو و تجربه کاری عالی",
      tag: "فروشگاهی",
    },
    {
      title: "پورتفولیو شخصی",
      image: asmine,
      caption:
      "وبسایت شخصی برای معرفی مهارت‌ها،... باطراحی مدرن و مینیمال",
      tag:"وبسایت"
    },
    {
      title: "اپلیکیشن مدیریت مخاطبین",
      image: contact,
      caption:"یک اپلیکیشن ساده و کاربردی برای ثبت مخاطبین با قابلیت جستجو",
      tag:"ابزار"
    },
    {
      title: "اپلیکیشن ساده",
      image: weblog,
      caption:"یک اپلیکیشن ساده و کاربردی برای ثبت و مدیریت رمان ها با قابلیت جستجو و دسته‌بندی",
      tag:"وبلاگ"
    },

  ];

  return (
    <Card
      sx={{
        minHeight: "100vh",
        background: isDark ? "#0f0f0f" : "#fff",
        boxShadow: "none",
        direction: "ltr",
      }}
    >
      <Grid
        container
        sx={{
          mx: 3,
          my: 6,
        }}
      >
        {courses.map((course, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 4,
            }}
            sx={{
              px: 1,
              direction: "ltr",
            }}
          >
            <Card
              sx={{
                mb: 3,
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                boxShadow: isDark
                  ? "0px 0px 8px 4px #000"
                  : "0px 0px 8px 4px #9090906d",

                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "translateY(-5px)",

                  boxShadow: isDark
                    ? "0px 8px 20px rgba(0, 0, 0, 0.5)"
                    : "0px 8px 20px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {/* Image + title */}
              <CardActionArea>
                <Box
                  sx={{
                    position: "absolute",
                    right: 10,
                    top: 10,
                    paddingX: 1.2,
                    height: 28,
                    fontWeight: "bold",
                    display: "felx",
                    alignItems: "center",
                    background: `linear-gradient(135deg,rgba(255, 140, 0, 0.8),rgba(255, 94, 0, 0.6))`,
                    backdropFilter: "blur(20px)",

                    border: "1px solid rgba(255, 165, 0, 0.5)",
                    borderRadius: 4,

                    boxShadow: "0 0 30px rgba(255, 140, 0, 0.2)",
                  }}
                >
                  <Typography variant="caption">{course.tag}</Typography>
                </Box>
                <CardMedia
                  component="img"
                  image={course.image}
                  alt={course.title}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 200,
                      sm: 180,
                      md: 190,
                    },
                    objectFit: "fill",
                    top: 0,
                  }}
                />

                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    textAlign="left"
                    variant="body2"
                    fontWeight="bold"
                  >
                    {course.title}
                  </Typography>

                  <Typography
                    textAlign="left"
                    variant="caption"
                    fontWeight="bold"
                    marginTop={1}
                    sx={{ color: isDark ? "gray" : "black" }}
                  >
                    {course.caption}
                  </Typography>
                </CardContent>
              </CardActionArea>

              {/* Button */}
              <CardActions
                sx={{
                  justifyContent: "center",
                  pb: 2,
                }}
              >
                <Button
                  sx={{
                    background:
                      "linear-gradient(0deg, rgba(199, 61, 30, 1) 0%, rgba(235, 82, 52, 1) 55%, rgba(247, 123, 35, 1) 100%)",

                    display: "flex",
                    alignItems: "center",
                    gap: 1,

                    py: 0.5,
                    px: 2,

                    borderRadius: "20px",

                    color: "#fff",

                    boxShadow: isDark
                      ? "0 0 4px 1px #000"
                      : "0 2px 6px rgba(0, 0, 0, 0.15)",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "scale(1.05)",

                      background:
                        "linear-gradient(0deg, rgba(199, 61, 30, 1) 0%, rgba(235, 82, 52, 1) 55%, rgba(247, 123, 35, 1) 100%)",
                    },
                  }}
                >
                  <Typography component="span" variant="body2" fontSize="16px">
                    مشاهده پروژه
                  </Typography>

                  <WestOutlined fontSize="10px" />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Cources;
