import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#404949',
		},
		secondary: {
			main: '#136b2b',
		},
		text: {
			primary: '#efefef',
			secondary: '#000000',
		},
		background: {
			default: '#dddddd',
			paper: '#404949',
		},
	}
});

export default theme