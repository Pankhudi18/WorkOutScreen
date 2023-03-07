import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const AllReciepes = () => {
  return (
    <ScrollView>

      <View className="flex-row pt-1 px-1">
    <Text className="font-bold text-lg">Vegetarian Reciepes:</Text>
    <Text className="text-sm text-gray-500 pl-32">View More</Text>
      </View>

      <ScrollView contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,}}
    horizontal
    showsHorizontalScrollIndicator={false} >
      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2019%2F08%2F26232345%2F6343074.jpg&w=272&h=272&c=sc&poi=face&q=60"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Really Green Smoothie</Text>
          <Text className="px-2 pt-3 text-gray-600"> 100 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "data:image/jpeg;base64,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"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Broccoli Panner Paratha</Text>
          <Text className="px-2 pt-3 text-gray-600"> 150 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://www.thedeliciouscrescent.com/wp-content/uploads/2016/05/Vegetable-Upma-7.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Vegetable Upma with       <Text className="text-sm font-semibold px-2 pt-2">Vegetable Upma with     </Text></Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>

    <View className="flex-row pt-3 px-1">
    <Text className="font-bold text-lg">Non-Vegetarian Reciepes:</Text>
    <Text className="text-sm text-gray-500 pl-20">View More</Text>
      </View>

      <ScrollView contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,}}
    horizontal
    showsHorizontalScrollIndicator={false} >
      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>

    <View className="flex-row pt-3 px-1">
    <Text className="font-bold text-lg">Pre-WorkOut Reciepes:</Text>
    <Text className="text-sm text-gray-500 pl-32">View More</Text>
      </View>

      <ScrollView contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,}}
    horizontal
    showsHorizontalScrollIndicator={false} >
      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>

    <View className="flex-row pt-3 px-1">
    <Text className="font-bold text-lg">Immune Support:</Text>
    <Text className="text-sm text-gray-500 pl-32">View More</Text>
      </View>


      <ScrollView contentContainerStyle={{
    paddingHorizontal: 15,
    paddingTop: 10,}}
    horizontal
    showsHorizontalScrollIndicator={false} >
      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity className="mr-3">
        <View className="h-40 w-30 bg-white rounded-xl">
          <Image source={{uri: "https://wildwildwhisk.com/wp-content/uploads/2019/01/Coconut-Chia-Pudding-2.jpg"}}
          className="h-20 rounded-t-xl"/>
          <Text className="text-sm font-semibold px-2 pt-2">Coconut Chia Pudding</Text>
          <Text className="px-2 pt-3 text-gray-600"> 133 Cal</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>

    </ScrollView>
  )
}

export default AllReciepes