import { Box, Grid, Typography, useTheme } from "@mui/material";
import { Tune } from "@mui/icons-material";

import { dataskill } from "../../data/dataskill";
import SkillInfo from "./SkillInfo";

import htmlpic from "../../assets/icons/html.svg";
import csspic from "../../assets/icons/css.svg";
import jspic from "../../assets/icons/js.svg";
import nextpic from "../../assets/icons/next.svg";
import reactpic from "../../assets/icons/react.svg";
import tailwind from "../../assets/icons/tailwind.webp";
import ts from "../../assets/icons/ts.svg";
import mui from "../../assets/icons/mui.svg";
import git from "../../assets/icons/git.webp";


const Skill = () => {
  const {
    htmlSkill,
    cssSkill,
    jsSkill,
    nextSkill,
    reactSkill,
    tailwindSkill,
    tsSkill,
    muiSkill,
    gitSkill,
  } = dataskill;

  const skills = [
    { data: htmlSkill, icon: htmlpic, num: 95 },
    { data: cssSkill, icon: csspic, num: 60 },
    { data: jsSkill, icon: jspic, num: 70 },
    { data: nextSkill, icon: nextpic, num: 45 },
    { data: reactSkill, icon: reactpic, num: 65 },
    { data: tailwindSkill, icon: tailwind, num: 80 },
    { data: tsSkill, icon: ts, num: 65 },
    { data: muiSkill, icon: mui, num: 75 },
    { data: gitSkill, icon: git, num: 65 },
  ];

  const theme = useTheme()
  const isDark = theme.palette.mode === "dark"
  return (
    <Box
      sx={{
        width: "100%",
        background: isDark
        ? "rgba(0, 0, 0, 0.2)"
        : "rgba(255, 255, 255, 0.65)",
        border:  isDark
        ? "1px solid rgba(255, 255, 255, 0.08)"
        : "1px solid rgba(0, 0, 0, 0.08)",
        backdropFilter: "blur(12px)",
        borderRadius: "6px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textAlign: "end",
          fontWeight: "bold",
          py: 2,
          px: 2,
        }}
      >
        مهارت‌ها{" "}
        <Tune
          fontSize="small"
          sx={{
            verticalAlign: "text-bottom",
          }}
        />
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{
          p: 2,
        }}
      >
        {skills.map((skill) => (
          <Grid
            key={skill.data.name}
            size={{
              xs: 12,
              sm: 12,
              md: 6,
              lg: 4,
            }}
          >
            <SkillInfo
              name={skill.data.name}
              icon={skill.icon}
              firstcolor={skill.data.firstcolor}
              secondcolor={skill.data.secondcolor}
              num={skill.num}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skill;