import { appColors } from "@/Theme/appTheme";
import { 
  Dimensions, 
  StyleSheet, 
  View, 
  TouchableOpacity 
} from "react-native";

const { width, height } = Dimensions.get('window')

const rows = 6;
const cols = 7;

export default function RectBoard() {

  return (
    <View style={styles.board}>
      {Array.from({ length: cols }).map((_, colIndex) => (
        <TouchableOpacity 
          key={colIndex}
          style={styles.column} 
          activeOpacity={0.6} 
        >
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <View key={rowIndex} style={styles.cell}>
              <View style={styles.circle} />
            </View>
          ))}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  column: {
    flexDirection: 'column',
  },
  cell: {
    width: width / cols,
    height: (width / rows),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.main,
  },
  circle: {
    width: (width / cols - 10),
    height: (width / cols - 10),
    backgroundColor: appColors.secondary,
    borderRadius: 50,
  },
});

