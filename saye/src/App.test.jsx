import { render,screen } from "@testing-library/react";
import { ProductList } from "./components/ProductList";


test('Render main page correctly', () => {
    render(<ProductList/>);
    expect(true).toBeTruthy();
}
);


