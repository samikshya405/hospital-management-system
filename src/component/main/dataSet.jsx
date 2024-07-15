import registerForm from "../../assets/image/form.png";
import appointment from "../../assets/image/appointment.png";
import clinical from "../../assets/image/clinical.png";
import doctor from "../../assets/image/doctor.png";
import emergency from "../../assets/image/emergency.png";
import billing from "../../assets/image/billing.png";
import emr from "../../assets/image/emr.png";
import inPatient from "../../assets/image/inPatient.png";
import outPatient from "../../assets/image/outPatient.png";
import patient from "../../assets/image/patient.png";
import graph from "../../assets/image/graph.png";
import staffs from "../../assets/image/staffs.png";
import setting from '../../assets/image/setting.png'

import HomeIcon from "@mui/icons-material/Home";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineEmergencyShare } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { GrDocumentCloud } from "react-icons/gr";
import AirlineSeatFlatIcon from "@mui/icons-material/AirlineSeatFlat";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PeopleIcon from "@mui/icons-material/People";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import SettingsIcon from '@mui/icons-material/Settings';

export const data = [
  {
    department: "Patient Registration",
    img: registerForm,
    link: "/patientRegistration",
    icon: AssignmentSharpIcon,
  },
  {
    department: "Appointment",
    img: appointment,
    link: "/appointment",
    icon: CalendarMonthIcon,
  },
  {
    department: "Clinical Management",
    img: clinical,
    link: "/clinical",
    icon: VaccinesIcon,
  },
  {
    department: "Doctor Information",
    img: doctor,
    link: "/doctors",
    icon: FaUserDoctor,
  },
  // {
  //   department: "Emergency",
  //   img: emergency,
  //   link: "/emergency",
  //   icon: NotificationImportantIcon,
  // },
  // {
  //   department: "Electronic Medical Record",
  //   img: emr,
  //   link: "/emr",
  //   icon: GrDocumentCloud,
  // },
  // {
  //   department: "InPatient Management",
  //   img: inPatient,
  //   link: "/inPatient",
  //   icon: AirlineSeatFlatIcon,
  // },
  // {
  //   department: "OutPatient Management",
  //   img: outPatient,
  //   link: "/outPatient",
  //   icon: DirectionsWalkIcon,
  // },

  {
    department: "Billing and Payment",
    img: billing,
    link: "/billing",
    icon: TbReportMoney,
  },
  {
    department: "Patient Information",
    img: patient,
    link: "/patients",
    icon: PeopleIcon,
  },

  {
    department: "Statistic and Reports",
    img: graph,
    link: "/statistic",
    icon: LeaderboardIcon,
  },
  {
    department:"Settings",
    img:setting,
    link:'/setting',
    icon:SettingsIcon
  }
];

export const homeAddress = [
  {
    name: "streetAddress",
    label: "Street Address",
    id: "streetName",
    type: "text",
    required: true,
  },
  {
    name: "streetAddressLine2",
    label: "Street Address",
    id: "streetAddressLine2",
    type: "text",
    required: false,
  },
  {
    name: "city",
    label: "City",
    id: "city",
    type: "text",
    required: true,
  },
  {
    name: "state",
    label: "State/Province",
    id: "state",
    type: "text",
    required: true,
  },

  {
    name: "postal",
    label: "Postal/Zip Code",
    id: "postal",
    type: "number",
    required: true,
  },
];
export const personalDetails = [
  {
    name: "fname",
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
    name: "maritalStatus",
    label: "Marital Status",
    id: "maritalStatus",
    type: "select",
    required: true,
    option: [
      { name: "Single" },
      {
        name: "Married",
      },
      {
        name: "Divorcee",
      },
    ],
  },

  {
    name: "occupation",
    label: "Occupation",
    id: "occupation",
    type: "text",
    required: false,
  },
  {
    name: "language",
    label: "Language",
    id: "language",
    type: "text",
    required: false,
  },
  {
    name: "religion",
    label: "Religion",
    id: "religion",
    type: "text",
    required: false,
  },
  {
    name: "nationality",
    label: "Nationality",
    id: "nationality",
    type: "text",
    required: false,
  },
  {
    name: "email",
    label: "Email",
    id: "email",
    type: "text",
    required: false,
  },
];
export const emergencyContact = [
  {
    name: "fName",
    label: "First Name",
    id: "fnameE",
    type: "text",
    required: false,
  },
  {
    name: "lName",
    label: "Last Name",
    id: "lnameE",
    type: "text",
    required: false,
  },
  {
    name: "relation",
    label: "Relation",
    id: "relation",
    type: "text",
    required: false,
  },
  {
    name: "number",
    label: "Phone Number",
    id: "numberE",
    type: "number",
    required: false,
  },
  {
    name: "streetAddress",
    label: "Street Address",
    id: "streetName",
    type: "text",
    required: true,
  },
  {
    name: "streetAddressLine2",
    label: "Street Address line 2",
    id: "streetAddressLine2",
    type: "text",
    required: false,
  },
  {
    name: "city",
    label: "City",
    id: "city",
    type: "text",
    required: true,
  },
  {
    name: "state",
    label: "State/Province",
    id: "state",
    type: "text",
    required: true,
  },

  {
    name: "postal",
    label: "Postal/Zip Code",
    id: "postal",
    type: "number",
    required: true,
  },
];

export const staffDetails = [
  {
    name: "fname",
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
    name: "email",
    label: "Email",
    id: "email",
    type: "text",
    required: false,
  },
  {
    name: "department",
    label: "Department",
    id: "department",
    type: "select",
    required: true,
    option: [
      {
        name: "Receptionist",
      },
      {
        name: "Doctor",
      },
      {
        name: "Nurse",
      },
    ],
  },
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
