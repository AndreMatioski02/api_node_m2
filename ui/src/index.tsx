import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import Router from "./routes";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
	<React.StrictMode>
		<Router />
		<ToastContainer limit={1}/>
	</React.StrictMode>
);
