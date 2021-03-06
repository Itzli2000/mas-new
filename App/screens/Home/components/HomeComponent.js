import React, { Component } from 'react';
import AnimatedBar from "react-native-animated-bar";
import { FullCardComponent, UserCard } from '@bm-mas-global-components';
import ProgressCircle from 'react-native-progress-circle';
import { HomeStyles as styles } from './../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity } from 'react-native';


const tasks=[
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'percent',
    description: '5 visitas de 10 por día',
    percentage: 50,
  },
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'percent',
    description: '7 visitas de 10 por día',
    percentage: 70,
  },
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'percent',
    description: '10 visitas de 10 por día',
    percentage: 100,
  },
 ]
const pending=[
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'map-marker',
    description: '5 visitas de 10 por día',
    percentage: 50,
    description2: '5 visitas de 10 por día',
    percentage2: 50,
    description3: '5 visitas de 10 por día',
    percentage3: 50,
  },
 ]

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    progress: 0,
    };
  }
 
  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.4) return clearInterval(interval);
 
      this.setState(state => {
        return {
          progress: state.progress + 0.1,
        };
      });
    }, 100);
  }

  renderTaskList = (data) => { //Render para grafica circular
    return  data.map((item, index) => {
      return (
          <FullCardComponent
            key={index} 
            icon={item.icon}
            title={item.key}
            startColor={styles.userCardStop.color}
            stopColor={styles.userCardStart.color}
          >
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnLeft]}>
              <View style={styles.fullCardTitleContainer}>
                <Icon style={[styles.cardIconStyles]} name={item.icon} /> 
                <Text h4 style={styles.cardTitleStyles}>{item.key}</Text>
              </View>
               <Text style={styles.homeCardBody}>{'  '}{item.description}</Text>
            </View>
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnRight]}>
              <ProgressCircle
                percent={item.percentage}
                radius={styles.screenWidth.width <= 600 ? 45 : 50}
                borderWidth={10}
                color="#3399FF" 
                shadowColor="#cacbce"
                bgColor="#fff"
              >
                <Text style={{ fontSize: 26, fontFamily: 'gotham-bold' }}>{item.percentage}</Text>
              </ProgressCircle>
            </View>           
          </FullCardComponent>
        )
    });
  }

  renderPendingList = (data) => {  //Render para listados
    return  data.map((item, index) => {
      return (
          <FullCardComponent
            key={index} 
            type={'column'}
            icon={item.icon}
            title={item.key}
            startColor={styles.orangeStart.color}
            stopColor={styles.orangeStop.color}
          >
              <View style={[styles.fullCardTitleContainer]}>
                <Icon style={[styles.cardIconStyles,{paddingLeft:10, marginLeft: 15}]} name={item.icon} /> 
                <Text h4 style={styles.cardTitleStyles}>{item.key}</Text>
              </View>
            <View style={{flexDirection:'row', paddingLeft:30}}>
              <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnLeft]}>
               <Text style={styles.homeCardBody}>{'  '}{item.description}</Text>
               <Text style={styles.homeCardBody}>{'  '}{item.description2}</Text>
               <Text style={styles.homeCardBody}>{'  '}{item.description3}</Text>
            </View>
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnRight,{paddingRight:10}]}>
              <AnimatedBar
                progress={item.percentage}
                height={10}
                borderColor="#DDD"
                fillColor="tomato"
                barColor={styles.white.color}
                borderRadius={5}
              />
              <AnimatedBar
                progress={item.percentage2}
                height={10}
                borderColor="#DDD"
                fillColor="tomato"
                barColor={styles.white.color}
                borderRadius={5}
              />
              <AnimatedBar
                progress={item.percentage3}
                height={10}
                borderColor="#DDD"
                fillColor="tomato"
                barColor={styles.white.color}
                borderRadius={5}
              />
            </View> 
            </View>          
          </FullCardComponent>
        )
    });
  }

  renderPendings = () => {  //Render para pendientes
    return (
      <FullCardComponent
        type={'column'}
        startColor={styles.greenStart.color}
        stopColor={styles.greenStop.color}
      >
        <View style={[styles.fullCardTitleContainer,{marginTop: 10, marginLeft: 15}]}>
          <Icon style={[styles.cardIconStyles,{paddingLeft:10}]} name={'clock-o'} /> 
          <Text h4 style={styles.cardTitleStyles}>Pendientes</Text>
        </View>
        <View style={{flexDirection:'row', paddingLeft:30}}>
          <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnLeft]}>
           <Text style={styles.homeCardBody}>Tareas (3 de 10)</Text>
          </View>
          <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnRight,{paddingRight:10}]}>
            <TouchableOpacity activeOpacity = { .5 } onPress={()=>{console.log('Logged')}}>  
              <View 
               style={styles.Button} 
              >
               <Text style={styles.ButtonText}>Ver tareas</Text>
              </View>
            </TouchableOpacity>
          </View> 
        </View>          
      </FullCardComponent>
    );
  }

  render() { 
    return (
        <UserCard  
        {...this.props} 
        userCardData={()=>this.renderUserCardData()}
        observationsComponent="true"
      >
          <View>
            {this.renderPendings()}
            {this.renderTaskList(tasks)}
            {this.renderPendingList(pending)}
          </View>
        </UserCard>
      );
    }
}


export default HomeComponent;