import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store";
const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxProvider;
