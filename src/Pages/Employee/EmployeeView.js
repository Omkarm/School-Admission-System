import React, { useState, useEffect } from "react";

import { urlget, urldelete } from "../Unknown/Config";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
import Navbar from "../Components/Navbar";

const EmployeeView = () => {
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
    <div class="container-xl px-4 mt-4">
      <hr class="mt-0 mb-4"></hr>
      <div class="row">
        <div class="col-xl-4">
          <div class="card mb-4 mb-xl-0">
            <div class="card-header">Profile Picture</div>
            <div class="card-body text-center">
              <img
                class="img-account-profile rounded-circle mb-2"
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
                alt=""
              ></img>
              <div class="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              <button class="btn btn-primary" type="button">
                Upload new image
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card mb-4">
            <div class="card-header">Account Details</div>
            <div class="card-body">
              <form>
                <div class="mb-3">
                  <label class="small mb-1" for="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    class="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="Enter your username"
                    value="username"
                  ></input>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFirstName">
                      First name
                    </label>
                    <input
                      class="form-control"
                      id="inputFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      value="Valerie"
                    ></input>
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputLastName">
                      Last name
                    </label>
                    <input
                      class="form-control"
                      id="inputLastName"
                      type="text"
                      placeholder="Enter your last name"
                      value="Luna"
                    ></input>
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputOrgName">
                      Organization name
                    </label>
                    <input
                      class="form-control"
                      id="inputOrgName"
                      type="text"
                      placeholder="Enter your organization name"
                      value="Start Bootstrap"
                    ></input>
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputLocation">
                      Location
                    </label>
                    <input
                      class="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      value="San Francisco, CA"
                    ></input>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="small mb-1" for="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    class="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    value="name@example.com"
                  ></input>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputPhone">
                      Phone number
                    </label>
                    <input
                      class="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value="555-123-4567"
                    ></input>
                  </div>

                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday">
                      Birthday
                    </label>
                    <input
                      class="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      value="06/10/1988"
                    ></input>
                  </div>
                </div>
                <button class="btn btn-primary" type="button">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
