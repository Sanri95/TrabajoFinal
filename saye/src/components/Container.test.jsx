import { render, screen} from "@testing-library/react";
import { Container } from "./Container";

describe('<Container/>', () => {
    test('Show render the element indetify by PlaceHolder', () => {
        render(<Container/>);
        const element = screen.getByPlaceholderText(/¿Que quieres adquirir?/i);
       
       expect(element).toBeDefined();

    }
)

})