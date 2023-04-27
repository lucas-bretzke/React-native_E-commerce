import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Detail from '../pages/Detail'
import Notifications from '../pages/Notifications'
import Perfil from '../pages/Perfil'

import { Entypo, Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainTabNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function MainTabNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{ activeTintColor: 'white', }}
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#121212',
                    borderTopColor: 'transparent',
                    paddingTop: 10,
                },
            }}
        >
            <Tab.Screen name="Inicio" component={Home}
                options={{ tabBarLabel: '', headerShown: false, tabBarIcon: ({ size, color }) => (<Entypo name="home" size={23} color={color} />) }}
            />

            <Tab.Screen name="Search" component={Home}
                options={{ tabBarLabel: '', headerShown: false, tabBarIcon: ({ size, color }) => (<Feather name="search" size={23} color={color} />) }}
            />

            <Tab.Screen name="Novo" component={Home}
                options={{ tabBarLabel: '', headerShown: false, tabBarIcon: ({ size, color }) => (<Feather name="heart" size={23} color={color} />) }}
            />

            <Tab.Screen name="Notificacoes" component={Notifications}
                options={{ tabBarLabel: '', headerShown: false, tabBarIcon: ({ size, color }) => (<Feather name="bell" size={23} color={color} />) }}
            />

            <Tab.Screen name="Perfil" component={Perfil}
                options={{ tabBarLabel: '', headerShown: false, tabBarIcon: ({ size, color }) => (<Feather name="user" size={23} color={color} />) }}
            />
        </Tab.Navigator>
    )
}


