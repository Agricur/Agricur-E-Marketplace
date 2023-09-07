import { Fragment } from "react";
import Apple from "../../Assets/apple.svg";
import Bag from "../../Assets/bag.svg";
import Carrot from "../../Assets/carrot.svg";
import Tractor from "../../Assets/tractor.svg";
import Wheat from "../../Assets/wheat.svg";
import { Disclosure, Popover, Transition} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

// navigation content
const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "CATEGORIES", href: "/", current: false },
  { name: "SHOPS", href: "/shops", current: false },
  { name: "TIPS", href: "#", current: false },
  { name: "CONTACTS", href: "#", current: false },
  { name: "HELP", href: "#", current: false },
];

// categories content
const categories = [
  {
    name: "Fruits",
    description: "Explore the freshest fruits nature has to offer",
    href: "#",
    icon: Apple,
  },
  {
    name: "Vegetables",
    description: "Discover a rainbow of nutritious vegetables",
    href: "#",
    icon: Carrot,
  },
  {
    name: "Grains",
    description: "Nutrient-packed grains for a healthier you",
    href: "#",
    icon: Wheat,
  },
  {
    name: "Fertilizers",
    description: "Boost your harvest with our premium fertilizers",
    href: "#",
    icon: Bag,
  },
  {
    name: "Equipments",
    description: "Efficiency starts with the right equipment",
    href: "#",
    icon: Tractor,
  },
];

// calls to action content
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contacts", href: "#", icon: PhoneIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#3da749]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4 shadow-2xl">
            <div
              className="relative h-12 justify-between"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#296b33] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* navigation bar items*/}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-space-between">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.name === "CATEGORIES" ? (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#18411e] text-white"
                              : "text-white hover:bg-[#296b33] hover:text-white",
                            "rounded-3xl px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {/* drop down menu - Category */}
                          <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6">
                              {item.name}
                              <ChevronDownIcon
                                className="h-5 w-5 flex-none text-white"
                                aria-hidden="true"
                              />
                            </Popover.Button>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                            >
                              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                  {categories.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#e7eae7]"
                                    >
                                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                        <img
                                          src={`${item.icon}`}
                                          alt=""
                                          className="h-6 w-6 group-hover:text-indigo-600"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="flex-auto">
                                        <a
                                          href={item.href}
                                          className="block font-semibold text-gray-900"
                                        >
                                          {item.name}
                                          <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-gray-600">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                  {callsToAction.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-[#e7eae7]"
                                    >
                                      <item.icon
                                        className="h-5 w-5 flex-none text-gray-400"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                  ))}
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </Popover>
                        </a>
                      ) : (
                        // other navigation bar items
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#18411e] text-white"
                              : "text-white hover:bg-[#296b33] hover:text-white",
                            "rounded-3xl px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      )
                    )}
                  <div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) =>
                item.name === "CATEGORIES" ? (
                  <Disclosure as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-[#18411e] text-white"
                              : "text-gray-300 hover:bg-[#296b33] hover:text-white",
                            "px-3 font-medium flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                          {/* dropdown menu */}
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...categories, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:bg-[#296b33]"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ) : (
                  // other navigation bar items
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-[#18411e] text-white"
                        : "text-gray-300 hover:bg-[#296b33] hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
