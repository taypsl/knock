import React from 'react';

// giant form component. yikes.
export default class YouthSurvey extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		name: '',
    		email: '',
    		phone: '',
    		// how do I handle multiple drop downs? value=1, not value="this.state.name"
    		//education: '',
    		weekendTime: '',
    		weekdayTime: '',
    		children: '',
    		ethnicity: '',
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
                { id: 1, name: 'Some high school', selected: false },
                { id: 2, name: 'High school degree', selected: false },
                { id: 3, name: 'GED', selected: false },
                { id: 4, name: 'Some college', selected: false },
                { id: 5, name: 'College degree', selected: false },
                { id: 6, name: 'Advanced degree', selected: false },
                { id: 7, name: 'Other', selected: false }
            ]

    	}
    	this.onAddInputChanged = this.onAddInputChanged.bind(this)
    	this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    onAddInputChanged(event) {
    	var obj = {};
    	obj[event.target.name] = event.target.value;
    	this.setState(obj)
    }

    handleFormSubmit(event) {
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
    		education: this.state.education,
    		weekendTime: this.state.weekendTime,
    		weekdayTime: this.state.weekdayTime,
    		children: this.state.children,
    		ethnicity: this.state.ethnicity,
    		dems: this.state.dems,
    		background: this.state.background,
    		preferences: this.state.preferences,
    		mentor: false
		  })
		})
		.then( res => res.text())
		.then(data =>{
			console.log("submit_response", data)
		})
		.catch((error) => {
			console.error(error);
		});
    }
	__changeSelection(id) {
        var state = this.state.education.map(function(d) {
            return {
                id: d.id,
                name:d.name,
                selected: (d.id === id ? !d.selected : d.selected)
            };
        });

        var stateDems = this.state.dems.map(function(d) {
            return {
                id: d.id,
                name:d.name,
                selected: (d.id === id ? !d.selected : d.selected)
            };
        });
        console.log("dems":state )

        this.setState({ 
        	education: state,
        	dems: stateDems
        });

    }
	render() {
		var educationChecks = this.state.education.map(function(d) {
            return (
            	<div className="radio">
					<label htmlFor="education-0">
						<input type="checkbox" checked={d.selected} name="education" onChange={this.__changeSelection.bind(this, d.id)} />
						  {d.name}
					</label>
				</div>
            );
        }.bind(this));

		var demsChecks = this.state.dems.map(function(d) {
            return (
            	<div className="checkbox">
					<label htmlFor="race-0">
						<input checked={d.selected} type="checkbox" name="race" onChange={this.__changeSelection.bind(this, d.id)} />
						{d.name}
					</label>
				</div>
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
							<input onChange={this.onAddInputChanged} value={this.state.name} id="name" name="name" type="text" placeholder="First and Last" className="form-control input-md" required="" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="email">Email</label>
						<div className="col-md-5">
							<input onChange={this.onAddInputChanged} value={this.state.email} id="email" name="email" type="email" placeholder="youremail@email.com" className="form-control input-md" required="" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="phone">Phone</label>
						<div className="col-md-5">
							<input onChange={this.onAddInputChanged} value={this.state.phone} id="phone" name="phone" type="text" placeholder="(123) 456-7890" className="form-control input-md" required="" />
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="education">Highest education level</label>
						<div className="col-md-4">
							{educationChecks}
							
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="children">Do you have children?</label>
						<div className="col-md-4">
							<div className="radio">
								<label htmlFor="children-0">
									<input onChange={this.onAddInputChanged} value={this.state.children} type="radio" name="children" id="children-0" defaultChecked="checked" />
									Yes
								</label>
							</div>
							<div className="radio">
								<label htmlFor="children-1">
									<input onChange={this.onAddInputChanged} value={this.state.children} type="radio" name="children" id="children-1" />
									No
								</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="Ethnicity">Are you of Hispanic, Latino, or Spanish origin? </label>
						<div className="col-md-4">
							<div className="radio">
								<label htmlFor="Ethnicity-0">
									<input type="radio" name="Ethnicity" id="Ethnicity-0" value="1" defaultChecked="checked" />
									Yes
								</label>
							</div>
							<div className="radio">
								<label htmlFor="Ethnicity-1">
									<input type="radio" name="Ethnicity" id="Ethnicity-1" value="2" />
									No
								</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="dems">How would you describe yourself? (Check all that apply) </label>
						<div className="col-md-4">
							{demsChecks}
		
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="background">Tell us about you and your background. This will be shared with your chosen mentor.</label>
						<div className="col-md-4">
							<textarea onChange={this.onAddInputChanged} value={this.state.background} className="form-control" id="background" name="background" placeholder="I'm working on graduating from High School..."></textarea>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="preferences">What would you like to talk to someone about?</label>
						<div className="col-md-4">
							<textarea onChange={this.onAddInputChanged} value={this.state.preferences} className="form-control" id="preferences" name="preferences" placeholder="Getting into college, working in the field of ___, raising kids while starting a career…" ></textarea>
						</div>
					</div>

					<div className="form-group">
					  <label className="col-md-4 control-label" htmlFor="">Select the WEEKEND times you can talk (PST)</label>
					  <div className="col-md-4">
					    <div className="checkbox">
							<label htmlFor="weekendTime-1">
								<input type="checkbox" name="race" id="weekendTime-1" value="1" />
								8am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-2">
								<input type="checkbox" name="race" id="weekendTime-2" value="1" />
								9am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-3">
								<input type="checkbox" name="race" id="weekendTime-3" value="1" />
								10am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-4">
								<input type="checkbox" name="race" id="weekendTime-4" value="1" />
								11am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-5">
								<input type="checkbox" name="race" id="weekendTime-5" value="1" />
								12pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-6">
								<input type="checkbox" name="race" id="weekendTime-6" value="1" />
								1pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-7">
								<input type="checkbox" name="race" id="weekendTime-7" value="1" />
								2pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-8">
								<input type="checkbox" name="race" id="weekendTime-8" value="1" />
								3pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-9">
								<input type="checkbox" name="race" id="weekendTime-9" value="1" />
								4pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-10">
								<input type="checkbox" name="race" id="weekendTime-10" value="1" />
								5pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-11">
								<input type="checkbox" name="race" id="weekendTime-11" value="1" />
								6pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-12">
								<input type="checkbox" name="race" id="weekendTime-12" value="1" />
								7pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekendTime-13">
								<input type="checkbox" name="race" id="weekendTime-13" value="1" />
								8pm
							</label>
						</div>
					  </div>
					</div>

					<div className="form-group">
					  <label className="col-md-4 control-label" htmlFor="selectmultiple">Select the WEEKDAY times you can talk (PST)</label>
					  <div className="col-md-4">
					    <div className="checkbox">
							<label htmlFor="weekdayTime-1">
								<input defaultChecked type="checkbox" name="race" id="weekdayTime-1" value="1" />
								8am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-2">
								<input type="checkbox" name="race" id="weekdayTime-2" value="1" />
								9am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-3">
								<input type="checkbox" name="race" id="weekdayTime-3" value="1" />
								10am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-4">
								<input type="checkbox" name="race" id="weekdayTime-4" value="1" />
								11am
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-5">
								<input type="checkbox" name="race" id="weekdayTime-5" value="1" />
								12pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-6">
								<input type="checkbox" name="race" id="weekdayTime-6" value="1" />
								1pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-7">
								<input type="checkbox" name="race" id="weekdayTime-7" value="1" />
								2pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-8">
								<input type="checkbox" name="race" id="weekdayTime-8" value="1" />
								3pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-9">
								<input type="checkbox" name="race" id="weekdayTime-9" value="1" />
								4pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-10">
								<input type="checkbox" name="race" id="weekdayTime-10" value="1" />
								5pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-11">
								<input type="checkbox" name="race" id="weekdayTime-11" value="1" />
								6pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-12">
								<input type="checkbox" name="race" id="weekdayTime-12" value="1" />
								7pm
							</label>
						</div>
						<div className="checkbox">
							<label htmlFor="weekdayTime-13">
								<input type="checkbox" name="race" id="weekdayTime-13" value="1" />
								8pm
							</label>
						</div>
					  </div>
					</div>

					<div className="form-group">
						<label className="col-md-4 control-label" htmlFor="submit"></label>
						<div className="col-md-4">
							<button onClick={this.handleFormSubmit} id="submit" name="submit" className="btn btn-primary">Submit</button>
						</div>
						</div>
				</fieldset>
			</form>
			</section>
		</div>
		)
	}
}


/*
						<div className="form-group">
						
							<select id="weekendTime" name="" className="form-control" multiple="multiple">
					      <option value="1">8am</option>
					      <option value="2">9am</option>
					      <option value="3">10am</option>
					      <option value="4">11am</option>
					      <option value="5">12pm</option>
					      <option value="6">1pm</option>
					      <option value="7">2pm</option>
					      <option value="8">3pm</option>
					      <option value="9">4pm</option>
					      <option value="10">5pm</option>
					      <option value="11">6pm</option>
					      <option value="12">7pm</option>
					      <option value="13">8pm</option>
					      <option value="14">9pm</option>
					      <option value="15">10pm</option>
					    </select>
					  </div>
					</div>



					<div className="form-group">
					  <label className="col-md-4 control-label" htmlFor="selectmultiple">Select the WEEKDAY times you can talk (PST)</label>
					  <div className="col-md-4">
					    <select id="weekdayTime" name="weekdayTime" className="form-control" multiple="multiple">
					      <option value="1">8am</option>
					      <option value="2">9am</option>
					      <option value="3">10am</option>
					      <option value="4">11am</option>
					      <option value="5">12pm</option>
					      <option value="6">1pm</option>
					      <option value="7">2pm</option>
					      <option value="8">3pm</option>
					      <option value="9">4pm</option>
					      <option value="10">5pm</option>
					      <option value="11">6pm</option>
					      <option value="12">7pm</option>
					      <option value="13">8pm</option>
					      <option value="14">9pm</option>
					      <option value="15">10pm</option>
					    </select>
					  </div>
					</div>

*/
