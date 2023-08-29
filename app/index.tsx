// import { Text } from 'react-native';
//
// const Page = () => {
//     return <Text>HOLA ANDY</Text>;
// }
// export default Page


import { Text } from 'react-native';
import {Redirect} from "expo-router";

const StartPage = () => {
    return <Redirect href="/home"/>;
}
export default StartPage



