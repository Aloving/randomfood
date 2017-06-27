export class Recipe {
	name: string;
	image: string;
	complexity: number;
	ingredients: {
		name: string;
		amout: string;
	}
	instruction: {
		image: string;
		step: string;
	}
}