import { ColorValue } from "react-native";

class Category {
  id: string;
  title: string;
  color: ColorValue;

  constructor(id: string, title: string, color: ColorValue) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}

export default Category;
