import { Fragment, useState, useEffect } from "react";
import { Disclosure, Dialog, Menu, Transition } from "@headlessui/react";
import Logo from "../../Images/Logo.png";
import profilePhoto from "../../Assets/profilePhoto.png";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import {
  ChevronDownIcon,
  BellIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { server } from "../../server";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Name");
  const [isSeller, setIsSeller] = useState(false);
  const [profileImage, setProfilePhoto] = useState('');
  const [totalItems,setTotalItems] = useState(0);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  

  

  const navigate = useNavigate();
  const userCookie = Cookies.get("jwtToken");
  const checkLoggedInStatus = () => {
    if (userCookie) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    setIsLoggedIn(false); 
    localStorage.clear()
    Cookies.set("localStorage", "remove", { expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_TIME )});
  };

  const clickCart = () => {
    navigate("/cart");
  };


  useEffect(() => {
    if (userCookie) {
      fetch(`${server}/api/user/data`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userCookie}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const first_name = data.first_name;
          const profile_photo = data.profile_photo;

          checkLoggedInStatus();
          setUserName(first_name);
          setIsSeller(data.is_seller);
          setProfilePhoto(profile_photo);
          // setProfilePhoto("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });

        fetch(`${server}/api/cart/getCart`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userCookie}`,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.error){
            setTotalItems(0)
          }
          else{
            setTotalItems(data.cartItems.length);
          }
          
        }
        ).catch((error) => {
          console.log(error)
        }
        )
    } else {
      if (localStorage.getItem("cart")) {
        const cart = JSON.parse(localStorage.getItem("cart"));
        setTotalItems(cart.length);
      } else {  
        setTotalItems(0);
      }
    }
  }, [userCookie]);

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <header data-testid="header" className="bg-[#d9eada] shadow-2xl mx-auto flex fixed z-50 w-full items-center justify-between p-2 lg:px-8">
      {/* logo */}
      <div className="flex lg:flex-1">
        <Link to="/" className="p-1">
          <img className="h-14 w-14" src={`${Logo}`} alt="" />
        </Link>
      </div>

      {/* search bar */}
      <SearchBar />

      <div className="flex sm:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="hidden sm:flex sm:flex-1 sm:justify-end">
        {isLoggedIn ? (
          <>
            {/* notification */}
            <div className="notification-button">
              <button
                type="button"
                onClick={toggleNotification}
                className="relative rounded-full bg-[#3da749] p-1 text-white hover:bg-[#296b33] focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            {isNotificationOpen && <Notification />}

            {/* cart */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                onClick={clickCart}
                className="relative rounded-full bg-[#3da749] p-1 text-white hover:bg-[#296b33] focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              
                <span className="absolute top-[-9px] right-[-9px] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {totalItems}
                </span>
           
              </button>
              
            </div>

            {/* profile */}
            <Menu as="div" className="relative ml-3 ">
              <div>
                <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src={profileImage?`${server}/${profileImage}`:`${profilePhoto}`}
                    alt=""
                  />
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
                <Menu.Items className="absolute font-semibold right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <span
                        className={classNames(
                          active ? "bg-[#e7eae7]" : "",
                          "block px-4 py-2 text-md font-bold text-gray-700 "
                        )}
                      >
                        Hi, {userName}
                      </span>
                    )}
                  </Menu.Item>
                  <hr className="border-gray-500" />
                  <Menu.Item>
                    {({ active }) =>                      
                        <Link
                          to="/userAccount"
                          className={classNames(
                            active ? "bg-[#e7eae7]" : "",
                            "block px-4 py-2 text-sm text-gray-700 "
                          )}
                        >
                          Your Profile
                        </Link>
                      
                    }
                  </Menu.Item>
                  {isSeller ? (
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/shopAccount"
                          className={classNames(
                            active ? "bg-[#e7eae7]" : "",
                            "block px-4 py-2 text-sm text-gray-700 justify-center"
                          )}
                        >
                          My Shop
                        </Link>
                      )}
                    </Menu.Item>
                  ) : (
                    <></>
                  )}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        onClick={handleLogout}
                        to="/"
                        className={classNames(
                          active ? "bg-[#e7eae7]" : "",
                          "block px-4 py-2 text-sm text-red-700 justify-center"
                        )}
                      >
                        Log out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        ) : (
          <>
            {/* cart */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                onClick={clickCart}
                className="relative rounded-full bg-[#3da749] p-1 text-white hover:bg-[#296b33] focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View cart</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                
                <span className="absolute top-[-9px] right-[-9px] bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {totalItems}
                </span>
             
              </button>
            </div>

            {/* register */}
            <Menu as="div" className="relative">
              <div>
                <Menu.Button className="flex mx-2 items-center w-20 justify-center h-9 gap-x-1 text-sm font-semibold leading-6 bg-[#3da749] p-1 text-white hover:bg-[#296b33] rounded-full ">
                  Register
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
                <Menu.Items className="absolute right-0 z-10 text-center font-semibold mt-2 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/registerSeller"
                        className={classNames(
                          active ? "bg-[#e7eae7]" : "",
                          "block px-4 py-2 text-sm text-gray-700 flest justify-center "
                        )}
                      >
                        As a Seller
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/registerBuyer"
                        className={classNames(
                          active ? "bg-[#e7eae7]" : "",
                          "block px-4 py-2 text-sm text-gray-700 justify-center"
                        )}
                      >
                        As a Buyer
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            {/* login */}
            <div>
              <Link to="/login">
                <button
                  type="submit"
                  className="flex items-center w-20 justify-center h-9 gap-x-1 text-sm font-semibold leading-6 bg-[#3da749] p-1 text-white hover:bg-[#296b33] rounded-full "
                >
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-70" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          {/* logo */}
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Agricur</span>
              <img className="h-8 w-auto" src={`${Logo}`} alt="" />
            </Link>
            {/* 3-bar button */}
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {isLoggedIn ? (
                  <>
                    <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900">
                      Hi, {userName}
                    </span>
                    <hr className="border-gray-500" />
                    {/* profile */}
                    
                      <Link
                        to="userAccount"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                      >
                        Your Profile
                      </Link>

                    {/* notification */}
                    <Link
                      to="./"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                    >
                      Notification
                    </Link>

                    {/* cart */}
                    <Link
                      to="/cart"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                    >
                      Cart <span>({totalItems})</span>
                    </Link>
                    {isSeller ? (
                      <Link
                        to="/shopAccount"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                      >
                        My Shop
                      </Link>
                    ) : (
                      <></>
                    )}
                    <hr className="border-gray-500" />
                    {/* logout */}
                    <div className="py-6">
                      <Link
                        onClick={handleLogout}
                        to="/"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-700 hover:bg-[#e7eae7]"
                      >
                        Log Out
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {/* cart */}
                    <Link
                      to="/cart"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                    >
                      Cart <span>({totalItems})</span>
                    </Link>

                    {/* login */}
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                    >
                      Login
                    </Link>

                    {/* register */}
                    <Disclosure as="div" className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]">
                            Register
                            <ChevronDownIcon
                              className={classNames(
                                open ? "rotate-180" : "",
                                "h-5 w-5 flex-none"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            <Disclosure.Button
                              key="seller"
                              as="a"
                              href="registerSeller"
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                            >
                              As a Seller
                            </Disclosure.Button>
                            <Disclosure.Button
                              key="buyer"
                              as="a"
                              href="registerBuyer"
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                            >
                              As a Buyer
                            </Disclosure.Button>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
