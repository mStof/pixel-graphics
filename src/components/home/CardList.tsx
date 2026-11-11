import { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import { Card } from "./Card";

import { useDatabase } from "~/src/hooks/useDatabase";
import { PixelartType } from "~/src/types/pixelart";

const CardList = ({ search }: { search: string }) => {
  const [cardList, setCardList] = useState<PixelartType[] | undefined>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { getUserPixelart } = useDatabase();
  const filterList = cardList?.filter(({ name }) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });

  const dataCards = async () => {
    const response = await getUserPixelart("0001");
    const arrayResponse = Object.values(response);
    setCardList(arrayResponse as PixelartType[]);
  };

  useEffect(() => {
    dataCards();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dataCards();
    setRefreshing(false);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={["#B3C0E6", "#030027", "#FAF4C5"]}
        />
      }
      className="flex-1 bg-primary px-4 pt-6"
      contentContainerClassName="gap-4">
      {search
        ? filterList?.map((item, index) => (
            <Card.Container key={index}>
              <Card.Image uri={item.image} />
              <View className="flex flex-1 justify-between">
                <Card.Title>{item.name}</Card.Title>
                <Card.Tags />
                <Card.Progress
                  value={
                    isNaN((100 * item.lines) / item.real_height)
                      ? 0
                      : (100 * item.lines) / item.real_height
                  }
                />
              </View>
              <Card.Buttons refresh={onRefresh} />
            </Card.Container>
          ))
        : cardList?.map((item, index) => (
            <Card.Container key={index}>
              <Card.Image uri={item.image} />
              <View className="flex flex-1 justify-between">
                <Card.Title>{item.name}</Card.Title>
                <Card.Tags />
                <Card.Progress
                  value={
                    isNaN((100 * item.lines) / item.real_height)
                      ? 0
                      : (100 * item.lines) / item.height_px
                  }
                />
              </View>
              <Card.Buttons refresh={onRefresh} />
            </Card.Container>
          ))}
    </ScrollView>
  );
};

export default CardList;
