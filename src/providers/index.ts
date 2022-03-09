import ProviderUtils from "utils/ProviderUtils";
import MenuProvider from "./MenuProvider";
import ThemeProvider from "./ThemeProvider";

export default ProviderUtils.convine(MenuProvider, ThemeProvider);
