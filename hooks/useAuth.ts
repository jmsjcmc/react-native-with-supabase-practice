import { router } from "expo-router";
import { useState } from "react";

export function useAuth() {
    const [loading, setLoading] = useState(false);

    const login = async (email: string, password: string) => {
        setLoading(true);
        try {
            await new Promise(res => setTimeout(res, 800));
            router.replace('/(app)/home');
        } finally {
            setLoading(false);
        }
    };

    const register = async (email: string, password: string) => {
        setLoading(true);
        try{
            await new Promise(res => setTimeout(res, 800));
            router.replace('/(app)/home');
        } finally {
            setLoading(false);
        }
    };
    return { login, register, loading };
}