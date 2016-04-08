interface IGenericProps {
	state: IAppState;
	updateAppState: (val: IAppState) => void;
	addSlide?: (val: string) => void;
}

interface IGenericState {
}

interface ISlide {
	type: string;
	title?: string;
	text?: string;
	url?: string;
}

interface IAppState {
	view?: string;
	currentSlide?:  number;
	sidebar?:  string;
	slides?: ISlide[];
}

interface IAppProps {
}
