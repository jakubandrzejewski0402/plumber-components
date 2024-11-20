export enum GenesisIconType {
  DARK = 'dark',
  LIGHT = 'light',
}
export interface GenesisIconProps extends React.SVGProps<SVGSVGElement> {
  type: GenesisIconType;
}
