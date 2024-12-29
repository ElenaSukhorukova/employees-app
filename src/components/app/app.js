import { Component } from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import '../search-panel/search-panel.css';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Jon Snow", salary: 800, increase: true, rise: false, id: 1 },
        { name: "Peter Parker", salary: 3000, increase: false, rise: false, id: 2 },
        { name: "Harry Potter", salary: 5000, increase: false, rise: false, id: 3 },
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter((item) => item.id !== id )
      }
    });
  };

  addItem = (newItemData) => {
    const {data} = this.state;
    const sortedData = data.sort((a, b) => a.id - b.id)

    Object.defineProperties(newItemData, {
      salary: {value: Number(newItemData.salary)},
      increase: {value: false },
      rise: {value: false },
      id: {value: sortedData[sortedData.length - 1].id + 1}
    })

    this.setState(() => {
      const newData = [...data, newItemData];

      return {
        data: newData
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;