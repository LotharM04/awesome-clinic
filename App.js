import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Appointment from "./pages/Appointment";
import Appointments from "./pages/Appointments";
import Confirm from "./pages/Confirm";
import GlobalState from "./context/GlobalState";

export default function App() {
  const Stack = createSharedElementStackNavigator();
  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Appointment"
            component={Appointment}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Appointments"
            component={Appointments}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Confirm"
            component={Confirm}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
