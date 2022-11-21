import React, { useState, useEffect } from "react";
import { urldpost, urlget } from "../Unknown/Config";
import DatePicker from "react-datepicker";
// import { DatePicker } from "rsuite";
// import Toggle from "react-bootstrap-toggle";
// import Switch from "react-switch";

import "react-datepicker/dist/react-datepicker.css";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import { Switch } from "@mui/material";
import Footer from "../Components/Footer";

const DepartRegister = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: "",
    DepartmentID: "",
    EmployeeFirstName: "",
    EmployeeLastName: "",
    DepartmentName: "",
    DepartmentHead: "",
    DateOfJoining: "",
    LastDate: "",
    Status: "",
    Status1: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((val) => {
      return {
        ...val,
        [name]: value,
      };
    });
  };

  // const [unit, setUnit] = useState("Active");
  // const toggleDisplay = () => {
  //   if (unit === "Active") {
  //     setUnit("Active");
  //     console.log(unit);
  //   }
  // };

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
      EmployeeCode,
      DepartmentID,
      EmployeeFirstName,
      EmployeeLastName,
      DepartmentName,
      DepartmentHead,
      DateOfJoining,
      LastDate,
      Status,
      Status1,
    } = inpval;
    const res = await fetch(urldpost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeCode,
        DepartmentID,
        EmployeeFirstName,
        EmployeeLastName,
        DepartmentName,
        DepartmentHead,
        DateOfJoining,
        LastDate,
        Status,
        Status1,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("fill the data");
    } else {
      alert("Data Added Successfully");
    }
  };

  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  const [selects, setSelects] = useState();

  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(urlget, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // const [date, setDate] = useState(new Date());
  // const [startDate, setStartDate] = useState(new Date());

  // const [value, onChange] = useState(new Date());

  // const [toggle, setToggle] = useState(false);

  // const toggler = () => {
  //   toggle ? setToggle(false) : setToggle(true);
  // };

  // const [toggle, setToggle] = useState();
  // const [toggle1, setToggle1] = useState();

  // const setswitch = (e) => {
  //   console.log(e.target.value);
  //   const { name, value } = e.target;
  //   setToggle((val) => {
  //     return {
  //       ...val,
  //       [name]: value,
  //     };
  //   });
  // };

  return (
    <div class="container-xl px-4 mt-4">
      {/* <!-- Account page navigation--> */}
      <div className="splitr right">
        <div class="row">
          <div class="col-xl-12">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
              <div class="card-header">Employee Joining Details</div>
              <br></br>
              <div class="card-body1">
                <form onSubmit={addinpdata}>
                  {/* -----------------------------------------------EmployeeCode------------------------------------------------------- */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Employee Code:
                    </label>

                    <form class="col-md-12">
                      <select
                        class="form-control select2"
                        value={inpval.EmployeeCode}
                        name="EmployeeCode"
                        onChange={setdata}
                      >
                        <option>Select Code----</option>

                        {getuserdata.map((element, id) => {
                          return (
                            <>
                              <option>{element.EmployeeCode}</option>
                            </>
                          );
                        })}
                      </select>
                    </form>
                  </div>

                  {/* -----------------------------------------------Department ID:------------------------------------------------------- */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Department ID:
                    </label>
                    <form class="col-md-12">
                      <select
                        class="form-control select2"
                        value={inpval.DepartmentID}
                        name="DepartmentID"
                        onChange={setdata}
                      >
                        <option>Select Code----</option>

                        {getuserdata.map((element, id) => {
                          return (
                            <>
                              <option>{element.EmployeeCode}</option>
                            </>
                          );
                        })}
                      </select>
                    </form>
                  </div>
                  {/* ----------------------------------------------- Employee First Name:------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Employee First Name:
                      </label>
                      <form class="col-md-12">
                        <select
                          class="form-control select2"
                          value={inpval.EmployeeFirstName}
                          name="EmployeeFirstName"
                          onChange={setdata}
                        >
                          <option>Select First Name----</option>

                          {getuserdata.map((element, id) => {
                            return (
                              <>
                                <option>{element.EmployeeFirstName} </option>
                              </>
                            );
                          })}
                        </select>
                      </form>
                    </div>
                    {/* -----------------------------------------------DepartmentHead:------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Employee Last Name:
                      </label>
                      <form class="col-md-12">
                        <select
                          class="form-control select2"
                          value={inpval.EmployeeLastName}
                          name="EmployeeLastName"
                          onChange={setdata}
                        >
                          <option>Select Last Name----</option>

                          {getuserdata.map((element, id) => {
                            return (
                              <>
                                <option>{element.EmployeeLastName}</option>
                              </>
                            );
                          })}
                        </select>
                      </form>
                    </div>
                  </div>
                  {/* ----------------------------------------------- Employee LastName:------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Department Name:
                      </label>

                      <form class="col-md-12">
                        <select
                          class="form-control select2"
                          value={inpval.DepartmentName}
                          onChange={setdata}
                          name="DepartmentName"
                        >
                          <option>Select Department----</option>
                          <option>GITL</option>
                          <option>DGTL</option>

                          {/* {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option>{element.EmployeeDepartment}</option>
                        </>
                      );
                    })} */}
                        </select>
                      </form>
                    </div>
                    {/* -----------------------------------------------DepartmentHead:------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Department Head:
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Enter DepartmentHead"
                        id="ExampleInputDepartmentHead"
                        value={inpval.DepartmentHead}
                        onChange={setdata}
                        name="DepartmentHead"
                      />
                    </div>
                  </div>
                  {/* -----------------------------------------------Date Of Joining:------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Date Of Joining Department:
                      </label>
                      <br></br>
                      <input
                        required
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        id="ExampleInputL1"
                        value={inpval.DateOfJoining}
                        onChange={setdata}
                        name="DateOfJoining"
                      />
                    </div>
                    {/* -----------------------------------------------Last Joining:------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Till Date:
                      </label>
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value={"-"}
                          onChange={setdata}
                          name="LastDate"
                          id="flexRadioDefault1"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Till Date
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row gx-3 mb-3">
                    {/* ----------------------------------------------- Till Date:------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Last Date Of Department:
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        id="ExampleInputL1"
                        value={inpval.LastDate}
                        onChange={setdata}
                        name="LastDate"
                      />
                    </div>
                    {/* --------------------------------------------------------------------Ststus----------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Current Status:
                      </label>
                      <br></br>
                      <>
                        <input
                          required
                          type="radio"
                          class="btn-check"
                          name="Status"
                          value="Active"
                          onChange={setdata}
                          id="success-outlined"
                        />
                        <label
                          class=" btn btn-outline-success"
                          for="success-outlined"
                        >
                          Active
                        </label>{" "}
                      </>
                      <>
                        <input
                          required
                          type="radio"
                          class="btn-check"
                          name="Status"
                          value="Not-Active"
                          onChange={setdata}
                          id="danger-outlined"
                        />
                        <label
                          class="btn btn-outline-danger"
                          for="danger-outlined"
                        >
                          In-Active
                        </label>
                        {"  "}
                      </>
                    </div>
                    {/* -----------------------------------------------Till Date:------------------------------------------------------- */}
                  </div>
                  <br></br>
                  <br></br>

                  {/* -----------------------------------------------submit------------------------------------------------------- */}

                  {/* <!-- Save changes button--> */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-primary">Submit</button>
                    {/* <button
                    type="submit"
                    required
                    onClick={addinpdata}
                    disabled={
                      (!inpval.EmployeeCode,
                      !inpval.EmployeeFirstName,
                      !inpval.EmployeeLastName,
                      !inpval.EmployeeEmail,
                      !inpval.EmployeeAge,
                      !inpval.EmployeeGender,
                      !inpval.EmployeeSalary,
                      !inpval.EmployeeGrade,
                      !inpval.EmployeeDepartment,
                      !inpval.EmployeeL1,
                      !inpval.DateOfJoining)
                    }
                    // onClick={() => {
                    //   addinpdata();
                    // }}
                    className="btn btn-success "
                  >
                    Submit
                  </button> */}
                  </div>
                  <br></br>
                  <div
                    className="backnext"
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      marginLeft: 20,
                    }}
                  >
                    <NavLink to={`/department`}>
                      <button className="btn btn-dark ">Back</button>
                    </NavLink>
                    <NavLink to={`/deptregister`}>
                      <button
                        type="submit"
                        required
                        disabled={
                          (!inpval.EmployeeCode,
                          !inpval.EmployeeFirstName,
                          !inpval.EmployeeLastName,
                          !inpval.EmployeeEmail,
                          !inpval.EmployeeAge,
                          !inpval.EmployeeGender,
                          !inpval.EmployeeSalary,
                          !inpval.EmployeeGrade,
                          !inpval.EmployeeDepartment,
                          !inpval.EmployeeL1,
                          !inpval.DateOfJoining,
                          !inpval.EmployeeBirthdate,
                          !inpval.EmployeePhone)
                        } // onClick={() => {
                        //   addinpdata();
                        // }}
                        className="btn btn-dark "
                        style={{
                          flex: 2,
                          flexDirection: "row",
                          marginLeft: 20,
                          float: "right",
                        }}
                      >
                        Next
                      </button>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <br></br>
          <Footer />
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default DepartRegister;
