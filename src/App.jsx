import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToDoForm from "./ToDoForm";

export default function App() {
const [tasks, setTasks] = React.useState([]);

const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
};

return (
    <View style={styles.container}>
    <Text style={styles.title}>My To-Do List</Text>

    <ToDoForm addTask={addTask} />

    {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
        {task}
        </Text>
    ))}
    </View>
);
}

const styles = StyleSheet.create({
container: {
    padding: 20,
},
title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
},
task: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
},
});
