import React, { useState, useEffect, useRef } from "react";
import {
    View,
    StyleSheet,
    Image,
    TextInput,
    Text,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { RadioButton } from "react-native-paper";
import { register, getUserUId } from "../../db/firebase/auth";
import { auth, provider } from "../../db/Config";
import { Addusers } from "../../db/firebase/users";
import { signInWithPopup } from "firebase/auth";
import PassIconV from "../../assets/UIUX/SignUp/fluent_eye-24-regular.png"
import PassIconInV from "../../assets/UIUX/SignIn/iconoir_eye-close.png";
import singup from "../../assets/UIUX/SignUp/SignUp2.png"

export default function SignUp({ navigation }) {
    const input1Ref = useRef();
    const input2Ref = useRef();
    const input3Ref = useRef();
    const input4Ref = useRef();
    const input5Ref = useRef();
    const input6Ref = useRef();

    const [checked, setChecked] = useState("first");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");

    const checkDate = () => {
        if (
            email.length === 0 &&
            password.length === 0 &&
            fName.length === 0 &&
            lName.length === 0 &&
            phone.length === 0 &&
            age.length === 0
        ) {
            alert("invalid information");
        } else if (email.length === 0) {
            alert("Please enter your email");
        } else if (!email.includes("@")) {
            alert("invalid email");
        } else if (password.length < 8) {
            alert("Password must be at least 8 characters");
        } else if (fName.length === 0) {
            alert("Please enter your first name");
        } else if (lName.length === 0) {
            alert("Please enter your last name");
        } else if (phone.length === 0) {
            alert("Please enter your phone");
        } else if (age.length === 0) {
            alert("Please enter your age");
        } else {
            console.log('here')
            register(email, password)
                .then(() => {
                    alert("Register Success!\nPlease Login");
                    navigation.navigate("SignIn");
                    getUserUId().then((id) => {
                        Addusers({
                            uid: id,
                            email: email,
                            password: password,
                            fName: fName,
                            lName: lName,
                            phone: phone,
                            gender: gender,
                            age: age,
                            job: "user",
                            image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                        });
                        
                    });
                })
                .catch((err) => {
                    {
                        if (
                            err.message.includes("already-in-use") &&
                            email !== "" &&
                            password !== ""
                        ) {
                            alert("The email is already exist");
                        } else if (err.message.includes("invalid-email") && email !== "") {
                            alert("The Email is incorrect");
                        }
                    }
                });
        }
    };

    const [icon, setIcon] = useState(true);
    const clickEye = () => {
        icon ? setIcon(false) : setIcon(true);
    };
    let imageSource = icon ? PassIconInV : PassIconV;

    return (

        <View style={styles.body}>
            <ImageBackground
                source={singup}
                style={styles.backgroundImage}
            >
                <View style={{marginTop:450 , marginBottom:60}}>
                <ScrollView contentContainerStyle={{ alignItems: "center" }}>

                    <View style={styles.signUpTextView}>
                        <Text style={styles.signUpText}>
                            Sign Up{"\n"}
                            <Text style={styles.accountText}>Already have account? </Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("SignIn");
                                }}
                            >
                                <Text style={styles.signInText}>Sign In</Text>
                            </TouchableOpacity>
                        </Text>
                    </View>

                    <View style={styles.flNameView}>
                        <View style={styles.fNameView}>
                            <Text style={styles.fName}>First name</Text>
                            <View style={styles.fNameInpView}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(val) => {
                                        setFName(val);
                                    }}
                                    ref={input1Ref}
                                    onSubmitEditing={() => input2Ref.current.focus()}
                                />
                            </View>
                        </View>
                        <View style={styles.lNameView}>
                            <Text style={styles.lName}>Last name</Text>
                            <View style={styles.lNameInpView}>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(val) => {
                                        setLName(val);
                                    }}
                                    ref={input2Ref}
                                    onSubmitEditing={() => input3Ref.current.focus()}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.emailView}>
                        <Text style={styles.inpText}>Email</Text>
                        <View style={styles.inpView}>
                            <TextInput
                                style={styles.input}
                                keyboardType="email-address"
                                onChangeText={(val) => {
                                    setEmail(val);
                                }}
                                ref={input3Ref}
                                onSubmitEditing={() => input4Ref.current.focus()}
                            />
                        </View>
                    </View>
                    <View style={styles.PassView}>
                        <Text style={styles.inpPassText}>Password</Text>
                        {icon ? (
                            <View style={styles.inpPassView}>
                                <TextInput
                                    style={styles.inputPass}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    secureTextEntry
                                    onChangeText={(val) => {
                                        setPassword(val);
                                    }}
                                    ref={input4Ref}
                                    onSubmitEditing={() => input5Ref.current.focus()}
                                />
                                <TouchableOpacity onPress={clickEye}>
                                    <Image
                                        source={imageSource}
                                        style={{ width: 14, height: 14, marginHorizontal: 5 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={styles.inpPassView}>
                                <TextInput
                                    style={styles.inputPass}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    textContentType="newPassword"
                                    onChangeText={(val) => {
                                        setPassword(val);
                                    }}
                                    ref={input4Ref}
                                    onSubmitEditing={() => input5Ref.current.focus()}
                                />
                                <TouchableOpacity onPress={clickEye}>
                                    <Image
                                        source={imageSource}
                                        style={{ width: 14, height: 14, marginHorizontal: 5 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>

                    <View style={styles.PhoneView}>
                        <Text style={styles.inpText}>Phone number</Text>
                        <View style={styles.inpView}>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"
                                onChangeText={(val) => {
                                    setPhone(val);
                                }}
                                ref={input5Ref}
                                onSubmitEditing={() => input6Ref.current.focus()}
                            />
                        </View>
                    </View>
                    <View style={styles.Gender}>
                        <Text style={styles.GenderTxt}>Gender</Text>
                        <View style={styles.FMView}>
                            <View style={styles.FemaleView}>
                                <Text style={styles.FemaleTxt}>Female</Text>
                                <RadioButton
                                    value="first"
                                    status={checked === "first" ? "checked" : "unchecked"}
                                    onPress={() => {
                                        setGender("Female"), setChecked("first");
                                    }}
                                    color="#FFA8C5"
                                    uncheckedColor="#FFA8C5"
                                />
                            </View>
                            <View style={styles.maleView}>
                                <Text style={styles.maleTxt}>Male</Text>
                                <RadioButton
                                    value="second"
                                    status={checked === "second" ? "checked" : "unchecked"}
                                    onPress={() => {
                                        setChecked("second"), setGender("male");
                                    }}
                                    color="#FFA8C5"
                                    uncheckedColor="#FFA8C5"
                                />
                            </View>
                        </View>
                    </View>

                    <View style={styles.PhoneView}>
                        <Text style={styles.inpText}>Age</Text>
                        <View style={styles.inpView}>
                            <TextInput
                                style={styles.input}
                                keyboardType="number-pad"
                                onChangeText={(val) => {
                                    setAge(val);
                                }}
                                ref={input6Ref}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={checkDate}>
                        <View style={styles.buttonview}>
                            <View style={styles.button2}>
                                <Text style={styles.button1}> Sign Up</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>

                <StatusBar style="auto" />
                </View>
            </ImageBackground>
        </View>

    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    LogoView: {
        alignItems: "center",
        marginTop: 76,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    Logo: {
        width: 156,
        height: 66,
    },
    signUpTextView: {
        marginTop: 16,
    },
    signUpText: {
        fontSize: 20,
        fontWeight: "500",
        fontFamily: "Montserrat",
        color: "#0B3B63",
        textAlign: "center",
    },
    accountText: {
        fontSize: 18,
        fontFamily: "Montserrat",
        color: "#0B3B63",
        textAlign: "center",
        opacity: 0.65,
    },
    signInText: {
        fontSize: 18,
        fontWeight: "500",
        fontFamily: "Montserrat",
        color: "#FFA8C5",
        textDecorationLine: "underline",
    },
    emailView: {
        marginTop: 32,
    },
    inpText: {
        marginHorizontal: 16,
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        opacity: 0.65,
    },
    inpView: {
        backgroundColor: "#FFFFFF",
        marginTop: 5,
        marginHorizontal: 16,
        borderRadius: 5,
        alignItems: "center",
    },
    input: {
        backgroundColor: "#FFFFFF",
        height: 48,
        borderRadius: 5,
        width: 328,
        borderWidth: 1,
        borderColor: "#FFA8C5",
        paddingHorizontal: 10,
        color: "#0B3B63",
    },
    PassView: {
        marginTop: 32,
    },
    inpPassView: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffff",
        borderColor: "#FFA8C5",
        borderWidth: 1,
        width: 328,
        height: 48,
        borderRadius: 5,
    },
    inpPassText: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        opacity: 0.65,
        marginBottom: 5,
    },
    inputPass: {
        width: 300,
        height: 42,
        paddingHorizontal: 10,
        color: "#0B3B63",
    },
    flNameView: {
        marginTop: 32,
    },
    fName: {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        opacity: 0.65,
    },
    fNameInp: {
        backgroundColor: "#FFFFFF",
        width: 156,
        height: 48,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA8C5",
        paddingHorizontal: 10,
        color: "#0B3B63",
    },
    lNameView: {
        marginTop: 32,
    },
    lName: {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        opacity: 0.65,
    },
    lNameInp: {
        backgroundColor: "#FFFFFF",
        width: 156,
        height: 48,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#FFA8C5",
        paddingHorizontal: 10,
        color: "#0B3B63",
    },
    PhoneView: {
        marginTop: 32,
    },
    Gender: {
        marginHorizontal: 16,
        marginTop: 32,
    },
    GenderTxt: {
        marginBottom: 5,
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        opacity: 0.65,
    },
    FMView: {
        flexDirection: "row",
    },
    FemaleView: {
        flexDirection: "row",
        alignItems: "center",
        width: 156,
        height: 48,
        borderWidth: 1,
        borderColor: "#FFA8C5",
        borderRadius: 5,
        marginRight: 16,
    },
    FemaleTxt: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        marginLeft: 14,
        marginRight: 59,
    },
    maleView: {
        flexDirection: "row",
        alignItems: "center",
        width: 156,
        height: 48,
        borderWidth: 1,
        borderColor: "#FFA8C5",
        borderRadius: 5,
    },
    maleTxt: {
        fontSize: 14,
        fontFamily: "Montserrat",
        color: "#0B3B63A6",
        fontWeight: "500",
        marginLeft: 14,
        marginRight: 77,
    },
    buttonview: {
        marginTop: 30,
        borderRadius: 5,
        width: 328,
        height: 48,
        backgroundColor: "#FFA8C5",
        color: "#ffff",
    },
    button: {
        borderRadius: 5,
        width: 328,
        height: 48,
        backgroundColor: "#FFA8C5",
        color: "#ffff",
    },
    button1: {
        fontFamily: "Montserrat",
        fontWeight: 500,
        fontSize: 15,
        color: "#ffff",
    },
    button2: {
        alignItems: "center",
        marginTop: 15,
    },
    orView: {
        marginTop: 32,
        alignItems: "center",
    },
    or: {
        width: 328,
        height: 49.51,
    },
    SingUpWithGoogleView: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 49.49,
        marginTop: 30,
    },
    touch: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        width: 328,
        height: 48,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#0B3B63",
    },
    GoogleIcon: {
        marginRight: 16,
        width: 16,
        height: 16,
    },
    GoogleText: {
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat",
        color: "#0B3B63",
        textAlign: "center",
        marginVertical: 10,
    },
});
