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
		flexDirection: 'column',
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
		flex: 1,
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
	render() {
		const {classes} = this.props;
		return (
			<AppBar position="static" className={classes.root}>
				<Toolbar disableGutters={true}>
					<Grid container direction="row">
						<Grid item xs={false} sm={1} md={2}/>
						<Grid container item xs={12} sm={10} md={8}>
							<Grid item className={classes.logo}>
								<a href="/">
									<img src={logo} alt="ScrollRole logo"/>
								</a>
							</Grid>
							<Grid item container className={classes.tabs}>
								{this.renderTab('home', 'Home')}
								{this.renderTab('builder', 'Character Builder')}
								{this.renderTab('rules', 'Customize Rules')}
							</Grid>
						</Grid>
						<Grid item xs={false} sm={1} md={2}/>
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