import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-all-hooks-demo',
  templateUrl: './all-hooks-demo.component.html',
  // OnPush so you can see how checks behave with manual changes vs input changes
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHooksDemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  /** Changing this from a parent will trigger ngOnChanges */
  @Input() title = 'All Hooks Demo';

  /** Just to show View hooks */
  @ViewChild('titleEl', { static: false }) titleEl?: ElementRef<HTMLHeadingElement>;

  tick = 0;                           // Updated by an interval so you can see DoCheck
  private sub?: Subscription;

  /** Called FIRST when an @Input() changes (also on first binding) */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('[ngOnChanges]', changes);
  }

  /** Called ONCE after first ngOnChanges */
  ngOnInit(): void {
    console.log('[ngOnInit]');
    // Something to clean up later:
    this.sub = interval(1000).subscribe(n => {
      this.tick = n;
      // Note: With OnPush, this alone won’t trigger CD unless the parent changes input,
      // an event happens in this component, or you inject ChangeDetectorRef and markForCheck().
    });
  }

  /** Called during every change detection run */
  ngDoCheck(): void {
    // Useful for custom change detection logic
    // Avoid heavy work here.
    // console.log('[ngDoCheck]');
  }

  /** Content projection hooks (ng-content) */
  ngAfterContentInit(): void {
    console.log('[ngAfterContentInit]');
  }

  ngAfterContentChecked(): void {
    // console.log('[ngAfterContentChecked]');
  }

  /** View init: @ViewChild is set here */
  ngAfterViewInit(): void {
    console.log('[ngAfterViewInit]', this.titleEl?.nativeElement?.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log('[ngAfterViewChecked]');
  }

  /** Cleanup */
  ngOnDestroy(): void {
    console.log('[ngOnDestroy] Cleaning up…');
    this.sub?.unsubscribe();
  }
}
