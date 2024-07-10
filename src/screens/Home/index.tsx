import { useRoute } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useStyles } from "react-native-unistyles"

import { User } from "@/@types/user"
import { Button, Loading, Spacer, Typography } from "@/components"
import { useUsers } from "@/hooks/useUsers"
import { UserRoutesScreenRouteProp } from "@/routes"

import { stylesheet } from "./styles"

const Home = () => {
  const [user, setUser] = useState<null | User>(null)

  const { styles } = useStyles(stylesheet)
  const { params } = useRoute<UserRoutesScreenRouteProp<"Home">>()
  const { findById } = useUsers()
  const { t } = useTranslation()

  useEffect(() => {
    findById(params.userId).then((user) => setUser(user))
  }, [params.userId, findById])

  return (
    <SafeAreaView style={styles.container}>
      {!user ? (
        <Loading />
      ) : (
        <>
          <Typography.Text size="md">
            {t("common.Hello")},{" "}
            <Typography.Title>{user.name}</Typography.Title>
          </Typography.Text>
          <Spacer size="xxs" />
          <Typography.Text weight="bold" size="md">
            {t("home.welcome")}
          </Typography.Text>
          <Spacer />

          <View style={styles.newList}>
            <Typography.Text style={styles.newListText}>
              {t("home.description")}
            </Typography.Text>

            <Button>
              <Typography.Text>{t("home.createNewList")}</Typography.Text>
            </Button>
          </View>
        </>
      )}
    </SafeAreaView>
  )
}

export default Home
