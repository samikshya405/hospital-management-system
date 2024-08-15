import { Box, Button, Typography } from "@mui/material";
import React from "react";
import done from "../../assets/image/done.png";
import { Link } from "react-router-dom";

const Confirm = () => {
  return (
    <Box py={2}>
      <Box sx={{ textAlign:"center" }}>
        <img src={done} alt="" width={"240px"} />
        <Typography>New patient has been Created</Typography>
        <Link to={'/'}>
          <Box textAlign={"center"}>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, paddingX: 5 }}
              style={{ background: "var(--primary)" }}
              type="submit"
            >
              Back to Home
            </Button>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Confirm;
