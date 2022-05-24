import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

let root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

ReactDOM.render(
    <App compiler="TypeScript" framework="React" />,
    document.getElementById("root")
);