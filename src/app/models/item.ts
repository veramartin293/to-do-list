export class Item {
	id: number;
	title: string;

	constructor(title:string) {
		this.id = Date.now();
		this.title = title;
	}
}