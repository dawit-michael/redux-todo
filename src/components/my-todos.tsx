import { ReactElement } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { selectTodos, toggleTodo } from "../features/slices/todoSlice";
import { RootState } from "../app/store";
interface Props {}
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
function MyTodos({}: Props): ReactElement {
  // use dispatcher to manage state and actions
  const dispatch = useDispatch();
  //   selectes all data in store
  const todos = useTypedSelector(selectTodos);
  return (
    //   container
    <div className="border  mt-14 w-1/4 rounded-lg px-6 py-6 ">
      {/*  list of tasks */}
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className="bg-gray-50 rounded-lg text-xl capitalize flex justify-between items-center py-3 px-8 mb-6 hover:shadow-xl"
            >
              <span> {todo.title}</span>
              <input
                key={todo.id}
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyTodos;
