import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StaffsTable = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Department</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Phone</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                <IconButton>
                  {" "}
                  <EditIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                <IconButton>
                  {" "}
                  <EditIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                <IconButton>
                  {" "}
                  <EditIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                <IconButton>
                  {" "}
                  <EditIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Samikshya kharel</TableCell>
              <TableCell>Receptionist</TableCell>
              <TableCell>abc@gmail.com</TableCell>
              <TableCell>4657845876</TableCell>
              <TableCell>
                <IconButton>
                  {" "}
                  <EditIcon sx={{ color: "blue" }} />
                </IconButton>
                <IconButton>
                  <DeleteIcon sx={{ color: "red" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default StaffsTable;
