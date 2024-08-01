import { StyleSheet, Text, View,ScrollView,Image,Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from "../../constants"
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
import { signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext();
  const [isSubmitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

const submit = async () => {
  if (form.email === "" || form.password === "") {
    Alert.alert("Error", "Please fill in all fields");
  }

  setSubmitting(true);

  try {
    await signIn(form.email, form.password);
    const result = await getCurrentUser();
    setUser(result);
    setIsLogged(true);

    Alert.alert("Success", "User signed in successfully");
    router.replace("/home");
  } catch (error) {
    Alert.alert("Error", error.message);
  } finally {
    setSubmitting(false);
  }
};

  return (
    <SafeAreaView  className="bg-primary h-full" >
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6" >
          <View className="flex-row items-center justify-center">
            <Image source={images.logo} resizeMode='contain' className='w-[100px] h-[84px]' />
            <Text className="text-white text-5xl" >Datapirates</Text>
          </View>
          <Text className='text-white text-2xl mt-10 text-semibold font-psemibold' >Log in to Datapirates</Text>
          <FormField title='Email' value={form.email} 
          handleChangeText = {(e) =>setForm({...form,email:e})}
          otherStyles="mt-7"
          keyboardType = "email-address" />
          <FormField title='Password' value={form.password} 
          handleChangeText = {(e) =>setForm({...form,password:e})}
          otherStyles="mt-7"
           />
           <CustomButton 
           title="Login" 
           handlePress={submit}
           containerStyles="mt-7"
           isLoading={isSubmitting} />

           <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-blue-50 text-lg font-pregular">Don't have an account?</Text>
            <Link href="/sign-up" className='text-lg font-psemibold text-secondary-100' >Sign up</Link>
           </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

