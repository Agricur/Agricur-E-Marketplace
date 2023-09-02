import { Fragment, useState } from "react";
import { Disclosure, Dialog, Menu, Transition } from "@headlessui/react";
import Logo from "../../Images/Logo.png";
import {
  ChevronDownIcon,
  BellIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#d9eada] shadow-2xl mx-auto flex  items-center justify-between p-2 lg:px-8">
      {/* <nav
        className="mx-auto flex  items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      > */}

      {/* logo */}
      <div className="flex lg:flex-1">
        <a href="#" className="p-1">
          <img className="h-14 w-14" src={`${Logo}`} alt="" />
        </a>
      </div>

      {/* search bar */}
      <div className="w-[50%]">
        <form>
          <div class="relative py-1.5">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3  pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-3 pl-10 text-sm text-gray-900 border border-[#348d43] rounded-full bg-gray-50 focus:ring-[#348d43] focus:border-[#348d43] dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text dark:focus:ring-[#348d43] dark:focus:border-[#348d43]"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-[0.3rem] bottom-[0.635rem] bg-[#3da749] hover:bg-[#296b33] focus:ring-4 focus:outline-none focus:ring-[#348d43] font-medium rounded-full text-sm px-4 py-2 dark:bg-[#3da749] dark:hover:bg-[#296b33] dark:focus:ring-[#348d43]"
            >
              Search
            </button>
          </div>
        </form>
      </div>

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
        {/* Register button */}
        <Menu as="div" className="relative">
          <div>
            <Menu.Button className="flex items-center w-20 justify-center h-9 gap-x-1 text-sm font-semibold leading-6 bg-[#3da749] p-1 text-white hover:bg-[#296b33] rounded-full ">
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
            <Menu.Items className="absolute right-0 z-10 text-center font-semibold mt-2 w-24 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#e7eae7]" : "",
                      "block px-4 py-2 text-sm text-gray-700 flest justify-center "
                    )}
                  >
                    Seller
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#e7eae7]" : "",
                      "block px-4 py-2 text-sm text-gray-700 justify-center"
                    )}
                  >
                    Buyer
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

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

        {/* cart */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-[#3da749] p-1 text-white hover:bg-[#296b33] focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View cart</span>
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3 ">
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#296b33] focus:ring-offset-2 focus:ring-offset-white">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#e7eae7]" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#e7eae7]" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-[#e7eae7]" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* </nav> */}

      {/* mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
              {/* profile section */}
              <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]">
                        Account
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
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                        >
                          Your Profile
                        </Disclosure.Button>
                        <Disclosure.Button
                          key="buyer"
                          as="a"
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                        >
                          Setting
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="./"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                >
                  Notification
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                >
                  Cart
                </a>
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
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                        >
                          Seller
                        </Disclosure.Button>
                        <Disclosure.Button
                          key="buyer"
                          as="a"
                          href="#"
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                        >
                          Buyer
                        </Disclosure.Button>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-[#e7eae7]"
                >
                  Log Out
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
