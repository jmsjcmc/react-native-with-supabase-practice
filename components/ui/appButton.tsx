import { Pressable, StyleSheet, Text } from "react-native";

interface AppButtonProps {
    title: string;
    onPress: () => void;
}

export const AppButton = ({ title, onPress }: AppButtonProps) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        height: 48,
        backgroundColor: '#111',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8
    },
    text: {
        color: '#fff',
        fontWeight: '600'
    }
})