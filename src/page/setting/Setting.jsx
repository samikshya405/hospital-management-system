import React, { useEffect, useState } from "react";
import MainLayout from "../../component/main/MainLayout";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { postDepartment, getDepartmentList } from "../../utils/axiosHelper";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Setting = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [department, setDepartment] = useState({});
  const [departmentList, setDepartmentList] = useState([]);
  const handleChange = (e) => {
    setDepartment({ department: e.target.value });
  };
  const handleAddDepartment = async () => {
    const response = await postDepartment(department);
    if (response.status === "success") {
      console.log(response.message);
    } else {
      console.error("Failed to add department:", response.message);
    }
    getDepartment();
    setOpen(false);
  };
  const getDepartment = async () => {
    const response = await getDepartmentList();
    setDepartmentList(response.department);
    console.log(response.department);
  };
  useEffect(() => {
    getDepartment();
  }, []);
  return (
    <MainLayout title={"Setting"}>
      <Box textAlign={"end"}>
        <Button
          variant="contained"
          sx={{ mt: 3, mb: 2, paddingX: 5 }}
          style={{ background: "var(--primary)" }}
          type="submit"
          onClick={handleOpen}
        >
          Add New Department
        </Button>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Department
          </Typography>
          <TextField sx={{ width: "100%" }} onChange={handleChange} />
          <Box textAlign={"end"}>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, paddingX: 5 }}
              style={{ background: "var(--primary)" }}
              onClick={handleAddDepartment}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box>
        {departmentList.map((item, i) => {
          return (
            <Paper
              key={item._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textTransform:"capitalize",
                p: 2,
                m: 1,
              }}
            >
              <Box>{item.department}</Box>
              <Box>
                <IconButton>
                  <EditIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </Box>
            </Paper>
          );
        })}

        
      </Box>
    </MainLayout>
  );
};

export default Setting;
