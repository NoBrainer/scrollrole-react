import React from "react";
import AppHeader from "components/AppHeader";
import AppContent from "components/AppContent";
import {withStyles} from "@material-ui/core/styles";

// https://material-ui.com/styles/advanced/
const styles = {
	root: {},
};

function App(props) {
	const {classes} = props;
	return (
		<div className={classes.root}>
			<AppHeader/>
			<AppContent/>
		</div>
	);
}

export default withStyles(styles)(App)