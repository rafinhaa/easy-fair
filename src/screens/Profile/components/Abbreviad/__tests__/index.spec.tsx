import { render, screen } from "@testing-library/react-native"

import Abbreviad from "../index"

describe("Abbreviad", () => {
  it("should be to able render correctly", () => {
    render(<Abbreviad name="John Doe" />)

    expect(screen.getByText("JD")).toBeTruthy()
  })

  it("should be to able render correctly with one letter", () => {
    render(<Abbreviad name="John" />)

    expect(screen.getByText("J")).toBeTruthy()
  })

  it("should be to able render correctly with three letters", () => {
    render(<Abbreviad name="John Doe Doe" />)

    expect(screen.getByText("JD")).toBeTruthy()
  })
})
