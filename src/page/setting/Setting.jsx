import React from "react";
import MainLayout from "../../component/main/MainLayout";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomInput } from "../../component/auth/CustomInput";
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
          <CustomInput />
          <Box textAlign={"end"}>
            <Button
              variant="contained"
              sx={{ mt: 3, mb: 2, paddingX: 5 }}
              style={{ background: "var(--primary)" }}
              onClick={handleClose}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Modal>
      <Box>
        <Paper sx={{ p: 2, m: 1 }}>Doctor</Paper>
        <Paper sx={{ p: 2, m: 1 }}>Receptionist</Paper>
        <Paper sx={{ p: 2, m: 1 }}>Nurse</Paper>
      </Box>
    </MainLayout>
  );
};

export default Setting;
