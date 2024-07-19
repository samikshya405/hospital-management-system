import axios from "axios";

const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const staffEP = rootAPI + '/employees' 
const departmentEP = rootAPI+ '/department' 
const rosterEP = rootAPI + '/rosters'

//get user
// export const getStaff = () => {
//   const data = axios.get(staffEP);
//   return data;
// };

// //post user
// export const postNewStaff = async (staffDetails) => {
//   const data = await axios.post(staffEP, staffDetails);
//   return data;
// };

// //post department
// export const postDepartment = async (department) => {
//   const data = await axios.post(departmentEP, department);
//   return data;
// };

// //get department
// export const getdepartment = () => {
//   const data = axios.get(departmentEP);
//   return data;
// };

//post roster
export const postRoster = async (rosterDetails) => {
  const data = await axios.post(rosterEP, rosterDetails);
  return data;
};

//get roster
export const getRoster = async () => {
  const data = await axios.get(rosterEP);
  return data;
};

export const getRosterBydeptAndDate = async (department, date) => {
  const response = await axios.get(`${rosterEP}/rosterByDate`, {
    params: {
      department: department,
      date: date,
    },
  });
  return response.data;
};

export const updateRoster = async (changedRoster) => {
  const response = await axios.patch(rosterEP,changedRoster);
  return response.data
};

export const deleteRoster = async(id)=>{
    console.log(id);
    const response = await axios.delete(rosterEP, {data:{id}})
    return response


}
