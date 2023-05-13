import * as React from "react";

export default function App() {
  return (
    <div className="App">
      <em>DNS Infrastructure</em>
      <div>{`Managed by internet service provider`}</div>
      <div>{`Steps:`}</div>
      <div>{`- Client -> DNS Resolver -> Root Name Server`}</div>
      <div>{`- Root Name Server -> DNS Resolver // .com, .edu etc`}</div>
      <div>{`- DNS Resolver -> Top Level Name Server // ip address `}</div>
    </div>
  );
}
