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
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

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
  {
    department: "Emergency",
    img: emergency,
    link: "/emergency",
    icon: MdOutlineEmergencyShare,
  },
  {
    department: "Electronic Medical Record",
    img: emr,
    link: "/emr",
    icon: NotificationImportantIcon,
  },
  {
    department: "InPatient Management",
    img: inPatient,
    link: "/inPatient",
    icon: AirlineSeatFlatIcon,
  },
  {
    department: "OutPatient Management",
    img: outPatient,
    link: "/outPatient",
    icon: DirectionsWalkIcon,
  },

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
];
