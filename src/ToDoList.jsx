import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {
return (
    <View>
    {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
        {task}
        </Text>
    ))}
    </View>
);
}

const styles = StyleSheet.create({
task: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
},
});
