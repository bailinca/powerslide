const defaultState: IAppState = {
	'view': 'edit',
	'currentSlide': 0,
	'sidebar': 'controls',
	'slides': [
		{
			'type': 'titleText',
			'title': 'Slide 1',
			'text': 'Slide text'
		},
		{
			'type': 'titlePic',
			'title': 'Slide 2',
			'url': 'http://www.astropython.org/static/images/add_new.png'
		},
		{
			'type': 'titlePic',
			'title': 'Slide 4',
			'url': 'http://www.heyuguys.com/images/2011/11/' +
				'Small-Fry-Toy-Story-Short.jpg'
		},
		{
			'type': 'titleOnly',
			'title': 'Slide 5'
		},
		{
			'type': 'titleOnly',
			'title': 'Slide 6'
		}
	]
};

export {defaultState};
