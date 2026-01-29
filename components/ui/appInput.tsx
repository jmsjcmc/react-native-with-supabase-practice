import { StyleSheet, TextInput } from "react-native";

interface AppInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

export const AppInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}: AppInputProps) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      style={styles.input}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
});
