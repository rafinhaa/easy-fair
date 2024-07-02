import { fireEvent, render, screen } from "@testing-library/react-native"

import AlertButtons, { AlertButtonsProps } from "../AlertButtons"

const data: AlertButtonsProps = {
  primaryAction: {
    label: "primary",
    onPress: jest.fn(),
  },
  secondaryAction: {
    label: "secondary",
    onPress: jest.fn(),
  },
}

describe("alertButtons", () => {
  it("should render correctly", () => {
    render(<AlertButtons {...data} />)

    expect(screen.getByText(data.primaryAction.label)).toBeTruthy()
    expect(screen.getByText(data.secondaryAction.label)).toBeTruthy()
  })

  describe("onPress", () => {
    it("should be to able call primary action onPress", () => {
      render(<AlertButtons {...data} />)

      fireEvent.press(screen.getByText(data.primaryAction.label))

      expect(data.primaryAction.onPress).toHaveBeenCalledTimes(1)
    })

    it("should be to able call secondary action onPress", () => {
      render(<AlertButtons {...data} />)

      fireEvent.press(screen.getByText(data.secondaryAction.label))

      expect(data.secondaryAction.onPress).toHaveBeenCalledTimes(1)
    })
  })
})
