import { fireEvent, render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import FloatingButton from "../index"

describe("FloatingButton", () => {
  it("should be to able render correctly", () => {
    render(
      <FloatingButton>
        <Text>Olá, mundo!</Text>
      </FloatingButton>,
    )

    expect(screen.getByText("Olá, mundo!")).toBeTruthy()
  })

  it("should be to able call onPress", () => {
    const onPress = jest.fn()

    render(
      <FloatingButton onPress={onPress}>
        <Text>Olá, mundo!</Text>
      </FloatingButton>,
    )

    fireEvent(screen.getByText("Olá, mundo!"), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("should be to able render with icon", () => {
    render(<FloatingButton icon="calendar" />)

    expect(screen.getByTestId("calendar-icon")).toBeTruthy()
  })
})
