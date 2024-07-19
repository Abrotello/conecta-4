import { appColors } from "@/Theme/appTheme";
import { 
  Dimensions, 
  StyleSheet, 
  View, 
  TouchableOpacity 
} from "react-native";
const { width } = Dimensions.get('window')

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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: appColors.main,
    gap: 1,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: width / cols,
    height: (width / rows) + 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.secondary,
  },
  circle: {
    width: (width / cols - 5),
    height: (width / cols - 5),
    backgroundColor: appColors.main,
    borderRadius: (width / cols) * 0.5,
  },
});