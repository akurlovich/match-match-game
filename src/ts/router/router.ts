
import { AboutWrapper } from "../about_page/about_wrapper";
import { BestScoreWrapper } from "../best-score_page/best_score_wrapper";
import { SettingsWrapper } from "../settings_page/settings_wrapper";

export const routerMain = () => {
  const navigationTo = (url: string | null) => {
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

    const innerWrapper = document.getElementById('main__page');
    if (!innerWrapper) throw Error ('No app found!!!');

    innerWrapper.innerHTML = ""; //!----------------------------костыль-------------
    
    const view = await new match.route.view(innerWrapper);
  };

  window.addEventListener('popstate', () => {
    router();
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event) => {
      if ((event.target as HTMLBodyElement).matches('[data-link]')) {
        event.preventDefault();
        navigationTo((event.target as HTMLBodyElement).getAttribute('href'));
      }
    })
    router();
  })
};

