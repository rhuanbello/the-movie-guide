import { SyntheticEvent } from "react";

export interface RateStarsProps {
  defaultColor?: string;
  hoverX?: boolean;
  onChange?: (event: SyntheticEvent<Element, Event>, value: number | null) => void; 
  value?: number;
  isProfile?: any;
  size?: number;
}

export interface FavoriteIconProps {
  defaultColor?: string;
  actionColor?: string;
  size?: number;
  isFavorite?: boolean; 
  noText?: boolean;
  color?: string;
}

export interface WatchIconProps {
  onClick?: () => any; 
  defaultColor?: string;
  actionColor?: string; 
  size?: string | number; 
  isWatched?: boolean;
  noText?: boolean; 
  color?: string;
}