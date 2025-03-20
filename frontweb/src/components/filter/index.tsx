import { useEffect, useState } from 'react';
import './styles.css';
import { City } from '../../types/city';
import Select from 'react-select';
import { BASE_URL, requestBackend } from '../../utils/requests';
import { Controller, useForm } from 'react-hook-form';

type FilterData = {
  city: City;
};

function Filter() {
  const [selectCities, setSelectCities] = useState<City[]>([]);

  useEffect(() => {
    requestBackend({ url: `${BASE_URL}/stores` }).then((response) => {
      setSelectCities(response.data);
      console.log(response.data);
    });
  }, []);

  const { register, handleSubmit, setValue, control } = useForm<FilterData>();

  const handleChangeCity = (value: City) => {
    setValue('city', value);
  };

  const onSubmit = (formData: FilterData) => {
    console.log(formData);
  };

  return (
    <div className="filter-container base-card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Select
            options={selectCities}
            isClearable
            placeholder={'Selecione uma cidade'}
            classNamePrefix="city-filter-select"
            getOptionLabel={(city: City) => city.name}
            getOptionValue={(city: City) => String(city.id)}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
