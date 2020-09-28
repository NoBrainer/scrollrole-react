import {AppBar, Grid, Toolbar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import logo from "assets/logo.svg";
import NavMenu from "components/NavMenu";
import PropTypes from "prop-types";
import React from "react";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {},
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
	return (
		<AppBar position="static" className={classes.root}>
			<Toolbar disableGutters={true}>
				<Grid container direction="row">
					<Grid item xs={false} sm={1} md={2}/>
					<Grid container item xs={12} sm={10} md={8} className={classes.wrapper}>
						<Grid item className={classes.logo}>
							<Link to="/">
								<img src={logo} alt="ScrollRole logo"/>
							</Link>
						</Grid>
						<Grid item container className={classes.tabs}>
							<NavMenu navId={props.pageId}/>
						</Grid>
					</Grid>
					<Grid item xs={false} sm={1} md={2}/>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

AppHeader.propTypes = {
	pageId: PropTypes.string.isRequired,
};

export default AppHeader