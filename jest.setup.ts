import "@testing-library/react-native/extend-expect"

import { default as mockResources } from "@/locales/resources/pt-BR.json"
import "@/theme"

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter")

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => {
      if (key.includes("."))
        return key.split(".").reduce((obj, key) => obj[key], mockResources)

      return mockResources[key]
    },
  }),
}))

jest.mock("@expo/vector-icons/MaterialCommunityIcons", () => {
  const { Text } = require("react-native")
  return {
    __esModule: true,
    default: Text,
  }
})
