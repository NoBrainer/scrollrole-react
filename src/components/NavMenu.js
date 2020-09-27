import React, {useEffect, useState} from "react";
import {Button, Menu, MenuItem, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ArrowDropDown} from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
	root: {},
	button: {
		height: '70px',
		textTransform: 'none',
	},
}));

const labels = {
	'home': 'Home',
	'characters': 'Characters',
	'rules': 'Rules'
};

function NavMenu(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [navLabel, setNavLabel] = useState(labels[props.navId]);

	const handleClose = (e) => {
		setAnchorEl(null);
	};
	const handleOpen = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const pickItem = (navId) => {
		props.onPick(navId);
		setNavLabel(labels[navId]);
		handleClose();
	};
	const renderMenuItem = (navId, name) => {
		return (<MenuItem onClick={() => pickItem(navId)}>{name}</MenuItem>);
	};

	// If navLabel changes, update document.title
	useEffect(() => {
		document.title = `ScrollRole - ${navLabel}`;
	}, [navLabel]);

	return (
		<div className={classes.root}>
			<Button aria-controls="nav-menu" aria-haspopup="true" onClick={handleOpen} className={classes.button}>
				<Typography>{navLabel}</Typography>
				<ArrowDropDown/>
			</Button>
			<Menu id="nav-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{renderMenuItem('home', 'Home', pickItem)}
				{renderMenuItem('characters', 'Characters', pickItem)}
				{renderMenuItem('rules', 'Rules', pickItem)}
			</Menu>
		</div>
	);
}

NavMenu.propTypes = {
	navId: PropTypes.string.isRequired,
	onPick: PropTypes.func.isRequired,
};

export default NavMenu