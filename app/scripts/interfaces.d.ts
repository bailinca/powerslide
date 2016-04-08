interface IGenericProps {
	state: any;
	updateAppState: (val: any) => void;
	addSlide?: (val: string) => void;
}

interface IGenericState {
}

interface IAppState {
	view: string;
	currentSlide:  number;
	sidebar:  string;
	slides: any;
}

interface IAppProps {
}
