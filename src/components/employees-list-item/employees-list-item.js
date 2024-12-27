import './employees-list-item.css';
import {Component} from 'react';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      increase: props.increase,
      rise: props.rise
    }
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }));
  }

  onRise = () => {
    this.setState(({rise}) => ({
      rise: !rise
    }));
  }

  render() {
    const {name, salary} = this.props;
    const {increase, rise} = this.state

    const increaseClasss = increase ? ' increase' : ''
    const like = rise ? ' like' : ''
    let liClasses = "list-group-item d-flex justify-content-between" + increaseClasss + like

    return (
      <li className={liClasses} >
      <span className="list-group-item-lable" onClick={this.onRise}>{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
                className="btn-cookie btn-sm"
                onClick={this.onIncrease}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>

        <i class="fas fa-solid fa-star"></i>
      </div>
    </li>
    );
  }
}

export default EmployeesListItem;