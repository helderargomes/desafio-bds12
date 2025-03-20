import { useCallback, useEffect, useState } from 'react';
import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesByGender from './components/sales-by-gender';
import { City } from './types/city';
import { AxiosRequestConfig } from 'axios';
import { BASE_URL, requestBackend } from './utils/requests';
import { Summary } from './types/summary';
import { GenderSum } from './types/genderSum';
import PieChart from './components/pie-chart';

type ControlSalesByGenderData = {
  city: City | null;
};

function App() {
  const [controlSalesByGenderData, setControlSalesByGenderData] =
    useState<ControlSalesByGenderData>({ city: null });

  const [salesSummary, setSalesSummary] = useState<Summary>();

  const [genderSum, setGenderSum] = useState<GenderSum[]>([]);

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

  const getGenderSum = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: `${BASE_URL}/sales/by-gender`,
      params: {
        storeId: controlSalesByGenderData.city?.id
      }
    };
    requestBackend(params).then((response) => {
      setGenderSum(response.data);
    });
  }, [controlSalesByGenderData]);

  useEffect(() => {
    getSummary();
    getGenderSum();
  }, [getSummary, getGenderSum]);

  const handleSubmitFilter = (city: City) => {
    setControlSalesByGenderData({ city });
  };
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onSubmitFilter={handleSubmitFilter} />
        <div className="base-card sales-by-gender-container">
          <SalesByGender totalSales={Number(salesSummary?.sum)} />
          <div className="sales-by-gender-chart-container">
            <PieChart
              name="total"
              labels={genderSum.map((value) => value.gender)}
              series={genderSum.map((value) => value.sum)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
