import React from "react";
import "./App.css";
import data from "./data";
import Table from "./table";

function App() {
return (
<div className="App">
<Table data={data} />
</div>
);
}

export default App;
