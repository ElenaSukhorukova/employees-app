import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import '../search-panel/search-panel.css';
import './app.css';

function App() {
  const data = [
    { name: "Jon Snow", salary: 800, increase: true, rise: false, id: 1 },
    { name: "Peter Parker", salary: 3000, increase: false, rise: false, id: 2 },
    { name: "Harry Potter", salary: 5000, increase: false, rise: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;