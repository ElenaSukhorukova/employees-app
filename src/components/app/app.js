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
        { name: "Peter Parker", salary: 3000, increase: false, rise: true, id: 2 },
        { name: "Harry Potter", salary: 5000, increase: false, rise: false, id: 3 },
      ],
      term: '',
      filters: {
        filterAll: true,
        filterProm: false,
        filterSalary: false
      }
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

  ToggleProp = (id, prop) => {
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

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    });
  }

  onChangeTerm = (term) => {
    this.setState({term});
  }

  onFilter = (filterName) => {
    const {filters} = this.state

    if (filterName === 'filterAll') {
      this.setState(() => {
        return {
          filters: Object.fromEntries(Object.entries(filters).map(([key, _value]) => {
            return key === 'filterAll' ? [key, true] : [key, false]
          }))
        }
      });
    } else {
      if (filters[filterName]) return;

      this.setState(() => {
        return {
          filters: {...filters, [filterName] : true, 'filterAll': false}
        }
      });
    }
  }

  filterData = (items, filters) => {
    if (filters['filterAll']) return items;

    let filteredItems = filters['filterProm'] ? items.filter(item => item.rise) : items

    filteredItems = filters['filterSalary'] ? filteredItems.filter(item => item.salary > 1000) : filteredItems

    console.log(filteredItems)

    return filteredItems
  }

  ChangeSalaray = (id, newSalary) => {
    this.setState(({data}) => {
      return {
        data: data.map(item => item.id === id ? {...item, salary: Number.parseInt(newSalary)} : item)
      }
    });
  }

  render() {
    const {data, term, filters} = this.state
    const employees = data.length;
    const increased = data.filter(item => item.increase).length
    const visibleData = this.searchEmp(data, term);
    const filteredData = this.filterData(visibleData, filters)

    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased} />

        <div className="search-panel">
          <SearchPanel
            term={term}
            onChangeTerm={this.onChangeTerm} />

          <AppFilter
            filters={filters}
            onFilter={this.onFilter} />
        </div>

        <EmployeesList
          data={filteredData}
          onDelete={this.deleteItem}
          onToggleProp={this.ToggleProp}
          onChangeSalaray={this.ChangeSalaray} />

        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;