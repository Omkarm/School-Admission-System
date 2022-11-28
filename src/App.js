import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutLineIcon from "@mui/icons-material/DeleteOutline";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";

import "./App.css";
import "./Pages/CSS/Split.css";
import "./Pages/CSS/Dashboard.css";
import "./Pages/CSS/Login.css";
import "./Pages/CSS/sidebar.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap-css-only/css/bootstrap.min.css";
// import "mdbreact/dist/css/mdb.css";
// dqaaaaasaa

// import Navbar from "./Pages/Components/Navbar";
// import Footer from "./Pages/Components/Footer";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/signup";
// import Home from "./Pages/Components/Home";
// import About from "./Pages/Unknown/About";
// import Employee from "./Pages/Employee/Employee";
// import Layout from "./Pages/Unknown/Layout";
// import Newuser from "./Pages/Unknown/Newuser";
// import Edit from "./Pages/Unknown/Edit";
// import Details from "./Pages/Unknown/Details";
// import Register from "./Pages/Employee/Register";
// import Learn, { Car, Garage } from "./Pages/Unknown/Learn";
// import Department from "./Pages/Department/Department";
// import DepartRegister from "./Pages/Department/DepartRegister";
// import DepartEdit from "./Pages/Department/DepartEdit";
// import DepartDetails from "./Pages/Department/DepartDetails";
// import EmployeeView from "./Pages/Employee/EmployeeView";
// import EmployeeDetails from "./Pages/Employee/EmployeeDetails";
// import EmpRegister from "./Pages/Employee/EmpRegister";
// import EmpEdit from "./Pages/Employee/EmpEdit";
// import Acount from "./Pages/Components/Account";
import Account from "./Pages/Components/Account";
import Dashboard from "./Pages/Components/Dashboard";

import Studenttable from "./Pages/Student/Studenttable";
import Addstudent from "./Pages/Student/Addstudent";

import Main from "./Pages/Student/Main";
import Home from "./Pages/Components/Home";

import Addteacher from "./Pages/Teacher/Addteacher";
import TeacherEdit from "./Pages/Teacher/TeacherEdit";
import Teachertable from "./Pages/Teacher/Teachertable";

import Addsupportstaff from "./Pages/Support Staff/Addsupportstaff";
import SupportEdit from "./Pages/Support Staff/SupportEdit";
import Supportstafftable from "./Pages/Support Staff/Supportstafftable";

import DivStdAdd from "./Pages/DivStd/DivStdAdd";
import DivStdTable from "./Pages/DivStd/DivStdTable";

import NoPageFound from "./Pages/Unknown/NoPageFound";

function App() {
  return (
    <div className="Main">
      {/* <Navbar1 /> */}
      <Login />
      <BrowserRouter>
        {/* <Account /> */}
        <Routes>
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/main" element={[<Main></Main>, <Home></Home>]} />
          <Route
            path="/divstdadd"
            element={[<DivStdAdd></DivStdAdd>, <Home></Home>]}
          />
          <Route
            path="/divstdtable"
            element={[<DivStdTable></DivStdTable>, <Home></Home>, <Account />]}
          />
          <Route
            path="/admission"
            element={[
              <Studenttable></Studenttable>,
              <Home></Home>,
              <Account />,
            ]}
          />
          <Route
            path="/addstudent"
            element={[<Addstudent></Addstudent>, <Home></Home>, <Account />]}
          />
          <Route
            path="/teachertable"
            element={[
              <Teachertable></Teachertable>,
              <Home></Home>,
              <Account />,
            ]}
          />
          <Route
            path="/teacheredit/:id"
            element={[<TeacherEdit></TeacherEdit>, <Home></Home>, <Account />]}
          />
          <Route
            path="/addteacher"
            element={[<Addteacher></Addteacher>, <Home></Home>, <Account />]}
          />
          <Route
            path="/supportstaff"
            element={[
              <Supportstafftable></Supportstafftable>,
              <Home></Home>,
              <Account />,
            ]}
          />
          <Route
            path="/supportedit/:id"
            element={[<SupportEdit></SupportEdit>, <Home></Home>, <Account />]}
          />

          <Route
            path="/addsupportstaff"
            element={[
              <Addsupportstaff></Addsupportstaff>,
              <Home></Home>,
              <Account />,
            ]}
          />
          <Route
            path="/dashboard"
            element={[<Dashboard></Dashboard>, <Home></Home>, <Account />]}
          />
          <Route
            path="/principle"
            element={[<NoPageFound></NoPageFound>, <Home></Home>, <Account />]}
          />
          {/* <Route path="/login" element={<Login></Login>} />

          <Route path="/signup" element={<Signup></Signup>} /> */}
          {/* <Route path="/home" element={[<Home></Home>, <Account />]} /> */}
          {/* <Route path="/about" element={<About></About>} />
          <Route
            path="/dashboard"
            element={[<Dashboard></Dashboard>, <Home></Home>]}
          />
          <Route
            path="/employee"
            element={[<Employee></Employee>, <Home></Home>]}
          />
          <Route
            path="/department"
            element={[<Department></Department>, <Home></Home>, <Account />]}
          />
          <Route path="/learn" element={<Learn></Learn>} />
          <Route path="/newuser" element={<Newuser></Newuser>} />
          <Route path="/edit/:id" element={<Edit></Edit>} />
          <Route path="/departedit/:id" element={<DepartEdit></DepartEdit>} />
          <Route path="/details/:id" element={<Details></Details>} />
          <Route
            path="/departdetails/:id"
            element={<DepartDetails></DepartDetails>}
          />
          <Route path="/register" element={<Register></Register>} />

          <Route
            path="/deptregister"
            element={[
              <DepartRegister></DepartRegister>,
              <Home></Home>,
              <Account></Account>,
            ]}
          />
          <Route path="/empview" element={<EmployeeView></EmployeeView>} />
          <Route
            path="/empdetails/:EmployeeCode"
            element={<EmployeeDetails></EmployeeDetails>}
          />
          <Route
            path="/empregister"
            element={[
              <EmpRegister></EmpRegister>,
              <Home></Home>,
              <Account></Account>,
            ]}
          />
          <Route path="/empedit/:id" element={<EmpEdit></EmpEdit>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
