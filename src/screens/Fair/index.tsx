import { useNavigation, useRoute } from "@react-navigation/native"
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react"
import { useTranslation } from "react-i18next"
import { FlatList, View } from "react-native"
import { useStyles } from "react-native-unistyles"

import { Fair as TFair } from "@/@types/fair"
import { FairItem as TFairItem } from "@/@types/fair-item"
import {
  BottomSheet,
  BottomSheetRef,
  Button,
  FairItem,
  FloatingButton,
  Icon,
  Input,
  Spacer,
  Typography,
} from "@/components"
import { useFairItem } from "@/hooks/useFairItem"
import { useFairs } from "@/hooks/useFairs"
import { HomeRoutesScreenRouteProp } from "@/routes"

import { stylesheet } from "./styles"

export type FairProps = {}

const Fair = (_props: FairProps) => {
  const [fairItems, setFairItems] = useState<TFairItem[]>([])
  const [fair, setFair] = useState<TFair | null>(null)
  const [newFairItem, setNewFairItem] = useState("")
  const [newFairName, setNewFairName] = useState("")
  const [fairDate, setFairDate] = useState("")

  const { styles } = useStyles(stylesheet)
  const { setOptions, goBack } = useNavigation()
  const { t } = useTranslation()
  const { create, findById, updateById, deleteById } = useFairs()
  const {
    createFairItem,
    findAllFairItemsByFairId,
    findFairItemById,
    deleteFairItemById,
    updateFairItemById,
  } = useFairItem()

  const { params } = useRoute<HomeRoutesScreenRouteProp<"Fair">>()

  const bottomSheetCreateItemRef = useRef<BottomSheetRef>(null)
  const bottomSheetEditFairRef = useRef<BottomSheetRef>(null)

  const hasItems = fairItems.length > 0 ? "common.items" : "common.item"

  const updateFairItems = useCallback(
    (fairId?: number) => {
      findAllFairItemsByFairId(fairId || params?.fairId).then(setFairItems)
    },
    [findAllFairItemsByFairId, params?.fairId],
  )

  const handlePressOpenBottomSheetCreateItem = () => {
    bottomSheetCreateItemRef.current?.open()
  }

  const handlePressOpenBottomSheetEditFair = () => {
    bottomSheetEditFairRef.current?.open()
  }

  const handleCreateNewFairAutomatically = useCallback(async () => {
    const fairId = await create({
      title: t("fair.newFairTitle"),
      userId: params.userId,
    })

    const fairInDatabase = await findById(fairId)
    setFair(fairInDatabase)
    setNewFairName(fairInDatabase?.title || "")
  }, [create, findById, params.userId, t])

  const handleDeleteFair = async () => {
    await deleteById(fair?.id || params?.fairId)

    goBack()
  }

  const handleEditFair = async () => {
    await updateById(params?.fairId, {
      title: newFairName,
      date: fairDate,
    })
    setFair({
      ...fair,
      title: newFairName,
      date: fairDate,
    })
    setNewFairName(fair.title)
    bottomSheetEditFairRef.current?.close()
  }

  const handlePressCreateNewItem = async () => {
    const fairItemId = await createFairItem({
      name: newFairItem,
      fairId: fair?.id || params?.fairId,
    })

    const fairItem = await findFairItemById(fairItemId)

    setFairItems([...fairItems, fairItem])
    setNewFairItem("")
    bottomSheetCreateItemRef.current?.close()
  }

  const handlePressDeleteItem = async (id: number) => {
    await deleteFairItemById(id)
    updateFairItems()
  }

  const handlePressCompleteItem = async (id: number) => {
    await updateFairItemById(id, {
      completed: true,
    })

    updateFairItems()
  }

  const handleNewDate = (text) => {
    const cleanText = text.replace(/\D/g, "")
    const formattedText = cleanText.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3")

    setFairDate(formattedText)
  }

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <Icon
          name="dots-vertical"
          size={32}
          onPress={handlePressOpenBottomSheetEditFair}
        />
      ),
    })
  }, [setOptions])

  useEffect(() => {
    if (!!params?.fairId) return

    handleCreateNewFairAutomatically()
  }, [handleCreateNewFairAutomatically, findById, params?.fairId])

  useEffect(() => {
    if (!params?.fairId) return

    findById(params?.fairId).then((fair) => {
      setFair(fair)
      setNewFairName(fair.title)
      setFairDate(fair?.date || "")

      updateFairItems(fair.id)
    })
  }, [findById, updateFairItems, params?.fairId])

  return (
    <View style={styles.container}>
      <View style={styles.fairDescription}>
        <Typography.Title>
          {fair?.title || t("fair.newFairTitle")}
        </Typography.Title>
        <Typography.Text style={styles.fairDescriptionItens}>
          {t(hasItems, { count: fairItems.length })}
        </Typography.Text>
      </View>
      <FlatList
        contentContainerStyle={styles.listContent}
        data={fairItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FairItem
            data={item}
            completed={item.completed}
            onDeleteItem={() => handlePressDeleteItem(item.id)}
            onPress={() => handlePressCompleteItem(item.id)}
          />
        )}
      />

      <FloatingButton
        icon="plus"
        onPress={handlePressOpenBottomSheetCreateItem}
      />

      <BottomSheet ref={bottomSheetCreateItemRef}>
        <Input
          placeholder={t("fair.addNewItem")}
          value={newFairItem}
          onChangeText={setNewFairItem}
        />
        <Spacer />
        <Button onPress={handlePressCreateNewItem}>
          <Typography.Title>{t("common.save")}</Typography.Title>
        </Button>
      </BottomSheet>

      <BottomSheet ref={bottomSheetEditFairRef}>
        <Input
          placeholder={t("fair.newListName")}
          value={newFairName}
          onChangeText={setNewFairName}
        />
        <Spacer />
        <Input
          placeholder={t("fair.dateNewList")}
          keyboardType="numeric"
          value={fairDate}
          onChangeText={handleNewDate}
        />
        <Spacer />
        <Button onPress={handleEditFair}>
          <Typography.Title>{t("common.save")}</Typography.Title>
        </Button>
        <Spacer size="lg" />

        <Button variant="secondary" onPress={handleDeleteFair}>
          <Typography.Title>{t("fair.deleteList")}</Typography.Title>
        </Button>
      </BottomSheet>
    </View>
  )
}

export default Fair
