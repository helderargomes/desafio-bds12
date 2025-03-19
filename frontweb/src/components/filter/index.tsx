import './styles.css';

function Filter() {
  return (
    <div className="filter-container base-card">
      <select className="select-input">
        <option>Selecione uma cidade</option>
        <option value="Uberaba">Uberaba</option>
        <option value="Uberlândia">Uberlândia</option>
        <option value="Araguari">Araguari</option>
        <option value="Ituiutaba">Ituiutaba</option>
      </select>
    </div>
  );
}

export default Filter;
