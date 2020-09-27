import logo from "assets/logo.svg";
import React, {useState} from "react";
import {AppBar, Grid, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NavMenu from "components/NavMenu";

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: '16px',
	},
	wrapper: {
		flexWrap: 'nowrap',
	},
	logo: {
		flexBasis: '215px',
		flexDirection: 'column',
		flexGrow: 0,
		flexShrink: 0,
		justifyContent: 'center',
		margin: 'auto 0',
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
	const [navId, setNavId] = useState('home');
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar disableGutters={true}>
				<Grid container direction="row">
					<Grid item xs={false} sm={1} md={2}/>
					<Grid container item xs={12} sm={10} md={8} className={classes.wrapper}>
						<Grid item className={classes.logo}>
							<a href="/">
								<img src={logo} alt="ScrollRole logo"/>
							</a>
						</Grid>
						<Grid item container className={classes.tabs}>
							<NavMenu navId={navId} onPick={setNavId}/>
						</Grid>
					</Grid>
					<Grid item xs={false} sm={1} md={2}/>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default AppHeader