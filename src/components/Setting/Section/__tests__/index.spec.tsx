import { render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import Section from "../index"

describe("Section", () => {
  it("should be to able render correctly", () => {
    render(
      <Section title="title">
        <Text>text</Text>
      </Section>,
    )

    expect(screen.getByText("title")).toBeTruthy()
    expect(screen.getByText("text")).toBeTruthy()
  })
})
