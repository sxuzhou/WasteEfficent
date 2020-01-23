import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import StopsScreen from '../screens/StopsScreen';
import RoutesScreen from '../screens/RoutesScreen';
import DrivesScreen from '../screens/DrivesScreen';
import AccountScreen from '../screens/AccountScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const StopsStack = createStackNavigator(
  {
    Links: StopsScreen,
  },
  config
);

StopsStack.navigationOptions = {
  tabBarLabel: 'Stops',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

StopsStack.path = '';

const RoutesStack = createStackNavigator(
  {
    Routes: RoutesScreen,
  },
  config
);

RoutesStack.navigationOptions = {
  tabBarLabel: 'Routes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

RoutesStack.path = '';

const DrivesStack = createStackNavigator(
  {
    Drives: DrivesScreen, 
  },
  config
);

DrivesStack.navigationOptions = {
  tabBarLabel: 'Drives',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

DrivesStack.path = '';

const AccountStack = createStackNavigator(
  {
    Routes: RoutesScreen, 
  },
  config
);

AccountStack.navigationOptions = { 
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  StopsStack,
  RoutesStack,
  DrivesStack,
  AccountStack,
});

tabNavigator.path = '';

export default tabNavigator;
