type ISlideType = 'titleText' | 'titlePic' | 'titleOnly';
type IView = 'edit' | 'present';
type ISidebar = 'controls' | 'slideTypeChooser';

interface ISlide {
  type: ISlideType;
  title: string;
  text?: string;
  url?: string;
}

interface IAppState {
  view?: IView;
  currentSlideIndex?: number;
  sidebar?: ISidebar;
  slides?: ISlide[];
}
