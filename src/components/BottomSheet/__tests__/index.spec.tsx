import { render, screen } from "@testing-library/react-native"
import React from "react"
import { Text } from "react-native"

import BottomSheet from "../"

describe("BottomSheet", () => {
  it("should be to able render correctly", () => {
    render(
      <BottomSheet snapPoints={[50]}>
        <Text>Hi</Text>
      </BottomSheet>,
    )

    expect(screen.getByText("Hi")).toBeTruthy()
  })

  it("should be to able render correctly opened", () => {
    render(
      <BottomSheet snapPoints={[50]} initializeOpened={true}>
        <Text>Hi</Text>
      </BottomSheet>,
    )

    expect(screen.getByText("Hi")).toBeTruthy()
  })
})
