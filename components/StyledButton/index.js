import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {

    // const type = props.type;
    // const onPress = props.onPress;
    // const content = props.content;

    // destructure method to do it in one line 
    // remember to keep all the variable name to be the same
    const { type, onPress, content } = props;
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFF' : '#171A20';

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor:  backgroundColor}]}
                onPress={onPress}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;