import { NgModuleRef, ApplicationRef } from '@angular/core';
import { createNewHosts } from '@angularclass/hmr';

export const hmrBootstrap = (
  module:any, bootstrap:() => Promise<NgModuleRef<any>>) =>{
    let ngModule: NgModuleRef<any>;
    module.hot.accept();
    bootstrap().then(mod => ngModule = mod);
    module.hot.dispose(()=>{
      const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    });
  };

  
