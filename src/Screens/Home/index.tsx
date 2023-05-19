import { styles } from './styles';
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert, Image } from 'react-native';
import {Tarefa} from '../../Components/Tarefa';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Home() {

    const [tarefas, setTarefa] = useState<string[]>([]);
    const [descricaoTarefa, setNomeTarefa] = useState('');
    let done: number = 0;

    function handleTarefaAdd() {
        setTarefa(prevState => [...prevState, descricaoTarefa]);
        setNomeTarefa('');
    }


    function handleTarefaRemove(descricao: string) {

        return Alert.alert("Remover", `Deseja remover a tarefa??`, [
            {
                text: 'Sim',
                onPress: () => {
                    done++
                    setTarefa(prevState => prevState.filter(tarefa => tarefa !== descricao))
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }]);
    }







    return (
        <>
            <View style={styles.container}>

                <View style={styles.fundo}>

                    <Image style={styles.logo} source={require('../../../assets/logo_desafio.png')} />

                    <View style={styles.form}>

                        <TextInput
                            style={styles.input}
                            placeholder="Adicione uma nova tarefa"
                            placeholderTextColor="#6B6B6B"
                            onChangeText={setNomeTarefa}
                            value={descricaoTarefa}
                        />

                        <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
                            <Icon name="plus" size={30} color="white" style={{ height: 30 }} />
                        </TouchableOpacity>

                    </View>

                </View>

                <View>

                    <View style={styles.counter}>
                        <Text style={styles.textCriadas}>Criadas</Text>
                        <TextInput style={styles.counterDisplay} editable={false}>{tarefas.length}</TextInput>
                        <Text style={styles.textDone}>Concluídas</Text>
                        <TextInput style={styles.counterDisplay} editable={false}>{done}</TextInput>
                    </View>

                </View>

                <FlatList

                    data={tarefas}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Tarefa
                            key={item}
                            descricao={item}
                            onRemove={() => handleTarefaRemove(item)}
                        />
                    )}

                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.linha}></View>

                            <Image style={styles.icone} source={require('../../../assets/iconee.png')} />

                            <Text style={styles.listEmptyTextCima}> Voce ainda não tem tarefas cadastradas </Text>

                            <Text style={styles.listEmptyTextBaixo}>  Crie tarefas e organize seus itens a fazer </Text>
                        </>

                    )}

                />

            </View>

        </>
    )
}
