import { ProviderProps } from "interfaces/Provider";
import React, { ReactElement, ReactNode } from "react";

export const convine = (
  ...providers: Array<(props: ProviderProps) => ReactElement>
) => {
  return ({ children }: { children: ReactNode }) => {
    return providers.reduceRight(
      (child, Provider) => <Provider>{child}</Provider>,
      children as ReactElement
    );
  };
};

const ProviderUtils = { convine };

export default ProviderUtils;
