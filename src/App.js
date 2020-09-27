import React, {useState} from "react";
import AppHeader from "components/AppHeader";
import AppContent from "components/AppContent";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {},
}));

function App(props) {
	const classes = useStyles();
	const [pageId, setPageId] = useState('home');
	return (
		<div className={classes.root}>
			<AppHeader pageId={pageId} onChangePageId={setPageId}/>
			<AppContent pageId={pageId}/>
		</div>
	);
}

export default App