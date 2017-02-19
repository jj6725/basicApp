import React, { Component } from 'react';

class MaritalStatus extends Component {
	render() {
		return (
			<div>
				<br/>
				<form>
					<h4>What is your marital status?</h4>
					<div className="radio">
						<label><input type="radio" name="marital-toggle" id="single" value="single"/>Single</label>
					</div>

					<div className="radio">
						<label><input type="radio" name="marital-toggle" id="married_remarried" value="married_remarried"/>Married or remarried</label>
					</div>

					<div className="radio">
						<label><input type="radio" name="marital-toggle" id="separated" value="separated"/>Separated</label>
					</div>

					<div className="radio">
						<label><input type="radio" name="marital-toggle" id="divorced" value="divorced"/>Divorced or Widowed</label>
					</div>
				</form>
			</div>
		);
	}
}

export default MaritalStatus;
