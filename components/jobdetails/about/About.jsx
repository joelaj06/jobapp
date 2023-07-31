import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About</Text>

      <View style={styles.contentBox}>
        <Text style={styles.contextText}>
          {/* This app is developed by Team 10 of the IIT Bombay Hackathon for */}
          {info}
        </Text>
      </View>

    </View>
  )
}

export default About