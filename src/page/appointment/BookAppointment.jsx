import React, { useEffect, useState } from "react";
import MainLayout from "../../component/main/MainLayout";
import { getRoster } from "../../utils/rosterAxios";
import { generateAppointmentSlots } from "../../component/roster/helper";
import { format } from "date-fns";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const BookAppointment = () => {
  const [doctorsRoster, setDoctorsRoster] = useState([]);
  const [weekOffset, setWeekOffset] = useState(0);

  // Get doctor roster
  const getDoctorRoster = async () => {
    const { data } = await getRoster();
    setDoctorsRoster(
      data?.result.filter((roster) => roster.department === "doctor")
    );
  };

  // Generate appointment slots for each doctor
  const timeSlots = doctorsRoster.map((item) => {
    const availableSlot = generateAppointmentSlots(
      item.startDate,
      item.endDate,
      item.startTime,
      item.endTime
    );
    return { ...item, availableSlot };
  });
  console.log(timeSlots);

  useEffect(() => {
    getDoctorRoster();
  }, []);

  // Generate the next 7 days
  const generateDays = (offset) => {
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i + offset * 7);
      return date;
    });
  };

  const days = generateDays(weekOffset);

  // Group slots by doctor and date
  const groupedSlots = timeSlots.reduce((acc, doctor) => {
    if (!acc[doctor.staffName]) {
      acc[doctor.staffName] = {};
    }

    days.forEach((day) => {
      const dateKey = format(day, "yyyy-MM-dd");
      acc[doctor.staffName][dateKey] = acc[doctor.staffName][dateKey] || [];
      const slotsForDay = doctor.availableSlot.filter((slot) => {
        const slotDate = format(new Date(slot.slot), "yyyy-MM-dd");
        return slotDate === dateKey;
      });
      acc[doctor.staffName][dateKey].push(...slotsForDay);
    });
    return acc;
  }, {});
  console.log(groupedSlots);

  const formatTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strMinutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + strMinutes + " " + ampm;
  };

  const handlePrevWeek = () => {
    setWeekOffset(weekOffset - 1);
  };

  const handleNextWeek = () => {
    setWeekOffset(weekOffset + 1);
  };

  return (
    <MainLayout title="Book Appointment">
      <Typography sx={{ fontWeight: "bold" }}>Available Time</Typography>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {weekOffset > 0 ? (
          <button onClick={handlePrevWeek}>
            <ArrowBackIosIcon />
          </button>
        ) : (
          <div></div>
        )}
        <button onClick={handleNextWeek}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Doctor</TableCell>
              {days.map((day) => (
                <TableCell key={day}>
                  <span style={{ fontWeight: "bold" }}>
                    {format(day, "eeee")}
                  </span>
                  <br />
                  <span style={{ fontSize: "10px" }}>
                    {format(day, "yyyy-MM-dd")}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(groupedSlots).map((roster) => {
              return (
                <TableRow key={roster}>
                  <TableCell
                    sx={{ textTransform: "capitalize", minHeight: "700px" }}
                  >
                    Dr. {roster}
                  </TableCell>
                  {days.map((day) => {
                    const dateKey = format(day, "yyyy-MM-dd");
                    const slotsForDay = groupedSlots[roster][dateKey];
                    return (
                      <TableCell
                        key={dateKey}
                        sx={{ minHeight: "700px", verticalAlign: "top" }}
                      >
                        {slotsForDay.length > 0 ? (
                          slotsForDay.map((slot, index) => (
                            <Box key={index}>
                              <Box
                                className="slot"
                                sx={{
                                  border: "1px solid var(--dark)",
                                  width: "100px",
                                  py: 1,
                                  px: 2,
                                  mb: 1,
                                  textAlign: "center",
                                  cursor: "pointer",
                                }}
                              >
                                {formatTime(slot.slot)}
                              </Box>
                            </Box>
                          ))
                        ) : (
                          <div>No slots</div>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </MainLayout>
  );
};

export default BookAppointment;
