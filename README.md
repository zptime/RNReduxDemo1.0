Redux实例V1.0版

说明：这是简单的 react native + redux + react-navigation 的实例

1.redux for react native
(1)依赖包：prop-types, react-redux, redux
(2)实例：Todo List
(3)功能：可新增todoList列表，也可分类删选
(4)参考网址：
    https://cn.redux.js.org/
    https://juejin.im/post/5bac26ad6fb9a05d353c8040
    https://juejin.im/post/5af00705f265da0ba60fb844

2.react-navigation
(1)依赖包：react-navigation, react-native-gesture-handler
(2)实例：StackNavigator + TabNavigator 综合导航
    StackNavigator: 类似于普通的Navigator，屏幕上方导航栏；
    TabNavigator: 相当于iOS里面的TabBarController，屏幕下方的标签栏；
    DrawerNavigator: 抽屉效果，侧边滑出；
(3)功能：
    createStackNavigator 创建的 stack navigator 是基础，我们通过创建多个 stack navigator 的方式将页面分组。然后通过 createBottomTabNavigation 创建出 Bottom Navigation。
    createBottomTabNavigation 中的 navigationOptions 和 createStackNavigator 中的 navigationOptions 不一样，比如 headerTitle 和 headerTintColor 只能在 createStackNavigator 中配置
    title 会被当作 headerTitle（createStackNavigator）；tabBarLabel（createBottomTabNavigator）、drawerLabel的备选。
(4)参考网址：
    https://www.reactnavigation.org.cn/docs/guide-intro
    https://juejin.im/post/5afaf2db518825673954e44d
    https://juejin.im/entry/5b30543fe51d4558dd6990cc

