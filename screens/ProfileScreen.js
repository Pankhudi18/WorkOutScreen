import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
 const navigation = useNavigation;
  return (
<SafeAreaView className="bg-[#144272] flex-1">

    <View className="pt-10 pb-4 mx-4 px-32">
        <Image source={{uri: "https://img.freepik.com/premium-vector/big-muscular-human-body-silhouette-massive-muscle-flex_637451-113.jpg?w=2000"}}
        className="h-20 w-20 rounded-full"/>
    </View>
    <Text className="text-lg text-bold text-white pb-8 mx-20"> Let's get you all set up! </Text>
    
<ScrollView contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,}}
    horizontal
    showsHorizontalScrollIndicator={false} 
    className="px-1 pb-14">
<View  className="w-80 bg-[#BFEAF5] rounded-3xl ">
<Text className="font-extrabold text-3xl pt-3 px-7 pb-4">WORKOUT PASS</Text>
<Text className="text-lg font-bold pt-3 px-2"> ➡️ Access to monthly Blogilates</Text>
<Text className="text-lg font-bold pt-2 px-2"> ➡️ Access to ALL challenges</Text>
<Text className="text-lg font-bold pt-2 px-2"> ➡️ Access to ALL Programs</Text>
</View> 

<View  className="w-80 bg-[#BFEAF5] rounded-3xl mx-4">
<Text className="font-extrabold text-2xl pt-3 px-10">ALL ACCESS PLANS</Text>
<Text className="text-lg font-bold pt-4 px-2"> ➡️ Access to 90 day journey</Text>
<Text className="text-sm font-bold pt-1 px-8"> Goal Setting</Text>
<Text className="text-sm font-bold pt-1 px-8"> Daily journaling (mood/stree/sleep/bloat etc)</Text>
<Text className="text-sm font-bold pt-1 px-8"> Visual meal tracking</Text>
<Text className="text-sm font-bold pt-1 px-8"> Water Tracking</Text>
<Text className="text-lg font-bold pt-3 px-2"> ➡️ Access to Workout Pass</Text>


<TouchableOpacity className="h-24 w-36 absolute bottom-1/4 left-4 rounded-2xl bg-white">
    <Text className="pt-3 px-4 mx-3 font-extrabold text-blue-900">Monthly Plan</Text>
    <Text className="pt-2 px-12 font-bold text-blue-900">₹ 649</Text>
    <Text className="pt-1 px-8 mx-1 font-bold text-blue-900">per month</Text>
</TouchableOpacity>


<TouchableOpacity className="h-24 w-36 absolute bottom-1/4 left-4 rounded-2xl bg-white">
    <Text className="pt-3 px-4 mx-3 font-extrabold text-blue-900">Monthly Plan</Text>
    <Text className="pt-2 px-12 font-bold text-blue-900">₹ 649</Text>
    <Text className="pt-1 px-8 mx-1 font-bold text-blue-900">per month</Text>
</TouchableOpacity>

</View> 


</ScrollView>


</SafeAreaView>
  )
}

export default ProfileScreen