import {CssBaseline} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles"
import App from "App";
import "fontsource-roboto";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from "serviceWorker";
import theme from "theme";

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<BrowserRouter>
				<App/>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();