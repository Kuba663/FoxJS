'use strict';

class Container extends HTMLElement
{
	get width()
	{
		return this.hasAttribute('width');
	}
	
	set width(val)
	{
		if (val) {
			this.setAttribute('width',val);
		} else {
			this.removeAttribute('width');
		}
	}
	
	constructor() {
		super();
		var canvas = document.createElement('canvas');
		
	}
}
