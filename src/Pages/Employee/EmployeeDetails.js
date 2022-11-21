import React, { useState, useEffect } from "react";

import { urlget, urldelete } from "../Unknown/Config";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import { elementAcceptingRef } from "@mui/utils";

const EmployeeDetails = () => {
  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  console.log(getuserdata);

  // const getdata = async (e) => {
  //   const res = await fetch(urlget, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   const data = await res.json();
  //   console.log(data);

  //   if (res.status === 422 || !data) {
  //     console.log("error");
  //   } else {
  //     setUserdata(data);
  //     console.log("getdata");
  //   }
  // };

  // useEffect(() => {
  //   getdata();
  // }, []);
  const id = useParams();

  const { EmployeeCode } = useParams("");
  const { EmployeeName } = useParams("");

  console.log(id, EmployeeCode);

  const getdata = async () => {
    const res = await fetch(
      `http://localhost:5000/employee/getid/${EmployeeCode}`,
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
      setUserdata(data);
      console.log("getiddata");
    }
  };

  useEffect(() => {
    getdata();
  });

  const deleteuser = async (EmployeeCode) => {
    const res2 = await fetch(
      `http://localhost:5000/employee/delete/${EmployeeCode}`,
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

  // const currDate = new Date().toLocaleDateString();

  const dt = null;
  const [cdate, setDate] = useState(dt);
  const handelDate = () => {
    let dt = new Date().toLocaleDateString();
    setDate(dt);
  };
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div className="container">
      <div id="content" className="content p-0">
        <div className="profile-header">
          <div className="profile-header-cover"></div>

          <div className="profile-header-content">
            <div className="profile-header-img">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                style={{ width: 100 }}
                alt=""
              />
            </div>

            <div className="profile-header-info">
              <h4 className="m-t-sm">Clyde Stanley</h4>
              <p className="m-b-sm">UXUI + Frontend Developer</p>
              <a href="#" className="btn btn-xs btn-primary mb-3">
                Edit Profile
              </a>
            </div>
          </div>
        </div>

        <div className="profile-container">
          <div className="row row-space-20">
            <div className="col-md-8">
              <div className="tab-content p-0">
                <div className="tab-pane active show" id="profile-about">
                  <table className="table table-profile">
                    <thead>
                      <tr>
                        <th colspan="2">EMPLOYEE DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="field">
                          {" "}
                          Employee Code - {EmployeeCode}
                        </td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeCode}</b>
                                </td>
                              );
                            })} */}
                            <span style={{ fontWeight: 600 }}>
                              {getuserdata.EmployeeCode}
                            </span>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">
                          {" "}
                          Employee Name - {EmployeeName}
                        </td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeName}</b>
                                </td>
                              );
                            })} */}
                            <span style={{ fontWeight: 600 }}>
                              {getuserdata.EmployeeName}
                            </span>{" "}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Employee Age - {}</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeAge}</b>
                                </td>
                              );
                            })} */}
                            {getuserdata.EmployeeAge}
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="field">Employee Gender - {""}</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeGender}</b>
                                </td>
                              );
                            })} */}
                            {getuserdata.EmployeeGender}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Employee Salary -</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeSalary}</b>
                                </td>
                              );
                            })} */}
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="field">Employee Grade -</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeGrade}</b>
                                </td>
                              );
                            })} */}
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="field">Employee Department -</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeDepartment}</b>
                                </td>
                              );
                            })} */}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Employee L1 -</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.EmployeeL1}</b>
                                </td>
                              );
                            })} */}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Date Of Joining -</td>
                        <td className="value">
                          <div className="m-b-5">
                            {/* {getuserdata.map((element, id) => {
                              return (
                                <td>
                                  <b>{element.DateOfJoining}</b>
                                </td>
                              );
                            })} */}
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table table-profile">
                    <thead>
                      <tr>
                        <th colspan="2">CONTACT INFORMATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="field">Mobile Phones</td>
                        <td className="value">
                          +44 7700 900860
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Email</td>
                        <td className="value">
                          admin@infinite.com
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Facebook</td>
                        <td className="value">
                          http://facebook.com/infinite.admin
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Website</td>
                        <td className="value">
                          http://seantheme.com
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Address</td>
                        <td className="value">
                          Twitter, Inc.{" "}
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                          <br />
                          1355 Market Street, Suite 900
                          <br />
                          San Francisco, CA 94103
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table className="table table-profile">
                    <thead>
                      <tr>
                        <th colspan="2">BASIC INFORMATION</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="field">Birth of Date</td>
                        <td className="value">
                          November 4, 1989
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Gender</td>
                        <td className="value">
                          Male
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Facebook</td>
                        <td className="value">
                          http://facebook.com/infinite.admin
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="field">Website</td>
                        <td className="value">
                          http://seantheme.com
                          <a href="#" className="m-l-10">
                            Edit
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-md-4 hidden-xs hidden-sm">
              <ul className="profile-info-list">
                <li className="title">PERSONAL INFORMATION</li>
                <li>
                  <div className="field">Occupation:</div>
                  <div className="value">UXUI / Frontend Developer</div>
                </li>
                <li>
                  <div className="field">Skills:</div>
                  <div className="value">
                    C++, PHP, HTML5, CSS, jQuery, MYSQL, Ionic, Laravel,
                    Phonegap, Bootstrap, Angular JS, Angular JS, Asp.net
                  </div>
                </li>
                <li>
                  <div className="field">Birth of Date:</div>
                  <div className="value">1989/11/04</div>
                </li>
                <li>
                  <div className="field">Country:</div>
                  <div className="value">San Francisco</div>
                </li>
                <li>
                  <div className="field">Address:</div>
                  <div className="value">
                    <address className="m-b-0">
                      Twitter, Inc.
                      <br />
                      1355 Market Street, Suite 900
                      <br />
                      San Francisco, CA 94103
                    </address>
                  </div>
                </li>
                <li>
                  <div className="field">Phone No.:</div>
                  <div className="value">(123) 456-7890</div>
                </li>
                <li className="title">FRIEND LIST (9)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
