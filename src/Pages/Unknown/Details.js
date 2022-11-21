import React, { useState, useEffect } from "react";

import CreateIcon from "@mui/icons-material/Create";
import DeleteOutLineIcon from "@mui/icons-material/DeleteOutline";
import Card from "@mui/material/Card";
import PersonIcon from "@mui/icons-material/Person";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import { urlgetid, urlget } from "./Config";

const Details = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const { id, name } = useParams("");
  console.log(id, name);

  const getdata = async (EmployeeCode) => {
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
      console.log("getdata");
    }
  };

  useEffect(() => {
    getdata();
  });

  return (
    <header>
      {/* ---------------------------------------Form---------------------------------------------- */}

      <div className="container mt-3">
        <Card sx={{ minWidth: 600 }}>
          <CardContent>
            <div className="icon">
              <img src="/profile.png" style={{ width: 100 }}></img>

              {/* <span style={{ fontWeight: 600 }}>
                Welcome {getuserdata.name}
              </span> */}
            </div>
            <div className="row">
              <div className="welcome">
                <h5 className="mt-4">
                  Welcome:{id}
                  <span style={{ fontWeight: 600 }}>
                    {getuserdata.EmploymeeName}
                  </span>
                </h5>
              </div>

              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  SalaryCode:{id}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeCode}
                  </span>
                </h5>
              </div>
              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  Name:{id}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeName}
                  </span>
                </h5>
              </div>
              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  Salary:{" "}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeSalary}
                  </span>
                </h5>
              </div>

              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  Age:{" "}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeAge}
                  </span>
                </h5>
              </div>
              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  Department:{" "}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeDepartment}
                  </span>
                </h5>
              </div>
              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  L+1:{" "}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeL1}
                  </span>
                </h5>
              </div>
              <div className="mb-4 col-lg-3 col-md-3 col-12">
                <h5 className="mt-4">
                  Grade:{" "}
                  <span style={{ fontWeight: 400 }}>
                    {getuserdata.EmploymeeGrade}
                  </span>
                </h5>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  );
};

export default Details;
