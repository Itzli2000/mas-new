import React, { Component } from 'react';
import AnimatedBar from "react-native-animated-bar";
import { FullCardComponent, UserCard } from '@bm-mas-global-components';
import ProgressCircle from 'react-native-progress-circle';
import { HomeStyles as styles } from './../styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, Dimensions } from 'react-native';


const tasks=[
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '5 visitas de 10 por día',
    percentage: 50,
  },
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '7 visitas de 10 por día',
    percentage: 70,
  },
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
    description: '10 visitas de 10 por día',
    percentage: 100,
  },
 ]
const pending=[
  {
    key: 'Porcentaje de cumplimiento',
    icon: 'clock-o',
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
            startColor={styles.userCardStart.color}
            stopColor={styles.userCardStop.color}
          >
            <View style={[styles.homeCardInnerColumn, styles.homeCardInnerColumnLeft]}>
              <View style={styles.fullCardTitleContainer}>
                <Icon style={[styles.cardIconStyles,styles.fixedIcon]} name={item.icon} /> 
                <Text h4 style={styles.cardTitleStyles}>{item.key.toUpperCase()}</Text>
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
                <Icon style={[styles.cardIconStyles]} name={item.icon} /> 
                <Text h4 style={styles.cardTitleStyles}>{item.key.toUpperCase()}</Text>
              </View>
            <View style={{flexDirection:'row'}}>
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

  render() { 
    return (
        <UserCard  {...this.props} userCardData={()=>this.renderUserCardData()}>
          <View>
            {this.renderTaskList(tasks)}
            {this.renderPendingList(pending)}
          </View>
        </UserCard>
      );
    }
}


export default HomeComponent;