<template>
     <div class="main__saidbar ">
      <div class="sidbar__search">
        <input type="text" name="search" placeholder="Поиск..">
      </div>
      <div class="row">
        <div class="col s12 sidbar__tabs">
          <ul class="tabs">
            <li class="tab col s2"><a href="#all" class="active">Все</a></li>
            <li class="tab col s6"><a href="#unread">Непрочитанное</a></li>
            <li class="tab col s3"><a href="#chosen">Избранное</a></li>
          </ul>
        </div>
        <div id="all" class="col s12 news__links ">
          <a href="#" class="side__news_link ">
            <p>
              Планируется изменение условий на ТП “Просто”, “Просто Мини”
            </p>
          </a>
          <a href="#" class="side__news_link ">
            <p>
              Важно! Корректное оформление заявок на переброс денежных ср...
            </p>
          </a>
          <a href="#" class="side__news_link visited">
            <p>
              На данный момент - наблюдаются проблемы с отправленными СМС абонентам
            </p>
          </a>
        </div>
        <div id="unread" class="col s12 news__links">Test 2</div>
        <div id="chosen" class="col s12 news__links">Test 3</div>
      </div>
    </div>
</template>