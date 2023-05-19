import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';
import React, { useState } from 'react';
import BouncyCheckbox from "react-native-bouncy-checkbox";


type Props = {
    descricao: string;
    onRemove: () => void;
}


export function Tarefa({descricao, onRemove }: Props) {
    const [checkboxState, setCheckboxState] = useState(false);
    
    return (

        <View style={styles.container}>

            <BouncyCheckbox
                style={{ marginLeft: 16 , width: 250}}
                fillColor='#595abd'
                size={18}
                isChecked={checkboxState}
                text={descricao}           
                textStyle={styles.descricao}
                disableBuiltInState
                onPress={() => setCheckboxState(!checkboxState)}                
            />

            

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Icon name="trash" size={24} color="#757575" style={styles.lixo} />
            </TouchableOpacity>
        </View>

    )
}