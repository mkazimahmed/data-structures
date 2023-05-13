import React from "react";
import "./styles.css";

interface DropDownType {
  text: string;
  position?: string;
  children: React.ReactNode;
}

interface DropDownMenuType {
  children: React.ReactNode;
}

interface DropDownMenuItemType {
  children: React.ReactNode;
  onClick?: () => void;
}

type ContextType = {
  isOpen?: boolean;
  setIsOpen?: () => void;
};

const DDContext = React.createContext({});

const DropDownList = ({ children }: DropDownMenuType) => {
  const data = React.useContext(DDContext);

  return (
    <div
      ref={data.menuRef}
      className={["menu-list", data.position === "right" && "menu-list--end"]
        .filter(Boolean)
        .join(" ")}
      style={data.cords}
    >
      {children}
    </div>
  );
};

const DropDownMenuItem = ({ onClick, children }: DropDownMenuItemType) => {
  const data = React.useContext(DDContext);
  const handleClick = () => {
    onClick && onClick();
    data.setIsOpen(false);
  };
  return (
    <div className="menu-list-item" onClick={handleClick}>
      {children}
    </div>
  );
};

const DropdownMenu = ({ text, position = "left", children }: DropDownType) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [menuHeight, setMenuHeight] = React.useState(false);
  const [, setForceUpdate] = React.useState(false);

  const buttonRef = React.useRef();
  const menuRef = React.useRef();

  const clickOutsideEventHandler = (event) => {
    if (
      buttonRef.current?.contains(event.target) ||
      menuRef.current === null ||
      menuRef.current?.contains(event.target)
    ) {
      return;
    }

    setIsOpen(false);
  };

  const scrollEventHandler = (event) => {
    // Debounce
    setForceUpdate((count) => count + 1);
  };

  const getMenuPositionCordinates = () => {
    if (menuRef.current) {
      const windowHeight = window.innerHeight;

      const buttonEl = buttonRef.current?.getBoundingClientRect();
      const menuEl = menuRef.current?.getBoundingClientRect();
      const withInWindow = menuEl.height + buttonEl.top < windowHeight;

      const cords = {
        top: withInWindow ? buttonEl.height : -menuEl.height,
      };

      return cords;
    }

    return {};
  };

  React.useEffect(() => {
    window.addEventListener("mousedown", clickOutsideEventHandler);
    window.addEventListener("touchstart", clickOutsideEventHandler);
    window.addEventListener("scroll", scrollEventHandler);

    return () => {
      window.removeEventListener("mousedown", clickOutsideEventHandler);
      window.removeEventListener("touchstart", clickOutsideEventHandler);
      window.removeEventListener("scroll", scrollEventHandler);
    };
  }, []);

  const cords = getMenuPositionCordinates();

  return (
    <DDContext.Provider value={{ isOpen, setIsOpen, position, cords, menuRef }}>
      <div className={"dropdown-menu"}>
        <button ref={buttonRef} onClick={() => setIsOpen(!isOpen)}>
          {text}
        </button>

        {isOpen && <div>{children}</div>}
      </div>
    </DDContext.Provider>
  );
};

DropdownMenu.List = DropDownList;
DropdownMenu.Item = DropDownMenuItem;

const App = () => {
  return (
    <>
      <DropdownMenu position="left" text="My dropdown">
        <DropdownMenu.List>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 1</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 2</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 3</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 4</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 5</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 6</div>
          </DropdownMenu.Item>
        </DropdownMenu.List>
      </DropdownMenu>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <DropdownMenu position="left" text="My dropdown">
        <DropdownMenu.List>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 1</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 2</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 3</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 4</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 5</div>
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={() => alert("Item 1")}>
            <div>Item 6</div>
          </DropdownMenu.Item>
        </DropdownMenu.List>
      </DropdownMenu>
    </>
  );
};

export default App;
