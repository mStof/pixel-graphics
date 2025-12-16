import { useCallback, useEffect, useState } from "react";
import { RefreshControl, ScrollView, View } from "react-native";

import { Card } from "./Card";

import { CardType } from "~/src/database/initDB";
import { useDatabase } from "~/src/database/useDatabase";

const CardList = ({ search }: { search: string }) => {
  const [cardList, setCardList] = useState<CardType[] | undefined>([]);
  const [refreshing, setRefreshing] = useState(false);
  const { listData } = useDatabase();
  const filterList = cardList?.filter(({ name }) => {
    return name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    const dataCards = async () => {
      const response = await listData();
      setCardList(response);
    };
    dataCards();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    const dataCards = async () => {
      const response = await listData();
      setCardList(response);
      setRefreshing(false);
    };
    dataCards();
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
      className="flex-1 px-4 pt-6"
      contentContainerClassName="gap-4">
      {search
        ? filterList?.map((item) => (
            <Card.Container key={item.id}>
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
              <Card.Buttons cardSQL={item} refresh={onRefresh} />
            </Card.Container>
          ))
        : cardList?.map((item) => (
            <Card.Container key={item.id}>
              <Card.Image uri={item.image} />
              <View className="flex flex-1 justify-between">
                <Card.Title>{item.name}</Card.Title>
                <Card.Tags />
                <Card.Progress
                  value={
                    isNaN((100 * item.lines) / item.real_height)
                      ? 0
                      : 100 * item.lines / item.height_px
                  }
                />
              </View>
              <Card.Buttons cardSQL={item} refresh={onRefresh} />
            </Card.Container>
          ))}
    </ScrollView>
  );
};

export default CardList;
