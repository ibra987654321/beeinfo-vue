<template>
  <div>
    <header class="header">
      <nav>
        <div class="nav-wrapper container">
          <div class="brand-logo nav__languages">
            <a href="#jdk" class="nav__language">Кыр /</a>
            <a href="#tyu" class="nav__language-dis">Рус</a>
          </div>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><router-link to="/main">Скрипт продаж</router-link></li>
            <li><a href="badges.html">Полезные сылки</a></li>
            <li><a href="collapsible.html">Номера линий</a></li>
            <li><a href="collapsible.html">Смена ТП</a></li>
            <li><a href="collapsible.html">Адреса</a></li>
            <div class="nav__switches">
              <a href="#dadsa" class="nav__switch">Prepaid / </a>
              <a href="#dssad" class="nav__switch-dis">Postpaid</a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
    <section class="head__section">
      <nav>
        <div class="nav-wrapper container section__container">
          <ul class="left hide-on-med-and-down head__section-flex">
            <svg
              width="100"
              height="24"
              viewBox="0 0 100 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.7468 7.27931C66.9098 7.27931 65.4902 8.03084 64.2377 9.50607L63.9315 7.7525H60.0903V22.5326H64.4882V12.4287C65.2675 11.204 66.0747 10.5081 67.0489 10.5081C67.9118 10.5081 68.4407 10.9256 68.4407 12.4844V22.5326H72.8385V11.7328C72.8385 8.92155 71.3076 7.27931 68.7468 7.27931Z"
                fill="#121212"
              />
              <path
                d="M83.197 4.66288C83.8372 4.66288 84.6722 4.80205 85.5073 5.21957L86.7042 2.35262C85.6186 1.79593 84.1991 1.40625 82.6682 1.40625C78.8827 1.40625 77.0178 3.60517 77.0178 6.44428V7.7525H74.791V10.8143H77.0178V22.5326H81.4156V10.8143H84.4217L84.8949 7.7525H81.4156V6.61129C81.4156 5.21957 81.9166 4.66288 83.197 4.66288Z"
                fill="#121212"
              />
              <path
                d="M92.7632 7.27931C88.254 7.27931 85.5262 10.3968 85.5262 15.1286C85.5262 20.111 88.2818 23.0058 92.7632 23.0058C97.2723 23.0058 100 19.8883 100 15.1565C100 10.1741 97.2723 7.27931 92.7632 7.27931ZM92.7632 10.5081C94.5446 10.5081 95.4353 11.872 95.4353 15.1565C95.4353 18.3574 94.5446 19.777 92.7632 19.777C90.9818 19.777 90.0911 18.4131 90.0911 15.1286C90.0911 11.9277 90.9818 10.5081 92.7632 10.5081Z"
                fill="#121212"
              />
              <path
                d="M10.2709 12.2365C12.0523 11.819 13.8059 10.5386 13.8059 8.08917C13.8059 4.47069 10.6327 3.16248 5.45555 3.16248H0V22.4517H6.20708C11.0503 22.4517 14.6131 21.227 14.6131 16.8292C14.6131 13.7117 12.4142 12.654 10.2709 12.2365ZM5.9009 6.39127C8.09982 6.39127 9.15752 6.92012 9.15752 8.53452C9.15752 10.1489 8.15549 10.8726 6.26274 10.8726H4.56485V6.39127H5.9009ZM6.23491 19.1394H4.56485V13.9066H6.56892C8.54517 13.9066 9.90905 14.6303 9.90905 16.5787C9.90905 18.6941 8.37816 19.1394 6.23491 19.1394Z"
                fill="#121212"
              />
              <path
                d="M30.2612 14.7694C30.2612 9.98191 27.6726 7.19847 23.4418 7.19847C18.9605 7.19847 16.5389 10.7056 16.5389 15.1313C16.5389 19.7518 19.044 22.9249 23.9707 22.9249C26.3644 22.9249 28.2572 22.0342 29.7324 20.8652L27.9231 18.4157C26.6428 19.3064 25.585 19.724 24.3882 19.724C22.5789 19.724 21.3264 19.0003 21.0202 16.356H30.1777C30.2334 15.9106 30.2612 15.2426 30.2612 14.7694ZM25.9469 13.7117H21.0202C21.215 11.0675 22.0779 10.1211 23.5531 10.1211C25.3067 10.1211 25.9191 11.5128 25.9469 13.5169V13.7117Z"
                fill="#121212"
              />
              <path
                d="M45.8974 14.7694C45.8974 9.98191 43.3088 7.19847 39.078 7.19847C34.5967 7.19847 32.1751 10.7056 32.1751 15.1313C32.1751 19.7518 34.6802 22.9249 39.6069 22.9249C42.0006 22.9249 43.8934 22.0342 45.3686 20.8652L43.5593 18.4157C42.279 19.3064 41.2212 19.724 40.0244 19.724C38.2151 19.724 36.9626 19.0003 36.6564 16.356H45.8139C45.8696 15.9106 45.8974 15.2426 45.8974 14.7694ZM41.5831 13.7117H36.6564C36.8512 11.0675 37.7141 10.1211 39.1893 10.1211C40.9429 10.1211 41.5553 11.5128 41.5831 13.5169V13.7117Z"
                fill="#121212"
              />
              <mask
                id="mask0"
                mask-type="alpha"
                maskUnits="userSpaceOnUse"
                x="49"
                y="0"
                width="7"
                height="23"
              >
                <path
                  d="M49.9755 9.76012C49.9755 9.16119 50.461 8.67566 51.0599 8.67566H54.3133C54.9122 8.67566 55.3978 9.16119 55.3978 9.76012V21.418C55.3978 22.017 54.9122 22.5025 54.3133 22.5025H51.0599C50.461 22.5025 49.9755 22.017 49.9755 21.418V9.76012Z"
                  fill="white"
                />
                <path
                  d="M55.6689 2.98226C55.6689 4.62932 54.3337 5.96452 52.6866 5.96452C51.0395 5.96452 49.7043 4.62932 49.7043 2.98226C49.7043 1.3352 51.0395 0 52.6866 0C54.3337 0 55.6689 1.3352 55.6689 2.98226Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M53.6388 24.0011C61.0307 24.0011 67.0231 18.2914 67.0231 11.2481C67.0231 4.20478 61.0307 -1.50494 53.6388 -1.50494C46.2468 -1.50494 40.2544 4.20478 40.2544 11.2481C40.2544 18.2914 46.2468 24.0011 53.6388 24.0011Z"
                  fill="url(#paint0_linear)"
                />
                <path
                  d="M64.0852 8.01764L40.3027 8.05402L40.3103 13.8623L64.0927 13.8259L64.0852 8.01764Z"
                  fill="#121212"
                />
                <path
                  d="M65.2593 18.3569L38.9253 18.3972L38.932 23.587L65.266 23.5467L65.2593 18.3569Z"
                  fill="#121212"
                />
                <path
                  d="M65.1939 -2.04652L38.8599 -2.0069L38.8666 3.11183L65.2006 3.07221L65.1939 -2.04652Z"
                  fill="#121212"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="40.1955"
                  y1="11.2968"
                  x2="67.0296"
                  y2="11.257"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.000330308" stop-color="#FF9900" />
                  <stop offset="1" stop-color="#FFCD00" />
                </linearGradient>
              </defs>
            </svg>

            <div id="cssmenu">
              <ul>
                <li class="has-sub ">
                  <a href="#">Тарифы</a>
                  <ul>
                    <li class="has-sub ">
                      <router-link to="/content">Актуальные ТП</router-link>
                    </li>
                    <li class="has-sub ">
                      <a href="#">Архив ТП</a>
                      <ul>
                        <li><a href="#">Sub Item</a></li>
                        <li>
                          <a href="#">Sub Item</a>
                          <ul>
                            <li><a href="#">Sub Item2</a></li>
                            <li><a href="#">Sub Item3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div id="cssmenu">
              <ul>
                <li class="has-sub ">
                  <a href="#">Услуги</a>
                  <ul>
                    <li class="has-sub "><a href="#">Product 1</a></li>
                    <li class="has-sub "><a href="#">Product 2</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <li><router-link to="/ncontent">Процедуры</router-link></li>
            <li><a href="badges.html">Базовая инфа</a></li>
            <div id="cssmenu">
              <ul>
                <li class="has-sub ">
                  <a href="#">GUS</a>
                  <ul>
                    <li class="has-sub "><a href="#">Product 1</a></li>
                    <li class="has-sub "><a href="#">Product 2</a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <li><a href="badges.html">Проекты</a></li>

            <div id="cssmenu">
              <ul>
                <li class="has-sub ">
                  <a href="#">Инструменты</a>
                  <ul>
                    <li class="has-sub ">
                      <a href="#">Product 1</a>
                      <ul>
                        <li><a href="#">Sub Item</a></li>
                        <li><a href="#">Sub Item</a></li>
                      </ul>
                    </li>
                    <li class="has-sub ">
                      <a href="#">Product 2</a>
                      <ul>
                        <li><a href="#">Sub Item</a></li>
                        <li>
                          <a href="#">Sub Item</a>
                          <ul>
                            <li><a href="#">Sub Item2</a></li>
                            <li><a href="#">Sub Item3</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <li><a href="badges.html">Интернет</a></li>
          </ul>
          <input type="text" name="search" placeholder="Поиск.." />
          <div class="nav__prof_notif">
            <a href="#sada" class="nav__link_img">
              <img src="../images/profile.png" alt="" />
            </a>
            <a href="#sads" class="nav__link_img">
              <img src="../images/notification-active.png" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </section>
  </div>
</template>
