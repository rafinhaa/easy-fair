import { fireEvent, render, screen } from "@testing-library/react-native"

import Check from "../index"

describe("Check", () => {
  it("should be to able render correctly", () => {
    render(<Check onPressCheck={jest.fn()} />)

    expect(screen.getByRole("checkbox")).toBeTruthy()
    expect(screen.queryByTestId("check-icon")).not.toBeTruthy()
  })

  it("should be to able call onPressCheck", () => {
    const onPressCheck = jest.fn()

    render(<Check onPressCheck={onPressCheck} />)

    fireEvent(screen.getByRole("checkbox"), "onPress")

    expect(onPressCheck).toHaveBeenCalledTimes(1)
    expect(onPressCheck).toHaveBeenCalledWith(true)
  })

  it("should not be to able call onPressCheck", () => {
    const onPressCheck = jest.fn()

    render(<Check disabled onPressCheck={onPressCheck} />)

    fireEvent(screen.getByRole("checkbox"), "onPress")

    expect(onPressCheck).toHaveBeenCalledTimes(0)
  })

  describe("checked", () => {
    it("true", () => {
      render(<Check checked onPressCheck={jest.fn()} />)

      expect(screen.getByTestId("check-icon")).toBeTruthy()
    })

    it("false", () => {
      render(<Check onPressCheck={jest.fn()} />)

      expect(screen.queryByTestId("check-icon")).not.toBeTruthy()
    })
  })
})
