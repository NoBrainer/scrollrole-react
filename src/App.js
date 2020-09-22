import React from "react";
import AppHeader from "components/AppHeader";
import AppContent from "components/AppContent";
import {withStyles} from "@material-ui/core/styles";

// https://material-ui.com/styles/advanced/
// https://www.youtube.com/watch?v=pHclLuRolzE&list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr&ab_channel=AnthonySistilli
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