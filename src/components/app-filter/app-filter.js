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
      lable: 'All employees',
      colored: false
    },
    {
      dataFilter: 'filterProm',
      className: (filterProm ? activeButtonClass : unactiveButtonClass),
      lable: 'For promotion',
      colored: false
    },
    {
      dataFilter: 'filterSalary',
      className: (filterSalary ? activeButtonClass : unactiveButtonClass),
      lable: 'Salary more then 1000$',
      colored: true
    }
  ]

  return (
    <div className="btn-group">
      {(
        buttons.map(({className, dataFilter, lable, colored}) => {
          const style = colored ? {color: 'red'} : null;

          return (
            <button
              className={"btn " + className}
              type="button"
              data-filter={dataFilter}
              onClick={(e) => onFilter(e.currentTarget.getAttribute("data-filter"))}
              style={style} >
              {lable}
            </button>
          );
        })
      )}
    </div>
  );
}

export default AppFilter;