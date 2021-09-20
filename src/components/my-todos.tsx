import { ReactElement } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { selectTodos, toggleTodo } from "../features/slices/todoSlice";
import { RootState } from "../app/store";
interface Props {}
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
function MyTodos({}: Props): ReactElement {
  const dispatch = useDispatch();
  const todos = useTypedSelector(selectTodos);
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default MyTodos;
