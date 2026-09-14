import {
  EmailRounded,
  Face6Rounded,
  SubjectRounded,
} from "@mui/icons-material";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";

import { useFormik } from "formik";
import Lottie from "lottie-react";

import { contactValidationSchema } from "../../utils/contactValidationSchema";
import comment from "../../data/phone.json";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: contactValidationSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 20,

      "&:hover fieldset": {
        borderColor: "#994c18bf",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#ff6a00",
      },
    },
  };

  return (
    <Card
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",

        background: isDark ? "#0f0f0f" : "#fff",

        boxShadow: "none",
      }}
    >
      {/* Form */}
      <CardContent
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          justifyContent: "center",

          pt: {
            xs: 5,
            sm: 8,
            md: "16vh",
          },

          px: {
            xs: 2,
            sm: 3,
          },
        }}
      >
        <Card
          sx={{
            width: "100%",
            maxWidth: "35rem",

            p: {
              xs: 1,
              sm: 1.5,
            },

            borderRadius: "16px",

            backgroundColor: isDark
              ? "rgb(6, 6, 6)"
              : "#fff",

            boxShadow: isDark
              ? "2px 2px 8px 8px #0000006d"
              : "1px 1px 4px 4px #9f9f9f6d",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{
              direction: "rtl",
            }}
          >
            <CardContent>
              <Grid container spacing={2}>

                {/* Fullname */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    size="small"
                    label="نام و نام خانوادگی"
                    name="fullname"
                    variant="outlined"
                    color="warning"
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={inputStyle}
                    helperText={
                      formik.touched.fullname
                        ? formik.errors.fullname
                        : null
                    }
                    error={Boolean(
                      formik.touched.fullname &&
                        formik.errors.fullname
                    )}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Face6Rounded
                            sx={{ color: "#666" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Email */}
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField
                    fullWidth
                    size="small"
                    label="ایمیل"
                    name="email"
                    variant="outlined"
                    color="warning"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={inputStyle}
                    helperText={
                      formik.touched.email
                        ? formik.errors.email
                        : null
                    }
                    error={Boolean(
                      formik.touched.email &&
                        formik.errors.email
                    )}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailRounded
                            sx={{ color: "#666" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Subject */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    size="small"
                    label="موضوع پیام"
                    name="subject"
                    variant="outlined"
                    color="warning"
                    value={formik.values.subject}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={inputStyle}
                    helperText={
                      formik.touched.subject
                        ? formik.errors.subject
                        : null
                    }
                    error={Boolean(
                      formik.touched.subject &&
                        formik.errors.subject
                    )}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SubjectRounded
                            sx={{ color: "#666" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Message */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    size="small"
                    label="متن پیام"
                    name="message"
                    variant="outlined"
                    color="warning"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,

                        "&:hover fieldset": {
                          borderColor: "#994c18bf",
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: "#ff6a00",
                        },
                      },
                    }}
                    helperText={
                      formik.touched.message
                        ? formik.errors.message
                        : null
                    }
                    error={Boolean(
                      formik.touched.message &&
                        formik.errors.message
                    )}
                  />
                </Grid>

              </Grid>
            </CardContent>

            {/* Submit */}
            <CardActions
              sx={{
                justifyContent: "center",
                pb: 2,
              }}
            >
              <Button
                type="submit"
                variant="contained"
                sx={{
                  py: 1,
                  px: 5,

                  color: "#fff",

                  fontWeight: "bold",
                  fontSize: "15px",

                  textTransform: "none",

                  borderRadius: 20,

                  background:
                    "linear-gradient(0deg, rgba(168, 31, 0, 1) 0%, rgba(255, 42, 0, 1) 55%, rgba(255, 106, 0, 1) 100%)",

                  boxShadow: isDark
                    ? "0px 5px 8px 2px #0c0c0c"
                    : "0px 3px 4px 2px #363636",

                  transition: "all 0.3s ease",

                  "&:hover": {
                    transform: "translateY(-3px)",

                    background:
                      "linear-gradient(0deg, rgba(168, 31, 0, 1) 0%, rgba(255, 42, 0, 1) 55%, rgba(255, 106, 0, 1) 100%)",
                  },
                }}
              >
                ارسال
              </Button>
            </CardActions>
          </form>
        </Card>
      </CardContent>

      {/* Lottie */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,

          width: "100%",

          height: {
            xs: "20%",
            sm: "25%",
            md: "30%",
          },

          overflow: "hidden",

          zIndex: 1,

          pointerEvents: "none",
        }}
      >
        <Lottie
          animationData={comment}
          loop
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
    </Card>
  );
};

export default Contact;