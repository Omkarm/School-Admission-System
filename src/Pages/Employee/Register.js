import React, { useState, useEffect } from "react";
import { urlpost, urlget } from "../Unknown/Config";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const Register = () => {
  const [inpval, setINP] = useState({
    EmployeeCode: "",
    EmployeeName: "",
    EmployeeEmail: "",
    EmployeeAge: "",
    EmployeeGender: "",
    EmployeeSalary: "",
    EmployeeGrade: "",
    EmployeeDepartment: "",
    EmployeeL1: "",
    DateOfJoining: "",
    LastDate: "",
    Profile: "",
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

  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
      EmployeeCode,
      EmployeeName,
      EmployeeEmail,
      EmployeeAge,
      EmployeeGender,
      EmployeeSalary,
      EmployeeGrade,
      EmployeeDepartment,
      EmployeeL1,
      DateOfJoining,
      LastDate,
      Profile,
    } = inpval;
    const res = await fetch(urlpost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeCode,
        EmployeeName,
        EmployeeEmail,
        EmployeeAge,
        EmployeeGender,
        EmployeeSalary,
        EmployeeGrade,
        EmployeeDepartment,
        EmployeeL1,
        DateOfJoining,
        LastDate,
        Profile,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("fill the data");
    } else {
      alert(
        "Employee Added Successfully. Please Add the Department Details in System/Department OR Click Next "
      );
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

  const [date, setDate] = useState(new Date());

  return (
    <header>
      <div className="Auth-form-container1">
        <form className="Auth-form1">
          <div className="Auth-form-content1">
            <h4 className="Auth-form-title1">Employee Joining.</h4>
            <br></br>

            <div className="row">
              <div className="mb-4 col-lg-3 col-md-4 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Employee Code:
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter Salarycode"
                  id="ExampleInputCode"
                  value={inpval.EmployeeCode}
                  onChange={setdata}
                  name="EmployeeCode"
                />
              </div>

              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Name:
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputName"
                  value={inpval.EmployeeName}
                  onChange={setdata}
                  name="EmployeeName"
                />
              </div>
              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Email:
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputName"
                  value={inpval.EmployeeEmail}
                  onChange={setdata}
                  name="EmployeeEmail"
                />
              </div>
              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Age:
                </label>
                <input
                  type="number"
                  required
                  className="form-control"
                  placeholder="Enter Age"
                  id="ExampleInputAge"
                  value={inpval.EmployeeAge}
                  onChange={setdata}
                  name="EmployeeAge"
                />
              </div>

              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Gender:
                </label>

                <form class="col-md-12">
                  <select
                    required
                    class="form-control select2"
                    value={inpval.EmployeeGender}
                    onChange={setdata}
                    name="EmployeeGender"
                  >
                    <option>Select Gender----</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Trans</option>

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

              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Salary:
                </label>
                <input
                  type="number"
                  required
                  className="form-control"
                  placeholder="Enter Salary"
                  id="ExampleInputSalary"
                  value={inpval.EmployeeSalary}
                  onChange={setdata}
                  name="EmployeeSalary"
                />
              </div>
              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
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
              </div>
              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  DepartmentName:
                </label>

                <form class="col-md-12">
                  <select
                    required
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

              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
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
              </div>

              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
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
              {/* <div className="mb-4 col-lg-3 col-md-5 col-12">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    required
                    id="ExampleInputL1"
                    value={inpval.TillDate}
                    onChange={setdata}
                    name="TillDate"
                  ></input>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Till Date
                  </label>
                </div>
              </div> */}

              {/* <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  LastDate:
                </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter LastDate"
                  id="ExampleInputL1"
                  value={inpval.LastDate}
                  onChange={setdata}
                  name="LastDate"
                />
              </div> */}

              <div className="mb-4 col-lg-3 col-md-5 col-12">
                <label for="ExampleInputPassword1" class=" form=label">
                  Upload Photo:
                </label>
                <input
                  type="file"
                  className="form-control"
                  placeholder="Enter UserName"
                  id="ExampleInputPassword1"
                  value={inpval.Profile}
                  onChange={handleChange}
                  name="Profile"
                />
              </div>
              <img src={file} style={{ width: 100 }} />
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="submit"
                  required
                  onClick={setFile}
                  // onClick={() => {
                  //   addinpdata();
                  // }}
                  className="btn btn-light btn-sm  "
                >
                  Upload
                </button>
              </div> */}

              <br></br>

              <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                {/* <button type="back" className="btn btn-primary">
                    <a href="/employee">Back</a>
                    Back
                  </button> */}
                <button
                  type="submit"
                  required
                  onClick={addinpdata}
                  disabled={
                    (!inpval.EmployeeCode,
                    !inpval.EmployeeName,
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
                </button>

                <NavLink to={`/deptregister`}>
                  <button
                    type="submit"
                    required
                    disabled={
                      (!inpval.EmployeeCode,
                      !inpval.EmployeeName,
                      !inpval.EmployeeEmail,
                      !inpval.EmployeeAge,
                      !inpval.EmployeeGender,
                      !inpval.EmployeeSalary,
                      !inpval.EmployeeGrade,
                      !inpval.EmployeeDepartment,
                      !inpval.EmployeeL1,
                      !inpval.DateOfJoining)
                    } // onClick={() => {
                    //   addinpdata();
                    // }}
                    className="btn btn-dark "
                  >
                    Next
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Register;
