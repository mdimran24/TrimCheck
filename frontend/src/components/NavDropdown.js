import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavDropdown = ({ submenus, title }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (


    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1 rounded-md  bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
          {title}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
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


        <Menu.Items className="absolute inset-x-0 z-10 mx-auto mt-2 min-w-max rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="md:py-1">
            {submenus.map((submenu, index) => (
              <Menu.Items>
                {({ active }) => (
                  <a key={index} href={submenu.url} className={classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-6 py-6 lg:px-4 lg:py-2 text-sm text-center")} >
                    {submenu.title}
                  </a>
                )}
              </Menu.Items>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NavDropdown;
