import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {PAPER_STYLES} from "common/Defaults";
import React from "react";

const useStyles = makeStyles((theme) => ({
	paper: PAPER_STYLES,
}));

function RulesContent(props) {
	const classes = useStyles();
	return (<Paper className={classes.paper}>[Rules Customizer - UNDER CONSTRUCTION]</Paper>);
}

export default RulesContent