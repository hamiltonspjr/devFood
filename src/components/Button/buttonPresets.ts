import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPreset} from './Button';

// 3 definir uma interface para a UI do botão tendo container que é do tipo do TouchableOpacityBoxProps e content que é do ThemeColors
interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

// 4 definir os presets do botão utilizando o Record passando o ButtonPreset como chave e as possibilidades do botão (default e disabled caso tenha) passando como type o ButtonUI
export const buttonPresets: Record<
  buttonPreset,
  {
    default: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'lime400',
      },
      content: 'black',
    },
  },
  outline: {
    default: {
      container: {
        backgroundColor: 'background',
      },
      content: 'slate100',
    },
  },
  category: {
    default: {
      container: {
        backgroundColor: 'slate800',
      },
      content: 'slate100',
    },
  },
};
