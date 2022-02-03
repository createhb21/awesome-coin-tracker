// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgTextColor: string;
    bgColor: string;
    borderColor: string;
    cardColor: string;
    accentColor: string;
  }
}
