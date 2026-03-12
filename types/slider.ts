export type SlideItem = {
  id?: string;
  created_at?: Date;
  imageUrl: string;
};

export type InfiniteSliderProps = {
  slides: SlideItem[];
  autoPlay?: boolean;
  intervalMs?: number;
  transitionMs?: number;
  dragThresholdPx?: number;
};

export type SliderStatus = {
  currentRealIndex: number;
  isDragging: boolean;
  isAutoPlaying: boolean;
};
