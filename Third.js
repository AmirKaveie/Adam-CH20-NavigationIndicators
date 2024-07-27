import React from "react";
import { View, Text } from 'react-native';
import styles from './styles';
import loading from "./loading";

const Third = loading(() => (
    <View style={styles.container}>
        <Text>This is the Third Screen</Text>
    </View>
));

export default Third;