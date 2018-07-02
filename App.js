import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// タブ遷移をつくってくれる
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

// 自分で書いたソースはここでインポートすることで使える
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import Setting1Screen from './screens/Setting1Screen';
import Setting2Screen from './screens/Setting2Screen';

export default class App extends React.Component {
  // renderが処理部
  render() {
    const HomeStack = createStackNavigator({
      home:{screen:HomeScreen},
      detail:{screen:DetailScreen}
    });
    const AddStack = createStackNavigator({
      add:{screen: AddScreen}
    });
    const ProfileStack = createStackNavigator({
      profile: {screen:ProfileScreen},
      setting1: {scrren:Setting1Screen },
      setting2: {scrren:Setting2Screen }
    });

    // createBottomTabNavigatorでタブを作成できる。便利ねー
    const MainTab = createBottomTabNavigator({
      homeStack:{screen: HomeScreen},
      addStack:{screen:AddScreen},
      profileStack:{screen: ProfileScreen}
    })
    const NavigatorTab = createBottomTabNavigator({
      welcome:{screen:WelcomeScreen},
      main: { screen:MainTab }
    }, {
      navigationOptions:{tabBarVisible: false}
    });
    // returnは処理結果を返すとこ
    return (
      <View style={styles.container}>
        // Textの代わりにWelcomeScreenつかうで！って意味
        <NavigatorTab />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
