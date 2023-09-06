import React, {useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../Styles/style";
import { Link, useNavigate } from "react-router-dom";
import Design from "../../Images/Design.png";
import LogImg from "../../Images/LogImg.jpg";
import axios, { AxiosError } from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = {
      email:email,
      password:password,
    }; 

      // Send the form data to the server using axios or a similar library
      await axios.post(`${server}/api/user/user-login`, formData).then((res) =>{
        toast.success("Successfully logged in.");
        navigate('/')
      }).catch((error)=>{
        toast.error(error.response.data.message)
      })
    
  
  };

  return (
    <div className="flex justify-center items-center">
    <div
      className="bg-cover bg-center min-h-screen w-full"
      style={{
        backgroundImage:
          `url(${LogImg})`,
      }}
    >
  
      {/* <div className="min-h-screen bg-white flex flex-col  justify-center py-12 sm:px-6 lg:px-8"> */}
        <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white bg-opacity-80 py-8 px-4 shadow sm:rounded-lg sm:px-10 justify-self-start">
            <div className="sm:mx-auto sm:w-full sm:max-w-md align-top">
              <h2 className="mt-6 mb-6 text-center text-3xl font-bold text-gray-900 ">
                Login to Agricur
              </h2>
            </div>
            <div className="mb-6">
              <img src={Design} alt="" height="70" width="70" className="mx-auto" />
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#3CB44A] focus:border-[#3CB44A] sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-[#3CB44A] sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute right-2 top-2.5 cursor-pointer"
                      size={18}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 top-2.5 cursor-pointer"
                      size={18}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>
              <div className={`${styles.noramlFlex} justify-between`}>
                <div className={`${styles.noramlFlex}`}>
                  <input
                    type="checkbox"
                    name="remember-me"
                    id="remember-me"
                    className="h-4 w-4 text-[#3CB44A] focus:ring-[#3CB44A] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href=".forgot-password"
                    className="font-medium text-[#3CB44A] hover:text-[#24692d]"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#3CB44A] hover:bg-[#24692d]"
                >
                  Log In
                </button>
              </div>
              <div className={`${styles.noramlFlex} w-full`}>
                <h6 className="font-medium">Don’t have an account? </h6>
                <Link to="/sign-up" className="text-[#3CB44A] hover:text-[#24692d] pl-2 font-medium">
                  Register Now
                </Link>
              </div>
            </form>
          </div>
        </div>
        </div>
      {/* </div> */}
      </div>
  );
};

export default Login;
