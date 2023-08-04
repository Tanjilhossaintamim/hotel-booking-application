import { useDispatch } from "react-redux";
import { add_catagory, add_rooms } from "./store/homeSlice";
import fatchDataFromApi from "./components/utils/api";
import MainComponent from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {checkLogin} from "./store/loginSlice"

function App() {
  const dispatch = useDispatch();
  dispatch(checkLogin())
  fatchDataFromApi("/catagories").then((res) => {
    dispatch(add_catagory(res));
  });
  fatchDataFromApi("/rooms").then((res) => {
    dispatch(add_rooms(res));
  });

  return (
    <>
      <BrowserRouter>
        <MainComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
