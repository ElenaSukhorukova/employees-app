
import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, increase, rise, onDelete, onToggleProp }) => {
  const increaseClasss = increase ? ' increase' : ''
  const like = rise ? ' like' : ''
  let liClasses = "list-group-item d-flex justify-content-between" + increaseClasss + like

  return (
    <li className={liClasses}>
      <span className="list-group-item-label"
            onClick={onToggleProp}
            data-toggle="rise">
        {name}
      </span>
      <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button"
                className="btn-cookie btn-sm"
                onClick={onToggleProp}
                data-toggle="increase">
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
                className="btn-trash btn-sm"
                onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-solid fa-star"></i>
      </div>
    </li>
  );
}

export default EmployeesListItem;