import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
    swipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    editContainer: {
        width: '100%',
        height: '85%',
        backgroundColor: 'blue',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteContainer: {
        width: '100%',
        height: '85%',
        backgroundColor: 'red',
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const RightSwipeActions = () => {
    return (
        <View style={styles.swipeContainer}>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.editContainer}>
                    <Ionicons name="pencil" size={30} />
                    <Text>Edit</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.deleteContainer}>
                    <Ionicons name="trash-outline" size={30} />
                    <Text>Delete</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const EditableTextInput = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <Swipeable
            renderRightActions={RightSwipeActions}
            onSwipeableRightOpen={() => {}}
        >
            <View style={styles.container}>
                <Text>{props.text}</Text>
            </View>
        </Swipeable>
                // {
                //     !isEditing ? (
                //         <View style={styles.container}>
                //             <View>
                //                 <Text>{props.text}</Text>
                //             </View>
                //         </View>
                //     ) : (
                //         <TextInput
                //             style={styles.input}
                //             onChangeText={props.onChangeText}
                //             value={props.text}
                //             placeholder={props.placeholder}
                //             onFocus={() => {}}
                //             onBlur={() => {}}
                //             onSubmitEditing={props.onSubmit}
                //         />
                //     )
                // }
    )
}

export default EditableTextInput;