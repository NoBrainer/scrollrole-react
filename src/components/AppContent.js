import {Grid} from "@material-ui/core";
import AppFooter from "components/AppFooter";
import ContentNav from "components/ContentNav";
import CharactersContent from "components/pages/CharactersContent";
import HomeContent from "components/pages/HomeContent";
import RulesContent from "components/pages/RulesContent";
import PropTypes from "prop-types";
import React from "react";

function AppContent(props) {
	const renderContent = () => {
		if (props.pageId === 'characters') {
			return (<CharactersContent/>);
		} else if (props.pageId === 'rules') {
			return (<RulesContent/>);
		} else {
			return (<HomeContent/>);
		}
	};

	return (
		<Grid>
			<Grid container direction="row">
				<Grid item xs={false} sm={1} md={2}/>
				<Grid container item xs={4} sm={3} md={2}>
					<ContentNav pageId={props.pageId} sectionId={props.sectionId}/>
				</Grid>
				<Grid container item xs={8} sm={7} md={6}>
					{renderContent()}
				</Grid>
				<Grid item xs={false} sm={1} md={2}/>
			</Grid>
			<AppFooter/>
		</Grid>
	);
}

AppContent.propTypes = {
	pageId: PropTypes.string.isRequired,
	sectionId: PropTypes.string,
};

export default AppContent