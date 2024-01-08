import React from "react";

import AnimatedSplash from "react-native-animated-splash-screen";

const Loading = () => {
    return(
        <AnimatedSplash logoImage={require("../../../assets/loading.json")}/>
    )
}

export default Loading;