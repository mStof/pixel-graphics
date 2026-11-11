import { View } from "react-native";

const Tags = () => {
  return (
    <View className="flex -translate-y-0.5 flex-row gap-0.5">
      <View className="h-1.5 w-7 rounded-sm bg-secondary" />
      <View className="h-1.5 w-5 rounded-sm bg-secondary" />
      <View className="h-1.5 w-6 rounded-sm bg-secondary" />
    </View>
  );
};

export default Tags;
