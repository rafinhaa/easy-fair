import { render, screen } from "@testing-library/react-native"

import Divider from ".."

describe("Divider", () => {
  it("should be to able render correctly", () => {
    render(<Divider />)

    expect(screen.getByTestId("divider")).toBeTruthy()
    expect(screen.getByTestId("divider")).toHaveStyle({
      backgroundColor: "#1ee631",
    })
  })

  describe("color", () => {
    it("should be to able render with color primary", () => {
      render(<Divider />)

      expect(screen.getByTestId("divider")).toHaveStyle({
        backgroundColor: "#1ee631",
      })
    })

    it("should be to able render with color opaque", () => {
      render(<Divider color="opaque" />)

      expect(screen.getByTestId("divider")).toHaveStyle({
        backgroundColor: "#d3c3c3",
      })
    })

    it("should be to able render with color surface", () => {
      render(<Divider color="surface" />)

      expect(screen.getByTestId("divider")).toHaveStyle({
        backgroundColor: "#454545",
      })
    })

    it("should be to able render with color background", () => {
      render(<Divider color="background" />)

      expect(screen.getByTestId("divider")).toHaveStyle({
        backgroundColor: "#fff",
      })
    })
  })
})
