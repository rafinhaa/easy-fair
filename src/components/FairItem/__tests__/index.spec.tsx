import { fireEvent, render, screen } from "@testing-library/react-native"

import { default as resources } from "@/locales/resources/pt-BR.json"

import FairItem, { FairItemProps } from ".."

const data: FairItemProps["data"] = {
  title: "Olá, mundo!",
}

describe("FairItem", () => {
  it("should be to able render correctly", () => {
    render(<FairItem data={data} />)

    expect(screen.getByText(resources.fairItem.delete)).toBeTruthy()
    expect(screen.getByRole("checkbox")).toBeTruthy()
    expect(screen.getByText(data.title)).toBeTruthy()
  })

  it("should be to able call onPress", () => {
    const onPress = jest.fn()
    render(<FairItem data={data} onPress={onPress} />)

    fireEvent(screen.getByRole("checkbox"), "onPress")

    expect(onPress).toHaveBeenCalledTimes(1)
  })

  it("should be to able call onDeleteItem", () => {
    const onDeleteItem = jest.fn()
    render(<FairItem data={data} onDeleteItem={onDeleteItem} />)

    fireEvent(screen.getByText(resources.fairItem.delete), "onSwipeableOpen")

    expect(onDeleteItem).toHaveBeenCalledTimes(1)
  })
})
