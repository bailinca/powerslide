const defaultState: IAppState = {
  currentSlideIndex: 0,
  sidebar: 'controls',
  slides: [
    {
      text: 'Slide text',
      title: 'Slide 1',
      type: 'titleText'
    },
    {
      title: 'Slide 2',
      type: 'titlePic',
      url: 'http://www.astropython.org/static/images/add_new.png'
    },
    {
      title: 'Slide 4',
      type: 'titlePic',
      url: 'http://www.heyuguys.com/images/2011/11/' + 'Small-Fry-Toy-Story-Short.jpg'
    },
    {
      title: 'Slide 5',
      type: 'titleOnly'
    },
    {
      title: 'Slide 6',
      type: 'titleOnly'
    }
  ],
  view: 'edit'
};

export { defaultState };
