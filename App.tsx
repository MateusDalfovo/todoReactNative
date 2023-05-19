import { StatusBar } from 'expo-status-bar';
import Home from './src/Screens/Home';

export default function App() {
  return (
    <>
    
    <StatusBar 
    backgroundColor='transparent'
    translucent
    />

    <Home/>

    </>
  );
}

