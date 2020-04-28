declare module "redux-persist/es/persistReducer" {
  import { Action, AnyAction, Reducer } from "redux";
  import { PersistConfig, PersistedState } from "redux-persist/es/types";

  /**
   * @desc It provides a way of combining the reducers, replacing redux's @see combineReducers
   * @param config persistence configuration
   * @param baseReducer reducer used to persist the state
   */
  // tslint:disable-next-line: strict-export-declare-modifiers
  export default function persistReducer<S, A extends Action = AnyAction>(config: PersistConfig<S>, baseReducer: Reducer<S, A>): Reducer<PersistedState<S>, A>;
}

declare module "redux-persist/lib/persistReducer" {
  export * from "redux-persist/es/persistReducer";
  export { default } from "redux-persist/es/persistReducer";
}
