import {PAGE_IDS} from "common/Constants";
import AppContent from "components/AppContent";
import AppHeader from "components/AppHeader";
import _ from "lodash";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function App() {
	const location = useLocation();
	const [pageId, setPageId] = useState(determinePageId(location));

	useEffect(() => {
		setPageId(determinePageId(location))
	}, [location]);

	return (
		<div>
			<AppHeader pageId={pageId}/>
			<AppContent pageId={pageId}/>
		</div>
	);
}

function determinePageId(location) {
	return _.find(PAGE_IDS, (pageId) => {
		return location.pathname.startsWith(`/${pageId}`);
	}) || 'home';
}

export default App