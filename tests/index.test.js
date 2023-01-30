import Container from "../pages/home/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
	it("renders ofertas", () => {
		render(<Container />);
		// check if all components are rendered
		expect(screen.getByTestId("name")).toBeInTheDocument();
		expect(screen.getByTestId("type")).toBeInTheDocument();
		expect(screen.getByTestId("norms")).toBeInTheDocument();
		expect(screen.getByTestId("add")).toBeInTheDocument();
		expect(screen.getByTestId("subtract")).toBeInTheDocument();
		expect(screen.getByTestId("multiply")).toBeInTheDocument();
		expect(screen.getByTestId("divide")).toBeInTheDocument();
	});
});
