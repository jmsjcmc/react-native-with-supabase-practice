import { supabase } from "../supabase";

export type RegisterRequest = {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

export async function registerUser(input: RegisterRequest) {
    const { email, password, firstName, lastName, phoneNumber} = input;

    const { data: signUpRequest, error: signUpError } = 
    await supabase.auth.signUp({
        email, password
    });

    if (signUpError) throw signUpError;
    if (!signUpRequest.user) throw new Error('User creation failded');

    const { error: profileError } = await supabase
    .from('profiles')
    .insert({
        id: signUpRequest.user?.id,
        email,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber ?? null,
        role: 'user'
    });

    if (profileError) throw profileError;

    return signUpRequest.user;
}