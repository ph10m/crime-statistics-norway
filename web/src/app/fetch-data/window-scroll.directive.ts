import { Directive, HostListener, NgZone } from '@angular/core';

/** Link to scroll directive example
 * https://stackoverflow.com/questions/44516017/how-to-handle-window-scroll-event-in-angular-4
 */
@Directive({
  selector: '[scroller]'
})

export class WindowScrollDirective {
  
      private eventOptions: boolean|{capture?: boolean, passive?: boolean};
  
      constructor(private ngZone: NgZone) {}
  
      ngOnInit() {  
        /**
         *          
          if (passiveSupported()) { //use the implementation on mozilla
              this._eventOptions = {
                  capture: true,
                  passive: true
              };
          } else {
              this.eventOptions = true;
           */ 
          this.ngZone.runOutsideAngular(() => {
              window.addEventListener('scroll', this.scroll, <any>this.eventOptions);
          });
          
      }
  
      ngOnDestroy() {
          window.removeEventListener('scroll', this.scroll, <any>this.eventOptions);
          //unfortunately the compiler doesn't know yet about this object, so cast to any
      }
  
      scroll = (): void => {
        /**
         // Do this if something major has happened (scrolling to a certain point of the page)
          if (somethingMajorHasHappenedTimeToTellAngular) {
             this.ngZone.run(() => {
                 this.tellAngular();
             });
          } 
          */
          //Do this anyway
          console.log("scroll");
      };   
  }

  /**
   * If we have to change to angular waypoints, documentation for Angular JS
   * https://github.com/zumba/angular-waypoints
   */