import React from "react";
import MainLayout from "../../component/main/MainLayout";
import { Box, Grid, Paper, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { data } from "../../component/main/dataSet";

const Dashboard = () => {
  const navigate = useNavigate();
  const hanldeClick = (path) => {
    navigate(path);
  };

  return (
    <MainLayout title="DashBoard">
      <Grid container p={3} spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            xs={6}
            sm={4}
            md={3}
            lg={2}
            xl={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            sx={{ cursor: "pointer" }}
            onClick={() => hanldeClick(item.link)}
          >
            <Box className="circle">
              <img
                src={item.img}
                alt={item.department}
                width={"90px"}
                style={{ overflow: "hidden" }}
              />
            </Box>
            <Typography
              textAlign={"center"}
              py={1}
              sx={{ color: "var(--dark)" }}
            >
              {item.department}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
