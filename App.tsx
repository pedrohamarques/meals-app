import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CategoriesScreen } from "./src/screens/Categories";
import { MealsOverviewScreen } from "./src/screens/MealsOverview";

export type RootStackParamList = {
  MealsCategories: undefined,
  MealsOverview: { categoryId: string },
}
const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MealsCategories">
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
