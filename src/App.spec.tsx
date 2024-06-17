import { render, screen } from "@testing-library/react-native"

import App from "./App"

describe("App", () => {
  it("should render", () => {
    render(<App />)

    expect(
      screen.getByText("Open up App.js to start working on your app!"),
    ).toBeTruthy()
  })
})
