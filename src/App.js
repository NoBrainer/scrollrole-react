import {PAGE_IDS, SECTION_IDS} from "common/Constants";
import AppContent from "components/AppContent";
import AppHeader from "components/AppHeader";
import _ from "lodash";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function App() {
	const location = useLocation();
	const [pageId, setPageId] = useState(determinePageId(location));
	const [sectionId, setSectionId] = useState(determineSectionId(location, pageId));

	const updateAppLocation = () => {
		const _pageId = determinePageId(location);
		const _sectionId = determineSectionId(location, _pageId);
		setPageId(_pageId);
		setSectionId(_sectionId);
	};

	useEffect(() => {
		updateAppLocation();
	}, [location]);

	return (
		<div>
			<AppHeader pageId={pageId}/>
			<AppContent pageId={pageId} sectionId={sectionId}/>
		</div>
	);
}

function determinePageId(location) {
	return _.find(PAGE_IDS, (pageId) => {
		return location.pathname.startsWith(`/${pageId}`);
	}) || 'home';
}

function determineSectionId(location, pageId) {
	const sectionIdOptions = SECTION_IDS[pageId] || null;
	return _.find(sectionIdOptions, (sectionId) => {
		return location.pathname.startsWith(`/${pageId}/${sectionId}`);
	}) || null;
}

function determineSectionIdOptions(pageId) {
	return SECTION_IDS[pageId] || null;
}

export default App