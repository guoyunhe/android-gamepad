export default interface Game {
  play: string;
  fdroid?: string;
  taptap?: number;
  xiaomi?: string;
  download?: string;
  name: Record<string, string>;
  rating: number;
  price: number;
  icon: string;
  screenshots: string[];
}
