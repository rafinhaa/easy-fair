import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { SafeAreaView } from "react-native-safe-area-context"
import { UnistylesRuntime, useStyles } from "react-native-unistyles"

import { Button, Setting, Spacer, Toggle, Typography } from "@/components"
import { AppRoutesScreenNavigationProp } from "@/routes"
import { storage } from "@/storage"

import Abbreviad from "./components/Abbreviad"
import { stylesheet } from "./styles"

export type ProfileProps = {}

const Profile = (_props: ProfileProps) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return UnistylesRuntime.themeName === "dark"
  })

  const { replace } = useNavigation<AppRoutesScreenNavigationProp>()
  const { styles } = useStyles(stylesheet)

  const { t } = useTranslation()

  const handlePressLogout = async () => {
    await storage.removeItem("USER_ID")
    replace("Users")
  }

  const handlePressChangeTheme = async (darkMode: boolean) => {
    UnistylesRuntime.setTheme(darkMode ? "dark" : "light")

    await storage.setItem<boolean>("DARK_MODE", darkMode)

    setIsDarkMode(darkMode)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Spacer size="3xl" />
      <Abbreviad name="Rafael Rodrigues" />
      <Spacer />
      <Setting.Section title={t("profile.theme")}>
        <Setting.Item
          label={t("profile.darkMode")}
          type="action"
          icon="moon-waning-crescent"
          action={
            <Toggle value={isDarkMode} onValueChange={handlePressChangeTheme} />
          }
        />
      </Setting.Section>
      <Spacer />

      <Spacer />

      <Button variant="secondary" onPress={handlePressLogout}>
        <Typography.Title>{t("profile.logout")}</Typography.Title>
      </Button>
    </SafeAreaView>
  )
}

export default Profile
