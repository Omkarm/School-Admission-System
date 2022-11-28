import React, { useState, useEffect } from "react";
// import axios, { post } from "axios";

import Multiselect from "multiselect-react-dropdown";

import { turlpost, turlget } from "../Unknown/ConfigTeacher";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//
const AddTeacher = () => {
  const [inpval, setINP] = useState({
    TeacherId: "",
    TeacherEmail: "",
    TeacherFirstName: "",
    TeacherLastName: "",
    TeacherAge: "",
    TeacherGender: "",
    DateOfJoining: "",
    LastDate: "",
    Profile: "",
    TeacherBirthdate: "",
    TeacherPhone: "",
    // Skills: [],
    // languages: [],
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
    languages: [],
    Skills: [],
  });

  const handleChange = (e) => {
    console.log(e.target.checked);

    const { value, checked } = e.target;

    const { languages } = userinfo;
    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        Skills: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        Skills: languages.filter((e) => e !== value),
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
  //   languages: [],
  //   Skills: [],
  // });

  // const handleChange = (e) => {
  //   // Destructuring
  //   const { value, checked } = e.target;
  //   const { languages } = userinfo;

  //   console.log(`${value} is ${checked}`);

  //   // Case 1 : The user checks the box
  //   if (checked) {
  //     setUserInfo({
  //       languages: [...languages, value],
  //       Skills: [...languages, value],
  //     });
  //   }

  //   // Case 2  : The user unchecks the box
  //   else {
  //     setUserInfo({
  //       languages: languages.filter((e) => e !== value),
  //       Skills: languages.filter((e) => e !== value),
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
    //       console.log(err.message);
    //     });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", file);

    fetch("http://localhost:5000/postimg", {
      method: "POST",
      body: data,
    })
      .then((result) => {
        console.log("Image Send Successfully");
      })
      .catch((err) => {
        console.log(err.message);
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

  //   postImage = () => {
  //   fetch("https://theplantaeapi.herokuapp.com/api/v1/id",
  //    { method: "POST",
  // headers: {'Content-Type': 'application/json'},
  // body: JSON.stringify(this.state.queryImage)
  // })
  // .then(res => res.json())
  // .then(data => {
  //      })
  //    })

  // const handleApi = () => {
  //   //call the api
  //   const url = "http://localhost:5000/Teacher";

  //   const formData = new FormData();
  //   formData.append("image", file);
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
      TeacherId,
      TeacherEmail,
      TeacherFirstName,
      TeacherLastName,
      TeacherAge,
      TeacherGender,
      DateOfJoining,
      LastDate,
      TeacherProfile,
      TeacherBirthdate,
      TeacherPhone,
    } = inpval; ////////////////////////////////////

    const { Skills, languages } = userinfo;
    const res = await fetch(turlpost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeacherId,
        TeacherEmail,
        TeacherFirstName,
        TeacherLastName,
        TeacherAge,
        TeacherGender,
        DateOfJoining,
        LastDate,
        TeacherProfile,
        TeacherBirthdate,
        TeacherPhone,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("fill the data");
    } else {
      alert(
        "Teacher Added Successfully. Please Add the Department Details in System/Department OR Click Next "
      );
    }
  };

  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  const [selects, setSelects] = useState();

  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(turlget, {
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
  //   languages: [],
  //   response: [],
  // });

  // const handleChange = (e) => {
  //   // Destructuring
  //   const { value, checked } = e.target;
  //   const { languages } = userinfo;

  //   console.log(`${value} is ${checked}`);

  //   // Case 1 : The user checks the box
  //   if (checked) {
  //     setUserInfo({
  //       languages: [...languages, value],
  //       response: [...languages, value],
  //     });
  //   }

  //   // Case 2  : The user unchecks the box
  //   else {
  //     setUserInfo({
  //       languages: languages.filter((e) => e !== value),
  //       response: languages.filter((e) => e !== value),
  //     });
  //   }
  // };

  return (
    <div class="container-xl px-4 mt-4">
      {/* <!-- Account page navigation--> */}
      <div className="splitr right">
        <div class="row">
          <div class="col-xl-12">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
              <div class="card-header">Teacher Joining Details</div>
              <br></br>
              <div class="cardprofile-body text-center">
                {/* <!-- Profile picture image--> */}
                <img src={file} style={{ width: 100 }} />

                {/* <!-- Profile picture help block--> */}
                <div class="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 50kb
                </div>

                {/* <!-- Profile picture upload button--> */}
                {/* <input
                type="file"
                className="form-control"
                placeholder="Enter UserName"
                id="ExampleInputPassword1"
                onChange={handleChange}
                name="Profile"
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
                  {/* -----------------------------------------------TeacherId------------------------------------------------------- */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Teacher Code:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Salary Code:"
                      id="ExampleInputTeacherId"
                      value={inpval.TeacherId}
                      onChange={setdata}
                      name="TeacherId"
                    />
                  </div>

                  {/* -----------------------------------------------TeacherEmail------------------------------------------------------- */}

                  {/* -----------------------------------------------TeacherFirstName------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (first name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        First name:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter First name:"
                        id="ExampleInputFirstName"
                        value={inpval.TeacherFirstName}
                        onChange={setdata}
                        name="TeacherFirstName"
                      />
                    </div>
                    {/* -----------------------------------------------TeacherLastName------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLastName">
                        Last name:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Last name:"
                        id="ExampleInputLastName"
                        value={inpval.TeacherLastName}
                        onChange={setdata}
                        name="TeacherLastName"
                      />
                    </div>
                  </div>
                  {/* -----------------------------------------------TeacherAge------------------------------------------------------- */}
                  <div class="row gx-3 mb-3">
                    {/* <!-- Form Group (organization name)--> */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputOrgName">
                        Age:
                      </label>
                      <input
                        type="number"
                        required
                        className="form-control"
                        placeholder="Enter Age"
                        id="ExampleInputAge"
                        value={inpval.TeacherAge}
                        onChange={setdata}
                        name="TeacherAge"
                      />
                    </div>
                    {/* -----------------------------------------------TeacherGender------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputLocation">
                        Gender:
                      </label>
                      <br></br>
                      <>
                        <input
                          type="radio"
                          required
                          className="radio"
                          id="ExampleInputGender"
                          value="male"
                          //   checked={addinpdata === "male"}
                          onChange={setdata}
                          name="TeacherGender"
                        />{" "}
                        Male
                      </>{" "}
                      <>
                        <input
                          type="radio"
                          required
                          className="radio"
                          id="ExampleInputAge"
                          value="female"
                          //   checked={addinpdata === "male"}
                          onChange={setdata}
                          name="TeacherGender"
                        />{" "}
                        Female
                      </>{" "}
                      <>
                        <input
                          type="radio"
                          required
                          className="radio"
                          id="ExampleInputAge"
                          value="Trans"
                          //   checked={addinpdata === "male"}
                          onChange={setdata}
                          name="TeacherGender"
                        />{" "}
                        Trans
                      </>
                    </div>

                    {/* <form class="col-md-12">
                      <select
                        required
                        class="form-control select2"
                        value={inpval.TeacherGender}
                        onChange={setdata}
                        name="TeacherGender"
                      >
                        <option>Select Gender----</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Trans</option>
                      </select>
                    </form> */}
                  </div>

                  <div class="row gx-3 mb-3">
                    {/* -----------------------------------------------TeacherDepartment------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEmailAddress">
                        Teacher Email:
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Enter Email:"
                        id="ExampleInputTeacherEmail"
                        value={inpval.TeacherEmail}
                        onChange={setdata}
                        name="TeacherEmail"
                      />
                    </div>

                    <div class="col-md-6">
                      <label class="small mb-1" for="inputEmailAddress">
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
                    {/* -----------------------------------------------TeacherL1------------------------------------------------------- */}
                  </div>
                  {/* -----------------------------------------------DateOfJoining------------------------------------------------------- */}

                  {/* ----------------------------------------------- Till Date:------------------------------------------------------- */}
                  {/* -----------------------------------------------TeacherBirthdate------------------------------------------------------- */}

                  <div class="row gx-3 mb-3">
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputPhone">
                        Birth Date:
                      </label>
                      <input
                        type="date"
                        required
                        className="form-control"
                        placeholder="dd/mm/yyyy"
                        id="ExampleInputL1"
                        value={inpval.TeacherBirthdate}
                        onChange={setdata}
                        name="TeacherBirthdate"
                      />
                    </div>

                    {/* -----------------------------------------------TeacherPhone------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputBirthday">
                        Phone number:
                      </label>
                      <input
                        type="number"
                        required
                        className="form-control"
                        placeholder="eg: +91 9876543210"
                        id="ExampleInputL1"
                        value={inpval.TeacherPhone}
                        onChange={setdata}
                        name="TeacherPhone"
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
                      (!inpval.TeacherId,
                      !inpval.TeacherFirstName,
                      !inpval.TeacherLastName,
                      !inpval.TeacherEmail,
                      !inpval.TeacherAge,
                      !inpval.TeacherGender,
                      !inpval.TeacherSalary,
                      !inpval.TeacherGrade,
                      !inpval.TeacherDepartment,
                      !inpval.TeacherL1,
                      !inpval.DateOfJoining)
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
                    <NavLink to={`/teachertable`}>
                      <button className="btn btn-dark ">Back</button>
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* -----------------------------------------------Profile------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
