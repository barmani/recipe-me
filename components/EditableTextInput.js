import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'row'
    }
})

const EditableTextInput = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <View>
        {
            !isEditing ? (
                <View style={styles.container}>
                    <View style={{width: '70%'}}>
                        <Text>{props.text}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setIsEditing(true)}>
                        <Ionicons name="pencil" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={props.handleDelete}>
                        <Ionicons name="trash-outline" size={30} />
                    </TouchableOpacity>
                </View>
            ) : (
                <TextInput
                    style={styles.input}
                    onChangeText={props.onChangeText}
                    value={props.text}
                    placeholder={props.placeholder}
                    onFocus={() => {}}
                    onBlur={() => {}}
                    onSubmitEditing={props.onSubmit}
                />
            )
        }
        </View>
    )
}

export default EditableTextInput;