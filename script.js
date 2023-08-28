document.addEventListener('DOMContentLoaded', ({ target }) => {
  let notificationCount = 3;
  const headerLeft = document.querySelector('.header__left');
  const markAllAsRead = document.querySelector('header button');
  const notifWrapper = document.querySelectorAll('.notifications-list li');
  const notifs = document.querySelectorAll('.notification');

  if (notificationCount > 0) {
    const countTag = document.createElement('span');
    countTag.innerHTML = String(notificationCount);
    countTag.setAttribute('class', 'notification-count');
    headerLeft.appendChild(countTag);
    markAllAsRead.addEventListener('click', () => {
      markAllAsRead.setAttribute('disabled', 'true');
      notificationCount = 0;
      countTag.remove();
    });
    for (let i = 0; i < notificationCount; i++)
      notifWrapper[i].setAttribute('data-status', 'new');
  } else {
    markAllAsRead.setAttribute('disabled', 'true');
    notifs.forEach((notif) => {
      if (notif.getAttribute('data-status'))
        notif.removeAttribute('data-status');
    });
  }
});
