import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByGender from './components/sales-by-gender';
import { City } from './types/city';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from './utils/requests';
import { Summary } from './types/summary';

type ControlSalesByGenderData = {
  city: City | null;
};

function App() {
  const [controlSalesByGenderData, setControlSalesByGenderData] =
    useState<ControlSalesByGenderData>({ city: null });

  const [salesSummary, setSalesSummary] = useState<Summary>();

  const getSummary = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: `${BASE_URL}/sales/summary`,
      params: {
        storeId: controlSalesByGenderData.city?.id
      }
    };
    requestBackend(params).then((response) => {
      setSalesSummary(response.data);
    });
  }, [controlSalesByGenderData]);

  useEffect(() => {
    getSummary();
  }, [getSummary]);

  const handleSubmitFilter = (city: City) => {
    setControlSalesByGenderData({ city });
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={handleSubmitFilter} />
        <SalesByGender totalSales={Number(salesSummary?.sum)} />
      </div>
    </>
  );
}

export default App;
