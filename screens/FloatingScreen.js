import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


    const FloatingScreen = () => {
        const clickHandler = () => {
          //function to handle click on floating Action Button
          alert('Floating Button Clicked');
        };
  return (
    <SafeAreaView>
    <TouchableOpacity className="h-10 w-10 absolute right-0"
          activeOpacity={0.7}
          onPress={clickHandler}>

          <Image
            source={{
              uri:
                'https://www.callcentrehelper.com/images/stories/2020/10/chat-bot-head-set-760.jpg',
            }}className = "h-10 outline-offset-2 rounded-full"
          />
        </TouchableOpacity>
    </SafeAreaView>

    
  )
}

export default FloatingScreen