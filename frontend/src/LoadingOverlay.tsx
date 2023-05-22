import {Puff} from "react-loader-spinner";
import useCommonProps from "./hooks";

export default function LoadingOverlay() {
  const {isLoading} = useCommonProps();

  return (
    <div className="loader-holder" style={isLoading ? {} : {visibility: "hidden"}}>
      <div className="overlay" />
      <Puff
        height="60"
        width="60"
        color="#3185FC"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={isLoading}
      />
    </div>
  )
}