export const generateAppointmentSlots = (startDate, endDate, startTime, endTime) => {
    const slots = [];
  
    // const { startDate, endDate, startTime, endTime } = roster;
  
    // Parse the start and end date
    const start = new Date(startDate);
    const end = new Date(endDate);
  
    // Extract start and end times
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);
  
    // Set start and end times on the given dates
    start.setUTCHours(startHour, startMinute, 0, 0);
    end.setUTCHours(endHour, endMinute, 0, 0);
  
    // Function to format the date and time
    function formatDateTime(date) {
      const formattedDate = date.toISOString().split('T')[0];
      let hours = date.getUTCHours();
      let minutes = date.getUTCMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      return `${formattedDate} ${hours}:${minutes} ${ampm}`;
    }
  
    // Generate slots in 1-hour increments
    while (start < end) {
      const slotStart = new Date(start);
      start.setUTCHours(start.getUTCHours() + 1); // Increment time by 1 hour
      if (start <= end) {
        slots.push({
          slot: formatDateTime(slotStart),
        });
      }
    }
  
    console.log(slots);
    return slots;
  };
  
 