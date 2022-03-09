export type ContainerWithRefProps = {
  theme?: Theme | undefined;
  as?: ElementType<any> | undefined;
} & ClassAttributes<HTMLDivElement> &
  HTMLAttributes<HTMLDivElement> & { ref: React.Ref<HTMLButtonElement> };
