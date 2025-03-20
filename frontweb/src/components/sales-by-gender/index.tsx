import { formatPrice } from '../../utils/formatters';
import './styles.css';

type Props = {
  totalSales: number;
};

function SalesByGender({ totalSales }: Props) {
  return (
    <div>
      <div className="sales-by-gender-info-container">
        <h1 className="sales-by-gender-title">R$ {formatPrice(totalSales)}</h1>
        <span className="sales-by-date-subtitle">Total de vendas</span>
      </div>
    </div>
  );
}

export default SalesByGender;
