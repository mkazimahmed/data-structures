import { Button } from "@fluentui/react-components";

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

function Dropdown({ children }) {
  return <div>{children} </div>;
}

function DropdownButton({ children }) {
  return <Button>{children}</Button>;
}

function DropdownList({ children }) {
  return <div>{children}</div>;
}

function DropdownListItem({ children }) {
  return <div>{children}</div>;
}

Dropdown.Button = DropdownButton;
Dropdown.List = DropdownList;
Dropdown.ListItem = DropdownListItem;

export default Dropdown;
