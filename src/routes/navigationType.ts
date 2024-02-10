import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStakParamList} from './AppStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStakParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStakParamList> =
  NativeStackScreenProps<AppStakParamList, RouteName>;
