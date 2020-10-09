import _ from "lodash";

export const PAGE_LABELS = {
	home: 'Home',
	characters: 'Characters',
	rules: 'Rules',
};
export const PAGE_IDS = _.keys(PAGE_LABELS);

export const SECTION_IDS = {
	home: null,
	characters: null,
	rules: [
		'introduction',
		'backgrounds',
		'classes',
		'races',
	],
};
export const SECTION_LABELS = {
	home: null,
	characters: null,
	rules: {
		introduction: 'Introduction',
		backgrounds: 'Backgrounds',
		classes: 'Classes',
		races: 'Races',
	},
};