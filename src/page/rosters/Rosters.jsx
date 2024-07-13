import React, { useState } from "react";
import MainLayout from "../../component/main/MainLayout";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
// import AddTeamMember from "../../component/roster/AddTeamMember";
import "./roster.css";
import { compareDate, generateWeek } from "../../component/roster/date";
// import EachRow from "../../component/roster/EachRow";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// import EachRow from "../../component/roster/EachRow";
const departments = [
  { name: "Receptionist" },
  { name: "Doctor" },
  { name: "Nurse" },
];

const Rosters = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setSelectedDate(selectedDate);
  };
  const week = generateWeek(selectedDate);

  const currentDay = new Date();

  const onDragEnd=()=>{

  }
  return (
    <MainLayout>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
          <Box>
            <input
              type="date"
              value={selectedDate.toISOString().split("T")[0]}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Box>
      <Box className="main" display={"flex"}>
        <Box className="staff" p={0} m={0}>
          <TextField placeholder="Search" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <TableContainer sx={{ width: "100%" }} className="table-box">
            <Table>
              <TableHead>
                <TableRow>
                  {week.map((day, index) => (
                    <TableCell
                      key={index}
                      className={`text-center ${
                        compareDate(currentDay, day.date)
                          ? "text-primary"
                          : "text-dark"
                      }`}
                    >
                      {day.day}
                      <br />
                      <span className="text-muted" style={{ fontSize: "10px" }}>
                        {day.date.toISOString().split("T")[0]}{" "}
                      </span>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <DragDropContext onDragEnd={onDragEnd}>
              <TableBody>
                {departments.map((dept, deptIndex) => (
                  <TableRow key={deptIndex} className="tableData">
                    {week.map((day, dayIndex) => (
                      <TableCell></TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
              </DragDropContext>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Rosters;
