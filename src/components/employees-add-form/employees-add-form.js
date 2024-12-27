import './employees-add-form.css'

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Add a new employee</h3>

      <form action="POST"
            className="add-form d-flex">
          <input type="text"
                 className="form-control new-post-lable"
                 placeholder="How is ther name?"/>
          <input type="text"
                 className="form-control new-post-lable"
                 placeholder="Salary in $?"/>
          <button type="submit"
                  className="btn btn-outline-light">
            Add
          </button>
        </form>
    </div>
  );
}

export default EmployeesAddForm;