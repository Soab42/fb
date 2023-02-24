import { Provider } from "react-redux";

import store from "./redux/store";
import DataForm from "./components/DataForm";
import PreviewData from "./components/PreviewData";

export default function App() {
  return (
    <Provider store={store}>
      <header id="header">
        <div class="container">
          <img src="./img/lws-logo.svg" alt="logo" class="logo" />
          <div class="flex items-center">
            <a class="text-white min-w-[50px] font-medium" href="#">
              Home
            </a>
            <button class="log-btn btn">Login</button>
          </div>
        </div>
      </header>
      {/* data input form  */}
      <DataForm />
      {/* data table view   */}
      <PreviewData />
    </Provider>
  );
}
