import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../Styles/style";
import { Link, useNavigate } from "react-router-dom";
import Design from "../../Images/Design.png";
import LogImg from "../../Images/LogImg.jpg";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Login = () => {
 
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = {
      email:email,
      password:password,
    }; 

      // Send the form data to the server using axios or a similar library
      await axios.post(`${server}/api/user/user-login`, formData).then((res) =>{

        const token = res.data.token;
        const user_id = res.data.user_id;
        const is_seller = res.data.is_seller;
        Cookies.set("jwtToken", token, { expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000)});
        toast.success(res.data.message);
        if(cartItems.length > 0){
        axios.post(`${server}/api/cart/createCart`, {user_id: user_id, cartItems: cartItems}).then((res) =>{
          toast.success(res.data.message);
        });
        }
        if(is_seller){
          navigate('/shopAccount')
        }else{
          navigate('/')
        }
        
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
              <div className={`${styles.noramlFlex} justify-end`}>
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
                <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex items-center w-30 justify-center h-9 gap-x-0 text-sm font-semibold leading-6 p-1 text-[#3da749] hover:text-[#296b33] ">
                  Register Now
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-17 z-10 text-center font-semibold mt-0 w-28 origin-bottom-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/registerSeller"
                        className={classNames(
                          active ? "bg-[#e7eae7]" : "",
                          "block px-4 py-2 text-sm text-gray-700 flest justify-center "
                        )}
                      >
                        As a Seller
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/registerBuyer"
                        className={classNames(
                          active ? "bg-[#e7eae7]" : "",
                          "block px-4 py-2 text-sm text-gray-700 justify-center"
                        )}
                      >
                        As a Buyer
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
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
