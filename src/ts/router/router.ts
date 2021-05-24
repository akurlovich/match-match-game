
import { AboutPage } from "../about_page/about_page";
import { BestScorePage } from "../best-score_page/best-score_page";
import { SettingsPage } from "../settings_page/settings_page";

export const routerMain = () => {
  const navigationTo = (url: string | null) => {
      // console.log(url)
      history.pushState(null, '', url);
      router();
  }

  const router = async () => {
    const routes = [
      { path: '/', view: AboutPage },
      { path: '/best_score', view: BestScorePage },
      { path: '/settings', view: SettingsPage }
    ];
  
    const potentialMatches = routes.map(route => {
      return {
        route: route,
        isMatch: location.pathname === route.path
      };
    });
  
    let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);
  
    if (!match) {
      match = {
        route: routes[0],
        isMatch: true
      }
    }

    //*------------------

    // const innerWrapper = document.getElementById('main__container');
    // if (!innerWrapper) throw Error ('No app found!!!');

    document.body.innerHTML = ""; //!----------------------------костыль-------------
    
    const view = await new match.route.view(document.body);

    //*--------------
    // const registerWindowHTML = await view();

    // match.route.view();
  };

  // router();


  window.addEventListener('popstate', () => {
    router();
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
      // console.log((event.target as HTMLBodyElement).matches('[data-link]'))
      if ((event.target as HTMLBodyElement).matches('[data-link]')) {
      // if ((event.target as HTMLBodyElement).classList.contains('register_page')) {
        // console.log('!!!!!!!!!!!!!')
        event.preventDefault();
        // if (!(event.target as HTMLBodyElement).getAttribute('href')) throw Error ('No href');
        navigationTo((event.target as HTMLBodyElement).getAttribute('href'));
      }
      // console.log('object');
    })
    router();
  })
};

