import AppContent from "components/AppContent";
import AppHeader from "components/AppHeader";
import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function App() {
	let location = useLocation();
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
	if (location.pathname.startsWith('/characters')) {
		return 'characters';
	} else if (location.pathname.startsWith('/rules')) {
		return 'rules'
	} else {
		return 'home';
	}
}

export default App