import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, SvgXml } from "react-native-svg";
import VueSvg from '../assets/svg/vue.svg';

type SvgIconProps = {
  name: string;
  color?: string;
  size?: number;
};

export default function SvgIcon({ name, color, size }: SvgIconProps) {
  const [Icon, setIcon] = useState<any>(null);

  useEffect(() => {
    const importSvg = async () => {
      const svgIcon = await import(`../assets/svg/${name}.svg`)
      setIcon(svgIcon.default);
    }
    importSvg();
  }, [name]);

  if (!Icon) {
    return null; // 或者返回一个加载中的占位符
  }

  return <Icon />
}

