import { formatPrice } from '../../utils/formatters';
import PieChart from './pie-chart';
import './styles.css';

type Props = {
  totalSales: number;
};

function SalesByGender({ totalSales }: Props) {
  return (
    <div className="base-card sales-by-gender-container">
      <div className="sales-by-gender-info-container">
        <h1 className="sales-by-gender-title">R$ {formatPrice(totalSales)}</h1>
        <span className="sales-by-date-subtitle">Total de vendas</span>
      </div>
      <div className="sales-by-gender-chart-container">
        <PieChart name="total" labels={['Feminino', 'Masculino', 'Outro']} series={[40, 30, 30]} />
      </div>
    </div>
  );
}

export default SalesByGender;
