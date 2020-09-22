import React from "react";
import {withStyles} from "@material-ui/core/styles";
import AppFooter from "./AppFooter";
import {Grid, Paper} from "@material-ui/core";

const styles = {
	root: {
		minHeight: '200px',
	},
	paper: {
		flex: 1,
		margin: '20px 0',
		padding: '20px'
	},
};

class AppContent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {classes} = this.props;
		return (
			<Grid className={classes.root}>
				<Grid container direction="row">
					<Grid item xs={0} sm={1} md={2}/>
					<Grid container item xs={12} sm={10} md={8}>
						<Paper className={classes.paper}>Body is here.</Paper>
					</Grid>
					<Grid item xs={0} sm={1} md={2}/>
				</Grid>
				<AppFooter/>
			</Grid>
		);
	}
}

export default withStyles(styles)(AppContent)