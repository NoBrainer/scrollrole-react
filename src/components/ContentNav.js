import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import _ from "lodash";
import PropTypes from "prop-types";
import React from "react";
import {useHistory} from "react-router-dom";
import {SECTION_IDS, SECTION_LABELS} from "../common/Constants";
import {PAPER_STYLES} from "../common/Defaults";

const useStyles = makeStyles((theme) => ({
	root: {
		flex: 1,
		marginRight: '20px',
	},
	paper: _.extend(PAPER_STYLES, {
		minHeight: '500px',
	}),
}));

function ContentNav(props) {
	const classes = useStyles();
	const history = useHistory();

	const sectionIdOptions = SECTION_IDS[props.pageId] || null;

	const renderSectionNavItems = () => {
		return sectionIdOptions.map((sectionId) => renderSectionNavItem(sectionId, SECTION_LABELS[props.pageId][sectionId]));
	};
	const renderSectionNavItem = (sectionId, sectionLabel) => {
		return (
			<li key={sectionId}>{sectionLabel}</li>
		);
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<ul>
					{renderSectionNavItems()}
				</ul>
			</Paper>
		</div>
	);
}

ContentNav.propTypes = {
	pageId: PropTypes.string.isRequired,
	sectionId: PropTypes.string,
};

export default ContentNav