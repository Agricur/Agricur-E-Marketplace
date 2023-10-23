import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Logo from "../../Images/Logo.png";
import profilePhoto from "../../Assets/profilePhoto.png";
import { BellIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
  const [profileImage, setProfilePhoto] = useState("");

  const navigate = useNavigate();
  const adminCookie = Cookies.get("jwtToken-admin");

  const checkLoggedInStatus = () => {
    if (adminCookie) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken-admin");
    setIsLoggedIn(false);
  };


  useEffect(() => {
    if (adminCookie) {
      fetch(`${server}/api/admin/data`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminCookie}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const first_name = data.first_name;
          const image = data.profile_photo;

          checkLoggedInStatus();
          setUserName(first_name);
          setProfilePhoto(image);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);


  return (
    <header className="bg-[#d9eada] shadow-2xl mx-auto flex fixed z-50 w-full items-center justify-between p-2 lg:px-8">
      {/* logo */}
      <div className="flex lg:flex-1">
        <a href="/" className="p-1">
          <img className="h-14 w-14" src={`${Logo}`} alt="" />
        </a>
      </div>

      <h4 className="font-bold text-lg">Admin</h4>

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
        {/* notification */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-[#3da749] p-1 text-white hover:bg-[#296b33] focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* profile */}
        <Menu as="div" className="relative ml-3 ">
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              {profileImage === null ? (
                <img
                  className="h-8 w-8 rounded-full"
                  src={`${profilePhoto}`}
                  alt=""
                />
              ) : (
                <img
                  className="h-8 w-8 rounded-full"
                  src={`${server}/${profileImage}`}
                  alt=""
                />
              )}
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
                {({ active }) => (
                  <a
                    onClick={handleLogout}
                    href="/adminLogin"
                    className={classNames(
                      active ? "bg-[#e7eae7]" : "",
                      "block px-4 py-2 text-sm text-red-700 justify-center"
                    )}
                  >
                    Log out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
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
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Agrucur</span>
              <img className="h-8 w-auto" src={`${Logo}`} alt="" />
            </a>
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
                <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900">
                  Hi, {userName}
                </span>
                <hr className="border-gray-500" />

                {/* notification */}
                <a
                  href="./"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                >
                  Notification
                </a>

                <hr className="border-gray-500" />
                {/* logout */}
                <div className="py-6">
                  <a
                    onClick={handleLogout}
                    href="/adminLogin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-700 hover:bg-[#e7eae7]"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
