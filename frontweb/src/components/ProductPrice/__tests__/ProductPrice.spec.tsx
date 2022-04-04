import { render, screen } from "@testing-library/react";
import ProductPrice from "..";


test('Should render ProductPrice', () => {

  const price = 100.1;
  
  render(
    <ProductPrice price={price} />
  );

  expect(screen.getByText("R$")).toBeInTheDocument();
  expect(screen.getByText("100,10")).toBeInTheDocument();

});