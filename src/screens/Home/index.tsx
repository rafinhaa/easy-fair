import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native"
import { useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useStyles } from "react-native-unistyles"

import { Fair } from "@/@types/fair"
import { User } from "@/@types/user"
import {
  AlertDialog,
  Button,
  FairCard,
  Loading,
  Spacer,
  Typography,
} from "@/components"
import { useFairs } from "@/hooks/useFairs"
import { useUsers } from "@/hooks/useUsers"
import {
  HomeRoutesScreenNavigationProp,
  UserRoutesScreenRouteProp,
} from "@/routes"

import { stylesheet } from "./styles"

const Home = () => {
  const [user, setUser] = useState<null | User>(null)
  const [fairs, setFairs] = useState<null | Fair[]>(null)

  const { styles } = useStyles(stylesheet)
  const { params } = useRoute<UserRoutesScreenRouteProp<"Home">>()
  const { navigate } = useNavigation<HomeRoutesScreenNavigationProp>()
  const { findById } = useUsers()
  const { findAll, deleteById, setCompleted } = useFairs()
  const { t } = useTranslation()

  const handlePressCreateNewFair = () => {
    navigate("Fair", { userId: params.userId })
  }

  const handlePressViewFair = (fairId: number) => {
    navigate("Fair", { fairId, userId: params.userId })
  }

  const handlePressFairDelete = async (fairId: number) => {
    AlertDialog.show({
      title: t("home.fairListDelete"),
      description: t("home.fairListDeleteDescription"),
      primaryAction: {
        label: t("common.delete"),
        onPress: async () => {
          await deleteById(fairId)

          findAll(params.userId).then((fairs) => setFairs(fairs))

          AlertDialog.close()
        },
      },
    })
  }

  const handlePressFairComplete = async (fairId: number) => {
    await setCompleted(fairId, {
      completedAt: new Date().toISOString(),
    })

    findAll(params.userId).then((fairs) => setFairs(fairs))
  }

  useEffect(() => {
    if (!params?.userId) return

    findById(params.userId).then((user) => setUser(user))
  }, [params?.userId, findById])

  useFocusEffect(
    useCallback(() => {
      if (!params?.userId) return

      findAll(params.userId).then((fairs) => setFairs(fairs))
    }, [params?.userId, findAll]),
  )

  if (!user) return <Loading />

  return (
    <SafeAreaView style={styles.container}>
      <Typography.Text size="md">
        {t("common.Hello")}, <Typography.Title>{user.name}</Typography.Title>
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

        <Button onPress={handlePressCreateNewFair}>
          <Typography.Text>{t("home.createNewList")}</Typography.Text>
        </Button>
      </View>
      <Spacer />

      <FlatList
        contentContainerStyle={styles.fairCardContainer}
        data={fairs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FairCard
            data={item}
            onPress={() => handlePressViewFair(item.id)}
            onFairDelete={handlePressFairDelete}
            onFairComplete={handlePressFairComplete}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Home
