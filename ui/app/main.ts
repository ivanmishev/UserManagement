import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {routing} from './app.routing';

import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule, [routing]);
