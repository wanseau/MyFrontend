import { StyleSheet } from "react-native";

const COLORS = {
    background: '#F5F1E8',    
    surface: '#FFFFFF',      
    primary: '#2C5F2D',       
    accent: '#8B4513',       
    textPrimary: '#1A1A1A',   
    textSecondary: '#6B7280', 
};

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: COLORS.background,
    },
    header: {
        fontSize: 28, 
        fontWeight: '700',
        color: COLORS.accent,
        marginBottom: 35,
        textAlign: 'center',

        textShadowColor: COLORS.accent,
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 3,
    },
    input: {
        backgroundColor: COLORS.surface,
        color: COLORS.textPrimary,
        borderWidth: 2,
        borderColor: COLORS.primary,
        padding: 18,
        marginBottom: 20,
        borderRadius: 6,
        fontSize: 16,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 16,
        paddingHorizontal: 40,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    text: {
        fontSize: 16,
        marginBottom: 22,
        color: COLORS.textSecondary,
        textAlign: 'center',
        lineHeight: 22,
    },
    card: {
        backgroundColor: COLORS.surface,
        padding: 25,
        marginBottom: 20,
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB', 
    },
    homeCard: {
        backgroundColor: COLORS.surface,
        padding: 25,
        marginBottom: 20,
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: COLORS.accent, 
        shadowColor: COLORS.accent,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
});