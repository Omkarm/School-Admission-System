import React from "react";
import IconButton from "@mui/material/IconButton";

import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  return (
    <div className="main">
      {/* <div className="splittop right">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <h4>Welcome Omkar More</h4>
          <div className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              <AccountCircleRoundedIcon fontSize="large" />
            </a>
            <ul className="dropdown-menu dropbox">
              <li>
                <a className="dropdown-item" href="/account">
                  Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/personalproject">
                  Personal Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/signout">
                  SignOut
                </a>
              </li>
            </ul>
          </div>
          &nbsp;&nbsp;&nbsp;
        </div>
      </div> */}

      <div className="split left">
        &nbsp;&nbsp;&nbsp;
        <div className="row">
          <button
            class="btn btn-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <MenuIcon />
          </button>
          <div
            class="offcanvas offcanvas-start"
            tabindex="1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Management System
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <div class="d-grid gap-2 col-8 mx-auto">
                  {/* <h4>Welcome</h4>&nbsp;&nbsp;&nbsp; */}
                  {/* <a
                class="btn btn-primary"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Link with href
              </a> */}
                  <button type="button" class="btn btn-outline-dark btn-sm ">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/dashboard"
                      style={{ textAlign: "center" }}
                    >
                      <GridViewOutlinedIcon />
                      {"   "}
                      Dashboard
                    </a>
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  {/* <button type="button" class="btn btn-outline-dark btn-sm ">
                <a
                  className="nav-link active dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <PersonAddOutlinedIcon />
                  {"   "}
                  Employees{" "}
                </a>
                <ul className="dropdown-menu dropbox">
                  <li>
                    <a className="dropdown-item" href="/account">
                      Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/personalproject">
                      Personal Projects
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/settings">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/signout">
                      SignOut
                    </a>
                  </li>
                </ul>
              </button> */}
                  <button
                    class="btn btn-outline-dark btn-sm "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <PersonAddOutlinedIcon />
                    {"   "}
                    Student <ArrowDropDownIcon />
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <div class="collapse" id="collapseExample">
                    <div class="card card-body">
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-sm "
                      >
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/admission"
                          style={{ textAlign: "center" }}
                        >
                          Student Data
                        </a>
                      </button>
                      <br></br>
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-sm "
                      >
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/addstudent"
                          style={{ textAlign: "center" }}
                        >
                          New Admission
                        </a>
                      </button>
                    </div>
                    <br></br>
                  </div>
                  <button
                    class="btn btn-outline-dark btn-sm "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#staff"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <PersonAddOutlinedIcon />
                    {"   "}
                    Staff <ArrowDropDownIcon />
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <div class="collapse" id="staff">
                    <div class="card card-body">
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-sm "
                      >
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/employee"
                          style={{ textAlign: "center" }}
                        >
                          Principle
                        </a>
                      </button>
                      <br></br>
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-sm "
                      >
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/teachertable"
                          style={{ textAlign: "center" }}
                        >
                          Teachers
                        </a>
                      </button>
                      <br></br>
                      <button
                        type="button"
                        class="btn btn-outline-dark btn-sm "
                      >
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/supportstaff"
                          style={{ textAlign: "center" }}
                        >
                          Support Staff
                        </a>
                      </button>
                    </div>
                    <br></br>
                  </div>
                  <button type="button" class="btn btn-outline-dark btn-sm ">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/department"
                      style={{ textAlign: "center" }}
                    >
                      <BadgeOutlinedIcon />
                      {"   "}
                      Library
                    </a>
                  </button>
                  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-dark btn-sm ">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/home"
                      style={{ textAlign: "center" }}
                    >
                      <SettingsOutlinedIcon />
                      {"   "}
                      Settings
                    </a>
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  <button type="button" class="btn btn-outline-dark btn-sm">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                      style={{ textAlign: "center" }}
                    >
                      <ExitToAppOutlinedIcon />
                      {"   "}
                      SignOut
                    </a>
                  </button>
                  &nbsp;&nbsp;&nbsp;
                  {/* <div
                class="offcanvas offcanvas-start"
                tabindex=""
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                    Offcanvas
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <div class="dropdown mt-3">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                    >
                      Dropdown button
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
                  {/* <button type="button" class="btn btn-light "><GridViewOutlinedIcon/>{"   "}
                Dashboard
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light "><PersonAddOutlinedIcon/>{"   "}
                Employees
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light "><BadgeOutlinedIcon/>{"   "}
                Department
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light "><DescriptionOutlinedIcon/>{"   "}
                Department
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light"><SettingsOutlinedIcon/>{"   "}
                Settings
              </button> &nbsp;&nbsp;&nbsp;
              <button type="button" class="btn btn-light"><ExitToAppOutlinedIcon/>{"   "}
                SignOut
              </button> &nbsp;&nbsp;&nbsp; */}
                </div>
              </div>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;
          {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </div>
  );
};

export default Home;
