import { render, screen } from "@testing-library/react-native"

import Loading from "../index"

describe("Loading", () => {
  it("should be to able render correctly", () => {
    render(<Loading />)

    expect(screen.getByTestId("loading-container")).toBeTruthy()
    expect(screen.getByTestId("loading-indicator")).toBeTruthy()
  })
})
