import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import Navbar from "./Navbar";
import CircularProgress from "@mui/material/CircularProgress";

const Dashboard = () => {
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <div className="main">
      <div className="splitr right">
        <h3>Dashboard</h3>
        <br></br>
        <div class="container px-2 text-center">
          <div class="row gx-5">
            <div class="col">
              <div class="card1">
                <div class="card-body1">
                  <div class="head">
                    <h5> Total Employee count: 50 </h5>
                    {/* <h5> Count 50 </h5> */}
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
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <div class="col">
              <div class="card1">
                <div class="card-body1">
                  <div class="head">
                    <h5> Total Department count: 50 </h5>
                    {/* <h5> Count 50 </h5> */}
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
                    {/* <h5> Count 50 </h5> */}
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
            ////////////////////////////////
            <div class="col">
              <div class="card2">
                <div class="card-body2">
                  <div class="head">
                    <h5> Project</h5>
                    {/* <h5> Count 50 </h5> */}
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
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
