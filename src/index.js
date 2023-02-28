import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import "./bootstrap/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
// 	<StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</StrictMode>
// );

function ReactFirebaseAuth() {
	return (
		<StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StrictMode>
	);
}

export default ReactFirebaseAuth;