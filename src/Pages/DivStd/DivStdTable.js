import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { Button, Popover, OverlayTrigger } from "react-bootstrap";

import { divstdurlget, urldget, urldelete } from "../Unknown/ConfigDivStd";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const DivStdTable = () => {
  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(divstdurlget, {
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

  const deleteuser = async (StudentCode) => {
    const res2 = await fetch(
      `https://ryynvhih1f.execute-api.us-east-1.amazonaws.com/delete/${StudentCode}`,
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
  // const [file, setFile] = useState();
  // function handleChange(e) {
  //   console.log(e.target.files);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // }
  /////////////////////////////////////////////////////////////////////////////////////
  let allresult;
  let filteredresult;
  let filteredresult1;
  let filteredresult2;
  let filteredresult3;

  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearchall = (event) => {
    let searchtextall = event.target.value;

    console.log(searchtextall);

    console.log(getuserdata);

    allresult = getuserdata.filter((item) =>
      item.StudentCode.toLowerCase()
        .toLowerCase()
        .includes(searchtextall.toLowerCase())
    );

    setUserdata(allresult);

    console.log(allresult);
  };
  /////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearch = (event) => {
    let searchtext = event.target.value;

    console.log(searchtext);

    console.log(getuserdata);

    filteredresult = getuserdata.filter((item) =>
      item.StudentCode.toLowerCase().includes(searchtext.toLowerCase())
    );

    setUserdata(filteredresult);

    console.log(filteredresult);
  };
  /////////////////////////////////////////////////////////////////////////////////////
  const handleSearch1 = (event) => {
    let searchtext1 = event.target.value;

    console.log(searchtext1);

    console.log(getuserdata);

    filteredresult1 = getuserdata.filter((item) =>
      item.StudentEmail.toLowerCase().includes(searchtext1.toLowerCase())
    );

    setUserdata(filteredresult1);

    console.log(filteredresult1);
  };
  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearch2 = (event) => {
    let searchtext2 = event.target.value;

    console.log(searchtext2);

    console.log(getuserdata);

    filteredresult2 = getuserdata.filter((item) =>
      item.ClassTeacher.toLowerCase().includes(searchtext2.toLowerCase())
    );

    setUserdata(filteredresult2);

    console.log(filteredresult2);
  };
  /////////////////////////////////////////////////////////////////////////////////////

  const handleSearch3 = (event) => {
    let searchtext3 = event.target.value;

    console.log(searchtext3);

    console.log(getuserdata);

    filteredresult3 = getuserdata.filter((item) =>
      item.StudentEnglishTeacher.toLowerCase().includes(
        searchtext3.toLowerCase()
      )
    );

    setUserdata(filteredresult3);

    console.log(filteredresult3);
  };

  //////////////////////////////////////////////////////////////////
  const [file, setFile] = useState();

  const filechangeHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", file);

    fetch("http://localhost:5000/getimg", {
      method: "GET",
      body: data,
    })
      .then((result) => {
        console.log("Image");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  ///////////////////////////////////////////////////////////
  const popoverHoverFocus = (
    <Popover id="popover-trigger-hover-focus" title="Popover bottom">
      {getuserdata.map((element, id) => {
        return (
          <>
            <option>{element.DepartmentHead}</option>
          </>
        );
      })}
      <strong>Head:</strong> Sir
    </Popover>
  );
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <div className="main">
      <div className="splitr right">
        <div class="card text-center">
          <div class="card-header">
            {" "}
            <h3>Student Management System</h3>
          </div>
          {/* <h5 class="card-title">Special title treatment</h5> */}
          <div className="mt">
            <div className="container-fluid box">
              {/* <div className="ems">
                    <h3>Student Management System</h3>
                  </div> */}
              <div className="add_btn">
                <div className="addbuttons">
                  <NavLink to="/divstdadd" className="btn btn-primary btn-sm ">
                    Add DivStd +
                  </NavLink>{" "}
                  <CSVLink
                    data={getuserdata}
                    className="btn btn-success btn-sm "
                  >
                    Export to Excel
                  </CSVLink>
                </div>
              </div>

              <div className="table-responsive">
                <table class="table table-bordered border auto-index">
                  <thead>
                    <tr className="table-light">
                      <th scope="col">Action</th>
                      <th scope="col">Sr No</th>
                      <th scope="col">Profile</th>
                      <th scope="col">
                        <div class="form-outline mb-4 ">
                          <input
                            id="searchtext"
                            type="text"
                            placeholder="Search StudentCode"
                            onChange={handleSearch}
                          />
                        </div>
                        DivStd
                      </th>

                      <th scope="col">
                        <div class="form-outline mb-4">
                          <input
                            id="searchtext"
                            type="text"
                            placeholder="Search ClassTeacher"
                            onChange={handleSearch2}
                          />
                        </div>
                        ClassTeacher
                      </th>
                      <th scope="col">
                        <div class="form-outline mb-4">
                          <input
                            id="searchtext"
                            type="text"
                            placeholder="Search EnglishTeacher"
                            onChange={handleSearch3}
                          />
                        </div>
                        EnglishTeacher
                      </th>
                      <th scope="col">HindiTeacher</th>
                      <th scope="col">MarathiTeacher</th>
                      <th scope="col">MathsTeacher</th>
                      <th scope="col">GeographyTeacher</th>
                      <th scope="col">HistoryTeacher</th>
                      <th scope="col">ScienceTeacher</th>
                      <th scope="col">DrawingTeacher</th>

                      <th scope="col"></th>
                    </tr>
                  </thead>

                  <tbody>
                    {getuserdata.map((element, id) => {
                      return (
                        <>
                          <tr>
                            <td>
                              <NavLink to={`/empedit/${element.StudentCode}`}>
                                <button className="btn btn-link">
                                  <b>edit</b>
                                </button>
                              </NavLink>
                            </td>
                            <th scope="row">
                              <b>{id++}</b>
                            </th>
                            <td>
                              <img src={file} />
                            </td>

                            <td>
                              <b>{element.DivStd}</b>
                            </td>

                            <td>
                              <b>{element.ClassTeacher}</b>
                            </td>
                            <td>
                              <b>{element.EnglishTeacher}</b>
                            </td>
                            <td>
                              <b>{element.HindiTeacher}</b>
                            </td>
                            <td>
                              <b>{element.MarathiTeacher}</b>
                            </td>
                            <td>
                              <b>{element.MathsTeacher}</b>
                            </td>
                            <td>
                              <b>{element.GeographyTeacher}</b>
                            </td>
                            <td>
                              <b>{element.HistoryTeacher}</b>
                            </td>
                            <td>
                              <b>{element.ScienceTeacher}</b>
                            </td>
                            <td>
                              <b>{element.DrawingTeacher}</b>
                            </td>

                            <td className="d-flex justify-content-between ">
                              {/* <NavLink to={`/details/${element.StudentCode}`}>
                              <button className="btn btn-success">read</button>
                            </NavLink> */}
                              {/* <NavLink to={`/edit/${element.StudentCode}`}>
                              <button className="btn btn-primary">
                                update
                              </button>
                            </NavLink> */}
                              {/* <NavLink to={`/deleteuser/${element._id}`}>
                            <button className="btn btn-danger">Delete</button>
                            </NavLink> */}
                              <button
                                className="btn btn-danger"
                                onClick={() => deleteuser(element.StudentCode)}
                              >
                                delete
                              </button>
                              {/* <button onClick={handelDate}>
                              Get Current date
                            </button> */}
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                  <br></br>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* ////////////////////////////////// */}
        <div>
          <br></br>
          <Footer />
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default DivStdTable;
