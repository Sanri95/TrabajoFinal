
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test('verify that in the header component if the cart the default state is "El carrito esta vacio" ', () => {
    render (<Header />)
    const but = screen.getByText('El carrito está vacío')
        expect(but).toBeTruthy();
}
);