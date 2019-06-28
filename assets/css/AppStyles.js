import { Dimensions, StyleSheet } from 'react-native';

const PR = Dimensions.get('window').width / 375;

// 全局样式
const MainStyles = StyleSheet.create({
    mainModel: {
        flex: 1,
    },
    mainTitle: {
        paddingHorizontal: PR * 20,
        marginBottom: PR * 10,
    },
    mainTitleText: {
        fontSize: PR * 21,
        color: '#3E587B',
        fontWeight: 'bold',
    },
    mainTitleHint: {
        fontSize: PR * 18,
        color: '#8AA2C3',
        fontWeight: 'normal',
    },
    mainTitleBtn: {
        position: 'absolute',
        top: '50%',
        right: PR * 20,
        marginTop: -PR * 14,
        paddingHorizontal: PR * 10,
        height: PR * 28,
        borderRadius: PR * 28,
        color: '#52AA9B',
        textAlignVertical: 'center',
        backgroundColor: 'rgba(82, 170, 155, 0.2)',
    },
    menuModel: {
        borderTopColor: '#f2f2f2',
    },
    menuItem: {
        paddingVertical: PR * 5,
    },
    menuIcon: {
        width: PR * 22,
        height: PR * 22,
    },
    menuText: {
        fontSize: PR * 11,
    }
});

export {
    PR,
    MainStyles,
}