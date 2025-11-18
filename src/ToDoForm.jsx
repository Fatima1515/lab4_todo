import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

export default function ToDoForm({ addTask }) {
const [taskText, setTaskText] = useState('');

const submitTask = () => {
    addTask(taskText);
    setTaskText('');
};

return (
    <View>
    <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
    />
    <Button title="Add Task" onPress={submitTask} />
    </View>
);
}

const styles = StyleSheet.create({
input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
},
});
