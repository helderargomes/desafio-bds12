import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByGender from './components/sales-by-gender';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
        <SalesByGender />
      </div>
    </>
  );
}

export default App;
