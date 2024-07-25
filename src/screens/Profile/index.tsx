import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { SafeAreaView } from "react-native-safe-area-context"
import { useStyles } from "react-native-unistyles"

import { Button, Setting, Spacer, Toggle, Typography } from "@/components"
import { AppRoutesScreenNavigationProp } from "@/routes"
import { storage } from "@/storage"

import Abbreviad from "./components/Abbreviad"
import { stylesheet } from "./styles"

export type ProfileProps = {}

const Profile = (_props: ProfileProps) => {
  const [darkMode, setDarkMode] = useState(false)

  const { replace } = useNavigation<AppRoutesScreenNavigationProp>()
  const { styles } = useStyles(stylesheet)

  const { t } = useTranslation()

  const handlePressLogout = async () => {
    await storage.removeItem("USER_ID")

    replace("Users")
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
          action={<Toggle value={darkMode} onValueChange={setDarkMode} />}
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
