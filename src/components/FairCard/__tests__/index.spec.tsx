import { fireEvent, render, screen } from "@testing-library/react-native"

import { default as resources } from "@/locales/resources/pt-BR.json"
import { stringToFormattedDate } from "@/utils/date"

import FairCard, { FairCardProps } from "../index"

const data: FairCardProps["data"] = {
  title: "Olá, mundo!",
  date: "01/01/2020",
  fairItems: 10,
  completedAt: "2020-01-01T10:00:00.000Z",
  id: 1,
  userId: 1,
  createdAt: "2020-01-01T00:00:00.000Z",
  updatedAt: "2020-01-01T00:00:00.000Z",
  deletedAt: "2020-01-01T00:00:00.000Z",
}

describe("Text", () => {
  it("should be to able render correctly", () => {
    render(
      <FairCard
        data={data}
        onFairDelete={jest.fn()}
        onFairComplete={jest.fn()}
      />,
    )

    expect(screen.getByText(data.title)).toBeTruthy()
    expect(screen.getByText(stringToFormattedDate(data.date))).toBeTruthy()
    expect(
      screen.getByText(`${data.fairItems} ${resources.fairCard.itens}`),
    ).toBeTruthy()

    expect(screen.getByTestId("trash-can-icon")).toBeTruthy()
    expect(screen.getByTestId("check-icon")).toBeTruthy()
  })

  it("should be to able call onPress", () => {
    const onPress = jest.fn()
    render(
      <FairCard
        data={data}
        onPress={onPress}
        onFairDelete={jest.fn()}
        onFairComplete={jest.fn()}
      />,
    )

    fireEvent(screen.getByText(data.title), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("should be to able call onFairDelete", () => {
    const onPress = jest.fn()
    render(
      <FairCard
        data={data}
        onFairDelete={onPress}
        onFairComplete={jest.fn()}
      />,
    )

    fireEvent(screen.getByTestId("trash-can-icon"), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("should be to able call onFairComplete", () => {
    const onPress = jest.fn()
    render(
      <FairCard
        data={data}
        onFairDelete={jest.fn()}
        onFairComplete={onPress}
      />,
    )

    fireEvent(screen.getByTestId("check-icon"), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  describe("units", () => {
    it("should be to able render only one unit", () => {
      const newData: FairCardProps["data"] = {
        ...data,
        fairItems: 1,
      }

      render(
        <FairCard
          data={newData}
          onFairDelete={jest.fn()}
          onFairComplete={jest.fn()}
        />,
      )

      expect(
        screen.getByText(`${newData.fairItems} ${resources.fairCard.item}`),
      ).toBeTruthy()
    })

    it("should be to able render only zero unit", () => {
      const newData: FairCardProps["data"] = {
        ...data,
        fairItems: 0,
      }

      render(
        <FairCard
          data={newData}
          onFairDelete={jest.fn()}
          onFairComplete={jest.fn()}
        />,
      )

      expect(
        screen.getByText(`${newData.fairItems} ${resources.fairCard.item}`),
      ).toBeTruthy()
    })

    it("should be to able render multiple units", () => {
      const newData: FairCardProps["data"] = {
        ...data,
        fairItems: 2,
      }

      render(
        <FairCard
          data={newData}
          onFairDelete={jest.fn()}
          onFairComplete={jest.fn()}
        />,
      )

      expect(
        screen.getByText(`${newData.fairItems} ${resources.fairCard.itens}`),
      ).toBeTruthy()
    })
  })
})
