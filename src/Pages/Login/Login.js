import React from "react";

const Login = () => {
  return (
    // ---------------------------------------NAV BAR---------------------------------------------- //

    <header>
      {/* ---------------------------------------Form---------------------------------------------- */}
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" class="btn btn-primary ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/dashboard"
                  style={{ textAlign: "center" }}
                >
                  {"   "}
                  Submit
                </a>
              </button>{" "}
            </div>
            <div className="links">
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
                <div className="signup">
                  Create Account <a href="signup">Sign up</a>
                </div>
              </p>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Login;
