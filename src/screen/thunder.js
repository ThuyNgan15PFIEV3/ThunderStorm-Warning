import React, {useState, useCallback, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default function Thunder() {
  const backgroundColorThunder = ['#EE2A7B', '#9E1F63'];
  const backgroundColorCloudy = ['#8DC63F', '#009444'];

  const [currentDay, setCurrentDay] = useState(new Date());
  const [temperature, setTemperature] = useState('21 độ C');
  const [status, setStatus] = useState(temperature === '21 độ C' ?'Thunder':'Cloudy');
  const [location, setLocation] = useState('Surakarta, INA');
  const [backgroundColor, setBackgroundColor] = useState(backgroundColorThunder
  );

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const day = days[currentDay.getDay()];

  useEffect(() => {
    if (status === 'Thunder') setBackgroundColor(backgroundColorThunder);
    if (status === 'Cloudy') setBackgroundColor(backgroundColorCloudy);
  }, [status]);
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.8]}
        colors={backgroundColor}
        style={styles.linearGradient}>
        <View>
          <Text style={styles.day}>{day}</Text>
          <Text style={styles.currentTime}>
            {currentDay.toString().slice(15, 21)}
          </Text>
        </View>
        {temperature === '16 độ C' && (
          <Image
            source={require('../assets/ic_cloud.png')}
            style={styles.imgCloud}
          />
        )}
        {temperature === '21 độ C' && (
          <Image
            source={require('../assets/ic_thunder.png')}
            style={styles.imgThunder}
          />
        )}
        <View style={styles.containerWeather}>
          <Text
            style={styles.temp}
            onPress={() => {
              if (temperature === '21 độ C') {
                setTemperature('16 độ C');
                setStatus('Cloudy');
              }
              if (temperature === '16 độ C') {
                setTemperature('21 độ C');
                setStatus('Thunder');
              }
            }}>
            {temperature}
          </Text>
          <View
            style={{
              borderStartWidth: 2,
              borderStartColor: 'white',
              marginHorizontal: 5,
            }}></View>
          <Text style={styles.temp}>{status}</Text>
        </View>
        <View style={styles.containerLocation}>
          <Text style={styles.location}>{location}</Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {fontSize: 23, color: 'white'},
  containerLocation: {
    paddingVertical: 10,
    alignSelf: 'flex-end',
  },
  temp: {fontSize: 40, color: 'white'},
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  day: {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: 40,
    marginTop: 20,
    color: 'white',
  },
  currentTime: {
    fontSize: 50,
    marginVertical: 5,
    color: 'white',
  },
  imgThunder: {
    width: 200,
    height: 167,
    marginHorizontal: 20,
    alignSelf: 'center',
    marginVertical: 40,
  },
  imgCloud: {
    width: 220,
    height: 160,
    marginHorizontal: 20,
    alignSelf: 'center',
    marginVertical: 40,
  },
  containerWeather: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignContent: 'center',
  },
  linearGradient: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    padding: 30,
    flex: 1,
    borderRadius: 5,
  },
  title: {alignItems: 'center', marginBottom: 30},
  label: {
    fontSize: 20,
    marginTop: 10,
    flex: 2,
  },
  textInput: {
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
    paddingBottom: 0,
    marginBottom: 10,
    fontSize: 20,
    width: Dimensions.get('window').width - 170,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#004080',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
