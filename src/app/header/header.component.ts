import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {
	title = 'header';

	@Output() onRoutePage = new EventEmitter<{ pageRoute: string }>();

	routePage(page: string) {
		this.onRoutePage.emit({ pageRoute: page });
	}
}
