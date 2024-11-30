export interface ButtonConfig {
  text: string;
  onClick: () => void;
}

export interface HeroData {
  backgroundImage: string;
  heroImage: {
    src: string;
    alt: string;
  };
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
}
