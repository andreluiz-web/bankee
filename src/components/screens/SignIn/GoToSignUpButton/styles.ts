import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Button = styled(RectButton)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: ${colors.body};
    font-family: ${fonts.body};
    font-size: 15px;
    text-align: center;
`;