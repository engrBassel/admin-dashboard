import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

function NabButton({ title, customFunc, icon, color, dotColor }) {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        className="relative p-3 text-xl rounded-full hover:bg-light-gray"
        style={{ color }}
        onClick={customFunc}
      >
        <span
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
          style={{ backgroundColor: dotColor }}
        />
        {icon}
      </button>
    </TooltipComponent>
  );
}

function Navbar() {
  const { setActiveMenu, isClicked, handleClick } = useStateContext();

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NabButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NabButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NabButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color="blue"
          dotColor="#03c8d7"
          icon={<BsChatLeft />}
        />
        <NabButton
          title="Notifications"
          customFunc={() => handleClick("notification")}
          color="blue"
          dotColor="#03c8d7"
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="avatar" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
}
export default Navbar;
