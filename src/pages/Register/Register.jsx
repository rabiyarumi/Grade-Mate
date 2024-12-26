import  { useContext, useState } from 'react';
import AuthContext from '../../providers/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Register = () => {

    const {userRegister, profileUpdate, setUser} = useContext(AuthContext)
        const [errorMessage, setErrorMessage] = useState("");
        const navigate = useNavigate();
      

        const handleRegister = async e => {
            e.preventDefault();
            setErrorMessage("");
        
            const form = e.target;
        
            const name = form.name.value;
            const email = form.email.value;
            const photo = form.photo.value;
            const password = form.password.value;
        
            const newUser = {name, email, photo, password}

        
             //password validation
             if (password.length < 6) {
                setErrorMessage("password must be 6 character or more");
                return;
              }
              if (!/^(?=.*[A-Z]).*$/.test(password)) {
                setErrorMessage("password must must contain 1 uppercase letter");
                return;
              }
              if (!/^(?=.*[a-z]).*$/.test(password)) {
                setErrorMessage("password must must contain 1 lowercase letter");
                return;
              }
        


              // User Registration
              try {
                
                const result = await userRegister(email, password)
                await profileUpdate(name, photo)
                setUser({ ...result.user, displayName: name, photoURL: photo  })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/')
              } catch (err) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                  });
              }
            }
            
               
            
        

    return (
        <div className="card  max-w-md lg:max-w-lg mx-auto  shrink-0 my-10">
        <h1 className="text-center text-5xl font-bold  mb-6">
          Register Now!
        </h1>
        <form onSubmit={handleRegister} className="card-body shadow-2xl">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
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
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
  
      {/* error massage */}
      <div className="text-sm ml-2 opacity-85">
              {errorMessage ? (
                <p className="text-red-500">{errorMessage}</p>
              ) : (
                <p className="">
                  
                </p>
              )}
            </div>
  
          <div className="form-control mt-6">
            <button className="btn btn-accent">Register</button>
          </div>
          <p>
            Already have an account? please{" "}
            <Link to={"/login"} className="text-accent"> Login</Link>
          </p>
        </form>
      </div>
    );
};

export default Register;