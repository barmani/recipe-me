import { useState, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import RecipeInput from "./RecipeInput";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#eee'
    },
    swipeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
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
    },
})


const EditableTextInput = (props) => {

    const RightSwipeActions = () => {
        return (
            <View style={styles.swipeContainer}>
                <TouchableOpacity onPress={editPressed}>
                    <View style={styles.editContainer}>
                        <Ionicons name="pencil" size={30} />
                        <Text>Edit</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onDelete(props.text)}>
                    <View style={styles.deleteContainer}>
                        <Ionicons name="trash-outline" size={30} />
                        <Text>Delete</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const [isEditing, setIsEditing] = useState(false)
    const [editedText, setEditedText] = useState(props.text)

    const swipeRef = useRef();

    const closeSwipeable = () => {
        swipeRef?.current?.close()
    }

    const editPressed = () => {
        closeSwipeable()
        setIsEditing(true)
    }

    const submitEdit = () => {
        props.onEditSubmit(props.text, editedText)
        setIsEditing(false)
    }

    if (!isEditing) {
        return (
            <Swipeable
                ref={swipeRef}
                renderRightActions={RightSwipeActions}
                onSwipeableRightOpen={() => setIsEditing(false)}
                rightThreshold={50}
                overshootFriction={5}
            >
                <View style={styles.container}>
                    <Text>{props.text}</Text>
                </View>
            </Swipeable>
        )
    } else {
        return (
            <RecipeInput
                onChangeText={setEditedText}
                value={editedText}
                onSubmit={submitEdit}
            />
        )
    }
}

export default EditableTextInput;