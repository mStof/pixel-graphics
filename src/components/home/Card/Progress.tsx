import { View, Text, DimensionValue } from "react-native";

type ProgressProps = {
  value: number;
};

const Progress = ({ value = 50 }: ProgressProps) => {
  const progressNum = (value + "%") as DimensionValue;

  return (
    <View className="flex h-fit flex-row items-center gap-1 ">
      <View className="h-1.5 w-28 overflow-hidden rounded-full bg-[#929CBB]">
        <View className="h-full bg-secondary" style={{ width: progressNum }} />
      </View>
      <Text className="font-Nunito-light text-xs leading-tight text-text">{value.toFixed(0)}%</Text>
    </View>
  );
};

export default Progress;
