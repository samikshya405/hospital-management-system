import axios from "axios";
const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/users";
const departmentEP = rootAPI + "/department";
const employeeEP = rootAPI + "/employees";

export const postNewUser = async (userObj) => {
  try {
    const { data } = await axios.post(userEP, userObj);
    return data;
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const userLogin = async (loginInfo) => {
  try {
    const { data } = await axios.post(userEP + "/login", loginInfo);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchUserInfo = async () => {
  try {
    const headers = {
      Authorization: getAccessJWT(),
    };
    const data = await axios.get(userEP, {
      headers: {
        Authorization: getAccessJWT(),
      },
    });
    return data.data.user;
  } catch (error) {
    console.log(error);
  }
};

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

export const postDepartment = async (departmentObj) => {
  try {
    const result = await axios.post(departmentEP, departmentObj);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDepartmentList = async () => {
  try {
    const result = await axios.get(departmentEP);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDepartment = async (id, updateObj) => {
  try {
    const response = await axios.patch(departmentEP + "/" + id, updateObj);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteDepartment = async (id) => {
  try {
    const response = await axios.delete(`${departmentEP}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addNewEmployee = async (employeeDetails) => {
  try {
    const response = await axios.post(employeeEP, employeeDetails);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};


export const getAllStaff=async()=>{
  try {
    const response = await axios.get(employeeEP);
    return response.data

    
  } catch (error) {
    console.log(error);
    
  }
}

export const deleteStaff=async(id)=>{
  try {
    const response = await axios.delete(`${employeeEP}/${id}`)
    return response.data
    
  } catch (error) {
    console.log(error);

  }
    
  
}