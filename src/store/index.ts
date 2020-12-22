import { createSelectorHook, useDispatch as _useDispatch } from "react-redux";
import { combineReducers, createStore } from "redux";
import tasksReducer from "./tasks/tasksReducer";
import uiReducer from "./ui/uiReducer";

const store = createStore<IRootState, any, any, any>(
  combineReducers({
    data: tasksReducer,
    ui: uiReducer,
  })
);

function useDispatch(): DispatchType {
  const dispatch = _useDispatch();
  return (action: TaskAction) => dispatch(action);
}

const _useSelector = createSelectorHook<IRootState>();

function useSelector<T>(fn: (store: IRootState) => T): T {
  return fn(_useSelector((x) => x));
}

export { store, useDispatch, useSelector };
