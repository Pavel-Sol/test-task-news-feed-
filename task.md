Тестовое задание React

    Задание: Необходимо создать проект новостной ленты(каждая новость это некая карточка, состоящая из заголовка, краткого описания и панели действий) с хранением данных в любом доступном из браузерных api либо в базе данных*(в таком случае необходимо писать дополнительный код на php), с версткой и стилями.
    Для реализации  использовать js-фреймворк - ReactJS, сборку осуществить с помощью webpack или react-script (create-react-app). Хранение состояния на усмотрение тестируемого(можно использовать как встроенные механизмы ReactJS так и библиотеки Redux, MobX). При необходимости совершения AJAX использовать fetch. Источник новостей может быть любым на усмотрение тестируемого, но обязательным является правило: данные должны подгружаться при инициализации с помощью AJAX (как вариант использовать json файл для совершения ajax запросов).

    Описание задачи: Необходимо сделать страницу с тремя вкладками:

1. Новостная лента (должна быть активной при первой загрузке страницы) должна отображаться. Для каждой новости есть возможность совершить 3 действия:

   1. Оценить (лайкнуть и отобразить это действие в виде изменения иконки кнопки этого действия);
   2. Перемещение в архив (перемещение новости на страницу вкладки архива (соответственно новость должна пропасть с вкладки «Новостная лента» и отображаться только на вкладке «Архив») — добавить всплывающее уведомление о том, что новость перемещена в архив);
   3. Удаление (полностью удалить новость из хранилища— добавить всплывающее уведомление о том, что новость успешно удалена).

2. Архив — отображать новости которые были перемещены в архив, у этих новостей также имеется возможность совершения действий:

   1. Удалить (полностью удалить новость из хранилища— добавить всплывающее уведомление о том, что новость успешно удалена)
   2. Восстановить (вернуть новость в список новостей на главной странице — добавить всплывающее уведомление о том, что новость восстановлена).

3. Избранные — отображать только те новости, которые «пролайканы» (в таком случае новость должна отображаться и на главной вкладке, и на вкладке «Избранное»). В случае если «лайк» на главной странице с новости снят, необходимо удалить эту новость из избранных.

   \*Данные о лайках и о вкладках должны сохраняться при закрытии вкладки и повторном открывании страницы, то есть необходимо воспользоваться к примеру (localeStorage или IndexedDB)
