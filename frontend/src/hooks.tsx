import {useContext} from "react";
import {AppContext} from "./Context";

export default function useCommonProps() {
  const context = useContext(AppContext);

  return context;
}