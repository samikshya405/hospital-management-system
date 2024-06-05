import axios from "axios";
const rootAPI = import.meta.env.VITE_APP_ROOTAPI;
const userEP = rootAPI + "/users";

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
export const fetchUserInfo = async() => {
  // const result = {method:"GET", url:userEP + "/login", isPrivate:true}

  try {
    const headers = {
      Authorization: getAccessJWT(),
    };
    const data = await axios.get(userEP, {
      headers: {
        Authorization: getAccessJWT(),
      },
    });
    return data.data.user
  } catch (error) {
    console.log(error);
  }
};

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
