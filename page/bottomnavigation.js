import * as React from 'react';
import {Text, View, TouchableOpacity, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WebView} from 'react-native-webview';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DataMasjid from './datamasjid.json';
import {ScrollView} from 'react-native-gesture-handler';

function PointScreen() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <WebView
        source={{
          uri: 'https://anggitacaahy.github.io/point.html',
        }}
      />
    </View>
  );
}

function LineScreen() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <WebView
        source={{
          uri: 'https://anshori.github.io/leafletjs-geojson-jquery/line.html',
        }}
      />
    </View>
  );
}

function MasjidParse() {
  return DataMasjid.map(item => (
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(
          'google.navigation:q=' + item.latitude + ',' + item.longitude,
        )
      }>
      <View
        style={{
          margin: 10,
          padding: 10,
        }}>
        <FontAwesome5 name={item.fontawesome5icon} size={40} />

        <Text>{item['Nama Masjid']}</Text>
        <Text>{item.Alamat}</Text>
      </View>
    </TouchableOpacity>
  ));
}

function MasjidScreen() {
  return (
    <ScrollView>
      <View>
        <MasjidParse />
      </View>
    </ScrollView>
  );
}

function PolygonScreen() {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <WebView
        source={{
          uri: 'https://anshori.github.io/leafletjs-geojson-jquery/polygon.html',
        }}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            // FontAwesome5
            if (route.name === 'Sebaran Masjid') {
              iconName = focused ? 'map' : 'map';
            } else if (route.name === 'Polygon') {
              iconName = focused ? 'draw-polygon' : 'draw-polygon';
            } else if (route.name === 'Data Masjid') {
              iconName = focused ? 'mosque' : 'mosque';
            }

            return (
              <FontAwesome5 name={iconName} size={size} color={color} solid />
            );
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Sebaran Masjid" component={PointScreen} />
        <Tab.Screen name="Polygon" component={PolygonScreen} />
        <Tab.Screen name="Data Masjid" component={MasjidScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
