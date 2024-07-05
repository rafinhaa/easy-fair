import { fireEvent, render, screen } from "@testing-library/react-native"

import UserCard, { UserCardProps } from ".."

const data: UserCardProps["data"] = {
  name: "John Doe",
  id: 1,
}

describe("UserCard", () => {
  it("should be able to render correctly", () => {
    render(<UserCard data={data} onSelect={jest.fn()} onDelete={jest.fn()} />)

    expect(screen.getByText(data.name)).toBeTruthy()
    expect(screen.getByTestId("trash-can-icon")).toBeTruthy()
  })

  it("should be able to call onDelete", () => {
    const onDelete = jest.fn()

    render(<UserCard data={data} onSelect={jest.fn()} onDelete={onDelete} />)

    fireEvent(screen.getByTestId("trash-can-icon"), "onPress")

    expect(onDelete).toHaveBeenCalledWith(data.id)
    expect(onDelete).toHaveBeenCalledTimes(1)
  })

  it("should be able to call onSelect", () => {
    const onSelect = jest.fn()

    render(<UserCard data={data} onSelect={onSelect} onDelete={jest.fn()} />)

    fireEvent(screen.getByText(data.name), "onPress")

    expect(onSelect).toHaveBeenCalledWith(data.id)
    expect(onSelect).toHaveBeenCalledTimes(1)
  })
})
