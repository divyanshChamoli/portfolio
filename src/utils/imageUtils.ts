// Types
export interface ImagePosition {
  src: string;
  top: number;
  left: number;
  depth: number;
}

// File extension mapping
const iconExtensions = {
  1: 'png',
  2: 'png',
  3: 'jpg',
  4: 'jpg',
  5: 'jpg',
  6: 'jpg',
  7: 'jpg',
  8: 'jpg',
  9: 'jpg',
  10: 'jpg',
  11: 'jpg',
  12: 'jpg',
  13: 'jpg',
  14: 'jpg',
  15: 'jpg',
} as const;

// Import regular icons
import Icon1 from '../assets/icon/icon1.png';
import Icon2 from '../assets/icon/icon2.png';
import Icon3 from '../assets/icon/icon3.jpg';
import Icon4 from '../assets/icon/icon4.jpg';
import Icon5 from '../assets/icon/icon5.jpg';
import Icon6 from '../assets/icon/icon6.jpg';
import Icon7 from '../assets/icon/icon7.jpg';
import Icon8 from '../assets/icon/icon8.jpg';
import Icon9 from '../assets/icon/icon9.jpg';
import Icon10 from '../assets/icon/icon10.jpg';
import Icon11 from '../assets/icon/icon11.jpg';
import Icon12 from '../assets/icon/icon12.jpg';
import Icon13 from '../assets/icon/icon13.jpg';
import Icon14 from '../assets/icon/icon14.jpg';
import Icon15 from '../assets/icon/icon15.png';

// Import pixel icons
import PixelIcon1 from '../assets/pixel-icon/icon1.png';
import PixelIcon2 from '../assets/pixel-icon/icon2.jpg';
import PixelIcon3 from '../assets/pixel-icon/icon3.jpg';
import PixelIcon4 from '../assets/pixel-icon/icon4.jpg';
import PixelIcon5 from '../assets/pixel-icon/icon5.jpg';
import PixelIcon6 from '../assets/pixel-icon/icon6.jpg';
import PixelIcon7 from '../assets/pixel-icon/icon7.jpg';
import PixelIcon8 from '../assets/pixel-icon/icon8.jpg';
import PixelIcon9 from '../assets/pixel-icon/icon9.jpg';
import PixelIcon10 from '../assets/pixel-icon/icon10.jpg';
import PixelIcon11 from '../assets/pixel-icon/icon11.jpg';
import PixelIcon12 from '../assets/pixel-icon/icon12.jpg';
import PixelIcon13 from '../assets/pixel-icon/icon13.jpg';
import PixelIcon14 from '../assets/pixel-icon/icon14.jpg';
import PixelIcon15 from '../assets/pixel-icon/icon15.jpg';

// Icon sets with type mapping
export const iconSets = {
  regular: [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12, Icon13, Icon14, Icon15],
  pixel: [PixelIcon1, PixelIcon2, PixelIcon3, PixelIcon4, PixelIcon5, PixelIcon6, PixelIcon7, PixelIcon8, PixelIcon9, PixelIcon10, PixelIcon11, PixelIcon12, PixelIcon13, PixelIcon14, PixelIcon15]
} as const;

export type IconSetType = keyof typeof iconSets;

// Position arrays for each page
export const home1Positions = [
  { top: 12, left: 8, depth: 50 },
  { top: -1, left: 18, depth: 50 },
  { top: 14, left: 87, depth: 50 },
  { top: 38, left: 22, depth: 90 },
  { top: 42, left: 90, depth: 50 },
  { top: 53, left: 5, depth: 70 },
  { top: 80, left: 25, depth: 50 },
  { top: 80, left: 86, depth: 5 },
  { top: 75, left: 92, depth: 50 },
  { top: 92, left: 77, depth: 10 },
  { top: -2, left: 78, depth: 10 },
  { top: 91, left: 7, depth: 50 },
  { top: 30, left: 77, depth: 20 },
  { top: 70, left: 15, depth: 50 },
  { top: 63, left: 80, depth: 30 },
];

export const home2Positions = [
  // Frontend
  { top: 5, left: 5, depth: 30 },
  { top: 10, left: 80, depth: 30 },
  { top: 20, left: 20, depth: 40 },
  // Backend
  { top: 30, left: 70, depth: 40 },
  { top: 35, left: 10, depth: 30 },
  // Databases & Cloud
  { top: 50, left: 85, depth: 40 },
  { top: 55, left: 15, depth: 30 },
  // Tooling
  { top: 70, left: 60, depth: 50 },
  { top: 65, left: 35, depth: 30 },
  // DevOps & Infra
  { top: 80, left: 10, depth: 50 },
  { top: 78, left: 88, depth: 30 },
  // Supporting Tools
  { top: 90, left: 25, depth: 40 },
  { top: 88, left: 70, depth: 40 },
  { top: 60, left: 45, depth: 30 },
  { top: 15, left: 50, depth: 30 },
];

export const home3Positions = [
  { top: 12, left: 8, depth: 50 },
  { top: -1, left: 18, depth: 50 },
  { top: 14, left: 87, depth: 50 },
  { top: 38, left: 22, depth: 90 },
  { top: 42, left: 90, depth: 50 },
  { top: 53, left: 5, depth: 70 },
  { top: 80, left: 25, depth: 50 },
  { top: 80, left: 86, depth: 5 },
  { top: 75, left: 92, depth: 50 },
  { top: 92, left: 77, depth: 10 },
  { top: -2, left: 78, depth: 10 },
  { top: 91, left: 7, depth: 50 },
  { top: 30, left: 77, depth: 20 },
  { top: 70, left: 15, depth: 50 },
  { top: 63, left: 80, depth: 30 },
];

// Helper to get icon path with correct extension
export function getIconPath(index: number, isPixel: boolean = false): string {
  const baseDir = isPixel ? 'pixel-icon' : 'icon';
  const ext = iconExtensions[index + 1 as keyof typeof iconExtensions];
  return `../assets/${baseDir}/icon${index + 1}.${ext}`;
}

// Function to create image positions with icons
export function createImagePositions(
  positions: typeof home1Positions,
  iconType: IconSetType
): ImagePosition[] {
  return positions.map((pos, index) => ({
    ...pos,
    src: iconSets[iconType][index],
  }));
}

// Scale factor helper
export function getScaleFactor(depth: number, isHome2: boolean = false): string {
  return `scale(${1 + depth / (isHome2 ? 100 : 50)})`;
}