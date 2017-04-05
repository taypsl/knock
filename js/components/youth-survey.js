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
    		education: '',
    		children: '',
    		ethnicity: '',
    		dems: '',
    		background: '',
    		preferences: '',
    		mentor: false
    	},
    	this.onAddInputChanged = this.onAddInputChanged.bind(this),
    	this.onAddSubmit = this.onAddSubmit.bind(this)
    }

	render() {
		return (
		<div>	
			<section>
			<form className="form-horizontal">
				<fieldset>
					<legend>Become a mentor</legend>
					<div className="form-group">
						<label className="col-md-4 control-label" for="name">Name</label>  
						<div className="col-md-5">
							<input value="this.state.name" id="name" name="name" type="text" placeholder="First and Last" className="form-control input-md" required=""> 
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="email">Email</label>  
						<div className="col-md-5">
							<input value="this.state.email" id="email" name="email" type="email" placeholder="youremail@email.com" className="form-control input-md" required="">
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="phone">Phone</label>  
						<div className="col-md-5">
							<input value="this.state.phone" id="phone" name="phone" type="text" placeholder="(123) 456-7890" className="form-control input-md" required="">
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="education">Highest education level</label>
						<div className="col-md-4">
							<div className="radio">
								<label for="education-0">
									<input type="radio" name="education" id="education-0" value="1" checked="checked">
									Some high school
								</label>
							</div>
							<div className="radio">
								<label for="education-1">
									<input type="radio" name="education" id="education-1" value="2">
									High school degree
								</label>
							</div>
							<div className="radio">
								<label for="education-2">
									<input type="radio" name="education" id="education-2" value="3">
									GED
								</label>
							</div>
							<div className="radio">
								<label for="education-3">
									<input type="radio" name="education" id="education-3" value="4">
									Some college
								</label>
							</div>
							<div className="radio">
								<label for="education-4">
									<input type="radio" name="education" id="education-4" value="5">
									College degree
								</label>
							</div>
							<div className="radio">
								<label for="education-5">
									<input type="radio" name="education" id="education-5" value="6">
									Advanced degree
								</label>
							</div>
							<div className="radio">
								<label for="education-6">
									<input type="radio" name="education" id="education-6" value="7">
									Other
								</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="children">Do you have children?</label>
						<div className="col-md-4">
							<div className="radio">
								<label for="children-0">
									<input type="radio" name="children" id="children-0" value="1" checked="checked">
									Yes
								</label>
							</div>
							<div className="radio">
								<label for="children-1">
									<input type="radio" name="children" id="children-1" value="2">
									No
								</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="Ethnicity">Are you of Hispanic, Latino, or Spanish origin? </label>
						<div className="col-md-4">
							<div className="radio">
								<label for="Ethnicity-0">
									<input type="radio" name="Ethnicity" id="Ethnicity-0" value="1" checked="checked">
									Yes
								</label>
							</div>
							<div className="radio">
								<label for="Ethnicity-1">
									<input type="radio" name="Ethnicity" id="Ethnicity-1" value="2">
									No
								</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="dems">How would you describe yourself? (Check all that apply) </label>
						<div className="col-md-4">
							<div className="checkbox">
								<label for="race-0">
									<input type="checkbox" name="race" id="dems-0" value="1">
									American Indian or Alaska Native
								</label>
							</div>
							<div className="checkbox">
								<label for="race-1">
									<input type="checkbox" name="race" id="dems-1" value="2">
									Asian
								</label>
							</div>
							<div className="checkbox">
								<label for="race-2">
									<input type="checkbox" name="race" id="dems-2" value="3">
									Black or African American
								</label>
							</div>
							<div className="checkbox">
								<label for="race-3">
									<input type="checkbox" name="race" id="dems-3" value="4">
									Native Hawaiian or Other Pacific Islander
								</label>
							</div>
							<div className="checkbox">
								<label for="race-4">
									<input type="checkbox" name="race" id="dems-4" value="5">
									White
								</label>
							</div>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="background">Tell us about you and your background. This will be shared with your chosen mentor.</label>
						<div className="col-md-4">                     
							<textarea value="this.state.background" className="form-control" id="background" name="background" placeholder="I'm working on graduating from High School..."></textarea>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="preferences">What would you like to talk to someone about?</label>
						<div className="col-md-4">                     
							<textarea value="this.state.preferences" className="form-control" id="preferences" name="preferences" placeholder="Getting into college, working in the field of ___, raising kids while starting a career…" ></textarea>
						</div>
					</div>
					<div className="form-group">
						<label className="col-md-4 control-label" for="submit"></label>
						<div className="col-md-4">
							<button id="submit" name="submit" className="btn btn-primary">Submit</button>
						</div>
						</div>
				</fieldset>
			</form>
			</section>
		</div>
		)
	}
}