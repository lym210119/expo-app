import { useEffect, useState } from "react";
import { View, ViewStyle } from "react-native";
import Svg, { SvgXml } from "react-native-svg";
import AssetSvg from "../assets/svg";

type SvgIconProps = {
  name: string;
  color?: string;
  size?: number;
  style?: ViewStyle;
};

export default function SvgIcon({ name, color, size, style }: SvgIconProps) {
  const [svgData, setSvgData] = useState<any>(null);

  useEffect(() => {
    const svgXmlData = AssetSvg[name as keyof typeof AssetSvg];
    setSvgData(svgXmlData);
  }, [name]);

  if (!svgData) {
    return null; // 或者返回一个加载中的占位符
  }

  return <SvgXml xml={svgData} width={size} height={size} color={color} style={style} />;
}
