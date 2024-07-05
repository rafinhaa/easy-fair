import { render, screen } from "@testing-library/react-native"

import Spacer from "../index"

describe("Spacer", () => {
  it("should be to able render correctly", () => {
    render(<Spacer />)

    expect(screen.getByTestId("spacer")).toBeTruthy()
  })

  describe("size", () => {
    it("should render xxs", () => {
      render(<Spacer size="xxs" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 4,
      })
    })

    it("should render xs", () => {
      render(<Spacer size="xs" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 8,
      })
    })

    it("should render sm", () => {
      render(<Spacer size="sm" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 16,
      })
    })

    it("should render md", () => {
      render(<Spacer size="md" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 24,
      })
    })

    it("should render lg", () => {
      render(<Spacer size="lg" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 32,
      })
    })

    it("should render xl", () => {
      render(<Spacer size="xl" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 42,
      })
    })

    it("should render 2xl", () => {
      render(<Spacer size="2xl" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 48,
      })
    })

    it("should render 3xl", () => {
      render(<Spacer size="3xl" />)

      expect(screen.getByTestId("spacer")).toHaveStyle({
        height: 56,
      })
    })
  })
})
