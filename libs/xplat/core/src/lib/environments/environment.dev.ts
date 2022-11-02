import { IEnvironment } from '.';

export const environment: IEnvironment = {
  production: false,
  // dev customizations here...
  supabase: {
    publicKey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
      '.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4bGx3YnN1dW9hanZ3a3Jxa2hxI' +
      'iwicm9sZSI6ImFub24iLCJpYXQiOjE2NjczMzQxNDUsImV4cCI6MTk4MjkxMDE0NX0' +
      '.7z9jCaKTN_qiXiHqpDR5mIWTYXFEt6MmVpiK33SsQwo',
    url: 'https://uxllwbsuuoajvwkrqkhq.supabase.co',
  },
};
