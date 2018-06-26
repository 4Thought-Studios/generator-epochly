//@flow
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {};
type State = {};
/**
* Description
*/
class <%= componentName %> extends Component <Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {};
  }

  componentDidMount(){};
  componentWillReceiveProps(nextProps: Props){};
  componentDidUpdate(){};
  componentWillUnmount(){};

  render(){
    return(
      <View style={styles.container}></View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});
export default <%= componentName %>;
