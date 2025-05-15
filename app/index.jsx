import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <Link href="/books">Go to books</Link>
      <Link href="/profile">Go to profile</Link>  
      <Link href="/create">Go to Create</Link>  

    </View>
  )
}

export default home

const styles = StyleSheet.create({})