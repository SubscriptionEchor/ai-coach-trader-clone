export interface Node {
  x: number;
  y: number;
  connections: number[];
}

export interface GradientStop {
  offset: string;
  color: string;
  opacity: number;
}

export interface NetworkGradient {
  id: string;
  stops: GradientStop[];
}