import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WorkoutScreen from "./screens/WorkoutScreen";
import ExerciseScreen from "./screens/AbsScreen";
import BootyScreen from "./screens/BootyScreen";
import LegsScreen from "./screens/LegsScreen";
import ArmsScreen from "./screens/ArmsScreen";
import CardioScreen from "./screens/CardioScreen";
import FullBodyScreen from "./screens/FullBodyScreen";
import ToningSideAbsScreen from "./screens/ToningSideAbs";
import SideBendScreen from "./screens/SideBendScreen";
import SidePlankScreen from "./screens/SidePlankScreen";
import ReverseCrunchesScreen from "./screens/ReverseCrunches";
import LowerAbsScreen from "./screens/LowerAbsScreen";
import Lying2Screen from "./screens/Lying2Screen";
import TonedGlutesScreen from "./screens/TonedGlutesScreen";
import BarBellGluteScreen from "./screens/BarBellGluteScreen";
import WalkingLungeScreen from "./screens/WalkingLungeScreen";
import DonkeyKickScreen from "./screens/DonkeyKickScreen";
import FloatingScreen from "./screens/FloatingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import UserDetailsScreen from "./screens/UserDetailsScreen";
import NewMed3Screen from "./screens/NewMed3Screen";
import NewMed2Screen from "./screens/NewMed2Screen";
import NewMed1Screen from "./screens/NewMed1Screen";
import AllReciepes from "./screens/AllReciepes";
import CDashboardScreen from "./screens/CDashboardScreen";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <TailwindProvider>
      <Stack.Navigator>
        {/* Screens */}
        <Stack.Screen name="Workouts" component={WorkoutScreen}
        options ={{headerShown: false }} />
        <Stack.Screen name="CustomerDashboard" component={CDashboardScreen} />
        <Stack.Screen name = "Reciepes" component = {AllReciepes}/>
        <Stack.Screen name = "New Medi1" component = { NewMed1Screen }
        options = {{ headerShown: false }}/>
         <Stack.Screen name = "New Medi2" component = { NewMed2Screen }
        options = {{ headerShown: false }}/>
         <Stack.Screen name = "New Medi3" component = { NewMed3Screen }
        options = {{ headerShown: false }}/>

        <Stack.Screen name = "User Details" component = {UserDetailsScreen}
        options={{ headerShown: false }}/>
        
       
        <Stack.Screen name="Floating Button" component={FloatingScreen} />
        <Stack.Screen name="Abs" component={ExerciseScreen} />
        <Stack.Screen name="Booty" component={BootyScreen}/>
        <Stack.Screen name="Legs" component={LegsScreen}/>
        <Stack.Screen name="Arms" component={ArmsScreen}/>
        <Stack.Screen name="Cardio" component={CardioScreen}/>
        <Stack.Screen name="Full Body" component={FullBodyScreen}/>

        {/* {Abs workout exercise-1} */}
        <Stack.Screen name="Toning side abs" component={ToningSideAbsScreen}/>
        <Stack.Screen name="Standing Side Bends" component={SideBendScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Side Plank" component={SidePlankScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Reverse Crunches" component={ReverseCrunchesScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>

        {/* {Abs workout exrecise-2} */}
         <Stack.Screen name="Lower abs" component={LowerAbsScreen}/>
         <Stack.Screen name="Lying Lower" component={Lying2Screen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>

        {/* {Booty workout exercise-1} */}
        <Stack.Screen name="Toned Glutes" component={TonedGlutesScreen}/>
        <Stack.Screen name="BarBell Glute" component={BarBellGluteScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Walking Lunge" component={WalkingLungeScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
         <Stack.Screen name="Donkey Kicks" component={DonkeyKickScreen}
        options={{presentation:"fullScreenModal", headerShown: false }}/>
       
<Stack.Screen name="Profile Screen" component={ProfileScreen} 
        options={{headerShown: false}} />


    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}


