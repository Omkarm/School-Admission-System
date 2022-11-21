import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { urldupdate, urlgetid, urlget, urldpost } from "../Unknown/Config";

const DepartEdit = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: "",
    DepartmentID: "",
    EmployeeFirstName: "",
    EmployeeLastName: "",
    DepartmentName: "",
    DepartmentHead: "",
    DateOfJoining: "",
    Status: "",
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

  const [getuserdata, setUserdata, setDLTdata] = useState([]);
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

  // const [getuseriddata, setUseriddata] = useState([]);
  // console.log(getuseriddata);

  // const { id } = useParams("");
  // console.log(id);

  // const getiddata = async (DepartmentID) => {
  //   const res = await fetch(
  //     `http://localhost:5000/department/getdepid/${DepartmentID}`,

  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   const data = await res.json();
  //   console.log(data);

  //   if (res.status === 422 || !data) {
  //     console.log("error");
  //   } else {
  //     setINP(data);
  //     console.log("getdatabyid");
  //   }
  // };
  // useEffect(() => {
  //   getiddata();
  // }, []);
  const updateuser = async (e) => {
    e.preventDefault();

    const {
      EmployeeCode,
      DepartmentID,
      EmployeeFirstName,
      EmployeeLastName,
      DepartmentName,
      DepartmentHead,
      DateOfJoining,
      Status,
    } = inpval;

    const res2 = await fetch(urldupdate, {
      method: "PUT",
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
        Status,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("Data Updated Succesfully");
    }
  };

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <div class="container-xl px-4 mt-4">
      {/* <!-- Account page navigation--> */}

      <div class="row">
        <div class="col-xl-8">
          {/* <!-- Account details card--> */}
          <div class="card mb-4">
            <div class="card-header">Update Employee Joining Details-</div>
            <div class="card-body">
              <form>
                {/* -----------------------------------------------EmployeeCode------------------------------------------------------- */}
                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername">
                    Employee Code:
                  </label>
                  {/* <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Salary Code:"
                    id="ExampleInputCode"
                    value={inpval.EmployeeCode}
                    onChange={setdata}
                    name="EmployeeCode"
                  /> */}
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
                  {/* <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Salary Code:"
                    id="ExampleInputCode"
                    value={inpval.EmployeeCode}
                    onChange={setdata}
                    name="EmployeeCode"
                  /> */}
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

                {/* -----------------------------------------------EmployeeFirstName------------------------------------------------------- */}
                <div class="row gx-3 mb-3">
                  {/* <!-- Form Group (first name)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">
                      First name:
                    </label>

                    <form class="col-md-12">
                      <select
                        class="form-control select2"
                        value={inpval.EmployeeFirstName}
                        onChange={setdata}
                        name="EmployeeFirstName"
                      >
                        <option>Select First Name----</option>

                        {getuserdata.map((element, id) => {
                          return (
                            <>
                              <option>{element.EmployeeFirstName}</option>
                            </>
                          );
                        })}
                      </select>
                    </form>
                  </div>
                  {/* -----------------------------------------------EmployeeLastName------------------------------------------------------- */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputLastName">
                      Last name:
                    </label>
                    {/* <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Last name:"
                      id="ExampleInputName"
                      value={inpval.EmployeeLastName}
                      onChange={setdata}
                      name="EmployeeLastName"
                    /> */}

                    <form class="col-md-12">
                      <select
                        class="form-control select2"
                        value={inpval.EmployeeLastName}
                        onChange={setdata}
                        name="EmployeeLastName"
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
                {/* -----------------------------------------------DepartmentHead------------------------------------------------------- */}
                <div class="row gx-3 mb-3">
                  {/* <!-- Form Group (organization name)--> */}
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputOrgName">
                      DepartmentHead:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter DepartmentHead"
                      id="DepartmentHead"
                      value={inpval.DepartmentHead}
                      onChange={setdata}
                      name="DepartmentHead"
                    />
                  </div>
                  {/* -----------------------------------------------EmployeeDepartment------------------------------------------------------- */}

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">
                      Department Name:
                    </label>
                    <form class="col-md-12">
                      <select
                        required
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
                  {/* -----------------------------------------------EmployeeGender------------------------------------------------------- */}

                  {/* -----------------------------------------------EmployeeGrade------------------------------------------------------- */}
                  {/* <div class="col-md-6">
                    <label class="small mb-1" for="inputLastName">
                      Grade:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Grade"
                      id="ExampleInputGrade"
                      value={inpval.EmployeeGrade}
                      onChange={setdata}
                      name="EmployeeGrade"
                    />
                  </div> */}
                </div>
                <div class="row gx-3 mb-3">
                  {/* -----------------------------------------------EmployeeL1------------------------------------------------------- */}
                  {/* <div class="col-md-6">
                    <label class="small mb-1" for="inputLastName">
                      L+1:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter L+1"
                      id="ExampleInputL1"
                      value={inpval.EmployeeL1}
                      onChange={setdata}
                      name="EmployeeL1"
                    />
                  </div> */}
                </div>
                {/* -----------------------------------------------DateOfJoining------------------------------------------------------- */}

                <div class="mb-3">
                  <label class="small mb-1" for="inputEmailAddress">
                    Date Of Joining:
                  </label>
                  <input
                    type="date"
                    required
                    className="form-control"
                    placeholder="dd/mm/yyyy"
                    id="ExampleInputL1"
                    value={inpval.DateOfJoining}
                    onChange={setdata}
                    name="DateOfJoining"
                  />
                </div>

                <div class="mb-3">
                  <label class="small mb-1" for="inputEmailAddress">
                    Status:
                  </label>{" "}
                  <>
                    <input
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
                      type="radio"
                      class="btn-check"
                      name="Status"
                      value="Not-Active"
                      onChange={setdata}
                      id="danger-outlined"
                    />
                    <label class="btn btn-outline-danger" for="danger-outlined">
                      Not-Active
                    </label>
                    {"  "}
                  </>
                </div>
                {/* -----------------------------------------------EmployeeBirthdate------------------------------------------------------- */}

                <div class="row gx-3 mb-3">
                  {/* <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone">
                      Birth Date:
                    </label>
                    <input
                      type="date"
                      required
                      className="form-control"
                      placeholder="dd/mm/yyyy"
                      id="ExampleInputL1"
                      value={inpval.EmployeeBirthdate}
                      onChange={setdata}
                      name="EmployeeBirthdate"
                    />
                  </div> */}

                  {/* -----------------------------------------------EmployeePhone------------------------------------------------------- */}
                  {/* <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday">
                      Phone number:
                    </label>
                    <input
                      type="number"
                      required
                      className="form-control"
                      placeholder="eg: +91 9876543210"
                      id="ExampleInputL1"
                      value={inpval.EmployeePhone}
                      onChange={setdata}
                      name="EmployeePhone"
                    />
                  </div> */}
                </div>
                <br></br>
                {/* -----------------------------------------------submit------------------------------------------------------- */}

                {/* <!-- Save changes button--> */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                  {/* <button type="back" className="btn btn-primary">
                    <a href="/employee">Back</a>
                    Back
                  </button> */}
                  <button
                    type="submit"
                    required
                    onClick={updateuser}
                    disabled={
                      (!inpval.EmployeeCode,
                      !inpval.DepartmentID,
                      !inpval.EmployeeFirstName,
                      !inpval.EmployeeLastName,
                      !inpval.DepartmentName,
                      !inpval.DepartmentHead)
                    }
                    // onClick={() => {
                    //   addinpdata();
                    // }}
                    className="btn btn-success "
                  >
                    Submit
                  </button>

                  <NavLink to={`/deptregister`}>
                    <button
                      type="submit"
                      required
                      disabled={
                        (!inpval.EmployeeCode,
                        !inpval.DepartmentID,
                        !inpval.EmployeeFirstName,
                        !inpval.EmployeeLastName,
                        !inpval.DepartmentName,
                        !inpval.DepartmentHead)
                      } // onClick={() => {
                      //   addinpdata();
                      // }}
                      className="btn btn-dark "
                    >
                      Next
                    </button>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* -----------------------------------------------Profile------------------------------------------------------- */}

        <div class="col-xl-4">
          {/* <!-- Profile picture card--> */}
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              {/* <!-- Profile picture image--> */}
              <img src={file} style={{ width: 100 }} />

              {/* <!-- Profile picture help block--> */}
              <div class="small font-italic text-muted mb-4">
                JPG or PNG no larger than 50kb
              </div>
              {/* <!-- Profile picture upload button--> */}
              <input
                type="file"
                className="form-control"
                placeholder="Profile"
                id="ExampleInputPassword1"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartEdit;
