import { FETCH_WORKOUTS, CREATE_WORKOUT, NOTIFICATION } from '../constants/actionTypes'

export const createWorkout = (firestore, workout) => (dispatch, getState) => {
  firestore.add({ collection: 'workouts' }, { title: workout })
}
