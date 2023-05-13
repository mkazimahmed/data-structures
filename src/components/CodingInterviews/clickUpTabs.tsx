import * as React from "react";
import "./style.css";

type TabData = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  isDisabled: boolean;
};

type Tabs = Array<TabData>;

const Tabs = ({ data }: { data: Tabs }) => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  const handleTabClick = (index) => {
    setCurrentTabIndex(index);
  };

  if (data.length === 0) {
    return null;
  }
  return (
    <div className="TabContainer">
      <div className="TabContainer-title">
        {data.map((tab, index) => {
          const { title, isDisabled } = tab;
          return (
            <button
              className={[
                "btn",
                currentTabIndex === index ? "btn-active" : "",
                isDisabled ? "btn-disabled" : "",
              ].join(" ")}
              disabled={isDisabled}
              onClick={() => handleTabClick(index)}
              role="botton"
            >
              {title}
            </button>
          );
        })}
      </div>
      {data.length > 0 && (
        <div className="TabContainer-content">
          {data[currentTabIndex].content}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const tabs = [
    {
      title: (
        <span>
          <b>Fancy</b> Title
        </span>
      ),
      // title: 'Fancy Title',
      content: "Fancy title abc",
      isDisabled: false,
    },
    {
      title: "Simple",
      content: "Simple abc",
      isDisabled: false,
    },
    {
      title: "Simple",
      content: "Simple abc",
      isDisabled: false,
    },
    {
      title: "Simple",
      content: "Simple abc",
      isDisabled: false,
    },
    {
      title: "Disabled",
      content: "Disabled abc",
      isDisabled: true,
    },
  ];
  return (
    <div>
      <Tabs data={tabs} />
    </div>
  );
}
