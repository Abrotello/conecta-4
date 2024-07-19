import { appColors } from "@/Theme/appTheme";
import React, { useState } from "react";
import { 
    Modal,
    StyleSheet,
    View,
    Text,
    Dimensions,
    Pressable
} from "react-native";

interface AlertProps {
    visible: boolean,
    message: string,
    onClose?: ()=> void,
}

const { width } = Dimensions.get('window')

export default function Alert({ message, visible, onClose }: AlertProps) {

    const [modalVisible, setModalVisible] = useState<boolean>(false)

    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType='slide'
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalTitleContainer}>
                        <Text style={styles.modalTitle}>ERROR</Text>
                    </View>
                    <View style={styles.modalButtonTextContainer}>
                        <Text style={styles.modalMessage}>{message}</Text>
                        <Pressable style={styles.modalButton} onPress={onClose}>
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )

}

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalContainer: {
        width: width*0.75,
        height: width*0.36,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        alignItems: 'center',
        overflow: 'hidden'
    },
    modalTitleContainer: {
        width: '100%',
        padding: 5,
        marginBottom: 5,
        backgroundColor: '#BC2C2C',
        borderBottomWidth: 1,
    },
    modalTitle: {
        letterSpacing: 2,
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 22,
        textAlign: 'center',
    },
    modalButtonTextContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    modalMessage: {
        fontSize: 16,
    },
    modalButton: {
        alignItems: 'center',
        width: '40%',
        padding: 10,
        borderRadius: 10,
        backgroundColor: appColors.main
    },
    modalButtonText: {
        color: '#FFF',
        fontSize: 16,
    }
})