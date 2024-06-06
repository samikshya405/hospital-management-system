import { Box, Button, Grid, InputLabel, Typography, useStepperContext } from '@mui/material';
import React, { useState } from 'react'
import { personalDetails } from '../main/dataSet';
import { CustomInput, CustomSelect } from '../auth/CustomInput';

const initialState={
    fName:"",
    mName:"",
    lName:"",
    dob:null,
    gender:"",
    maritalStatus:"Single",
    occupation:"",
    language:"",
    religion:"",
    nationality:"",
    email:""

    


}
const PersonalDetailsForm = ({activeForm, setActiveForm}) => {
    const [formData, setformData] = useState(initialState)
    
    const handleChange=(e)=>{
        const { name, value } = e.target;
        setformData({...formData, [name]:value})

    }
    const handleNext=(e)=>{
        e.preventDefault()
        setActiveForm(activeForm + 1)

        console.log(formData);

    }
  return (
    <Box component={"form"} onSubmit={handleNext} >
        
    <Box py={2}>
        <Typography sx={{fontWeight:"bold", fontSize:"20px", my:2}}>Personal Details</Typography>
      <Grid container columnSpacing={4} rowSpacing={1}>
        {personalDetails.map(({ label, ...input }, i) => {
          return (
            <Grid item xs={12}  md={6} key={input.id+ i}>
              {input.type !== "select" ? (
                <>
                  <InputLabel>{label}</InputLabel>
                  <CustomInput
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
      </Grid>
    </Box>
    <Box textAlign={"end"}>
      <Button
        variant="contained"
        sx={{ mt: 3, mb: 2, paddingX: 5 }}
        style={{ background: "var(--primary)" }}
        type='submit'
        
      >
        Next
      </Button>
    </Box>
  </Box>
  )
}

export default PersonalDetailsForm