import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const books = () => {
  return (
    <View>
      <Text>books</Text>
      <Link href="/">Go </Link>
    </View>
  )
}

export default books

const styles = StyleSheet.create({})