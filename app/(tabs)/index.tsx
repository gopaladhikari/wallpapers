import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Sugesstion from "@/components/Menu/Sugesstion";
import Library from "@/components/Menu/Library";
import Liked from "@/components/Menu/Liked";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

export default function Screen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Tab.Navigator>
        <Tab.Screen name="Suggestions" component={Sugesstion} />
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Liked" component={Liked} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
