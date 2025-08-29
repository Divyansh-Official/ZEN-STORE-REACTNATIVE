import { colors } from '@/constants/colors';
import { Tabs } from "expo-router";
import React from 'react';
import { Image } from 'react-native';

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: colors.White,
        tabBarInactiveTintColor: colors.CustomColor10,
        tabBarStyle: {
            backgroundColor: colors.CustomColor1,
            marginBottom: 20,
            borderRadius: 60,
            marginHorizontal: 20,
            height: 60,
            paddingBottom: 10,
            paddingTop: 10,
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        headerShown: false,
    }}>

        <Tabs.Screen name='main' 
        options={{
            title: '',
            tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/icons/home_icon01.png')}
                style={{width: size, height: size}}
                resizeMode= "contain" />
            ),
        }} />

        <Tabs.Screen name='favorites'
        options={{
            title: '',
            tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/icons/favorite_icon01.png')}
                style={{width: size, height: size}}
                resizeMode= "contain" />
            ),
        }} />

        <Tabs.Screen name='categories'
        options={{
            title: '',
            tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/icons/category_icon01.png')}
                style={{width: size, height: size}}
                resizeMode= "contain" />
            ),
        }} />

        <Tabs.Screen name='vendors'
        options={{
            title: '',
            tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/icons/vendor_icon01.png')}
                style={{width: size, height: size}}
                resizeMode= "contain" />
            ),
        }} />

        <Tabs.Screen name='profile'
        options={{
            title: '',
            tabBarIcon: ({ size }) => (
                <Image source={require('../../assets/icons/profile_icon01.png')}
                style={{width: size, height: size}}
                resizeMode= "contain" />
            ),
        }} />

    </Tabs>
  )
}

export default _layout