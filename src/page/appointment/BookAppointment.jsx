import React, { useEffect, useState } from "react";
import MainLayout from "../../component/main/MainLayout";
import { getRoster } from "../../utils/rosterAxios";
import { generateAppointmentSlots } from "../../component/roster/helper";

const BookAppointment = () => {
  const [doctorsRoster, setDoctorsRoster] = useState([]);

  //get doctorRoster
  const getDoctorRoster = async () => {
    const { data } = await getRoster();
    console.log(data);
    setDoctorsRoster(
      data?.result.filter((roster) => roster.department === "doctor")
    );
  };
 
  //getAppointment


  const timeSlots = [];
  doctorsRoster.forEach((item) => {
    const availableSlot= generateAppointmentSlots(
      item.startDate,
      item.endDate,
      item.startTime,
      item.endTime
    );
    timeSlots.push({ ...item, availableSlot });
    
  });
 
  useEffect(() => {
    getDoctorRoster();
  }, []);
  return <MainLayout title="Book Appointment">
    
  </MainLayout>;
};

export default BookAppointment;
