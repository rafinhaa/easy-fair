import { stringToFormattedDate } from "../date"

describe("date", () => {
  describe("stringToFormattedDate", () => {
    it("stringToFormattedDate", () => {
      const date = "2020-01-01T10:00:00.000Z"

      expect(stringToFormattedDate(date)).toBe("01/01/2020")
    })
  })
})
