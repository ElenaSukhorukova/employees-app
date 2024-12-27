import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import EmployeesList from '../employees-list/employees-list'

import '../search-panel/search-panel.css';
import './app.css';

function App() {
  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
        <EmployeesList />
      </div>
    </div>
  );
}

export default App;