import 'regenerator-runtime';

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  if (path === '/login.html') {
    import('../styles/style-log.css');
  } else if (path === '/registrasi.html') {
    import('../styles/style-reg.css');
  } else if (path === '/profile.html') {
    import('../styles/style-prof.css');
  } else if (path === '/detailPage.html') {
    import('../styles/style-detailPage.css');
  } else {
    import('../styles/style.css');
  }
});
