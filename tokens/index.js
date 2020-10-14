import {colors} from "./colors";
import {spacing} from "./spacing";
import {typography} from "./typography";

//

export const tokens = { //Note: when theme object is passed to SS's themeProvider, theme object becomes availble to SS components
    colors,   // styled-system (SS) components looks for a colors object in the theme object passed to theme provider
    spacing, // SS also looks for a space array. Refer to docs: https://styled-system.com/table
    typography,
};