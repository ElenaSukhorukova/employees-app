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
      ],
      term: ''
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
    const newItem = {
      name: newItemData.name,
      salary: Number(newItemData.salary),
      increase: false,
      rise: false,
      id: sortedData[sortedData.length - 1].id + 1
    }

    this.setState(() => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => {
      return {
        data: data.map(item => {
          if (item.id === id) {
            return {...item, [prop]: !item[prop]}
          }

          return item
        })
      }
    })
  }

  render() {
    const {data, term} = this.state
    const employees = data.length;
    const increased = data.filter(item => item.increase).length

    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp} />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;