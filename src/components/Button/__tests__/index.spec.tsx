import { fireEvent, render, screen } from "@testing-library/react-native"

import Text from "@/components/Typography/Text"

import Button from "../index"

describe("Text", () => {
  it("should render", () => {
    render(
      <Button>
        <Text>Olá, mundo!</Text>
      </Button>,
    )

    expect(screen.getByText("Olá, mundo!")).toBeTruthy()
  })

  it("should be to able call onPress", () => {
    const onPress = jest.fn()

    render(
      <Button onPress={onPress}>
        <Text>Olá, mundo!</Text>
      </Button>,
    )

    fireEvent(screen.getByText("Olá, mundo!"), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  describe("variant", () => {
    it("should render default", () => {
      render(
        <Button testID="button">
          <Text>Olá, mundo!</Text>
        </Button>,
      )

      expect(screen.getByTestId("button")).toHaveStyle({
        backgroundColor: "#1ee631",
      })
    })

    it("should render secondary", () => {
      render(
        <Button variant="secondary" testID="button">
          <Text>Olá, mundo!</Text>
        </Button>,
      )

      expect(screen.getByTestId("button")).toHaveStyle({
        backgroundColor: "#e63d1e",
      })
    })
  })
})
