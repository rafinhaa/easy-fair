import { fireEvent, render, screen } from "@testing-library/react-native"

import { default as resources } from "@/locales/resources/pt-BR.json"

import FairCard, { FairCardProps } from "../index"

const data: FairCardProps["data"] = {
  title: "Olá, mundo!",
  date: "01/01/2020",
  items: 10,
}

describe("Text", () => {
  it("should be to able render correctly", () => {
    render(<FairCard data={data} />)

    expect(screen.getByText(data.title)).toBeTruthy()
    expect(screen.getByText(data.date)).toBeTruthy()
    expect(
      screen.getByText(`${data.items} ${resources.fairCard.itens}`),
    ).toBeTruthy()

    expect(screen.getByTestId("dots-vertical-icon")).toBeTruthy()
  })

  it("should be to able call onPress", () => {
    const onPress = jest.fn()
    render(<FairCard data={data} onPress={onPress} />)

    fireEvent(screen.getByText(data.title), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("should be to able call onActionsPress", () => {
    const onPress = jest.fn()
    render(<FairCard data={data} onActionsPress={onPress} />)

    fireEvent(screen.getByTestId("dots-vertical-icon"), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  describe("units", () => {
    it("should be to able render only one unit", () => {
      const newData = {
        ...data,
        items: 1,
      }

      render(<FairCard data={newData} />)

      expect(
        screen.getByText(`${newData.items} ${resources.fairCard.item}`),
      ).toBeTruthy()
    })

    it("should be to able render only zero unit", () => {
      const newData = {
        ...data,
        items: 0,
      }

      render(<FairCard data={newData} />)

      expect(
        screen.getByText(`${newData.items} ${resources.fairCard.item}`),
      ).toBeTruthy()
    })

    it("should be to able render multiple units", () => {
      const newData = {
        ...data,
        items: 2,
      }

      render(<FairCard data={newData} />)

      expect(
        screen.getByText(`${newData.items} ${resources.fairCard.itens}`),
      ).toBeTruthy()
    })
  })
})
