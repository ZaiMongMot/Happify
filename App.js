import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import  getTheme from "./native-base-theme/components";
import material from "./native-base-theme/variables/material";​
export default class App extends React.Component {

    render() {
    return ( 
    <Container>
      <Header>
      <Left>
      <Button transparent>
      <Icon name = 'menu' />
      </Button> 
      </Left> 
      <Body>
      <Title> Header </Title> 
      </Body> 
      <Right />
      </Header> 
      <Content>
      <Text> This is Content Section </Text> 
      </Content> 
      <Footer>
      <FooterTab>
      <Button full>
      <Text> Footer </Text> 
      </Button> 
      </FooterTab> 
      </Footer> 
      </Container>
    );
  }
}
