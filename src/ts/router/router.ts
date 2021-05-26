
import { AboutPage } from "../about_page/about_page";
import { AboutWrapper } from "../about_page/about_wrapper";
import { BestScorePage } from "../best-score_page/best-score_page";
import { BestScoreWrapper } from "../best-score_page/best_score_wrapper";
import { Control } from "../controls";
import { SettingsPage } from "../settings_page/settings_page";
import { SettingsWrapper } from "../settings_page/settings_wrapper";

export const routerMain = () => {
  const navigationTo = (url: string | null) => {
      // console.log(url)
      history.pushState(null, '', url);
      router();
  }

  const router = async () => {
    const routes = [
      { path: '/', view: AboutWrapper },
      { path: '/best_score', view: BestScoreWrapper },
      { path: '/settings', view: SettingsWrapper }
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

    const innerWrapper = document.getElementById('main__page');
    if (!innerWrapper) throw Error ('No app found!!!');

    // const mainPage = new Control(innerWrapper, 'div', 'main__block');
    // innerWrapper.appendChild(mainPage.element)

    innerWrapper.innerHTML = ""; //!----------------------------костыль-------------
    
    const view = await new match.route.view(innerWrapper);

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

