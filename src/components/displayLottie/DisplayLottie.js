import React, {Suspense} from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = (props) => {
  const animationData = props.animationData;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Lottie
          options={defaultOptions}
            isClickToPauseDisabled={true}
        />
      </Suspense>
    </div>
  );
}

export default DisplayLottie;