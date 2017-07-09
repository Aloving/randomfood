export class Recipe {
	name: string;
	image: string;
	likes: string;
	dislikes: string;
	time: string;
	ingredients: {
		name: string;
		amout: string;
	};
	instruction: {
		image: string;
		step: string;
	};
}
