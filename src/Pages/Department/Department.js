import React, { useState, useEffect } from "react";
import { urldget, urldelete } from "../Unknown/Config";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import { green } from "@mui/material/colors";
import { CSVLink } from "react-csv";
import Footer from "../Components/Footer";

const Department = () => {
  const [getuserdata, setUserdata, setDLTdata] = useState([]);

  const [selects, setSelects] = useState();

  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(urldget, {
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

  const deleteuser = async (EmployeeCode) => {
    const res2 = await fetch(
      `https://329i7alj9c.execute-api.us-east-1.amazonaws.com/department/delete/${EmployeeCode}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data2 = await res2.json();

    console.log(data2);

    if (res2.status === 422 || !data2) {
      console.log("error");
    } else {
      console.log("user deleted");

      getdata();
    }
  };

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      {/* ---------------------------------------TABLE---------------------------------------------- */}
      <div className="main">
        <div className="splitr right">
          <div class="card text-center">
            <div class="card-header">
              {" "}
              <h3>Department Management System</h3>
            </div>
            {/* <h5 class="card-title">Special title treatment</h5> */}
            <div className="mt">
              <div className="container-fluid box">
                {/* <div className="ems">
                    <h3>Department Management System</h3>
                  </div> */}
                <div className="add_btn  ">
                  <div className="addbuttons">
                    <NavLink
                      to="/deptregister"
                      className="btn btn-primary btn-sm "
                    >
                      Add Department +
                    </NavLink>{" "}
                    <CSVLink
                      data={getuserdata}
                      className="btn btn-success btn-sm "
                    >
                      Export to Excel
                    </CSVLink>
                    {/* <NavLink
                  to="/deptregister"
                  className="btn btn-light border-dark rounded-pill"
                >
                  Add Department
                </NavLink> */}
                  </div>
                </div>
                <div className="table-responsive">
                  <table class="table table-bordered border auto-index">
                    <thead>
                      <tr className="table-light">
                        <th scope="col">Action</th>
                        <th scope="col">Sr No</th>
                        <th scope="col">EmployeeCode</th>
                        {/* <th scope="col">DepartmentID</th> */}

                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>

                        <th scope="col">Department Name</th>
                        <th scope="col">Department Head</th>
                        <th scope="col">DateOfJoining</th>
                        <th scope="col">LastDate</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {getuserdata.map((element, id) => {
                        return (
                          <>
                            <tr>
                              <td>
                                <NavLink
                                  to={`/departedit/${element.EmployeeCode}`}
                                >
                                  <button className="btn btn-link">
                                    <b>edit</b>
                                  </button>
                                </NavLink>
                              </td>
                              <td>
                                <b>{id++}</b>
                              </td>
                              <th scope="row">{element.EmployeeCode}</th>
                              {/* <td>
                          <b>{element.DepartmentID}</b>
                        </td> */}
                              <td>
                                <b>{element.EmployeeFirstName}</b>
                              </td>
                              <td>
                                <b>{element.EmployeeLastName}</b>
                              </td>
                              <td>
                                <b>{element.DepartmentName}</b>
                              </td>
                              <td>
                                <b>{element.DepartmentHead}</b>
                              </td>
                              <td>
                                <b>{element.DateOfJoining}</b>
                              </td>
                              <td>
                                <b>{element.LastDate}</b>
                              </td>

                              <td>
                                <b>{element.Status}</b>
                              </td>

                              <td className="d-flex justify-content-between ">
                                {/* <NavLink
                            to={`/departdetails/${element.EmployeeCode}`}
                          >
                            <button className="btn btn-success">read</button>
                          </NavLink> */}
                                {/* <NavLink to={`/departedit/${element.EmployeeCode}`}>
                            <button className="btn btn-primary">update</button>
                          </NavLink> */}
                                {/* <NavLink to={`/deleteuser/${element._id}`}>
                          <button className="btn btn-danger">Delete</button>
                          </NavLink> */}
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    deleteuser(element.EmployeeCode)
                                  }
                                >
                                  delete
                                </button>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
          <div>
            <br></br>
            <Footer />
            <br></br>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Department;
