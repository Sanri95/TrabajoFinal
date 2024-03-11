import { Nav } from "./Nav";
import { render, screen } from "@testing-library/react";


test('Heading should be SAYE', () => {
    render(<Nav />);

    const headingElement = screen.getByText('SAYE');

    expect(headingElement).toBeDefined();

    
});
