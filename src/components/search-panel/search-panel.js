import './search-panel.css';

const SearchPanel = (props) => {
  const {term, onChangeTerm} = props;

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      onChange={(e) => onChangeTerm(e.target.value)}
      value={term}
    />
  );
}

export default SearchPanel;