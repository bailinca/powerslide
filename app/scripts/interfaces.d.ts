interface ISlide {
	type: 'titleText' | 'titlePic' | 'titleOnly';
	title: string;
	text?: string;
	url?: string;
}

interface IAppState {
	view?: 'edit' | 'present';
	currentSlide?: number;
	sidebar?: 'controls' | 'slideTypeChooser';
	slides?: ISlide[];
}

interface IGenericProps {
	state: IAppState;
	updateAppState: (val: IAppState) => void;
	addSlide?: (val: ISlide) => void;
}
