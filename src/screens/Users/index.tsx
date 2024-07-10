import { useNavigation } from "@react-navigation/native"
import { useCallback, useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import { FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useStyles } from "react-native-unistyles"

import {
  AlertDialog,
  BottomSheet,
  BottomSheetRef,
  Button,
  Divider,
  FloatingButton,
  Icon,
  Input,
  Spacer,
  Typography,
} from "@/components"
import { useUsers } from "@/hooks/useUsers"
import { AppRoutesScreenNavigationProp } from "@/routes"
import { storage } from "@/storage"

import UserCard from "./components/UserCard"
import { stylesheet } from "./styles"

const Users = () => {
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState("")

  const { styles } = useStyles(stylesheet)
  const { findAll, deleteById, create } = useUsers()
  const { t } = useTranslation()
  const { replace } = useNavigation<AppRoutesScreenNavigationProp>()

  const bottomSheet = useRef<BottomSheetRef>(null)

  const findAllUsers = useCallback(async () => {
    const users = await findAll()
    setUsers(users)
  }, [findAll])

  const handlePressDelete = async (id: number) => {
    AlertDialog.show({
      title: t("users.alertRemove.title"),
      description: t("users.alertRemove.description"),
      primaryAction: {
        label: t("common.delete"),
        onPress: async () => {
          await deleteById(id)
          await findAllUsers()

          AlertDialog.close()
        },
      },
    })
  }

  const handlePressSelectUser = async (id: number) => {
    await storage.setItem("USER_ID", id)

    replace("User", {
      screen: "Home",
      params: { userId: id },
    })
  }

  const handlePressOpenBottomSheet = () => {
    bottomSheet.current.open()
  }

  const handleCreateNewUser = async () => {
    await create({ name: newUser })
    await findAllUsers()
    bottomSheet.current.close()

    setNewUser("")
  }

  useEffect(() => {
    findAllUsers()
  }, [findAllUsers])

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <Typography.Text size="lg">
        {t("users.hi")}{" "}
        <Typography.Title size="lg">{t("users.welcome")}</Typography.Title>
      </Typography.Text>
      <Typography.Text> {t("users.select")}</Typography.Text>
      <Spacer size="xxs" />

      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard
            data={item}
            onSelect={handlePressSelectUser}
            onDelete={handlePressDelete}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <Icon name="account-off" size={200} />
            <Spacer />
            <Typography.Text>{t("users.empty.label")}</Typography.Text>
            <Typography.Text weight="bold">
              {t("users.empty.description")}
            </Typography.Text>
          </View>
        )}
        ItemSeparatorComponent={() => <Divider />}
      />

      <FloatingButton icon="plus" onPress={handlePressOpenBottomSheet} />

      <BottomSheet ref={bottomSheet} snapPoints={["50%", "70%"]}>
        <Input
          placeholder={t("users.inputPlaceholder")}
          onChangeText={setNewUser}
          value={newUser}
        />

        <Spacer />

        <Button onPress={handleCreateNewUser}>
          <Typography.Text>{t("common.save")}</Typography.Text>
        </Button>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default Users
