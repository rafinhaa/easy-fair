import { act, fireEvent, render, screen } from "@testing-library/react-native"

import GlobalAlertDialog, { AlertDialog } from "../"

describe("AlertDialog", () => {
  it("should not render when is not opened ", () => {
    render(<GlobalAlertDialog />)

    expect(screen.queryByTestId("alert-dialog-wrapper")).not.toBeTruthy()
  })

  it("should render correctly if opened", () => {
    render(<GlobalAlertDialog />)

    act(() => {
      AlertDialog.show({
        title: "title",
        description: "description",
        primaryAction: {
          label: "primary",
          onPress: jest.fn(),
        },
      })
    })

    expect(screen.getByTestId("alert-dialog-wrapper")).toBeTruthy()

    expect(screen.getByText("title")).toBeTruthy()
    expect(screen.getByText("description")).toBeTruthy()
    expect(screen.getByText("primary")).toBeTruthy()
  })

  it("should be to able call close alert with default onPress", () => {
    render(<GlobalAlertDialog />)

    act(() => {
      AlertDialog.show({
        title: "title",
        description: "description",
        primaryAction: {
          label: "primary",
          onPress: jest.fn(),
        },
      })
    })

    expect(screen.queryByTestId("alert-dialog-wrapper")).toBeTruthy()

    act(() => {
      AlertDialog.close()
    })

    expect(screen.queryByTestId("alert-dialog-wrapper")).not.toBeTruthy()
  })

  it("should be to able call close alert with custom onPress", () => {
    render(<GlobalAlertDialog />)

    act(() => {
      AlertDialog.show({
        title: "title",
        description: "description",
        primaryAction: {
          label: "primary",
          onPress: jest.fn(),
        },
        secondaryAction: {
          label: "secondary",
          onPress: () => AlertDialog.close(),
        },
      })
    })

    expect(screen.queryByTestId("alert-dialog-wrapper")).toBeTruthy()
    expect(screen.getByText("secondary")).toBeTruthy()

    fireEvent.press(screen.getByText("secondary"))

    expect(screen.queryByTestId("alert-dialog-wrapper")).not.toBeTruthy()
  })

  describe("backdrop", () => {
    it("should be to able render correctly", () => {
      render(<GlobalAlertDialog />)

      act(() => {
        AlertDialog.show({
          title: "title",
          description: "description",
          primaryAction: {
            label: "primary",
            onPress: jest.fn(),
          },
        })
      })

      expect(screen.getByTestId("alert-dialog-backdrop")).toBeTruthy()
    })

    it("should be to able close alert if press on backdrop", () => {
      render(<GlobalAlertDialog />)

      act(() => {
        AlertDialog.show({
          title: "title",
          description: "description",
          primaryAction: {
            label: "primary",
            onPress: jest.fn(),
          },
        })
      })

      expect(screen.queryByTestId("alert-dialog-wrapper")).toBeTruthy()

      fireEvent.press(screen.getByTestId("alert-dialog-backdrop"))

      expect(screen.queryByTestId("alert-dialog-wrapper")).not.toBeTruthy()
    })

    it("should not be to able close alert if press on backdrop", () => {
      render(<GlobalAlertDialog />)

      act(() => {
        AlertDialog.show({
          title: "title",
          description: "description",
          closeOnBackdropPress: false,
          primaryAction: {
            label: "primary",
            onPress: jest.fn(),
          },
        })
      })

      expect(screen.queryByTestId("alert-dialog-wrapper")).toBeTruthy()

      fireEvent.press(screen.getByTestId("alert-dialog-backdrop"))

      expect(screen.queryByTestId("alert-dialog-wrapper")).toBeTruthy()
    })
  })
})
