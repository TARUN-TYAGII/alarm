import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"white",flex:1}}>
       <Text style={{color:"black", fontSize:16 , fontWeight:800}}>FUCKING ALARM</Text>
    </View>
  );
}


