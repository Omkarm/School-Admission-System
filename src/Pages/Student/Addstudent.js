import React, { useState, useEffect } from "react";
// import axios, { post } from "axios";

import Multiselect from "multiselect-react-dropdown";

import { urlpost, urlget } from "../Unknown/Config";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const Addstudent = () => {
  const [inpval, setINP] = useState({
    DivStd: "",
    FirstName: "",
    LastName: "",
    Age: "",
    Gender: "",
    DateOfJoining: "",
    LastDate: "",
    Profile: "",
    DOB: "",
    Phone: "",
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
  //   const url = "http://localhost:5000/Student";

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
      DivStd,
      FirstName,
      LastName,
      Age,
      Gender,
      DateOfJoining,
      LastDate,
      Profile,
      DOB,
      Phone,
    } = inpval; ////////////////////////////////////

    const { Skills, languages } = userinfo;
    const res = await fetch(urlpost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DivStd,
        FirstName,
        LastName,
        Age,
        Gender,
        DateOfJoining,
        LastDate,
        Profile,
        DOB,
        Phone,
        Skills,
        languages,
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
              <div class="card-header">Student Joining Details</div>
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
                  {/* -----------------------------------------------DivStd------------------------------------------------------- */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Student Code:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Salary Code:"
                      id="ExampleInputDivStd"
                      value={inpval.DivStd}
                      onChange={setdata}
                      name="DivStd"
                    />
                  </div>
                  {/* -----------------------------------------------StudentEmail------------------------------------------------------- */}

                  {/* -----------------------------------------------FirstName------------------------------------------------------- */}
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
                        value={inpval.FirstName}
                        onChange={setdata}
                        name="FirstName"
                      />
                    </div>
                    {/* -----------------------------------------------LastName------------------------------------------------------- */}
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
                        value={inpval.LastName}
                        onChange={setdata}
                        name="LastName"
                      />
                    </div>
                  </div>
                  {/* -----------------------------------------------Age------------------------------------------------------- */}
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
                        value={inpval.Age}
                        onChange={setdata}
                        name="Age"
                      />
                    </div>
                    {/* -----------------------------------------------Gender------------------------------------------------------- */}
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
                          name="Gender"
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
                          name="Gender"
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
                          name="Gender"
                        />{" "}
                        Trans
                      </>
                    </div>

                    {/* <form class="col-md-12">
                      <select
                        required
                        class="form-control select2"
                        value={inpval.Gender}
                        onChange={setdata}
                        name="Gender"
                      >
                        <option>Select Gender----</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Trans</option>
                      </select>
                    </form> */}
                  </div>

                  <div class="row gx-3 mb-3">
                    {/* -----------------------------------------------StudentDepartment------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Division Name:
                      </label>
                      <form class="col-md-12">
                        <select
                          required
                          class="form-control select2"
                          value={inpval.StudentDivision}
                          onChange={setdata}
                          name="StudentDivision"
                        >
                          <option>Select Division----</option>
                          <option>A</option>
                          <option>B</option>
                          <option>c</option>
                          <option>D</option>
                          <option>E</option>

                          {/* {getuserdata.map((element, id) => {
                      return (
                        <>
                          <option>{element.StudentDepartment}</option>
                        </>
                      );
                    })} */}
                        </select>
                      </form>
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
                    {/* -----------------------------------------------StudentL1------------------------------------------------------- */}
                  </div>
                  {/* -----------------------------------------------DateOfJoining------------------------------------------------------- */}

                  {/* ----------------------------------------------- Till Date:------------------------------------------------------- */}
                  {/* -----------------------------------------------DOB------------------------------------------------------- */}

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
                        value={inpval.DOB}
                        onChange={setdata}
                        name="DOB"
                      />
                    </div>

                    {/* -----------------------------------------------Phone------------------------------------------------------- */}
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
                        value={inpval.Phone}
                        onChange={setdata}
                        name="Phone"
                      />
                    </div>
                  </div>
                  <br></br>

                  <div class="card-header">Skills</div>
                  <div class="cardskills-body text-center">
                    {/* <!-- Profile picture image--> */}
                    {/* <Multiselect
                  isObject={false}
                  onKeyPressFn={function noRefCheck() {}}
                  onRemove={function noRefCheck() {}}
                  onSearch={function noRefCheck() {}}
                  onSelect={function noRefCheck() {}}
                  options={["Html", "Css", "Java", "React Js", "Node Js"]}
                /> */}

                    <form>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="languages"
                              value="Javascript"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Javascript
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="languages"
                              value="Python"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Python
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="languages"
                              value="Java"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Java
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="languages"
                              value="Node"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Node
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="languages"
                              value="C#"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              C#
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="languages"
                              value="C++"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              C++
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="Skills"
                              value="C"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              C
                            </label>
                          </div>
                          <div className="form-check m-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="Skills"
                              value="React"
                              id="flexCheckDefault"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              React
                            </label>
                          </div>
                        </div>
                        {/* <div class="md-12">
                      <label class="small mb-1" for="inputSkills">
                        Other:{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Skills"
                        id="ExampleInputSalary"
                        value={userinfo.Skills}
                        onChange={handleChange}
                        name="Skills"
                      />
                    </div> */}
                      </div>
                      {/* <div class="md-6">
                    <label class="small mb-1" for="inputLastName">
                      Other Skills:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter L+1"
                      id="ExampleInputL1"
                      value={userinfo.Skills}
                      onChange={handleChange}
                      name="Skills"
                    />
                  </div> */}

                      <div className="form-floating mt-3 mb-3 text-center">
                        <label htmlFor="exampleFormControlTextarea1">
                          {/* languages :{" "} */}
                        </label>
                        <textarea
                          className="form-control text"
                          name="response"
                          value={userinfo.Skills}
                          placeholder="The checkbox values will be displayed here "
                          id="floatingTextarea2"
                          style={{ height: "150px" }}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </form>
                  </div>
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
                      !inpval.FirstName,
                      !inpval.LastName,
                      !inpval.StudentEmail,
                      !inpval.Age,
                      !inpval.Gender,
                      !inpval.StudentSalary,
                      !inpval.StudentGrade,
                      !inpval.StudentDepartment,
                      !inpval.StudentL1,
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
                    <NavLink to={`/Student`}>
                      <button className="btn btn-dark ">Back</button>
                    </NavLink>
                    <NavLink to={`/deptregister`}>
                      <button
                        type="submit"
                        required
                        disabled={
                          (!inpval.DivStd,
                          !inpval.FirstName,
                          !inpval.LastName,
                          !inpval.StudentEmail,
                          !inpval.Age,
                          !inpval.Gender,
                          !inpval.StudentSalary,
                          !inpval.StudentGrade,
                          !inpval.StudentDepartment,
                          !inpval.StudentL1,
                          !inpval.DateOfJoining,
                          !inpval.DOB,
                          !inpval.Phone)
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
          {/* -----------------------------------------------Profile------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

export default Addstudent;
