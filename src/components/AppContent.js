import React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppFooter from "./AppFooter";
import {Typography} from "@material-ui/core";

const styles = {
	root: {},
};

class AppContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Typography>Body is here.</Typography>
				<AppFooter/>
			</div>
		);
	}
}

export default withStyles(styles)(AppContent)