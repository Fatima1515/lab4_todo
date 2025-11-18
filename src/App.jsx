import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function App() {
const [tasks, setTasks] = React.useState([]);

const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
};

return (
    <View style={styles.container}>
    <Text style={styles.title}>My To-Do List</Text>
    <ToDoForm addTask={addTask} />
    <ToDoList tasks={tasks} />
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
});
