declare module 'plumber-components' {
  import { FC } from 'react';

  export interface PrimaryButtonProps {
    text: string;
    onClick: () => void;
  }

  export const PrimaryButton: FC<PrimaryButtonProps>;
}
