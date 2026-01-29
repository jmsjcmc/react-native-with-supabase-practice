import { AppButton } from "@/components/ui/appButton";
import { AppInput } from "@/components/ui/appInput";
import { useAuth } from "@/hooks/useAuth"
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
   <View style={styles.container}>
    <Text style={styles.title}>Welcome Back</Text>
    <AppInput placeholder="Email" value={email} onChangeText={setEmail}/>
    <AppInput
    placeholder="Password"
    value={password}
    onChangeText={setPassword}
    secureTextEntry/>
    <AppButton title="Login" onPress={() => login(email, password)}/>
    <Link href={'/(auth)/register'}>Create an account</Link>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24
  },
  link: {
    marginTop: 16,
    textAlign: 'center'
  }
})
