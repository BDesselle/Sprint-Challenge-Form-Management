import React from "react";
import { Menu /* , Radio */ } from "semantic-ui-react";
/* import { useDarkMode } from "../hooks/useDarkMode"; */

const Navigation = () => {
  const [active, setActive] = React.useState({});
  const handleItemClick = (e, { name }) => setActive({ activeItem: name });
  const { activeItem } = active;

  /* const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }; */

  return (
    <Menu size="massive">
      <Menu.Item header>Form-Management</Menu.Item>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={handleItemClick}
      />
      <Menu.Item
        name="aboutUs"
        active={activeItem === "aboutUs"}
        onClick={handleItemClick}
        disabled
      />
      <Menu.Item
        name="contactUs"
        active={activeItem === "contactUs"}
        onClick={handleItemClick}
        disabled
      />
      {/* <Menu.Item position="right">
        <Radio
          toggle
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </Menu.Item> */}
    </Menu>
  );
};

export default Navigation;
