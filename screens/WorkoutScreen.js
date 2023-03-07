import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const WorkoutScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView classname="bg-white">
      <ScrollView>
      <View className="flex-row pt-10 mx-4">
      <View>
      <Text className="font-bold text-gray-700 text-4xl">Workouts</Text>
      </View>
      </View>

     


<ScrollView>
{/* {TARGET AREA} */}
      <View className="flex-row pt-2 pl-4">
      <View>
      <Text className="font-bold pt-3 text-xl"> Target Area </Text>
      </View>
      </View>

{/* {TARGET AREA COMPONENTS} */}
<View className='flex items-center'>
<View className="flex-row  gap-x-4">
      <TouchableOpacity onPress={() => navigation.navigate('Abs')}>
      <View className="h-45 w-45 pt-4 border-spacing-2 border-y-cyan-700 ">
          {/* {ProVideos} */}
          <Image source ={{ uri:"https://img.mensxp.com/media/content/2018/Nov/the-right-diet-for-men-in-order-to-get-abs-1400x653-1543405879.jpg?w=820&h=540&cc=1"}} className="h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center "> Abs </Text>
    </View>
    </TouchableOpacity> 

    

    <TouchableOpacity onPress={() => navigation.navigate('Booty')}>
    <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3sNYipv2vPP4O444i59ossnpEAgNlTEqtA&usqp=CAU"}}className = "h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center  "> Booty </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>
    </ScrollView>


    <View className='flex items-center'>
<View className="flex-row  gap-x-4">
      <TouchableOpacity onPress={() => navigation.navigate('Legs')}>
      <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{ uri:"http://cdn.shopify.com/s/files/1/1497/9682/articles/1_09671e69-0c95-48ad-a928-aa301fb6e400.jpg?v=1647700121"}} className="h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center "> Legs </Text>
    </View>
    </TouchableOpacity> 

    

    <TouchableOpacity onPress={() => navigation.navigate('Arms')}>
    <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{uri: "https://skinnyms.com/wp-content/uploads/2020/12/shutterstock_1677271378-e1607210619556.jpg"}}className = "h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center"> Arms </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>

    <View className='flex items-center'>
<View className="flex-row  gap-x-4">
      <TouchableOpacity onPress={() => navigation.navigate('Cardio')}>
      <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{ uri:"https://thumbs.dreamstime.com/b/asian-friends-treadmills-run-gym-asian-women-friends-running-exercise-treadmills-sport-fitness-gym-copy-space-183866377.jpg"}} className="h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center "> Cardio </Text>
    </View>
    </TouchableOpacity> 

    

    <TouchableOpacity onPress={() => navigation.navigate('Full Body')}>
    <View className="h-45 w-45 pt-4 ">
          {/* {ProVideos} */}
          <Image source ={{uri: "https://hips.hearstapps.com/hmg-prod/images/exercise-with-weights-royalty-free-image-587204700-1547584208.jpg"}}className = "h-40 w-40 rounded-xl" />
          <Text className = "text-xl font-light text-center  "> Full Body </Text>
    </View>
    </TouchableOpacity>
    </View>
    </View>

    <View className="flex-row pt-10 mx-4">
      <View>
      <Text className="font-bold pt-3 text-xl"> Latest in Pro </Text>
      </View>
      </View>


    <ScrollView contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,}}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
          <View>
            {/* {ProVideos} */}
            <TouchableOpacity>
            <Image source = {{ uri: "https://cdn.shopify.com/s/files/1/2705/9430/files/yoga_inverted_leg_pose_480x480.jpg?v=1603913628"}} className="h-40 w-80 mx-2 rounded-lg"/>
            <Text className="absolute bottom px-2 pt-2 left-2 text-white font-extrabold text-2xl">PERIOD PAIN RELIEF</Text>
            </TouchableOpacity>
            </View>

            <View>
            {/* {ProVideos} */}
            <TouchableOpacity>
            <Image source = {{ uri: "https://post.greatist.com/wp-content/uploads/sites/2/2019/05/HIIT20workouts_0.jpg"}} className="h-40 w-80 mx-2 rounded-lg"/>
            <Text className="absolute bottom px-2 pt-2 left-2 text-white font-extrabold text-2xl">HIIT WORKOUT</Text>
            </TouchableOpacity>
            </View>

            <View>
            {/* {ProVideos} */}
            <TouchableOpacity>
            <Image source = {{ uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/man-using-medicine-ball-at-cross-training-gym-royalty-free-image-1617118485.?crop=0.669xw:1.00xh;0.0505xw,0&resize=640:*"}} className="h-40 w-80 mx-2 rounded-lg"/>
            <Text className="absolute bottom px-2 pt-2 left-2 text-white font-extrabold text-2xl">GYM CARDIO WORKOUT</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>

    
    </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutScreen;