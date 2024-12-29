import './app-info.css';

const AppInfo = ({ employees, increased }) => {
  return (
    <div className="app-info">
      <h1>Accounting of employees in the company Ltd. "Dream Job"</h1>
      <h2>Final count of employees: {employees}</h2>
      <h2>Benefit receives: {increased}</h2>
    </div>
  );
}

export default AppInfo;