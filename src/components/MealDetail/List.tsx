import { Text, View, StyleSheet } from "react-native";

type ListProps = {
  data: string[];
  testId?: string;
};

export function List({ data, testId }: ListProps) {
  return data.map((dataItem, index) => (
    <View
      key={dataItem}
      style={styles.listItem}
      testID={`components.meal-detail.${testId}-${index}`}
    >
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
