import React, { useState, useEffect } from "react";
// import axios, { post } from "axios";

import Multiselect from "multiselect-react-dropdown";

import { divstdurlpost, divstdurlget } from "../Unknown/ConfigDivStd";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const DivStdAdd = () => {
  const [inpval, setINP] = useState({
    DivStd: "",
    ClassTeacher: "",
    MathsTeacher: "",
    GeographyTeacher: "",
    HistoryTeacher: "",
    ScienceTeacher: "",
    DrawingTeacher: "",
    MarathiTeacher: "",
    HindiTeacher: "",
    EnglishTeacher: "",
    // Skills: [],
    // languGeographyTeachers: [],
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
  /////////////////////////////////////////////////////////////

  const [userinfo, setUserInfo] = useState({
    languGeographyTeachers: [],
    Skills: [],
  });

  const handleChange = (e) => {
    console.log(e.target.checked);

    const { value, checked } = e.target;

    const { languGeographyTeachers } = userinfo;
    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languGeographyTeachers: [...languGeographyTeachers, value],
        Skills: [...languGeographyTeachers, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languGeographyTeachers: languGeographyTeachers.filter(
          (e) => e !== value
        ),
        Skills: languGeographyTeachers.filter((e) => e !== value),
      });
    }

    setUserInfo((val1) => {
      return {
        ...val1,
        [value]: checked,
      };
    });
  };

  // const [userinfo, setUserInfo] = useState({
  //   languGeographyTeachers: [],
  //   Skills: [],
  // });

  // const handleChange = (e) => {
  //   // Destructuring
  //   const { value, checked } = e.target;
  //   const { languGeographyTeachers } = userinfo;

  //   console.log(`${value} is ${checked}`);

  //   // Case 1 : The user checks the box
  //   if (checked) {
  //     setUserInfo({
  //       languGeographyTeachers: [...languGeographyTeachers, value],
  //       Skills: [...languGeographyTeachers, value],
  //     });
  //   }

  //   // Case 2  : The user unchecks the box
  //   else {
  //     setUserInfo({
  //       languGeographyTeachers: languGeographyTeachers.filter((e) => e !== value),
  //       Skills: languGeographyTeachers.filter((e) => e !== value),
  //     });
  //   }
  // };

  const [file, setFile] = useState();

  const url = "http://localhost:5000/getimg";

  const filechangeHandler = (e) => {
    setFile(e.target.files[0]);
    // setFile(URL.createObjectURL(e.target.files[0]));

    //   fetch("http://localhost:5000/getimg", {
    //     method: "GET",
    //     url: "/getimg",
    //   })
    //     .then((result) => {
    //       console.log("get");
    //     })
    //     .catch((err) => {
    //       console.log(err.messGeographyTeacher);
    //     });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("imGeographyTeacher", file);

    fetch("http://localhost:5000/postimg", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("ImGeographyTeacher Send Successfully");
      })
      .catch((err) => {
        console.log(err.messGeographyTeacher);
      });
  };

  // let reader = new FileReader();
  // reader.readAsDataURL(file[0]);

  // reader.onload = (e) => {
  //   const url = "http://localhost:5000/department";
  //   const formData = { file: e.target.result };
  //   return post(url, formData).then((response) =>
  //     console.warn("result", response)
  //   );
  // };

  //   postImGeographyTeacher = () => {
  //   fetch("https://theplantaeapi.herokuapp.com/api/v1/id",
  //    { method: "POST",
  // headers: {'Content-Type': 'application/json'},
  // body: JSON.stringify(this.state.queryImGeographyTeacher)
  // })
  // .then(res => res.json())
  // .then(data => {
  //      })
  //    })

  // const handleApi = () => {
  //   //call the api
  //   const url = "http://localhost:5000/Student";

  //   const formData = new FormData();
  //   formData.append("imGeographyTeacher", file);
  //   axios
  //     .post(url, formData)
  //     .then((result) => {
  //       console.log(result.data);
  //       alert("success");
  //     })
  //     .catch((error) => {
  //       alert("service error");
  //       console.log(error);
  //     });
  // };

  const addinpdata = async (e) => {
    e.preventDefault();
    const {
      DivStd,
      ClassTeacher,
      MathsTeacher,
      GeographyTeacher,
      HistoryTeacher,
      ScienceTeacher,
      DrawingTeacher,
      MarathiTeacher,
      HindiTeacher,
      EnglishTeacher,
    } = inpval; ////////////////////////////////////

    const { Skills, languGeographyTeachers } = userinfo;
    const res = await fetch(divstdurlpost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DivStd,
        ClassTeacher,
        MathsTeacher,
        GeographyTeacher,
        HistoryTeacher,
        ScienceTeacher,
        DrawingTeacher,
        MarathiTeacher,
        HindiTeacher,
        EnglishTeacher,
        Skills,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("fill the data");
    } else {
      alert(
        "Student Added Successfully. Please Add the Department Details in System/Department OR Click Next "
      );
    }
  };

  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  const [selects, setSelects] = useState();

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

  const [date, setDate] = useState(new Date());

  // const [userinfo, setUserInfo] = useState({
  //   languGeographyTeachers: [],
  //   response: [],
  // });

  // const handleChange = (e) => {
  //   // Destructuring
  //   const { value, checked } = e.target;
  //   const { languGeographyTeachers } = userinfo;

  //   console.log(`${value} is ${checked}`);

  //   // Case 1 : The user checks the box
  //   if (checked) {
  //     setUserInfo({
  //       languGeographyTeachers: [...languGeographyTeachers, value],
  //       response: [...languGeographyTeachers, value],
  //     });
  //   }

  //   // Case 2  : The user unchecks the box
  //   else {
  //     setUserInfo({
  //       languGeographyTeachers: languGeographyTeachers.filter((e) => e !== value),
  //       response: languGeographyTeachers.filter((e) => e !== value),
  //     });
  //   }
  // };

  return (
    <div class="container-xl px-4 mt-4">
      {/* <!-- Account pGeographyTeacher navigation--> */}
      <div className="splitr right">
        <div class="row">
          <div class="col-xl-12">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
              <div class="card-header">Student Joining Details</div>
              <br></br>
              <div class="cardMarathiTeacher-body text-center">
                {/* <!-- MarathiTeacher picture imGeographyTeacher--> */}
                <img src={file} style={{ width: 100 }} />

                {/* <!-- MarathiTeacher picture help block--> */}
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 50kb
                </div>

                {/* <!-- MarathiTeacher picture upload button--> */}
                {/* <input
                type="file"
                className="form-control"
                placeholder="Enter UserName"
                id="ExampleInputPassword1"
                onChange={handleChange}
                name="MarathiTeacher"
              /> */}
                {/* <button onClick={handleApi}>SUBMIT</button> */}
                <form onSubmit={onSubmitHandler}>
                  <input type="file" onChange={filechangeHandler}></input>
                  {/* <input type="submit" value="Upload"></input> */}
                  <button type="submit">Submit</button>
                </form>
              </div>

              <div class="card-body">
                <form onSubmit={addinpdata}>
                  {/* -----------------------------------------------DivStd------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEnglishTeacher">
                        Division and Std:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="eg: 10 A"
                        id="ExampleInputDivStd"
                        value={inpval.DivStd}
                        onChange={setdata}
                        name="DivStd"
                      />
                      Enter Your Standard and Division as shown in example.
                    </div>
                    {/* -----------------------------------------------MathsTeacher------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputMathsTeacher">
                        Drawing Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Drawing Teacher Name:"
                        id="ExampleInputDrawingTeacher"
                        value={inpval.DrawingTeacher}
                        onChange={setdata}
                        name="DrawingTeacher"
                      />
                    </div>
                  </div>

                  {/* -----------------------------------------------StudentEmail------------------------------------------------------- */}

                  {/* -----------------------------------------------ClassTeacher------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEnglishTeacher">
                        Class Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter First name:"
                        id="ExampleInputEnglishTeacher"
                        value={inpval.ClassTeacher}
                        onChange={setdata}
                        name="ClassTeacher"
                      />
                    </div>
                    {/* -----------------------------------------------MathsTeacher------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputMathsTeacher">
                        English Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter English Teacher Name:"
                        id="ExampleInputEnglishTeacher"
                        value={inpval.EnglishTeacher}
                        onChange={setdata}
                        name="EnglishTeacher"
                      />
                    </div>
                  </div>
                  {/* -----------------------------------------------GeographyTeacher------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputOrgName">
                        Geography Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter GeographyTeacher"
                        id="ExampleInputGeographyTeacher"
                        value={inpval.GeographyTeacher}
                        onChange={setdata}
                        name="GeographyTeacher"
                      />
                    </div>
                    {/* -----------------------------------------------HistoryTeacher------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        History Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter HistoryTeacher"
                        id="ExampleInputHistoryTeacher"
                        value={inpval.HistoryTeacher}
                        onChange={setdata}
                        name="HistoryTeacher"
                      />
                    </div>

                    {/* <form class="col-md-12">
                      <select
                        required
                        class="form-control select2"
                        value={inpval.HistoryTeacher}
                        onChange={setdata}
                        name="HistoryTeacher"
                      >
                        <option>Select HistoryTeacher----</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Trans</option>
                      </select>
                    </form> */}
                  </div>

                  <div class="row gx-3 mb-3">
                    {/* -----------------------------------------------StudentDepartment------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEnglishTeacher">
                        Maths Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Maths Teacher Name: "
                        id="ExampleInputHistoryTeacher"
                        value={inpval.MathsTeacher}
                        onChange={setdata}
                        name="MathsTeacher"
                      />
                    </div>
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEmailAddress">
                        Science Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Science Teacher Name: "
                        id="ExampleInputScienceTeacher"
                        value={inpval.ScienceTeacher}
                        onChange={setdata}
                        name="ScienceTeacher"
                      />
                    </div>
                    {/* -----------------------------------------------StudentL1------------------------------------------------------- */}
                  </div>
                  {/* -----------------------------------------------ScienceTeacher------------------------------------------------------- */}

                  {/* ----------------------------------------------- Till Date:------------------------------------------------------- */}
                  {/* -----------------------------------------------HindiTeacher------------------------------------------------------- */}

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEnglishTeacher">
                        Marathi Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Marathi Teacher Name: "
                        id="ExampleInputScienceTeacher"
                        value={inpval.MarathiTeacher}
                        onChange={setdata}
                        name="MarathiTeacher"
                      />
                    </div>

                    {/* -----------------------------------------------EnglishTeacher------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday">
                        Hindi Teacher:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Hindi Teacher Name: "
                        id="ExampleInputHindiTeacher"
                        value={inpval.HindiTeacher}
                        onChange={setdata}
                        name="HindiTeacher"
                      />
                    </div>
                  </div>
                  <br></br>

                  {/* -----------------------------------------------submit------------------------------------------------------- */}

                  {/* <!-- Save changes button--> */}
                  <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <button className="btn btn-primary">Submit</button>
                    {/* <button
                    type="submit"
                    required
                    onClick={addinpdata}
                    disabled={
                      (!inpval.DivStd,
                      !inpval.ClassTeacher,
                      !inpval.MathsTeacher,
                      !inpval.StudentEmail,
                      !inpval.GeographyTeacher,
                      !inpval.HistoryTeacher,
                      !inpval.StudentSalary,
                      !inpval.StudentGrade,
                      !inpval.StudentDepartment,
                      !inpval.StudentL1,
                      !inpval.ScienceTeacher)
                    }
                    // onClick={() => {
                    //   addinpdata();
                    // }}
                    className="btn btn-success "
                  >
                    Submit
                  </button> */}
                  </div>
                  <br></br>
                  <div
                    className="backnext"
                    style={{
                      flex: 2,
                      flexDirection: "row",
                      marginLeft: 20,
                    }}
                  >
                    <NavLink to={`/Student`}>
                      <button className="btn btn-dark ">Back</button>
                    </NavLink>
                    <NavLink to={`/deptregister`}>
                      <button
                        type="submit"
                        required
                        disabled={
                          (!inpval.DivStd,
                          !inpval.ClassTeacher,
                          !inpval.MathsTeacher,
                          !inpval.StudentEmail,
                          !inpval.GeographyTeacher,
                          !inpval.HistoryTeacher,
                          !inpval.StudentSalary,
                          !inpval.StudentGrade,
                          !inpval.StudentDepartment,
                          !inpval.StudentL1,
                          !inpval.ScienceTeacher,
                          !inpval.HindiTeacher,
                          !inpval.EnglishTeacher)
                        } // onClick={() => {
                        //   addinpdata();
                        // }}
                        className="btn btn-dark "
                        style={{
                          flex: 2,
                          flexDirection: "row",
                          marginLeft: 20,
                          float: "right",
                        }}
                      >
                        Next
                      </button>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* -----------------------------------------------MarathiTeacher------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default DivStdAdd;
