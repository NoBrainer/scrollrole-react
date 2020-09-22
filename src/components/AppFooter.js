import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";

const styles = {
	root: {},
};

class AppFooter extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Typography>Footer is here.</Typography>
			</div>
		);
	}
}

export default withStyles(styles)(AppFooter)