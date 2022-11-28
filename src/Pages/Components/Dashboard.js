import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import { divstdurlget, urldget, urldelete } from "../Unknown/ConfigDivStd";

import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import Navbar from "./Navbar";
import CircularProgress from "@mui/material/CircularProgress";

const Dashboard = () => {
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

  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <div className="main">
      <div className="splitr right">
        <div className="background">
          <h3>Dashboard</h3>
        </div>
        <br></br>
        <div class="grid-container">
          {/* ///////////////////////////////////////////////////////////////////////////// */}

          <div class="grid-item">
            <div className="content">
              <div className="title">
                <h5>Total Students</h5>
              </div>
              <div className="count">
                <div className="numbers">
                  <h5 style={{ color: "green", fontSize: "35px" }}>
                    {getuserdata.map((element, id, { length }) => {
                      return (
                        <th scope="row">
                          <b>{id + 1}</b>
                        </th>
                      );
                    })}
                    50
                  </h5>
                </div>
                {/* <div class="progress" style={{ height: "25px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{ width: "50%", height: "25px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div> */}
              </div>
              <div className="empbtn">
                <button type="button" class="btn btn-outline-primary">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/admission"
                    style={{ textAlign: "center" }}
                  >
                    {"   "}
                    view
                  </a>
                </button>{" "}
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////// */}

          <div class="grid-item">
            <div className="content">
              <div className="title">
                <h5>Total Teachers</h5>
                <div className="count">
                  <div className="numbers">
                    <h5 style={{ color: "green", fontSize: "35px" }}>30</h5>
                  </div>
                  {/* <div class="progress" style={{ height: "25px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{ width: "50%", height: "25px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div> */}
                </div>
                <div className="empbtn">
                  <button type="button" class="btn btn-outline-primary">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/teachertable"
                      style={{ textAlign: "center" }}
                    >
                      {"   "}
                      view
                    </a>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////// */}
          <div class="grid-item">
            <div className="content">
              <div className="title">
                <h5>Total Staff</h5>
              </div>
              <div className="count">
                <div className="numbers">
                  <h5 style={{ color: "green", fontSize: "35px" }}>10</h5>
                </div>
                {/* <div class="progress" style={{ height: "25px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{ width: "50%", height: "25px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div> */}
              </div>
              <div className="empbtn">
                <button type="button" class="btn btn-outline-primary">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/supportstaff"
                    style={{ textAlign: "center" }}
                  >
                    {"   "}
                    view
                  </a>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////////////////// */}

        <div class="grid-container">
          <div class="grid-item">
            <div className="content">
              <div className="title">
                <h5>title</h5>
                <div className="count">
                  <div className="numbers">
                    <h5 style={{ color: "green", fontSize: "35px" }}>count</h5>
                  </div>
                  {/* <div class="progress" style={{ height: "25px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{ width: "50%", height: "25px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div> */}
                </div>
                <div className="empbtn">
                  <button type="button" class="btn btn-outline-primary">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/teachertable"
                      style={{ textAlign: "center" }}
                    >
                      {"   "}
                      view
                    </a>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="grid-item">
            <div className="content">
              <div className="title">
                <h5>Title</h5>
                <div className="count">
                  <div className="numbers">
                    <h5 style={{ color: "green", fontSize: "35px" }}>count</h5>
                  </div>
                  {/* <div class="progress" style={{ height: "25px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-label="Example with label"
                      style={{ width: "50%", height: "25px" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div> */}
                </div>
                <div className="empbtn">
                  <button type="button" class="btn btn-outline-primary">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/teachertable"
                      style={{ textAlign: "center" }}
                    >
                      {"   "}
                      view
                    </a>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
        <div class="grid-container">
          <div class="grid-item">3</div>
        </div>
      </div>

      {/* <div className="splitr right">
        <h3>Dashboard</h3>
        <br></br>

        <div class="container px-2 text-center">
          <div class="row gx-5">
            <div class="col">
              <div class="card1">
                <div class="card-body1">
                  <div class="head">
                    <h5> Total Employee count: 50 </h5>
                  </div>
                  <div className="count">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "50%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                  </div>

                  <div className="empbtn">
                    <button type="button" class="btn btn-dark ">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/employee"
                        style={{ textAlign: "center" }}
                      >
                        {"   "}
                        view
                      </a>
                    </button>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
            <div class="col">
              <div class="card1">
                <div class="card-body1">
                  <div class="head">
                    <h5> Total Department count: 50 </h5>
                  </div>
                  <div className="count">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "50%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                  </div>

                  <div className="empbtn">
                    <button type="button" class="btn btn-dark ">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/department"
                        style={{ textAlign: "center" }}
                      >
                        {"   "}
                        view
                      </a>
                    </button>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <br></br>
        <div class="container px-2 text-center">
          <div class="row gx-5">
            <div class="col">
              <div class="card2">
                <div class="card-body2">
                  <div class="head">
                    <h5> Project</h5>
                  </div>
                  <div className="count">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "50%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                  </div>

                  <div className="empbtn">
                    <button type="button" class="btn btn-dark ">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/employee"
                        style={{ textAlign: "center" }}
                      >
                        {"   "}
                        view
                      </a>
                    </button>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
            <div class="col">
              <div class="card2">
                <div class="card-body2">
                  <div class="head">
                    <h5> Project</h5>
                  </div>
                  <div className="count">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-label="Example with label"
                        style={{ width: "50%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        50%
                      </div>
                    </div>
                  </div>

                  <div className="empbtn">
                    <button type="button" class="btn btn-dark ">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="/employee"
                        style={{ textAlign: "center" }}
                      >
                        {"   "}
                        view
                      </a>
                    </button>{" "}
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
