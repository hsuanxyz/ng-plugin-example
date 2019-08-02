import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-plugin-a',
  template: `
    <nz-card class="card" nzTitle="Widget 🎉">
        Plugin Widget
    </nz-card>
  `,
  styles: []
})
export class PluginAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
