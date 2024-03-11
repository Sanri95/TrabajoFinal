import { render,screen } from "@testing-library/react";
import { Footer } from "./Footer";



test('Render card page correctly', () => {
    render(<Footer/>);
    const but = screen.getByText('2024 SAYE')
    expect(but).toBeTruthy();
}
);