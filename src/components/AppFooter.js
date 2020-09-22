import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";

const styles = {
	root: {
		backgroundColor: '#404949',
		color: '#efefef',
		fontSize: '16px',
	},
};

class AppFooter extends React.Component {
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
						<Typography>Footer is here.</Typography>
					</Grid>
					<Grid item xs={0} sm={1} md={2}/>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(AppFooter)