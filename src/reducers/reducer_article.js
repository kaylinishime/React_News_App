import { FETCH_ARTICLES } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ARTICLES:
    console.log(action.payload.data);
    // return state.push(action.payload.data) <-- WRONG! We never want to MUTATE state.

    // return state.concat([action.payload.data]); <-- CORRECT
    // concat creates a new array, with all the old cities plus new cities
    return [ action.payload.data, ...state ];
  }

  return state;
}
