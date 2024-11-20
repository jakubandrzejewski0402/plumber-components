import { GenesisIconProps, GenesisIconType } from './GensisIcon.types';
import GenesisDarkIcon from './types/genesis-dark';
import GenesisLightIcon from './types/genesis-light';

const GenesisIcon: React.FC<GenesisIconProps> = ({ type, ...rest }) => {
  const getIconType = (type: GenesisIconType) => {
    switch (type) {
      case GenesisIconType.DARK:
        return <GenesisDarkIcon {...rest} />;
      case GenesisIconType.LIGHT:
        return <GenesisLightIcon {...rest} />;
    }
  };

  return getIconType(type);
};

export default GenesisIcon;
