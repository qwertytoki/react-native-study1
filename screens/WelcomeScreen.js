import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

// 最初に定義してけばずっと使える
// スクリーン幅を取得  縦幅欲しかったら .height でとれる
const SCREEN_WIDTH  = Dimensions.get('window').width;
const SLIDE_DATA = [
  { title: 'Step: 1', text: 'Add your trip memory', uri: require('../assets/welcome_screen1.jpg')},
  { title: 'Step: 2', text: 'All tips on the list', uri: require('../assets/welcome_screen2.jpg')},
  { title: 'Step: 3', text: 'See the trip detail!', uri: require('../assets/welcome_screen3.jpg')},
];

class WelcomeScreen extends React.Component {
  // ボタンクリックはこう書かないとなんかうまくいかないらしい
  // そうしないとボタンクリック前に表示されてしまうらしい
  onStartButtonPress = () => {
    //メインタブに飛ばす
    // propsはくせものらしい
    this.props.navigation.navigate('main');
  }

  renderLastButton(index){
    if(index === SLIDE_DATA.length -1){
      return (
        <Button
          style= {{ padding:10}}
          buttonStyle = {{backgroundColor: 'deepskyblue'}}
          title = "Start!"
          onPress = {this.onStartButtonPress}
        />
      )
    }
  }
  renderSlides() {
    //mapは配列の中身を一個ずつ出してくれる関数
    // 引数1つ目は要素、2つ目は番号(0スタート)
    return SLIDE_DATA.map((slide, index) => {
      return (
        // リターン中は1つのタグしか返せない。なのでVIEWタグで囲ってる
        <View
          key={index}
          //flex:1 は画面全部という意味
          style={styles.slideStyle}
        >
        // css関連はstyleタグで書ける
        // flexは、同じ階層内で
          <View style= {styles.containerStyle}>
            <Text style={styles.textStyle}>{slide.title}</Text>
            <Text style={styles.textStyle}>{slide.text}</Text>
          </View>
          <Image
            style={{ flex:2}}
            // 画像を引き伸ばすかどうか
            resizeMode = "contain"
            // 画像の保存場所
            source = {slide.uri}
          />
          <View style = {styles.containerStyle}>
            {this.renderLastButton(index)}
            <Text style={styles.textStyle}>{index + 1} / 3</Text>
          </View>
        </View>
      )
    });
  }

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        // 二重鉤括弧はJSのオブジェクトを表す
        style={{ flex: 1 }}
      >
      // かぎかっこはJSを書くサイン
      {this.renderSlides()}
      </ScrollView>
    );
  }
}
//styleをここに集結させる
const styles = StyleSheet.create({
  slideStyle: {
    flex:1 ,
    backgroundColor: 'skyblue',
    width: SCREEN_WIDTH,
    alignItems: 'center'
  },
  containerStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default WelcomeScreen;
