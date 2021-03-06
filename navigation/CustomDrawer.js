import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from "@react-navigation/drawer";
import { MainLayout } from "../screens";
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from "../constants/";
import Animated from "react-native-reanimated";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({icon, lable}) => {
    return(
        <TouchableOpacity
            style={{
                flexDirection:'row',
                height:30,
                marginBottom:SIZES.base,
                alignItems:'center',
                paddingLeft:SIZES.radius,
                borderRadius:SIZES.base
            }}
        >
            <Image
                source={icon}
                style={{
                    width:20,
                    height:20,
                    tintColor:COLORS.white                    

                }}
            ></Image>
            <Text
                style={{
                    marginLeft:15,
                    color:COLORS.white,
                    ...FONTS.h3
                }}
            >{lable}</Text>

        </TouchableOpacity>
    )
}

const CustomDrawerContent = ( {navigation}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{
                flex:1
            }}
        >
            <View
                style={{
                    flex:1,
                    paddingHorizontal: SIZES.radius
                }}
            >
                {/* // close button  */}
                <View
                    style={{
                        alignItems:'flex-start',
                        justifyContent:'center'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        onPress={()=>{navigation.closeDrawer()}}
                    >
                        <Image
                        source={icons.cross}
                        style={{
                            height:30,
                            width:30,
                            tintColor:COLORS.white
                        }}
                        ></Image>
                    </TouchableOpacity>

                </View>
                {/* Profile Section */}
                <TouchableOpacity
                    style={{
                        flexDirection:"row",
                        marginTop:SIZES.radius,
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={dummyData.myProfile.profile_image}
                        style={{
                            height:50,
                            width:50,
                            borderRadius:SIZES.radius
                        }}
                    ></Image>
                    <View
                        style={{
                            marginLeft:SIZES.radius
                        }}
                    >
                        <Text
                            style={{
                                color:COLORS.white,
                                ...FONTS.h3
                            }}
                        > {dummyData.myProfile.name}</Text>
                        <Text style={{color:COLORS.white, ...FONTS.body4}}>View your Profile</Text>
                    </View>
                </TouchableOpacity>

                {/* Drawer Items */}
                <View
                    style={{
                        flex:1,
                        marginTop: SIZES.padding
                    }}
                >
                    <CustomDrawerItem 
                    lable={constants.screens.home}
                    icon={icons.home}/>

                    <CustomDrawerItem 
                    lable={constants.screens.account}
                    icon={icons.account}/>

                    <CustomDrawerItem 
                    lable={constants.screens.category}
                    icon={icons.category}/>

                    <CustomDrawerItem 
                    lable={constants.screens.budget}
                    icon={icons.budget}/>

                    <View style={{
                        height:1,
                        marginVertical:SIZES.radius,
                        marginLeft:SIZES.radius,
                        backgroundColor:COLORS.lightGray1
                    }}/>

                    <CustomDrawerItem 
                    lable={constants.screens.planned_payments}
                    icon={icons.plannedPayements}/>

                    <CustomDrawerItem 
                    lable={constants.screens.shoppingList}
                    icon={icons.shoppingList}/>

                      <CustomDrawerItem 
                    lable={constants.screens.transfer}
                    icon={icons.transfer}/>

                    <CustomDrawerItem 
                    lable={constants.screens.stat}
                    icon={icons.stat}/>

                    {/* Line divider */}

                    <View style={{
                        height:1,
                        marginVertical:SIZES.radius,
                        marginLeft:SIZES.radius,
                        backgroundColor:COLORS.lightGray1
                    }}/>

                    <CustomDrawerItem 
                    lable={constants.screens.setting}
                    icon={icons.setting}/>

                    <CustomDrawerItem 
                    lable={constants.screens.about}
                    icon={icons.about}/>
                  
                </View>

                <View
                    style={{
                        marginBottom:SIZES.padding
                    }}
                >
                    <CustomDrawerItem 
                    lable="Logout"
                    icon={icons.logout}/>

                </View>
                
            </View>

        </DrawerContentScrollView>
    )
}

const CustomDrawer = () => {
    const [progress, setProgress] = React.useState(new Animated.Value(0));

    const scale = Animated.interpolateNode(progress, {
        inputRange: [0,1],
        outputRange: [1,0.8]
    })

    
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0,1],
        outputRange: [1,26]
    })

    const animatedStyle = {borderRadius, transform: [{scale}]}

    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.primary
            }}
        >
        <Drawer.Navigator
            drawerType="slide"
            overlayColor="transparent"
            drawerStyle={{
                flex:1,
                width:'65%',
                paddingRight:20,
                backgroundColor:"transparent"
            }}
            sceneContainerStyle={{
                backgroundColor:"transparent"
            }}
            initialRouteName="MainLayout"
            drawerContent={props => {
                // setTimeout(() => {
                //     setProgress(progress)
                // }, 0)
                
                return (
                    <CustomDrawerContent
                      navigation={props.navigation}
                    />
                )
            }}
        >
            <Drawer.Screen name="MainLayout">
                {props => <MainLayout {...props} 
                    drawerAnimationStyle={animatedStyle}
                />}
            </Drawer.Screen>

        </Drawer.Navigator>
        </View>
    )
}

export default CustomDrawer;