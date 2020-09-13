import React from 'react'
import logo from '../assets/logo.svg'
import './AppHeader.css'

class AppHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AppHeader">
				{this.renderLogo()}
				{this.renderTabs()}
			</div>
		);
	}

	renderLogo() {
		return (
			<div className="logo">
				<a href="/">
					<img src={logo} alt="ScrollRole logo"/>
				</a>
			</div>
		);
	}

	renderTabs() {
		return (
			<div className="tabs">
				{this.renderTab('home', 'Home')}
				{this.renderTab('builder', 'Character Builder')}
				{this.renderTab('rules', 'Customize Rules')}
			</div>
		);
	}

	renderTab(id, text) {
		return (<a className={"tab " + id} href={"#" + id}>{text}</a>);
	}
}

export default AppHeader