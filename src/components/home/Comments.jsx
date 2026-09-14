import {
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";

import { FormatQuoteOutlined } from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Lottie from "lottie-react";

import personpic from "../../assets/images/avatar.png";
import comment from "../../data/comment.json";

const Comments = () => {
  const theme = useTheme();

  const isDark = theme.palette.mode === "dark";

  const comments = [
    {
      name: "کاربر ناشناس",
      job: "برنامه نویس",
      text: "روند کار حرفه‌ای و قابل اعتماد بود. ارتباط شفاف، تحویل به‌موقع و خروجی با کیفیت باعث شد برای پروژه‌های بعدی هم بدون تردید دوباره همکاری کنم.",
    },
    {
      name: "کاربر ناشناس",
      job: "برنامه نویس",
      text: "خیلی تمیز و حرفه‌ای انجام شد. هم ظاهر سایت خوب بود هم مسیر کاربر برای ثبت‌نام روان و ساده طراحی شده بود. پیشنهاد می‌کنم.",
    },
    {
      name: "کاربر ناشناس",
      job: "برنامه نویس",
      text: "طراحی بسیار مرتب و حرفه‌ای بود و جزئیات رابط کاربری با دقت خوبی اجرا شده بود.",
    },
    {
      name: "کاربر ناشناس",
      job: "طراح سایت",
      text: "تجربه همکاری بسیار خوبی بود. ارتباط سریع و خروجی نهایی دقیقاً مطابق چیزی بود که انتظار داشتم.",
    },
  ];

  return (
    <Card
      sx={{
        position: "relative",
        height: "100vh",
        minHeight: "600px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        overflow: "hidden",

        background: isDark ? "#0f0f0f" : "#fff",

        boxShadow: "none",
      }}
    >
      {/* Comments */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          width: "90%",
          height: "90%",

          px: {
            xs: 0,
            sm: 1,
          },

          "& .swiper-pagination": {
            bottom: {
              xs: "0px",
              md: "0px",
            },
            zIndex: 10,
          },

          "& .swiper-pagination-bullet": {
            backgroundColor: "gray",
            opacity: 0.6,
          },

          "& .swiper-pagination-bullet-active": {
            backgroundColor: "#F54927",
            opacity: 1,
          },
        }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={8}
          dir="rtl"
          direction="horizontal"
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          style={{
            width: "100%",
            height: "75%",
            paddingBottom: "30px",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 12,
            },

            1024: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
          }}
        >
          {comments.map((commentItem, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
              }}
            >
              {/* Outer gradient card */}
              <Box
                sx={{
                  display:"flex",
                  alignItems: {
                    xs: "center",
                    md: index % 2 === 0 ? "flex-start" : "flex-end",
                  },

                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Card
                  sx={{
                    display: "flex",

                    width: "95%",

                    borderRadius: "16px",

                    p: "2px",

                    background: isDark
                      ? "linear-gradient(150deg, rgba(255, 122, 33, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(237, 152, 83, 1) 100%)"
                      : "linear-gradient(144deg,rgba(255, 154, 54, 1) 0%, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 60%, rgba(255, 154, 54, 1) 100%)",
                    boxShadow: "none",
                  }}
                >
                  {/* Inner card */}
                  <Card
                    sx={{
                      width: "100%",

                      borderRadius: "14px",

                      backgroundColor: isDark ? "#0e0e0e" : "#fff",

                      boxShadow: isDark ? "2px 2px 8px 8px #0000006d" : "none",
                    }}
                  >
                    <CardContent
                      sx={{
                        p: {
                          xs: 2,
                          sm: 2.5,
                        },
                      }}
                    >
                      {/* User info */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",

                          direction: "ltr",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            src={personpic}
                            alt={commentItem.name}
                            sx={{
                              width: {
                                xs: 55,
                                sm: 65,
                              },

                              height: {
                                xs: 55,
                                sm: 65,
                              },

                              mr: 2,

                              border: "1px solid #fc5315",
                            }}
                          />

                          <Box>
                            <Typography
                              variant="body1"
                              textAlign="left"
                              fontWeight="bold"
                            >
                              {commentItem.name}
                            </Typography>

                            <Typography
                              variant="body2"
                              textAlign="left"
                              mt={0.4}
                              color="text.secondary"
                            >
                              {commentItem.job}
                            </Typography>
                          </Box>
                        </Box>

                        <FormatQuoteOutlined
                          fontSize="medium"
                          sx={{
                            color: "#FF4B00",
                          }}
                        />
                      </Box>

                      {/* Comment */}
                      <Typography variant="body2" lineHeight={2} mt={2}>
                        {commentItem.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Card>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </CardContent>

      {/* Lottie */}
      <Box
        sx={{
          position: "absolute",

          bottom: 0,
          left: 0,

          width: "100%",

          height: {
            xs: "15%",
            sm: "17%",
            md: "20%",
          },

          overflow: "hidden",

          display: "flex",
          justifyContent: "center",
          alignItems: "end",

          zIndex: 1,

          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={comment}
          loop
          style={{
            height: "75%",
            width: "auto",
          }}
        />
      </Box>
    </Card>
  );
};

export default Comments;
