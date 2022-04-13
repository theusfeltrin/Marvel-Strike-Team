import storage from 'redux-persist/lib/storage'
import { createStore, Store } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'

export interface AppState {
}

const persistConfig = {
  key: `${process.env.REACT_APP_NAME}`,
  storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store: Store<AppState> = createStore(persistedReducer, composeWithDevTools())
const persistor = persistStore(store)

export {
  store,
  persistor
}
