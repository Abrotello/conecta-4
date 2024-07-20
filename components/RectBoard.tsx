import { appColors } from "@/Theme/appTheme";
import { 
  Dimensions, 
  StyleSheet, 
  View, 
  TouchableOpacity 
} from "react-native";
const { width, height } = Dimensions.get('window')

const rows = 6
const cols = 7

export default function RectBoard() {
  return (
    <View style={styles.board}>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {Array.from({ length: cols }).map((_, colIndex) => (
            <View key={colIndex} style={styles.cell}>
              <TouchableOpacity style={styles.circle} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: width / cols,
    height: (width / rows) * 0.85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.secondary,
  },
  circle: {
    width: (width / cols - 10),
    height: (width / cols - 10),
    backgroundColor: appColors.main,
    borderRadius: 50,
  },
});