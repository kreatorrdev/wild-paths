export type PublishedAssetRecord = {
  id: string;
  title: string;
  /** What the scene depicts in the fictional Wild Paths world */
  fictionalSubject: string;
  originalFile: string;
  webpFile: string;
  generationMethod: string;
  /** How the image is used in accessibility copy and crops */
  accessibilityIntent: string;
  /** Public routes or surfaces where this file is shown */
  publishedOn: readonly string[];
};

export const imageGenerationDisclaimer =
  "These are generated creative scenes for a design concept. They are not documentary photographs of real places, and no third-party photography license is asserted." as const;
