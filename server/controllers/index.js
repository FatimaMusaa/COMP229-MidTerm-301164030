//COMP229-MidTerm-301164030 Musa Patiguli Client App

export function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}