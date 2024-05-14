import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { useStateContext } from "../contexts/ContextProvider";

import { links } from "../data/dummy";

function Sidebar() {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink = "dark:text-black bg-light-gray";
  const normalLink =
    "dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";

  return (
    <div className="ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto">
      {activeMenu && (
        <>
          {/* logo and close btn start */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => {}}
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware />
              <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Close Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                className="mt-4 p-3 text-xl rounded-full hover:bg-light-gray block"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/* logo and close btn start */}
          {/* links start */}
          <div className="mt-10">
            {links.map((category) => (
              <div key={category.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {category.title}
                </p>
                {category.links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={`/${link.name}`}
                    onClick={() => {}}
                    className={({ isActive }) =>
                      `flex items-center gap-5 m-2 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 ${
                        isActive ? activeLink : normalLink
                      }`
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          {/* links end */}
        </>
      )}
    </div>
  );
}
export default Sidebar;
