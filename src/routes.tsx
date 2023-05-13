import DSA from "./components/DSA";
import LinkedLists from "./components/DSA/LinkedLists";
import Interviews from "./components/CodingInterviews";
import Robinhood from "./components/CodingInterviews/robinhood";
import Alchemy from "./components/CodingInterviews/alchemy";
import Roblox from "./components/CodingInterviews/roblox";

import SystemDesign from "./components/SystemDesign";
import Dropdown from "./components/SystemDesign/dropdown";
import ErrorPage from "./ErrorPage";
import Trees from "./components/DSA/Trees";
import CheetSheet from "./components/SystemDesign/cheetSheet";

export const routes = [
  {
    path: "dsa",
    element: <DSA />,
  },
  {
    path: "dsa/linkedLists",
    element: <LinkedLists />,
  },
  {
    path: "dsa/trees",
    element: <Trees />,
  },
  // Interviews
  {
    path: "interviews/robinhood",
    element: <Robinhood />,
  },
  {
    path: "interviews/alchemy",
    element: <Alchemy />,
  },
  {
    path: "interviews/roblox",
    element: <Roblox />,
  },
  // System Design
  {
    path: "systemdesign/cheetsheet",
    element: <CheetSheet />,
  },
  {
    path: "systemdesign/dropdown",
    element: <Dropdown />,
  },
];
