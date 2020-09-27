import {Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import AppFooter from "./AppFooter";

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

	const renderContent = () => {
		return (<Paper className={classes.paper}>Body text for {props.pageId}.</Paper>);
	};

	return (
		<Grid className={classes.root}>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={12} sm={10} md={8}>
					{renderContent()}
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