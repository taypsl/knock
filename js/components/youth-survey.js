import React from 'react';

// giant form component. yikes.
export default class YouthSurvey extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
    		dayHours: [
    		{ id: 1, name: '8am', selected: false },
    		{ id: 2, name: '9am', selected: false },
    		{ id: 3, name: '10am', selected: false },
    		{ id: 4, name: '11am', selected: false },
    		{ id: 5, name: '12pm', selected: false },
    		{ id: 6, name: '1pm', selected: false },
    		{ id: 7, name: '2pm', selected: false },
    		{ id: 8, name: '3pm', selected: false },
    		{ id: 9, name: '4pm', selected: false },
    		{ id: 10, name: '5pm', selected: false },
    		{ id: 11, name: '6pm', selected: false },
    		{ id: 12, name: '7pm', selected: false },
    		{ id: 13, name: '8pm', selected: false }
    		],
    		selectedWeekendTime:[],
    		selectedWeekdayTime:[], 
    		children: [
    		{ id: 1, name: 'Yes', text: 'I have children.' },
    		{ id: 2, name: 'No', text: '.' }
    		],
    		ethnicity: [
    		{ id: 1, name: 'Yes ', text: 'I am of Hispanic, Latino, or Spanish origin.' },
    		{ id: 2, name: 'No', text: '.' }
    		],
    		dems: [
    		{ id: 1, name: 'American Indian or Alaska Native', selected: false },
    		{ id: 2, name: 'Asian', selected: false },
    		{ id: 3, name: 'Black or African American', selected: false },
    		{ id: 4, name: 'Native Hawaiian or Other Pacific Islander', selected: false },
    		{ id: 5, name: 'White', selected: false }
    		],
    		background: '',
    		preferences: '',
    		mentor: false,
    		education: [
    		{ id: 1, name: 'Some high school' },
    		{ id: 2, name: 'High school degree' },
    		{ id: 3, name: 'GED' },
    		{ id: 4, name: 'Some college' },
    		{ id: 5, name: 'College degree' },
    		{ id: 6, name: 'Advanced degree' },
    		{ id: 7, name: 'Other' }
    		],
    		educationChecked: 0 }
    	this.onTextInputChanged = this.onTextInputChanged.bind(this)
    	this.onDemographicChange = this.onDemographicChange.bind(this)
    	this.onEducationChange = this.onEducationChange.bind(this)
    	this.onChildrenChange = this.onChildrenChange.bind(this)
    	this.onEthnicityChange = this.onEthnicityChange.bind(this)
    	this.handleMultipleSelect = this.handleMultipleSelect.bind(this)
    	this.__handleMultipleSelect = this.__handleMultipleSelect.bind(this)
    	this.handleFormSubmit = this.handleFormSubmit.bind(this)
    } 

    onTextInputChanged(event) {
    	var obj = {};
    	obj[event.target.name] = event.target.value;
    	this.setState(obj)
    }

    canBeSubmitted() {
	  const { name, email, phone, background } = this.state;
	  return (
	    name.length > 0 &&
	    email.length > 0 &&
	    phone.length > 0 &&
	    background.length > 0
	  );
	}

    handleFormSubmit(event) {
    	if (!this.canBeSubmitted()) {
		    evt.preventDefault();
		    return;
		  }
    	var dems = this.state.dems
    	.filter(function(element){
    		return element.selected;
    	})
    	.map(function(element){return element.name})
    	.join(" ")

    	var children = this.state.children
    	.filter(function(element){
    		return element.selected;
    	})
    	.map(function(element){return element.name})
    	.join(" ")

    	var ethnicity = this.state.ethnicity
    	.filter(function(element){
    		return element.selected;
    	})
    	.map(function(element){return element.name + '' + element.text})

    	event.preventDefault();
    	fetch('https://important-scraper.glitch.me/users', {  
    		method: 'POST',
    		headers: {
    			'Accept': 'application/json',
    			'Content-Type': 'application/json',
    		},
    		body: JSON.stringify({
    			name: this.state.name,
    			email: this.state.email,
    			phone: this.state.phone,
    			education: this.state.education[this.state.educationChecked].name,
    			weekendTime: this.state.selectedWeekendTime,
    			weekdayTime: this.state.selectedWeekdayTime,
    			children: children,
    			ethnicity: ethnicity,
    			dems: dems,
    			background: this.state.background,
    			preferences: this.state.preferences,
    			mentor: false
    		})
    	})
    	.then( res => res.text())
    	.then( data => {
    		console.log("submit_response", data)
    	})
    	.catch((error) => {
    		console.error(error);
    	});
    }

    onDemographicChange(id) {
    	var stateDems = this.state.dems.map(function(d) {
    		return {
    			id: d.id,
    			name:d.name,
    			selected: (d.id === id ? !d.selected : d.selected)
    		};
    	});
    	this.setState({ 
    		dems: stateDems
    	});
    }

    onEducationChange(id){
    	var stateEdu = this.state.education.map(function(e) {
    		return {
    			id: e.id,
    			name:e.name,
    			selected: (e.id === id ? !e.selected : e.selected)
    		};
    	});
    	this.setState ({
    		education: stateEdu,
    		educationChecked: id
    	});
    }

    onChildrenChange(id){
    	var stateChildren = this.state.children.map(function(c) {
    		return {
    			id: c.id,
    			name: c.name,
    			text: c.text,
    			selected: (c.id === id ? !c.selected : c.selected)
    		}
    	})
    	this.setState ({
    		children: stateChildren
    	})
    }

    onEthnicityChange(id){
    	var stateEthnicity = this.state.ethnicity.map(function(e) {
    		return {
    			id: e.id,
    			name: e.name,
    			text: e.text,
    			selected: (e.id === id ? !e.selected : e.selected)
    		}
    	})
    	this.setState ({
    		ethnicity: stateEthnicity
    	})
    }

    handleMultipleSelect(e) {
    	var options = e.target.options;
    	var value = [];
    	for (var i = 0, l = options.length; i < l; i++) {
    		if (options[i].selected) {
    			value.push(options[i].value);
    		}
    	}
    	this.setState ({
    		selectedWeekdayTime: value
    	})
    }
    __handleMultipleSelect(e) {
    	var options = e.target.options;
    	var value = [];
    	for (var i = 0, l = options.length; i < l; i++) {
    		if (options[i].selected) {
    			value.push(options[i].value);
    		}
    	}
    	this.setState ({
    		selectedWeekendTime: value
    	})
    }

    render() {
    	var isEnabled = this.canBeSubmitted();

    	var educationRadio = this.state.education.map(function(e) {
    		return (
    			<div className="radio">

    			<label htmlFor="education-0">
    			<input type="radio" checked={e.id===this.state.educationChecked} name="education" value={e.name}  onChange={this.onEducationChange.bind(this, e.id)} />
    			{e.name}
    			</label>

    			</div>
    			);
    	}.bind(this));

    	var demsChecks = this.state.dems.map(function(d) {
    		return (
    			<div className="checkbox">
    			<label htmlFor="race-0">
    			<input checked={d.selected} type="checkbox" name="race" onChange={this.onDemographicChange.bind(this, d.id)} />
    			{d.name}
    			</label>
    			</div>
    			);
    	}.bind(this));

    	var childrenSelect = this.state.children.map(function(c) {
    		return (
    			<div className ="radio">
    			<label htmlFor="children-0">
    			<input  type="radio"  name="children" value={c.name} onChange={this.onChildrenChange.bind(this, c.id)}  />
    			{c.name}
    			</label>
    			</div>
    			);
    	}.bind(this));

    	var ethnicitySelect = this.state.ethnicity.map(function(e) {
    		return (
    			<div className ="radio">
    			<label htmlFor="ethnicity-0">
    			<input  type="radio"  name="ethnicity" value={e.name} onChange={this.onEthnicityChange.bind(this, e.id)}  />
    			{e.name}
    			</label>
    			</div>
    			);
    	}.bind(this));

    	var weekdayMultipleSelect = this.state.dayHours.map(function(wd) {
    		return (
    			<option value={wd.name}>
    			{wd.name}
    			</option>
    			);
    	}.bind(this));

    	var weekendMultipleSelect = this.state.dayHours.map(function(we) {
    		return (
    			<option value={we.name}>
    			{we.name}
    			</option>
    			);
    	}.bind(this));

    	return (

    		<div>
    		<section>
    		<form className="form-horizontal">
    		<fieldset>
    		<legend>Tell Us About Yourself</legend>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="name">Name</label>
    		<div className="col-md-5">
    		<input onChange={this.onTextInputChanged} value={this.state.name} id="name" name="name" type="text" placeholder="First and Last" className="form-control input-md" required="true" />
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="email">Email</label>
    		<div className="col-md-5">
    		<input onChange={this.onTextInputChanged} value={this.state.email} id="email" name="email" type="email" placeholder="youremail@email.com" className="form-control input-md" required="true" />
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="phone">Phone</label>
    		<div className="col-md-5">
    		<input onChange={this.onTextInputChanged} value={this.state.phone} id="phone" name="phone" type="text" placeholder="(123) 456-7890" className="form-control input-md" required="true" />
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="education">Highest education level</label>
    		<div className="col-md-4">
    		{educationRadio}
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="children">Do you have children?</label>
    		<div className="col-md-4">
    		{childrenSelect}
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="ethnicity">Are you of Hispanic, Latino, or Spanish origin?</label>
    		<div className="col-md-4">
    		{ethnicitySelect}
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="dems">How would you describe yourself? (Check all that apply)</label>
    		<div className="col-md-4">
    		{demsChecks}
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="background">Tell us about you and your background. This will be shared with your chosen mentor.</label>
    		<div className="col-md-4">
    		<textarea onChange={this.onTextInputChanged} value={this.state.background} className="form-control" id="background" name="background" placeholder="I'm working on graduating from High School..."></textarea>
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="preferences">What would you like to talk to someone about?</label>
    		<div className="col-md-4">
    		<textarea onChange={this.onTextInputChanged} value={this.state.preferences} className="form-control" id="preferences" name="preferences" placeholder="Getting into college, working in the field of ___, raising kids while starting a career…" ></textarea>
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="selectmultiple">Select the WEEKEND times you can talk (PST)</label>
    		<div className="note"><strong>Note:</strong> hold down the ctrl/cmd button to select multiple times.</div>
    		<div className="col-md-4">
    		<select id="weekendTime" name="weekendTime" onChange={this.__handleMultipleSelect} className="form-control" multiple="multiple">
    		{weekendMultipleSelect}
    		</select>
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="selectmultiple">Select the WEEKDAY times you can talk (PST)</label>
    		<div className="note"><strong>Note:</strong> hold down the ctrl/cmd button to select multiple times.</div>
    		<div className="col-md-4">
    		<select id="weekdayTime" name="weekdayTime"  onChange={this.handleMultipleSelect} className="form-control" multiple="multiple">
    		{weekdayMultipleSelect}
    		</select>
    		</div>
    		</div>

    		<div className="form-group">
    		<label className="col-md-4 control-label" htmlFor="submit"></label>
    		<div className="col-md-4">
    		<button disabled={!isEnabled} onClick={this.handleFormSubmit} id="submit" name="submit" className="btn btn-primary">Submit</button>
    		</div>
    		</div>
    		</fieldset>
    		</form>
    		</section>
    		</div>
    		)
}
}

