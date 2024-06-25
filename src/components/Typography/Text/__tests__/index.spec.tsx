import { render, screen } from "@testing-library/react-native"

import Text from "../index"

describe("Text", () => {
  it("should render", () => {
    render(<Text>Olá, mundo!</Text>)

    expect(screen.getByText("Olá, mundo!")).toBeTruthy()
  })

  describe("size", () => {
    it("should render sm", () => {
      render(<Text size="sm">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontSize: 16,
      })
    })

    it("should render lg", () => {
      render(<Text size="lg">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontSize: 20,
      })
    })

    it("should render md", () => {
      render(<Text size="md">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontSize: 18,
      })
    })
  })

  describe("color", () => {
    it("should render opaque", () => {
      render(<Text color="opaque">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        color: "#d3c3c3",
      })
    })

    it("should render primary", () => {
      render(<Text color="primary">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        color: "#1ee631",
      })
    })

    it("should render default", () => {
      render(<Text>Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        color: "#000",
      })
    })
  })

  describe("weight", () => {
    it("black", () => {
      render(<Text weight="black">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontFamily: "Roboto_900Black",
      })
    })

    it("light", () => {
      render(<Text weight="light">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontFamily: "Roboto_300Light",
      })
    })

    it("bold", () => {
      render(<Text weight="bold">Olá, mundo!</Text>)

      expect(screen.getByText("Olá, mundo!")).toHaveStyle({
        fontFamily: "Roboto_700Bold",
      })
    })
  })
})
