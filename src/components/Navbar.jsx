import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="stick top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
              <span className="text-xl tracking-tight text-white">
                VirtualR
              </span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white hover:text-gray-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}{" "}
              <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul>
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-white hover:text-gray-300"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="" className="py-2 px-3 border rounded-md">
                Sing In
              </a>
              <a
                href=""
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 "
              >
                Create an account
              </a>
            </div>
            <div className="lg:hidden flex items-center">
              <button onClick={toogleNavbar}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a
                      href={item.href}
                      className="text-white hover:text-gray-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 ">
                <a href="" className="py-2 px-3 border rounded-md">
                  Sing In
                </a>
                <a
                  href=""
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 "
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
