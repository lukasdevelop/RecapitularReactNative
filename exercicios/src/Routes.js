import React from 'react'
import { Text} from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Mult'
import Contador from './componentes/Contador'
import Plataforma from './componentes/Plataforma'
import ValidarProps from './componentes/ValidarProps'

const Drawer = createDrawerNavigator();

export default function Routes() {

    return (
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Simples">
            <Drawer.Screen name="Simples">
                {props => <Simples {...props} texto="Texto Simples"></Simples>}
            </Drawer.Screen>
            <Drawer.Screen name="ParImpar" component={ParImpar} />
            <Drawer.Screen name="Inverter">
                {props => <Inverter {...props} texto='Teste' />}
            </Drawer.Screen>
            <Drawer.Screen name="MegaSena" component={MegaSena} />
            <Drawer.Screen name="Contador" component={Contador}></Drawer.Screen>
            <Drawer.Screen name="Plataforma" component={Plataforma}></Drawer.Screen>
            <Drawer.Screen name="ValidarProps">
                {props => <ValidarProps {...props} ano={18} />} 
            </Drawer.Screen>
          </Drawer.Navigator>
        </NavigationContainer>
      );
}
