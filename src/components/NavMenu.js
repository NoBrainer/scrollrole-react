import React, {useEffect, useState} from "react";
import {Button, Menu, MenuItem, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {ArrowDropDown} from "@material-ui/icons";
import PropTypes from "prop-types";
import {PAGE_LABELS} from "utils/Constants";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
	root: {},
	button: {
		height: '70px',
		textTransform: 'none',
	},
}));

function NavMenu(props) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = useState(null);
	const [navLabel, setNavLabel] = useState(PAGE_LABELS[props.navId]);

	const handleClose = (e) => {
		setAnchorEl(null);
	};
	const handleOpen = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const pickItem = (navId) => {
		props.onChangeNavId(navId);
		setNavLabel(PAGE_LABELS[navId]);
		handleClose();
	};
	const renderMenuItems = () => {
		return _.map(PAGE_LABELS, (name, navId) => renderMenuItem(navId, name));
	};
	const renderMenuItem = (navId, name) => {
		return (<MenuItem onClick={() => pickItem(navId)} key={navId}>{name}</MenuItem>);
	};

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
				{renderMenuItems()}
			</Menu>
		</div>
	);
}

NavMenu.propTypes = {
	navId: PropTypes.string.isRequired,
	onChangeNavId: PropTypes.func.isRequired,
};

export default NavMenu