import { render, screen } from "@testing-library/react-native"

import Input from "../index"

describe("Text", () => {
  it("should render", () => {
    render(<Input placeholder="placeholder" />)

    expect(screen.getByPlaceholderText("placeholder")).toBeTruthy()
  })

  describe("icon", () => {
    it("should render with icon", () => {
      render(<Input icon="calendar" />)

      expect(screen.getByTestId("calendar-icon")).toBeTruthy()
    })
  })
})
