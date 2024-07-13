import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import MainLayout from "../../component/main/MainLayout";

const localizer = momentLocalizer(moment);

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    patientName: "",
    doctorId: "",
    doctorName: "",
    date: "",
    time: "",
    reason: "",
  });
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/appointments")
      .then((response) => setAppointments(response.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/api/doctors")
      .then((response) => setDoctors(response.data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, date: e.target.value });
    if (form.doctorId) {
      fetchAvailableSlots(form.doctorId, e.target.value);
    }
  };

  const handleDoctorChange = (e) => {
    const doctorId = e.target.value;
    const doctor = doctors.find((doc) => doc._id === doctorId);
    setForm({ ...form, doctorId, doctorName: doctor.name });
    if (form.date) {
      fetchAvailableSlots(doctorId, form.date);
    }
  };

  const fetchAvailableSlots = (doctorId, date) => {
    const doctor = doctors.find((doc) => doc._id === doctorId);
    if (!doctor) return;

    const dayOfWeek = new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const roster = doctor.roster.find((r) => r.day === dayOfWeek);
    if (!roster) return;

    const start = new Date(`${date}T${roster.start}:00`);
    const end = new Date(`${date}T${roster.end}:00`);
    const slots = [];

    while (start < end) {
      const slot = start.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
      slots.push(slot);
      start.setMinutes(start.getMinutes() + 15);
    }

    axios
      .post("http://localhost:5000/api/check-availability", { doctorId, date })
      .then((response) => {
        const unavailableSlots = response.data
          .filter((appointment) => appointment.date === date)
          .map((app) => app.time);
        const available = slots.filter(
          (slot) => !unavailableSlots.includes(slot)
        );
        setAvailableSlots(available);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/appointments", form)
      .then((response) => setAppointments([...appointments, response.data]))
      .catch((err) => console.log(err));
  };

  const events = appointments.map((appointment) => ({
    title: `${appointment.patientName} with ${appointment.doctorName}`,
    start: new Date(`${appointment.date}T${appointment.time}:00`),
    end: new Date(
      new Date(`${appointment.date}T${appointment.time}:00`).getTime() +
        15 * 60000
    ),
  }));

  return (
    <MainLayout title={"Appointment"}>
      <div>
        <h2>Book Appointment</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="patientName"
            value={form.patientName}
            onChange={handleChange}
            placeholder="Patient Name"
          />
          <select
            name="doctorId"
            value={form.doctorId}
            onChange={handleDoctorChange}
          >
            <option value="">Select Doctor</option>
            {doctors.map((doctor) => (
              <option key={doctor._id} value={doctor._id}>
                {doctor.name}
              </option>
            ))}
          </select>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleDateChange}
          />
          <select name="time" value={form.time} onChange={handleChange}>
            <option value="">Select Time</option>
            {availableSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <input
            name="reason"
            value={form.reason}
            onChange={handleChange}
            placeholder="Reason for Visit"
          />
          <button type="submit">Book</button>
        </form>
        <h2>Appointments</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      </div>
    </MainLayout>
  );
};

export default Appointment;
