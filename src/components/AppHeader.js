import logo from "assets/logo.svg";
import React from "react";
import {AppBar, Grid, Link, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '16px',
	},
	logo: {
		flexBasis: '215px',
		flexDirection: 'column',
		flexGrow: 0,
		flexShrink: 0,
		justifyContent: 'center',
		margin: "auto 0",
		padding: '0 10px',
		'img': {
			height: '70px',
		},
	},
	tabs: {
		flex: 1,
	},
	tab: {
		alignItems: 'center',
		display: 'flex',
		padding: '20px',
		'&:hover, &.active': {
			backgroundColor: 'rgba(255, 255, 255, 0.1)',
		},
	},
}));

function AppHeader(props) {
	const classes = useStyles();
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
							{renderTab(classes, 'characters', 'Characters')}
							{renderTab(classes, 'rules', 'Rules')}
						</Grid>
					</Grid>
					<Grid item xs={false} sm={1} md={2}/>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

function renderTab(classes, id, text) {
	return (<Link href={"#" + id} color="inherit" underline="none" className={classes.tab}>{text}</Link>);
}

export default AppHeader