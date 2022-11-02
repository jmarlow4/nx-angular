/**
 * Workspace shared environment properties
 */
export interface IEnvironment {
  production?: boolean;
  supabase: {
    url: string;
    publicKey: string;
  };
}
