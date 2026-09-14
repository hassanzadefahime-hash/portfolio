import React from "react";
import {
  NightlightOutlined,
  WbSunnyOutlined,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";


// -----------------------------------------------------
// کامپوننت سوئیچ شخصی‌سازی‌شده برای تغییر حالت روشن/تاریک
// -----------------------------------------------------
const ThemeActionButton = ({ handleMode }) => {
  const theme = useTheme();

  // ================== استایل کلی سوئیچ ==================
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    // 💠 اندازه کلی سوئیچ (Track بخش ثابت)
    width: 62,     // عرض بیشتر
    height: 39,    // ارتفاع بیشتر
    padding: 8,    // فاصله داخلی برای هماهنگی با thumb

    // 💡 بخش پایه سوئیچ (قسمتی که thumb روی اون حرکت می‌کنه)
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,

      // موقعیت اولیه دکمه در حالت روشن
      transform: "translateX(7px) translateY(7px)",
      transition: "transform 0.3s cubic-bezier(.34,1.56,.64,1)",

      // حالت فعال (دارک مود)
      "&.Mui-checked": {
        transform: "translateX(30px) translateY(7px)",
        "& .MuiSwitch-thumb": {
          // بک‌گراند دکمه در حالت دارک مود
          backgroundColor:
            theme.palette.mode === "dark" ? "#001e3c" : "yellow",
        },
        "& + .MuiSwitch-track": {
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(0deg,rgba(50, 50, 50, 1) 20%, rgba(180, 180, 180, 1) 100%)"
              : "yellow",
          opacity: 1,
          
        },
      },
    },

    // 🌕 خود دکمه دایره‌ای (Thumb)
    "& .MuiSwitch-thumb": {
      width: 32,      // اندازه بزرگ‌تر دایره
      height: 32,
      borderRadius: "50%", // گرد بودن کامل
      display: "flex",      // برای وسط‌چینی آیکون
      alignItems: "center",
      justifyContent: "center",
      // --- بک‌گراند دکمه ---
      background:
        theme.palette.mode === "dark" ? "yellow" : "yellow", // رنگ پیش‌فرض در حالت روشن
      transition: "all 0.3s ease",
      
    
    },

    // 🌈 پس‌زمینه سوئیچ (Track)
    "& .MuiSwitch-track": {
      borderRadius: 26, // گردی گوشه‌ها
      opacity: 1,
      background:
        theme.palette.mode === "dark"
          ? "linear-gradient(90deg, #111, #444)"
          : "linear-gradient(0deg,rgba(200, 200, 200, 1) 20%, rgba(240, 240, 240, 1) 100%)",
          
    },
  }));

  // ------------------------------
  // رندر بخش گرافیکی سوئیچ و آیکون‌ها
  // ------------------------------
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" }, // فقط در نمایشگر بزرگ‌تر دیده شود
        alignItems: "center",
        justifyContent: "start",
        width: "100%",
        marginLeft:4,
        
      }}
    >
      <FormGroup>
        <FormControlLabel
          label="" // بدون متن، فقط سوئیچ
          control={
            <MaterialUISwitch
              checked={theme.palette.mode === "dark"} // کنترل وضعیت دارک
              onChange={handleMode}                    // تابع تغییر تم
              icon={
                // ☀️ آیکون خورشید در حالت روشن
                <WbSunnyOutlined
                  sx={{ fontSize: 18, background: "#f75307" , borderRadius:"50%" , p:0.2}}
                />
              }
              checkedIcon={
                // 🌙 آیکون ماه در حالت تاریک
                <NightlightOutlined
                  sx={{ fontSize: 18, background: "#f75307" , borderRadius:"50%" , p:0.2}}
                />
              }
            />
          }
        />
      </FormGroup>
    </Box>
  );
};

export default ThemeActionButton;
