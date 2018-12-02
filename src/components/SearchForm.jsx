import React, { Component } from 'react';
import { fetchManufacterers } from '../services/fetchManufacterers';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = ({ models: '' });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  }

  componentDidMount = async() => {
    try {
      const response = await fetchManufacterers();
      this.setState({ models: response.Results });
    } catch (error) {
      this.setState({ error });
    }
  }

  render() {
    const { models } = this.state;

    return (
      <form className="form form-search" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <select className="select" id="make">
            {!models ? (
              <option value="">Please wait...</option>
            ) : (
              models.map((model) =>
                <option key={model.Make_ID} value={model.Make_ID}>{model.Make_Name}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select className="select" id="model">
            <option value="" defaultValue>Please select</option>
            <option value="audi">Audi</option>
            <option value="bentley">Bentley</option>
            <option value="ford">Ford</option>
            <option value="volkswagen">Volkswagen</option>
          </select>
        </div>

        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchForm;