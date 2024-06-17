import { render, screen } from "@testing-library/react-native"

import { default as resources } from "@/locales/resources/pt-BR.json"

import App from "./App"

describe("App", () => {
  it("should render", () => {
    render(<App />)

    expect(screen.getByText(resources["startingMessage"])).toBeTruthy()
  })
})
