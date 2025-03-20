import { useEffect, useState } from 'react';
import './styles.css';
import { City } from '../../types/city';
import Select from 'react-select';
import { BASE_URL, requestBackend } from '../../utils/requests';
import { Controller, useForm } from 'react-hook-form';

type Props = {
  onSubmitFilter: (city: City) => void;
};

type FilterData = {
  city: City | null;
};

function Filter({ onSubmitFilter }: Props) {
  const [selectCities, setSelectCities] = useState<City[]>([]);

  useEffect(() => {
    requestBackend({ url: `${BASE_URL}/stores` }).then((response) => {
      setSelectCities(response.data);
    });
  }, []);

  const { setValue, control } = useForm<FilterData>();

  const handleChangeCity = (value: City) => {
    setValue('city', value);
    onSubmitFilter(value);
  };

  return (
    <div className="filter-container base-card">
      <form>
        <div>
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectCities}
                isClearable
                placeholder={'Selecione uma cidade'}
                classNamePrefix="city-filter-select"
                onChange={(value) => handleChangeCity(value as City)}
                getOptionLabel={(city: City) => city.name}
                getOptionValue={(city: City) => String(city.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
