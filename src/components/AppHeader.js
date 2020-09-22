import logo from "assets/logo.svg";
import React from "react";
import {AppBar, Grid, Link, Toolbar} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

const styles = {
	root: {
		backgroundColor: '#404949',
		color: '#efefef',
		fontSize: '16px',
	},
	logo: {
		flexBasis: '215px',
		flexGrow: 0,
		flexShrink: 0,
		justifyContent: 'center',
		paddingLeft: '10px',
		paddingRight: '10px',
		'img': {
			height: '70px',
		},
	},
	tabs: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	tab: {
		alignItems: 'center',
		display: 'flex',
		marginRight: '5px',
		padding: '20px',
		textDecoration: 'none',
		'&:hover, &.active': {
			backgroundColor: '#000000',
		},
		'&:last-child': {
			marginRight: 0
		},
	},
};

class AppHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {classes} = this.props;
		return (
			<AppBar position="static" className={classes.root}>
				<Toolbar>
					<Grid container direction="row">
						<Grid item direction="column" className={classes.logo}>
							<a href="/">
								<img src={logo} alt="ScrollRole logo"/>
							</a>
						</Grid>
						<Grid item direction="row" flex="1" className={classes.tabs}>
							{this.renderTab('home', 'Home')}
							{this.renderTab('builder', 'Character Builder')}
							{this.renderTab('rules', 'Customize Rules')}
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}

	renderTab(id, text) {
		const {classes} = this.props;
		return (<Link href={"#" + id} color="inherit" underline="none" className={classes.tab}>{text}</Link>);
	}
}

export default withStyles(styles)(AppHeader)