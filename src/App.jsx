import { useState } from 'react'
import './App.css'
import View from "./components/View/View.jsx";
import Header from "./components/Header/Header.jsx";
import Icon from "./components/Icon/Icon.jsx";
import homeSrc from './assets/home.svg'
import Section from "./components/Section/Section.jsx";
import InfoBlock from "./components/InfoBlock/InfoBlock.jsx";



function App() {

  return (
    <>
        <Header actions={[
            {action: () => alert('aaa'), title: 'Главная', src:homeSrc},
            {action: () => alert('aaa'), title: 'Товары', src:homeSrc},
            {action: () => alert('aaa'), title: 'Рационы', src:homeSrc},
            {action: () => alert('aaa'), title: 'Параметры', src:homeSrc},
        ]}>
        </Header>
        <View>
            <Section title={'Рационы'}>
                <InfoBlock title={'Легкий рацион'}>
                </InfoBlock>
                <InfoBlock title={'Легкий рацион'}></InfoBlock>
                <InfoBlock title={'Создать рацион'}></InfoBlock>
            </Section>
            <Section title={'Данные'}>
                <InfoBlock title={'Настройки'}></InfoBlock>
                <InfoBlock title={'Настройки'}></InfoBlock>

            </Section>
        </View>
    </>
  )
}

export default App
