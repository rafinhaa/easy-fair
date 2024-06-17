import { render, screen } from "@testing-library/react-native"

import Title from "../index"

describe("Title", () => {
  it("should render", () => {
    render(<Title>Olá, mundo!</Title>)

    expect(screen.getByText("Olá, mundo!")).toBeTruthy()
  })

  describe("size", () => {
    it("should render sm", () => {
      render(<Title size="sm">Olá, mundo!</Title>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontSize: 16,
      })
    })

    it("should render lg", () => {
      render(<Title size="lg">Olá, mundo!</Title>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontSize: 20,
      })
    })

    it("should render md", () => {
      render(<Title size="xl">Olá, mundo!</Title>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontSize: 24,
      })
    })
  })

  describe("weight", () => {
    it("default", () => {
      render(<Title>Olá, mundo!</Title>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontWeight: "900",
      })
    })
  })
})
