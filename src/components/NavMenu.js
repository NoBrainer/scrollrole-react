import {Button, Menu, MenuItem, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ArrowDropDown} from "@material-ui/icons";
import {PAGE_IDS, PAGE_LABELS} from "common/Constants";
import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	button: {
		height: '70px',
		textTransform: 'none',
	},
}));

function NavMenu(props) {
	const classes = useStyles();
	const history = useHistory();
	const [anchorEl, setAnchorEl] = useState(null);
	const [navLabel, setNavLabel] = useState(PAGE_LABELS[props.navId]);

	const handleClose = (e) => {
		setAnchorEl(null);
	};
	const handleOpen = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const pickItem = (navId) => {
		setNavLabel(PAGE_LABELS[navId]);
		handleClose();
		history.push(navId === 'home' ? '/' : `/${navId}`);
	};
	const renderMenuItems = () => {
		return PAGE_IDS.map((navId) => renderMenuItem(navId, PAGE_LABELS[navId]));
	};
	const renderMenuItem = (navId, name) => {
		return (
			<MenuItem key={navId} selected={props.navId === navId} onClick={() => pickItem(navId)}>
				{name}
			</MenuItem>
		);
	};

	useEffect(() => {
		document.title = `ScrollRole - ${navLabel}`;
	}, [navLabel]);
	useEffect(() => {
		setNavLabel(PAGE_LABELS[props.navId]);
	}, [props.navId]);

	return (
		<div>
			<Button aria-controls="nav-menu" aria-haspopup="true" onClick={handleOpen} className={classes.button}>
				<Typography>{navLabel}</Typography>
				<ArrowDropDown/>
			</Button>
			<Menu id="nav-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{renderMenuItems()}
			</Menu>
		</div>
	);
}

NavMenu.propTypes = {
	navId: PropTypes.string.isRequired,
};

export default NavMenu