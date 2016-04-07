interface IGenericProps {
  state: any;
  updateAppState: (val: any) => void;
  addSlide?: (val: any) => void;
}

interface IGenericState {
}

interface IAppState {
  view: any;
  currentSlide:  any;
  sidebar:  any;
  slides: any;
}

interface IAppProps {
}
