import "styled-components";
import { ComposeThemeType } from "./theme";
declare module "styled-components" {
  export interface DefaultTheme extends ComposeThemeType {}
}
