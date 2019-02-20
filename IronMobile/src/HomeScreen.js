import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import styles from "./styles"

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.curWOCont}>
          <View style={styles.contHeaderWrap}>
            <Text style={styles.contHeader}> Workout </Text>
          </View>
          <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            style={styles.listCont}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          />
        </View>
        <View style={styles.wOEnterCont}>
        <Text style={styles.contHeader}> Enter Reps </Text>
        <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            style={styles.listCont}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>
                                    }
          />
        </View>
      </View>
    );
  }
}

module.exports = HomeScreen;