import { Text, View, StyleSheet } from "react-native";

type ListProps = {
  data: string[];
};

export function List({ data }: ListProps) {
  return data.map((dataItem) => (
    <View key={dataItem} style={styles.listItem}>
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
