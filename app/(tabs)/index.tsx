import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { fetchMovies } from '@/services/api'
import useFetch from '@/hooks/useFetch'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'

export default function index() {
  const { data, loading, error } = useFetch(() => fetchMovies(''))

  return (
    <View className='flex-1 bg-primary'>

      <Image 
        source={images.bg}
        className='absolute w-full z-0'
        resizeMode='cover'
      />

      <ScrollView 
        className='flex-1 px-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: '100%', paddingBottom: 10 }}
      >

        <Image source={icons.logo} className='w-12 h-10 mt-20 mb-5 mx-auto' />

      </ScrollView>
    </View>
  )
} 