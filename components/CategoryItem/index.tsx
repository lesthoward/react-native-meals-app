import { PressableProps } from 'react-native';
import { palette } from '../../assets/theme';
import PressableTitle from '../PressableTItle';

interface CategoryItemProps extends PressableProps {
  children: React.ReactNode;
  color?: string;
}

const CategoryItem = ({ children, color, ...rest }: CategoryItemProps) => {
  const appliedColor = (palette.categoryBox) as string || color;
  return (
    <PressableTitle color={appliedColor} {...rest}>
      {children}
    </PressableTitle>
  );
};

export default CategoryItem;
