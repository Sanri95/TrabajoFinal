import { render, screen} from "@testing-library/react";
import { ProductList } from "./ProductList";

describe('<ProdcutList/>', () => {
    test('0', () => {
        render(<ProductList/>);
        const element = screen.getAllByText(/Añadir al carrito/i);
       const element__2 =screen.getAllByText(/cop/i);
       expect(element, element__2).toBeDefined();

    }
)

})
