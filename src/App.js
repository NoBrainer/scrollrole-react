import React from "react";
import AppHeader from "components/AppHeader";
import AppContent from "components/AppContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
	root: {},
});

function App(props) {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppHeader/>
			<AppContent/>
		</div>
	);
}

export default App