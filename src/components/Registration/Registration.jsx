import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Registration = () => {

  const {createUser} = useContext(authContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);

    //! Create User in Firebase 
    createUser(email, password)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    })
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an Account? Please
              <Link to="/login">
                <button className="text-purple-700 underline"> Login</button>
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
