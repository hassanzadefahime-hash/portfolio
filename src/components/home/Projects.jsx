import {
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
import laptop from "../../assets/images/laptop.png";

const Cources = () => {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const courses = [
    {
      title: "پورتفولیو",
      image: laptop,
    },
    {
      title: "پورتفولیو",
      image: laptop,
    },
    {
      title: "پورتفولیو",
      image: laptop,
    },
    {
      title: "پورتفولیو",
      image: laptop,
    },
    {
      title: "پورتفولیو",
      image: laptop,
    },
    {
      title: "پورتفولیو",
      image: laptop,
    },
  ];

  return (
    <Card
      sx={{
        minHeight: "100vh",
        background: isDark ? "#0f0f0f" : "#fff",
        boxShadow: "none",
        direction:"ltr"
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
              lg: 3,
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
                    objectFit: "cover",
                  }}
                />

                <CardContent>
                  <Typography
                    textAlign="left"
                    variant="body2"
                    fontWeight="bold"
                  >
                    {course.title}
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
                  <Typography
                    component="span"
                    variant="body2"
                    fontSize="16px"
                  >
                    مشاهده
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