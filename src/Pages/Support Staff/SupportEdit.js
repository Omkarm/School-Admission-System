import React, { useState, useEffect } from "react";
// import axios, { post } from "axios";
//ww
import Multiselect from "multiselect-react-dropdown";

import { staffurlupdate, staffurlget } from "../Unknown/ConfigSupport";
import {
  NavLink,
  UNSAFE_DataRouterStateContet,
  useParams,
} from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const SupportEdit = () => {
  const [inpval, setINP] = useState({
    SupportId: "",
    SupportEmail: "",
    SupportFirstName: "",
    SupportLastName: "",
    Role: "",
    SupportAge: "",
    SupportGender: "",
    SupportDivision: "",
    SupportL1: "",
    DateOfJoining: "",
    LastDate: "",
    Profile: "",
    SupportBirthdate: "",
    SupportPhone: "",
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
  //   const url = "http://localhost:5000/Support";

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

  const updateuser = async (e) => {
    e.preventDefault();
    const {
      SupportId,
      SupportEmail,
      SupportFirstName,
      SupportLastName,
      Role,
      SupportAge,
      SupportGender,
      SupportDivision,
      DateOfJoining,
      LastDate,
      Profile,
      SupportBirthdate,
      SupportPhone,
    } = inpval; ////////////////////////////////////

    const { Skills, languages } = userinfo;
    const res2 = await fetch(staffurlupdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        SupportId,
        SupportEmail,
        SupportFirstName,
        SupportLastName,
        Role,
        SupportAge,
        SupportGender,
        SupportDivision,
        DateOfJoining,
        LastDate,
        Profile,
        SupportBirthdate,
        SupportPhone,
        Skills,
        languages,
      }),
    });

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      alert("Data Updated Succesfully");
    }
  };

  const [getuserdata, setUserdata, setDLTdata] = useState([]);
  const [selects, setSelects] = useState();

  console.log(getuserdata);

  const getdata = async (e) => {
    const res = await fetch(staffurlget, {
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
              <div class="card-header">Support Joining Details</div>
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
                <form onSubmit={updateuser}>
                  {/* -----------------------------------------------SupportId------------------------------------------------------- */}
                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Support Code:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Salary Code:"
                      id="ExampleInputSupportId"
                      value={inpval.SupportId}
                      onChange={setdata}
                      name="SupportId"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">
                      Support Role:
                    </label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="Enter Support Role:"
                      id="ExampleInputSupportId"
                      value={inpval.Role}
                      onChange={setdata}
                      name="Role"
                    />
                  </div>
                  {/* -----------------------------------------------SupportEmail------------------------------------------------------- */}

                  {/* -----------------------------------------------SupportFirstName------------------------------------------------------- */}
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
                        value={inpval.SupportFirstName}
                        onChange={setdata}
                        name="SupportFirstName"
                      />
                    </div>
                    {/* -----------------------------------------------SupportLastName------------------------------------------------------- */}
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
                        value={inpval.SupportLastName}
                        onChange={setdata}
                        name="SupportLastName"
                      />
                    </div>
                  </div>
                  {/* -----------------------------------------------SupportAge------------------------------------------------------- */}
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
                        value={inpval.SupportAge}
                        onChange={setdata}
                        name="SupportAge"
                      />
                    </div>
                    {/* -----------------------------------------------SupportGender------------------------------------------------------- */}
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
                          name="SupportGender"
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
                          name="SupportGender"
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
                          name="SupportGender"
                        />{" "}
                        Trans
                      </>
                    </div>

                    {/* <form class="col-md-12">
                      <select
                        required
                        class="form-control select2"
                        value={inpval.SupportGender}
                        onChange={setdata}
                        name="SupportGender"
                      >
                        <option>Select Gender----</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Trans</option>
                      </select>
                    </form> */}
                  </div>

                  <div class="row gx-3 mb-3">
                    {/* -----------------------------------------------SupportDepartment------------------------------------------------------- */}
                    <div class="col-md-6">
                      <label class="small mb-1" for="inputFirstName">
                        Division Name:
                      </label>
                      <form class="col-md-12">
                        <select
                          required
                          class="form-control select2"
                          value={inpval.SupportDivision}
                          onChange={setdata}
                          name="SupportDivision"
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
                          <option>{element.SupportDepartment}</option>
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
                    {/* -----------------------------------------------SupportL1------------------------------------------------------- */}
                  </div>
                  {/* -----------------------------------------------DateOfJoining------------------------------------------------------- */}

                  {/* ----------------------------------------------- Till Date:------------------------------------------------------- */}
                  {/* -----------------------------------------------SupportBirthdate------------------------------------------------------- */}

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
                        value={inpval.SupportBirthdate}
                        onChange={setdata}
                        name="SupportBirthdate"
                      />
                    </div>

                    {/* -----------------------------------------------SupportPhone------------------------------------------------------- */}
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
                        value={inpval.SupportPhone}
                        onChange={setdata}
                        name="SupportPhone"
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
                      (!inpval.SupportId,
                      !inpval.SupportFirstName,
                      !inpval.SupportLastName,
                      !inpval.SupportEmail,
                      !inpval.SupportAge,
                      !inpval.SupportGender,
                      !inpval.SupportSalary,
                      !inpval.SupportGrade,
                      !inpval.SupportDepartment,
                      !inpval.SupportL1,
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
                    <NavLink to={`/Support`}>
                      <button className="btn btn-dark ">Back</button>
                    </NavLink>
                    <NavLink to={`/deptregister`}>
                      <button
                        type="submit"
                        required
                        disabled={
                          (!inpval.SupportId,
                          !inpval.SupportFirstName,
                          !inpval.SupportLastName,
                          !inpval.SupportEmail,
                          !inpval.SupportAge,
                          !inpval.SupportGender,
                          !inpval.SupportSalary,
                          !inpval.SupportGrade,
                          !inpval.SupportDepartment,
                          !inpval.SupportL1,
                          !inpval.DateOfJoining,
                          !inpval.SupportBirthdate,
                          !inpval.SupportPhone)
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

export default SupportEdit;
