import { render, screen } from '@testing-library/react';
import { Product } from 'types/product';
import ProductCard from '..';

test('Should render ProductCard', () => {
  const product : Product = {
    name: 'Smart TV',
    price: 2190.78,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg'
  } as Product;

  render(<ProductCard product={product} />);

  expect(screen.getByText(product.name)).toBeInTheDocument();
  expect(screen.getByAltText(product.name)).toBeInTheDocument();
  expect(screen.getByText('R$')).toBeInTheDocument();
  expect(screen.getByText('2.190,78')).toBeInTheDocument();
});
