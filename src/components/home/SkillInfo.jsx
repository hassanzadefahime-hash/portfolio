import { Box, LinearProgress, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

const SkillInfo = ({ name, icon, num }) => {
  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(0);

    const timer = setInterval(() => {
      setValue((oldValue) => {
        const nextValue = oldValue + Math.random() * 10;

        if (nextValue >= num) {
          clearInterval(timer);
          return num;
        }

        return nextValue;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [num]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Skill Card */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",

          p: "6px",

          gap: 1,

          background: isDark
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(255, 255, 255, 0.65)",

          border:  isDark
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.08)",
          borderRadius: "8px",

          transition: "all 0.3s ease",

          "&:hover": {
            borderColor: "rgba(255, 101, 0, 0.35)",
            transform: "translateY(-2px)",
          },
        }}
      >
        {/* Skill Icon */}
        <Box
          component="img"
          src={icon}
          alt={name}
          sx={{
            width: 38,
            height: 38,

            p: {
              xs: "10px",
              md: "8px",
            },

            flexShrink: 0,

            borderRadius: "14px",

            background: isDark
          ? "rgba(0, 0, 0, 0.2)"
          : "rgba(228, 228, 228, 0.2)",

          border:  isDark
          ? "1px solid rgba(255, 255, 255, 0.08)"
          : "1px solid rgba(0, 0, 0, 0.08)",

            objectFit: "contain",

            boxShadow:isDark? "0 4px 20px rgba(0, 0, 0, 0.15)" : "none",
          }}
        />

        {/* Skill Info */}
        <Box
          sx={{
            width: "100%",
            minWidth: 0,

            display: "flex",
            flexDirection: "column",

            px: "6px",
          }}
        >
          {/* Skill Name */}
          <Typography
            variant="body2"
            sx={{
              color:isDark ? "#D1D5DB" : "#000",
              mb: 0.5,
            }}
          >
            {name}
          </Typography>

          {/* Progress + Percentage */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <LinearProgress
              variant="determinate"
              value={value}
              sx={{
                flex: 1,

                height: "4px",

                borderRadius: 2,

                backgroundColor:isDark ? "#252A30" : "#D9D9D9",

                transform: "rotateY(180deg)",

                "& .MuiLinearProgress-bar": {
                  background:
                    "linear-gradient(90deg, #FF6500, #FF3D00)",
                  borderRadius: 2,
                },
              }}
            />

            <Typography
              variant="caption"
              sx={{
                minWidth: "35px",

                color: "#FF4B00",

                textAlign: "right",

                textShadow: "0px 1px 1px #000",

                fontWeight: 600,
              }}
            >
              {Math.round(num)}%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillInfo;