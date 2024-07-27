import React from "react";
import { View, Text } from "react-native";
import styles from './styles';
import loading from "./loading";

const Second = loading(() => (
    <View style={styles.container}>
        <Text>This is the Second Screen</Text>
    </View>
));

export default Second;