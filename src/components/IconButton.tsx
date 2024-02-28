import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export type IconButtonProps = {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
};

export function IconButton({
  onPress,
  icon,
  color = "white",
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
      testID="components.iconButton.pressable"
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
