import { render, screen } from "@testing-library/react-native"

import Icon from "../index"

describe("Icon", () => {
  describe("variant", () => {
    it("primary", () => {
      render(<Icon name={"calendar"} />)

      expect(screen.getByTestId("calendar-icon")).toBeTruthy()
      expect(screen.getByTestId("calendar-icon")).toHaveProp("color", "#1ee631")
    })

    it("secondary", () => {
      render(<Icon name={"calendar"} variant="secondary" />)

      expect(screen.getByTestId("calendar-icon")).toBeTruthy()
      expect(screen.getByTestId("calendar-icon")).toHaveProp("color", "#000")
    })
  })

  describe("size", () => {
    it("should render sm", () => {
      render(<Icon name={"calendar"} size="sm" />)

      expect(screen.getByTestId("calendar-icon")).toHaveProp("size", 16)
    })

    it("should render size numeric", () => {
      render(<Icon name={"calendar"} size={24} />)

      expect(screen.getByTestId("calendar-icon")).toHaveProp("size", 24)
    })
  })
})
