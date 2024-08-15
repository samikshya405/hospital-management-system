import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomInput, CustomSelect } from "../auth/CustomInput";
import { personalDetails } from "../main/dataSet";
import { Form } from "react-router-dom";
import { addNewEmployee, getDepartmentList } from "../../utils/axiosHelper";
const initialState = {
  fName: "",
  mName: "",
  lName: "",
  dob: "",
  gender: "",
  phone: "",
  email: "",
  department: "",
  jobTitle: "",
  startDate: "",
  employmentType: "",
};
const staffDetails = [
  {
    name: "fName",
    label: "First Name",
    id: "fName",
    type: "text",
    required: true,
  },
  {
    name: "mName",
    label: "Middle Name",
    id: "mName",
    type: "text",
    required: false,
  },
  {
    name: "lName",
    label: "Last Name",
    id: "lName",
    type: "text",
    required: true,
  },

  {
    name: "dob",
    label: "DOB",
    id: "dob",
    type: "date",
    required: true,
  },
  {
    name: "gender",
    label: "Gender",
    id: "gender",
    type: "select",
    required: true,
    option: [
      {
        name: "Male",
      },
      {
        name: "Female",
      },
      {
        name: "Other",
      },
    ],
  },
  {
    name: "phone",
    label: "Phone",
    id: "phone",
    type: "string",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    id: "email",
    type: "text",
    required: true,
  },
];
const jobDetails = [
  {
    name: "jobTitle",
    label: "Job Title",
    id: "jobTitle",
    type: "text",
    required: true,
  },
  {
    name: "startDate",
    label: "Start Date",
    id: "startDate",
    type: "date",
    required: true,
  },
  {
    name: "employmentType",
    label: "Employment Type",
    id: "employmentType",
    type: "select",
    required: true,
    option: [
      {
        name: "Part time",
      },
      {
        name: "Full Time",
      },
      {
        name: "Casual",
      },
    ],
  },
];
const EmployeeOnboardingForm = () => {
  const [formData, setformData] = useState(initialState);

  const [departmentList, setDepartmentList] = useState({
    name: "department",
    required: "true",
    option: [],
  });

  const getDepartment = async () => {
    const department = await getDepartmentList();
    setDepartmentList({ ...departmentList, option: department.department });
  };

  useEffect(() => {
    getDepartment();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    // console.log(formData);
  };
  function generateUniqueId() {
    const timestamp = Date.now().toString();

    const randomPart = Math.floor(1000 + Math.random() * 9000).toString();

    const uniqueId = timestamp + randomPart;

    return uniqueId.slice(0, 10);
  }

  // // Example usage
  // const uniqueId = generateUniqueId();
  // console.log(uniqueId); // Output: A unique 8-10 digit ID

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const employeeId = generateUniqueId();
    const response = await addNewEmployee({ ...formData, employeeId });

    setformData(initialState);
  };

  return (
    <Box
      width={"80%"}
      margin={"0 auto"}
      component={"form"}
      onSubmit={handleSubmit}
    >
      <Box py={2}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px", my: 2 }}>
          Employee Details
        </Typography>
        <Grid container columnSpacing={4} rowSpacing={1}>
          {staffDetails.map(({ label, ...input }, i) => {
            return (
              <Grid item xs={12} md={6} key={input.id + i}>
                {input.type !== "select" ? (
                  <>
                    <InputLabel>{label}</InputLabel>
                    <CustomInput
                      value={formData[input.name]}
                      key={input.id}
                      {...input}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <InputLabel>{label}</InputLabel>
                    <CustomSelect
                      input={input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </>
                )}
              </Grid>
            );
          })}
          <Grid item xs={12} md={6}>
            <InputLabel>Department</InputLabel>
            <Select
              value={formData.department}
              name="department"
              fullWidth
              onChange={handleChange}
            >
              {departmentList.option?.map((item) => {
                return (
                  <MenuItem key={item._id} value={item.department}>
                    {item.department}
                  </MenuItem>
                );
              })}
            </Select>
          </Grid>
          {jobDetails.map(({ label, ...input }, i) => {
            return (
              <Grid item xs={12} md={6} key={input.id + i}>
                {input.type !== "select" ? (
                  <>
                    <InputLabel>{label}</InputLabel>
                    <CustomInput
                      key={input.id}
                      {...input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    {" "}
                    <InputLabel>{label}</InputLabel>
                    <CustomSelect
                      input={input}
                      value={formData[input.name]}
                      onChange={handleChange}
                    />
                  </>
                )}
              </Grid>
            );
          })}
        </Grid>
        <Typography sx={{ color: "orange", py: 2 }}>
          {" "}
          Upon creating employye an email will be sent to them with login
          details and temporary password.
        </Typography>
        <Box textAlign={"end"}>
          <Button
            variant="contained"
            sx={{ mt: 1, mb: 2, paddingX: 5 }}
            style={{ background: "var(--primary)" }}
            type="submit"
          >
            Create New Employee
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeOnboardingForm;
