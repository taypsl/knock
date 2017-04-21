import React from 'react';


function validate(name, email, phone, background) {
  return {
    name: name.length === 0,
    email: email.length === 0,
    phone: phone.length === 0,
    background: background.length === 0,
  };
}

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
    		educationChecked: 0, 
    		touched: {
    			name: false,
    			email: false,
    			phone: false,
    			background: false
    		}
		}

    	this.onTextInputChanged = this.onTextInputChanged.bind(this)
    	this.onDemographicChange = this.onDemographicChange.bind(this)
    	this.onEducationChange = this.onEducationChange.bind(this)
    	this.onChildrenChange = this.onChildrenChange.bind(this)
    	this.onEthnicityChange = this.onEthnicityChange.bind(this)
    	this.handleMultipleSelect = this.handleMultipleSelect.bind(this)
    	this.__handleMultipleSelect = this.__handleMultipleSelect.bind(this)
    	this.handleBlur = this.handleBlur.bind(this)
    	this.canBeSubmitted = this.canBeSubmitted.bind(this)
    	this.handleFormSubmit = this.handleFormSubmit.bind(this)
    } 

    onTextInputChanged(event) {
    	var obj = {};
    	obj[event.target.name] = event.target.value;
    	this.setState(obj)
    }

	handleBlur = (field) => (evt) => {
		this.setState({
		touched: { ...this.state.touched, [field]: true },
		});
	}

    canBeSubmitted() {
		const errors = validate(this.state.name, this.state.email, this.state.phone, this.state.background);
	    const isDisabled = Object.keys(valErrors).some(x => valErrors[x]);
	    return !isDisabled;
	}

    handleFormSubmit(event) {
  //   	if (!this.canBeSubmitted()) {
		//     evt.preventDefault();
		//     return;
		// }

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
    	const valErrors = validate(this.state.name, this.state.email, this.state.phone, this.state.background);
    	const isDisabled = Object.keys(valErrors).some(x => valErrors[x]);

    	const shouldMarkError = (field) => {
		const hasError = valErrors[field];
		const shouldShow = this.state.touched[field];

		return hasError ? shouldShow : false;
		};

    	var educationRadio = this.state.education.map(function(e) {
    		return (
    			<div className="radio" key={e.id.toString()}>

    			<input type="radio" checked={e.id===this.state.educationChecked} name="education" value={e.name}  onChange={this.onEducationChange.bind(this, e.id)} />
    			<div htmlFor={e.id} className="input-value">{e.name}</div>

    			</div>
    			);
    	}.bind(this));

    	var demsChecks = this.state.dems.map(function(d) {
    		return (
    			<div className="checkbox" key={d.id.toString()}>
    			<input checked={d.selected} type="checkbox" name="race" onChange={this.onDemographicChange.bind(this, d.id)} />
    			<div htmlFor={d.id} className="input-value">{d.name}</div>
    			</div>
    			);
    	}.bind(this));

    	var childrenSelect = this.state.children.map(function(c) {
    		return (
    			<div className="radio" key={c.id.toString()}>
    			
    			<input type="radio" name="children" value={c.name} onChange={this.onChildrenChange.bind(this, c.id)}  />
    			<div htmlFor={c.id} className="input-value">{c.name}</div>
    			
    			</div>
    			);
    	}.bind(this));

    	var ethnicitySelect = this.state.ethnicity.map(function(e) {
    		return (
    			<div className="radio" key={e.id.toString()}>
    			<input type="radio" name="ethnicity" value={e.name} onChange={this.onEthnicityChange.bind(this, e.id)}  />
    			<div htmlFor={e.id} className="input-value">{e.name}</div>
    			</div>
    			);
    	}.bind(this));

    	var weekdayMultipleSelect = this.state.dayHours.map(function(wd) {
    		return (
    			<option key={wd.id.toString()} value={wd.name}>
    			{wd.name}
    			</option>
    			);
    	}.bind(this));

    	var weekendMultipleSelect = this.state.dayHours.map(function(we) {
    		return (
    			<option key={we.id.toString()} value={we.name}>
    			{we.name}
    			</option>
    			);
    	}.bind(this));

    	return (

    		<div>
    		<section className="form-background">
    		<form>
    		<fieldset>
    		<h2 className="section-header">tell us about <span className="red-inline">you</span>rself</h2>

    		<div className="grp name-grp">
    		<label htmlFor="name">Name*</label>
    		<div>
    		<input className={shouldMarkError('name') ? "val-error" : ""} onChange={this.onTextInputChanged} value={this.state.name} id="name" name="name" type="text" placeholder="First and Last" required="true" />
    		</div>
    		</div>

    		<div className="grp email-grp">
    		<label htmlFor="email">Email*</label>
    		<div>
    		<input className={shouldMarkError('email') ? "val-error" : ""} onChange={this.onTextInputChanged} value={this.state.email} id="email" name="email" type="email" placeholder="youremail@email.com" required="true" />
    		</div>
    		</div>

    		<div className="grp phone-grp">
    		<label htmlFor="phone">Phone*</label>
    		<div>
    		<input className={shouldMarkError('phone') ? "val-error" : ""} onChange={this.onTextInputChanged} value={this.state.phone} id="phone" name="phone" type="text" placeholder="(123) 456-7890" required="true" />
    		</div>
    		</div>
			
			<div className="grp background-grp">
    		<label htmlFor="background">Tell us about you and your background. This will be shared with your chosen mentor.*</label>
    		<div>
    		<textarea className={shouldMarkError('background') ? "val-error" : ""} onChange={this.onTextInputChanged} value={this.state.background} id="background" name="background" placeholder="I'm working on graduating from High School..."></textarea>
    		</div>
    		</div>

    		<div className="grp preferences-grp">
    		<label htmlFor="preferences">What would you like to talk to someone about?*</label>
    		<div>
    		<textarea onChange={this.onTextInputChanged} value={this.state.preferences} id="preferences" name="preferences" placeholder="Getting into college, working in the field of ___, raising kids while starting a career…" ></textarea>
    		</div>
    		</div>

    		<div className="grp weekend-grp">
    		<label>Select the WEEKEND times you can talk (PST)*</label>
    		<div>
    		<select id="weekendTime" name="weekendTime" onChange={this.__handleMultipleSelect} multiple="multiple">
    		{weekendMultipleSelect}
    		</select>
    		<div className="note"><strong>Note:</strong> hold down the ctrl/cmd button to select multiple times.</div>
    		</div>
    		</div>

    		<div className="grp weekday-grp">
    		<label htmlFor="selectmultiple">Select the WEEKDAY times you can talk (PST)*</label>
    		<div>
    		<select id="weekdayTime" name="weekdayTime"  onChange={this.handleMultipleSelect} multiple="multiple">
    		{weekdayMultipleSelect}
    		</select>
    		<div className="note"><strong>Note:</strong> hold down the ctrl/cmd button to select multiple times.</div>
    		</div>
    		</div>
    		<div className="grp education-grp">
    		<label htmlFor="education">Highest education level</label>
    		<div>
    		{educationRadio}
    		</div>
    		</div>

    		<div className="grp optional-grp">
    		<h2>The following demographic questions are optional.</h2>
    		</div>

    		<div className="grp children-grp">
    		<label htmlFor="children">Do you have children?</label>
    		<div>
    		{childrenSelect}
    		</div>
    		</div>

    		<div className="grp ethnicity-grp">
    		<label htmlFor="ethnicity">Are you of Hispanic, Latino, or Spanish origin?</label>
    		<div>
    		{ethnicitySelect}
    		</div>
    		</div>

    		<div className="grp dem-grp">
    		<label htmlFor="dems">How would you describe yourself? (Check all that apply)</label>
    		<div>
    		{demsChecks}
    		</div>
    		</div>

    		

    		<div className="grp submit-grp">
    		<label htmlFor="submit"></label>
    		<div>
    		<button disabled={isDisabled} onClick={this.handleFormSubmit} id="submit" name="submit" className="btn-submit">Submit</button>
    		</div>
    		</div>
    		</fieldset>
    		</form>
    		</section>
    		</div>
    		)
}
}

