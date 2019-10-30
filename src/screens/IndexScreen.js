import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { createWorkout } from '../actions'

const IndexScreen = ({ navigation, workouts, createWorkout, firestore, ...props }) => {
  const [title, setTitle] = useState('')

  if (!workouts) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )
  }
  return (
    <View>
      <Text style={{ fontSize: 20 }}>Index Screen</Text>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput value={title} onChangeText={newTitle => setTitle(newTitle)} style={styles.input} />

      <Button title='Create Workout' onPress={() => createWorkout(firestore, title)} />

      <FlatList
        data={workouts}
        keyExtractor={workout => workout.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

const mapStateToProps = ({ firestore }) => {
  const {
    ordered: { workouts },
  } = firestore

  return {
    workouts,
  }
}

export default compose(
  firestoreConnect(() => ['workouts']),
  connect(
    mapStateToProps,
    { createWorkout }
  )
)(IndexScreen)
