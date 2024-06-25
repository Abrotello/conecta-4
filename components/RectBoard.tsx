import { appColors } from "@/Theme/appTheme";
import { AppOwnership } from "expo-constants";
import { Dimensions, StyleSheet, View } from "react-native";

const { width } = Dimensions.get('window')


export default function RectBoard() {
    return (
        <View style={styles.square}>
            <View style={styles.circle} />
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
      width: width / 2,
      height: width / 2,
      backgroundColor: appColors.secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circle: {
      width: width / 3,
      height: width / 3,
      backgroundColor: appColors.main,
      borderRadius: width / 3 / 2,
    },
  });