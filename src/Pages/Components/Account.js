import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
const Account = () => {
  return (
    <div className="main">
      <div className="splittop">
        <div className="imgalign">
          <img src={"./logo1.png"} height="50"></img>
        </div>
      </div>
      <div className="splittop1 top">
        <div class="d-flex justify-content-end">
          <div className="nav-item dropdown">
            <a
              className="nav-link active dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              <AccountCircleRoundedIcon fontSize="large" />
            </a>
            <ul className="dropdown-menu dropbox">
              <div className="text">
                <h5>Omkar More</h5>
              </div>
              <li>
                <a className="dropdown-item" href="/nopage">
                  Account
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/nopage">
                  Personal Projects
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/nopage">
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
      </div>
    </div>
  );
};

export default Account;
