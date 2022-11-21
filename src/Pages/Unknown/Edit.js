import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import { NavLink, useParams } from "react-router-dom";
import { urlupdate, urlgetid, urlget } from "../Unknown/Config";

const Edit = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: "",
    EmployeeName: "",
    EmployeeAge: "",
    EmployeeSalary: "",
    EmployeeGrade: "",
    EmployeeDepartment: "",
    EmployeeL1: "",
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

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(
      `http://localhost:5000/employee/getid/${id}`,

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
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const {
      EmployeeCode,
      EmployeeName,
      EmployeeAge,
      EmployeeSalary,
      EmployeeGrade,
      EmployeeDepartment,
      EmployeeL1,
      DateOfJoining,
    } = inpval;

    const res2 = await fetch(urlupdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        EmployeeCode,
        EmployeeName,
        EmployeeAge,
        EmployeeSalary,
        EmployeeGrade,
        EmployeeDepartment,
        EmployeeL1,
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
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="Auth-form-container1">
        <form className="Auth-form1">
          <div className="Auth-form-content1">
            <h3 className="Auth-form-title1">Welcome:{id}</h3>

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
                  Employee Code:{id}
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

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Name:{getuserdata}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter UserName"
                  id="EmployeeName"
                  value={inpval.EmployeeName}
                  onChange={setdata}
                  name="EmployeeName"
                />
              </div>
              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Age:
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Age"
                  id="EmployeeAge"
                  value={inpval.EmployeeAge}
                  onChange={setdata}
                  name="EmployeeAge"
                />
              </div>

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Salary:
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Salary"
                  id="EmployeeSalary"
                  value={inpval.EmployeeSalary}
                  onChange={setdata}
                  name="EmployeeSalary"
                />
              </div>
              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Grade:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Grade"
                  id="EmployeeGrade"
                  value={inpval.EmployeeGrade}
                  onChange={setdata}
                  name="EmployeeGrade"
                />
              </div>
              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  DepartmentName:
                </label>

                <form class="col-md-12">
                  <select
                    class="form-control select2"
                    value={inpval.EmployeeDepartment}
                    onChange={setdata}
                    name="EmployeeDepartment"
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
                  L+1:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter L+1"
                  id="ExampleInputL1"
                  value={inpval.EmployeeL1}
                  onChange={setdata}
                  name="EmployeeL1"
                />
              </div>

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Date Of Joining:
                </label>

                <input
                  type="date"
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  id="DateOfJoining"
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
                      id="ExampleInputL1"
                      value={inpval.DateOfJoining}
                      onChange={setdata}
                      name="DateOfJoining"
                    ></input>
                    <label class="form-check-label" for="flexRadioDefault1">
                      Till Date
                    </label>
                  </div>
                </div> */}

              <div className="mb-4 col-lg-2 col-md-5 col-12">
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
              </div>

              <div className="mb-4 col-lg-2 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Upload Photo:
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputPassword1"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <div className="backbtn">
                  {/* <button type="back" className="btn btn-primary">
                    <a href="/employee">Back</a>
                    Back
                  </button> */}
                  <h6>
                    <a href="/employee">Back</a>
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

export default Edit;
