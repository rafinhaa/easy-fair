import { fireEvent, render, screen } from "@testing-library/react-native"
import { Text } from "react-native"

import Item from "../index"

describe("Item", () => {
  describe("type", () => {
    it("action", () => {
      render(<Item type="action" label="label" action={<Text>text</Text>} />)

      expect(screen.getByText("text")).toBeTruthy()
      expect(screen.getByText("label")).toBeTruthy()
    })

    describe("default", () => {
      it("default", () => {
        render(
          <Item label="label" icon={"calendar"} onDefaultAction={jest.fn()} />,
        )

        expect(screen.getByTestId("calendar-icon")).toBeTruthy()
        expect(screen.getByText("label")).toBeTruthy()
      })

      it("should be to able call onDefaultAction", () => {
        const onDefaultAction = jest.fn()

        render(
          <Item
            label="label"
            icon={"calendar"}
            onDefaultAction={onDefaultAction}
          />,
        )

        fireEvent(screen.getByTestId("chevron-right-icon"), "onPress")

        expect(onDefaultAction).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe("icon", () => {
    it("should render icon", () => {
      render(
        <Item label="label" icon={"calendar"} onDefaultAction={jest.fn()} />,
      )

      expect(screen.getByTestId("calendar-icon")).toBeTruthy()
    })

    it("should not render icon", () => {
      render(<Item label="label" onDefaultAction={jest.fn()} />)

      expect(screen.queryByTestId("calendar-icon")).toBeNull()
    })
  })
})
