import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { urldupdate, urlgetid, urlget, urldpost } from "../Unknown/Config";

const DepartEdit = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: "",
    DepartmentID: "",
    EmployeeName: "",
    DepartmentName: "",
    DepartmentHead: "",
    DateOfJoining: "",
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

  const [getuseriddata, setUseriddata] = useState([]);
  console.log(getuseriddata);

  const { id } = useParams("");
  console.log(id);

  const getiddata = async (DepartmentID) => {
    const res = await fetch(
      `http://localhost:5000/department/getdepid/${DepartmentID}`,

      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setINP(data);
      console.log("getdatabyid");
    }
  };
  useEffect(() => {
    getiddata();
  }, []);
  const updateuser = async (e) => {
    e.preventDefault();

    const {
      EmployeeCode,
      DepartmentID,
      EmployeeName,
      DepartmentName,
      DepartmentHead,
      DateOfJoining,
    } = inpval;

    const res2 = await fetch(urldupdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        EmployeeCode,
        DepartmentID,
        EmployeeName,
        DepartmentName,
        DepartmentHead,
        DateOfJoining,
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

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      <div className="Auth-form-container1">
        <form className="Auth-form1">
          <div className="Auth-form-content1">
            <h4 className="Auth-form-title1">Department Joining.</h4>
            <br></br>

            <div className="row">
              {/* <div className="mb-4 col-lg-2 col-md-4 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Employee Code:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Salarycode"
                  id="ExampleInputCode"
                  value={inpval.EmployeeCode}
                  onChange={setdata}
                  name="EmployeeCode"
                />
              </div> */}

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
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

              {/* <div className="mb-4 col-lg-2 col-md-4 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  DepartmentID:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter EmployeeCode"
                  id="DepartmentID"
                  value={inpval.DepartmentID}
                  onChange={setdata}
                  name="DepartmentID"
                />
              </div> */}

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Department ID:
                </label>

                <form class="col-md-12">
                  <select
                    class="form-control select2"
                    value={inpval.DepartmentID}
                    name="DepartmentID"
                    onChange={setdata}
                  >
                    <option>Select ID----</option>

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

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Employee Name:
                </label>

                <form class="col-md-12">
                  <select
                    class="form-control select2"
                    value={inpval.EmployeeName}
                    name="EmployeeName"
                    id="EmployeeName"
                    onChange={setdata}
                  >
                    <option>Select Name----</option>

                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option>
                            {element.EmployeeFirstName +
                              element.EmployeeLastName}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </form>
              </div>
              {/* <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Employee Name:
                </label>

                <form class="col-md-12">
                  <select
                    class="form-control select2"
                    value={inpval.EmployeeFirstName}
                    name="EmployeeName"
                    id="EmployeeName"
                    onChange={setdata}
                  >
                    <option>Select Name----</option>

                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option>{element.EmployeeLastName} </option>
                        </>
                      );
                    })}
                  </select>
                </form>
              </div> */}

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
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

              {/* <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  DepartmentName:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter DepartmentName"
                  id="ExampleInputGrade"
                  value={inpval.DepartmentName}
                  onChange={setdata}
                  name="DepartmentName"
                />
              </div> */}

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  DepartmentName:
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

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Date Of Joining:
                </label>

                {/* <DatePicker
                  selected={startDate}
                  // value={inpval.DateOfJoining}
                  onChange={(date) => setdata(date)}
                /> */}

                {/* <DatePicker
                  selected={date}
                  // value={inpval.DateOfJoining}
                  type="text"
                  className="form-control"
                  id="ExampleInputL1"
                  onChange={setdata}
                  value={inpval.DateOfJoining}
                  onChange={(date) => setDate(date, setdata)}
                  name="DateOfJoining"
                /> */}

                <input
                  type="date"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  id="ExampleInputL1"
                  value={inpval.DateOfJoining}
                  onChange={setdata}
                  name="DateOfJoining"
                />
              </div>
              {/* <div className="mb-4 col-lg-2 col-md-5 col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  ></input>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Till Date
                  </label>
                </div>
              </div> */}
              {/* <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  LastDate:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter LastDate"
                  id="ExampleInputL1"
                  value={inpval.LastDate}
                  onChange={setdata}
                  name="LastDate"
                />
              </div> */}
              {/* <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Status:
                </label>

                <form class="col-md-12">
                  <select
                    class="form-control select2"
                    value={inpval.Status}
                    onChange={setdata}
                    name="Status"
                  >
                    <option>Select Status----</option>
                    <option>Active</option>

                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option>{element.EmployeeDepartment}</option>
                        </>
                      );
                    })}
                  </select>
                </form>
              </div> */}

              {/* <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Upload Photo:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputPassword1"
                />
              </div> */}
              <br></br>
              <div className="d-grid gap-2 mt-3">
                <div className="backbtn">
                  {/* <button type="back" className="btn btn-primary">
                    <a href="/employee">Back</a>
                    Back
                  </button> */}
                  <h6>
                    <a href="/department">Back</a>
                  </h6>

                  <button
                    type="submit"
                    onClick={updateuser}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default DepartEdit;
