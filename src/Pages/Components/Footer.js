import React from "react";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className="splitbottom">
      <div class="d-grid gap-2 d-md-flex justify-content-md">
        <div className="imgalignfooter">
          <img src={"./logo1.png"} height="40"></img>
        </div>

        <div className="blank"></div>

        <div className="footer">
          <div class="text-muted">
            <h6>copyright @ 2022 Omkar More</h6>
          </div>
        </div>

        <div className="blank"></div>

        <div className="github">
          <a class="btn" href="https://github.com/Omkarm" role="button">
            <GitHubIcon />
          </a>
        </div>
        <div className="facebook">
          <a class="btn" href="https://www.facebook.com" role="button">
            <FacebookIcon />
          </a>
        </div>
        <div className="linkedin">
          <a class="btn" href="https://www.linkedin.com/login" role="button">
            <LinkedInIcon />
          </a>
        </div>
        <div className="twitter">
          <a class="btn" href="https://twitter.com/i/flow/login" role="button">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
