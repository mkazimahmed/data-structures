import { Button } from "@fluentui/react-components";
import React from "react";

{
  /* <Dropdown>
    <Dropdown.Button>Toggle</Dropdown.Button>
    <Dropdown.List>
        <Dropdown.ListItem>Option 1</Dropdown.ListItem>
        <Dropdown.ListItem>Option 1</Dropdown.ListItem>
        <Dropdown.ListItem>Option 1</Dropdown.ListItem>
        <Dropdown.ListItem>Option 1</Dropdown.ListItem>
    </Dropdown.List>
</Dropdown> */
}

const DDContext = React.createContext({});

function Dropdown({ children }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const buttonRef = React.useRef(null);

  const clickEventHandler = (e) => {
    console.log(e.target);
    if (
      menuRef.current === null ||
      menuRef.current.contains(e.target) ||
      buttonRef.current.contains(e.target)
    ) {
      return;
    }

    setIsOpen(false);
  };

  const scrollEventHandler = () => {
    // console.log("scroll");
  };

  React.useEffect(() => {
    window.addEventListener("click", clickEventHandler);
    window.addEventListener("touchstart", clickEventHandler);
    window.addEventListener("scroll", scrollEventHandler);

    return () => {
      window.removeEventListener("click", clickEventHandler);
      window.removeEventListener("touchstart", clickEventHandler);
      window.removeEventListener("scroll", scrollEventHandler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const providerValue = {
    isOpen,
    onClick: handleClick,
    menuRef,
    buttonRef,
  };
  return (
    <DDContext.Provider value={providerValue}>{children} </DDContext.Provider>
  );
}

function DropdownButton({ children }) {
  const context = React.useContext(DDContext);
  return (
    <Button ref={context.buttonRef} onClick={context.onClick} className="btn">
      {children}
    </Button>
  );
}

function DropdownList({ children }) {
  const context = React.useContext(DDContext);

  if (context.isOpen) {
    return (
      <div
        ref={context.menuRef}
        style={{
          border: "1px solid #aaa",
          width: "200px",
          position: "absolute",
          backgroundColor: "#fff",
        }}
      >
        {children}
      </div>
    );
  }

  return null;
}

function DropdownListItem({ onClick, children }) {
  const context = React.useContext(DDContext);

  const handleClick = () => {
    onClick();
    context.onClick();
  };
  return (
    <div
      onClick={handleClick}
      style={{ borderBottom: "1px solid #aaa", padding: "5px" }}
    >
      {children}
    </div>
  );
}

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.ListItem = DropdownListItem;

function App() {
  return (
    <>
      <Dropdown>
        <Dropdown.Button>Toggle</Dropdown.Button>
        <Dropdown.List>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 1");
            }}
          >
            Option 1
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 2");
            }}
          >
            Option 2
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 3");
            }}
          >
            Option 3
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 4");
            }}
          >
            Option 5
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 5");
            }}
          >
            Option 6
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 6");
            }}
          >
            Option 7
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 7");
            }}
          >
            Option 8
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 8");
            }}
          >
            Option 9
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 9");
            }}
          >
            Option 10
          </Dropdown.ListItem>
          <Dropdown.ListItem
            onClick={() => {
              alert("Option 10");
            }}
          >
            Option 4
          </Dropdown.ListItem>
        </Dropdown.List>
      </Dropdown>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, illum
        hic! Rerum perspiciatis deleniti totam. Ut in sit repellat harum,
        adipisci veritatis. Vitae adipisci explicabo reiciendis tempora aliquid
        commodi magni.
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
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </>
  );
}

export default App;
