import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppFooter from "./AppFooter";
import {Grid, Paper} from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	root: {},
	paper: {
		flex: 1,
		margin: '20px 0',
		padding: '20px',
	},
}));

function AppContent(props) {
	const classes = useStyles();
	return (
		<Grid className={classes.root}>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={12} sm={10} md={8}>
					<Paper className={classes.paper}>Body text for {props.pageId}.</Paper>
				</Grid>
				<Grid item xs={false} sm={1} md={2}/>
			</Grid>
			<AppFooter/>
		</Grid>
	);
}

AppContent.propTypes = {
	pageId: PropTypes.string.isRequired,
};

export default AppContent