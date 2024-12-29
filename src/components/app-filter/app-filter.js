import './app-filter.css'

const AppFilter = (props) => {
  const {filters, onFilter} = props;
  const {filterAll, filterProm, filterSalary} = filters;
  const activeButtonClass = "btn-light";
  const unactiveButtonClass = "btn-outline-light";

  const buttons = [
    {
      dataFilter: 'filterAll',
      className: (filterAll ? activeButtonClass : unactiveButtonClass),
      lable: 'All employees'
    },
    {
      dataFilter: 'filterProm',
      className: (filterProm ? activeButtonClass : unactiveButtonClass),
      lable: 'For promotion'
    },
    {
      dataFilter: 'filterSalary',
      className: (filterSalary ? activeButtonClass : unactiveButtonClass),
      lable: 'Salary more then 1000$'
    }
  ]

  return (
    <div className="btn-group">
      {(
        buttons.map(({className, dataFilter, lable}) => {
          return (
            <button
              className={"btn " + className}
              type="button"
              data-filter={dataFilter}
              onClick={(e) => onFilter(e.currentTarget.getAttribute("data-filter"))}>
              {lable}
            </button>
          );
        })
      )}
    </div>
  );
}

export default AppFilter;