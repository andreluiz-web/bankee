import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../../../styles/colors';
import fonts from '../../../../styles/fonts';

export const Button = styled(RectButton)`
    width: 100%;
    height: 60px;
    margin-bottom: 19px;
    justify-content: center;
    align-items: center;
    background-color: ${colors.title};
    border-radius: 10px;
`;

export const ButtonText = styled.Text`
    color: ${colors.white};
    font-family: ${fonts.title};
    font-size: 17px;
    line-height: 22px;
    text-align: center;
`;