
import { Control } from "./block";
import { RegisterWindow } from '../register-window1'
import { SelectWrapper } from "../settings_page/wrapper";

export const routerMain = () => {
  const navigationTo = (url: string | null) => {
      // console.log(url)
      history.pushState(null, '', url);
      router();
  }

  const router = async () => {
    const routes = [
      { path: '/', view: Control },
      { path: '/best_score', view: RegisterWindow },
      { path: '/settings', view: SelectWrapper }
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

    const innerWrapper = document.getElementById('main__container');
    if (!innerWrapper) throw Error ('No app found!!!');

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

