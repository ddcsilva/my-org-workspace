import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes';
import { provideCore } from './core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideCore({ routes }),
    // todos os outros providers globais devem ser definidos no core.ts
  ],
};
