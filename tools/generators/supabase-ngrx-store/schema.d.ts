export interface Schema {
  name: string;
  /**
   * Target feature
   */
  feature?: string;
  /**
   * Target apps
   */
  projects?: string;
  /**
   * Target platforms
   */
  platforms?: string;
  /**
   * Specifies whether this is the root state or feature state
   */
  root?: boolean;
  /**
   * Skip formatting
   */
  skipFormat?: boolean;
}
