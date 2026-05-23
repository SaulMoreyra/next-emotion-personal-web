"use client";

import ProviderUtils from "utils/ProviderUtils";
import NavProvider from "./NavProvider";
import ThemeProvider from "./ThemeProvider";

const Providers = ProviderUtils.convine(NavProvider, ThemeProvider);

export default Providers;
