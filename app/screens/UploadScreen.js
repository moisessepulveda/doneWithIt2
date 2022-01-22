import React from "react";
import {View, StyleSheet, Modal} from "react-native";
import * as Progress from 'react-native-progress';
import LottieView from "lottie-react-native";
import colors from "../config/colors";


function UploadScreen({onDone, progress = 1, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress > 1 ?
                    <Progress.Bar progress={progress} width={200}  color={colors.primary} />
                    : <LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        style={styles.animation}
                        source={require('../assets/animations/done.json')} /> }
            </View>
        </Modal>
    )
}

export default UploadScreen

const styles = StyleSheet.create({
    animation: {
      width: 150
    },
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    }
})


