import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pure-inbox-screen',
  templateUrl: './component.html'
})
export class InboxScreenPureComponent {
  @Input() error: any;
}
