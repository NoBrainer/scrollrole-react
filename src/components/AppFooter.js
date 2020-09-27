import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Link, List, ListItem, Typography} from "@material-ui/core";
import PropTypes from "prop-types";
import {FOOTER_SECTIONS} from "utils/Constants";

const useStyles = makeStyles((theme) => ({
	root: {},
	section: {
		padding: '0 20px',
	},
}));

function AppFooter(props) {
	const classes = useStyles();
	const [sections] = useState(props.sections || FOOTER_SECTIONS);

	const renderSections = () => {
		return sections.map((section, i) => renderSection(section, i))
	};
	const renderSection = (section, i) => {
		return (
			<Grid item className={classes.section} xs={12} sm={6} md={4} key={i}>
				<Typography>{section.title}</Typography>
				<List>
					{section.links.map((link, i) => renderListItem(link, i))}
				</List>
			</Grid>
		);
	};
	const renderListItem = (link, i) => {
		return (
			<ListItem key={i}>
				<Link href={link.href} target="_blank" color="inherit" underline="hover">{link.text}</Link>
			</ListItem>
		);
	};

	return (
		<Grid className={classes.root}>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={12} sm={10} md={8}>
					{renderSections()}
				</Grid>
				<Grid item xs={false} sm={1} md={2}/>
			</Grid>
		</Grid>
	);
}

AppFooter.propTypes = {
	sections: PropTypes.object,
};

export default AppFooter