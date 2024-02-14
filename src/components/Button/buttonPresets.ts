import {ThemeColors} from '../../theme/theme';
import {TouchableOpacityBoxProps} from '../Box/Box';
import {buttonPreset} from './Button';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

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
