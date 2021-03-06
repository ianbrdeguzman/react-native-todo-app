import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from '@react-navigation/native-stack';
import { RootStackParamList, routes } from '../routes';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { TodoForm } from '../components/TodoForm';
import { changeInput, updateTodo } from '../redux/features/todoSlice';

export type EditTodoProps = NativeStackScreenProps<
  RootStackParamList,
  typeof routes.edit
>;

export default function EditTodo({ route }: EditTodoProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const { todoId } = route.params;
  const { todos, text } = useAppSelector((state) => state.todo);
  const [todo] = todos.filter((todo) => todo.id === todoId);

  const handleUpdateOnPress = () => {
    if (text) dispatch(updateTodo({ id: todo.id, title: text }));
    navigation.navigate(routes.list, {});
  };

  return (
    <View style={{ flex: 1 }}>
      <TodoForm
        todo={todo}
        value={text}
        onChangeText={(text) => dispatch(changeInput(text))}
        onPress={handleUpdateOnPress}
      />
    </View>
  );
}
