import { Box, Typography } from "@mui/material";
import React from "react";
const formType = [
  {
    name: "Personal Details",
  },
  {
    name: "Home Address",
  },
  {
    name: "Next of Kin",
  },
  {
    name: "Payers Information",
  },
];

const ProgressBar = ({activeForm, setActiveForm}) => {
    const handleBreadCrumb=(i)=>{
        
        setActiveForm(i)

    }
  return (
    <Box py={2} sx={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
      {formType.map((item, i) => {
        return (
          <Box key={i} sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                bgcolor: i<=activeForm ? "blue":"grey",
                color: i<=activeForm ? "white":"black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor:"pointer",
                
              }}
              onClick={()=>handleBreadCrumb(i)}
            >
              <Typography fontWeight={"bold"}>{i + 1}</Typography>
            </Box>
            {
                i!==(formType.length-1) && <Box width={"100px"} sx={{ height: "5px", bgcolor: i<activeForm ? "blue":"grey"}}></Box>
            }
          </Box>
        );
      })}
    </Box>
  );
};

export default ProgressBar;
