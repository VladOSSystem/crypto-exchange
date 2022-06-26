const lngs = {
    ua: { nativeName: 'UA' },
    en: { nativeName: 'EN' },
    ru: { nativeName: 'RU' }
  };
  
  const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
    $('title').text($.t('head.title'))
    $('meta[name=description]').attr('content', $.t('head.description'))
  }
  
  $(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
      // detect user language
      .use(i18nextHttpBackend)
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      .use(i18nextBrowserLanguageDetector)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
          ua: {
            translation: {
              login: {
                title: '',
                p1: '',
                p2: '',
                p2_1: '',
                btn: ''
              },
              cabinet: {
                title: 'Ваші транзакції',
                table: {
                  p1: 'ID заявки',
                  p2: 'Дата Обміну',
                  p3: 'Віддали',
                  p4: 'Курс', 
                  p5: 'Отримали',
                  p6: 'Статус'
                },
                password: {
                  title: 'Змінити пароль',
                  pass1: 'Введіть старий пароль',
                  pass2: 'Введіть новий пароль',
                  pass3: 'Повторіть новий пароль',
                  btn: 'Змінити'
                }
              },
              termsPage: {
                title: 'Довідковий центр',
                elipse1: 'Все',
                elipse2: 'Як це працює?',
                elipse3: '',
                elipse4: 'Криптовалютні обміни',
              },
              head: {
                title: 'SS24 Обмін валют',
                exit: 'Вихід',
                description: 'The description of this awesome landing page.',
                bannerStatus1: "Автоматичний",
                bannerStatus2: "обмін Валют",
                status: "Перевірити статус операції"
              },
              calculator: {
                left: {
                  header: "Віддаєте",
                  radio1: "Криптовалюта",
                  radio2: "Фіат",
                  radio3: "Готівка",
                  radio4: "Банк",
                },
                right: {
                  header: "Отримуєте",
                  radio1: "Криптовалюта",
                  radio2: "Фіат",
                  radio3: "Готівка",
                  radio4: "Банк",
                }
              },
              whiteRow: {
                first: "Онлайн 24/7",
                second: "Вигідні курси валют",
                third: "Найкращі умови для постійних клієнтів"
              },
              registerIndex: {
                head: "Швидкі угоди через особистий кабінет",
                under: "Всі Ваші операції завжди під рукою. Сервіс доступний 24/7",
                button: "Зареєструватись зараз >>"
              },
              news: {
                title: 'Інвестиції в криптовалюти на довгостроки',
                desc: 'Вже понад рік біржі фіксують різке зростання припливу нових інвесторів, які бажають заробити на криптовалюті.',
                btn: 'Докладніше',
                allNews: 'Всі новини'
              },
              howItWorks: {
                title: "Як це працює",
                desc: "Завдання організації, особливо нова модель організаційної діяльності грає значної ролі у формуванні позицій, займаних учасниками щодо поставлених завдань. Товариші! реалізація намічених планових завдань представляє собою цікавий експеримент перевірки позицій, які займають учасники щодо поставлених завдань. Різноманітний та багатий досвід консультації з широким активом потребують визначення та уточнення напрямів прогресивного розвитку.",
                btn: 'Згорнути'
              },
              sliders: {
                question: 'Залишились питання?',
                q1: 'Як швидко відбувається обмін?',
                q1Desc: 'Все залежить від завантаженості мережі, в середньому обмін відбувається від 10 хвилин до 3-х годин.',
                btn: 'Всі питання'
              },
              mapsContact: {
                title: 'Отримати консультацію',
                input1: 'Як вас звати?',
                input2: 'Введіть телефон',
                input3: 'Коментар',
                mapsBtn: 'Залишити заявку'
              },
              footer: {
                left: {
                  p1: 'Угода користувача',
                  p2: 'Политика конфиденциальности',
                  p3: 'Комісії'
                },
                right: {
                  p1: 'Ми доступні для зв\'язку в Telegram',
                  p2: 'з 10.30 до 18.00',
                  p2_1: 'Відповідаємо швидко на всі запитання',
                  btn: 'Зв\'язатися з нами'
                }
              },
              intro: {
                title: 'Landing Page',
                subTitle: 'Some subtitle'
              }
            }
          },
          en: {
            translation: {
              cabinet: {
                title: 'Your transactions',
                table: {
                  p1: 'Application ID',
                  p2: 'Date of Exchange',
                  p3: 'Gave away',
                  p4: 'Rate', 
                  p5: 'Received',
                  p6: 'Status'
                },
                password: {
                  title: 'Change password',
                  pass1: 'Enter the old password',
                  pass2: 'Enter a new password',
                  pass3: 'Repeat the new password',
                  btn: 'Change'
                }
              },
              termsPage: {
                title: 'Help center',
                elipse1: 'All',
                elipse2: 'How it work?',
                elipse3: '',
                elipse4: 'Cryptocurrency exchanges',
              },
              head: {
                title: 'SS24 Currency exchange',
                exit: 'Exit',
                description: 'The description of this awesome landing page.',
                bannerStatus1: "Automatic",
                bannerStatus2: "currency exchange",
                status: "Check the status of the operation"
              },
              calculator: {
                left: {
                  header: "You give",
                  radio1: "Cryptocurrency",
                  radio2: "Fiat",
                  radio3: "Cash",
                  radio4: "Bank",
                },
                right: {
                  header: "You get",
                  radio1: "Cryptocurrency",
                  radio2: "Fiat",
                  radio3: "Cash",
                  radio4: "Bank",
                }
              },
              whiteRow: {
                first: "Online 24/7",
                second: "Favorable exchange rates",
                third: "The best conditions for regular customers"
              },
              registerIndex: {
                head: "Quick transactions through a personal account",
                under: "All your operations are always at hand. The service is available 24/7",
                button: "Register now >>"
              },
              news: {
                title: 'Investing in cryptocurrencies for the long term',
                desc: 'For more than a year, exchanges have been recording a sharp increase in the inflow of new investors who want to make money on cryptocurrency.',
                btn: 'More details',
                allNews: 'All news'
              },
              howItWorks: {
                title: "How it works",
                desc: "The tasks of the organization, especially the new model of organizational activity plays a significant role in shaping the positions held by participants in relation to the tasks. Comrades! the implementation of the planned tasks is an interesting experiment to verify the positions occupied by the participants in relation to the tasks. Diverse and rich experience of consultation with a wide range of assets requires the definition and clarification of areas of progressive development.",
                btn: 'Collapse'
              },
              sliders: {
                question: 'Questions left?',
                q1: 'How fast is the exchange?',
                q1Desc: 'It all depends on network congestion, on average the exchange takes from 10 minutes to 3 hours.',
                btn: 'All questions'
              },
              mapsContact: {
                title: 'Get a consultation',
                input1: 'What is your name?',
                input2: 'Enter the phone',
                input3: 'Comment',
                mapsBtn: 'Leave a request'
              },
              footer: {
                left: {
                  p1: 'User agreement',
                  p2: 'Privacy policy',
                  p3: 'Commissions'
                },
                right: {
                  p1: 'We are available for communication in Telegram',
                  p2: 'from 10.30 to 18.00',
                  p2_1: 'We answer all questions quickly',
                  btn: 'Contact us'
                }
              },
              intro: {
                title: 'Landing Page',
                subTitle: 'Some subtitle'
              }
            }
          },
          ru: {
            translation: {
              cabinet: {
                title: 'Ваши транзакции',
                table: {
                  p1: 'ID заявки	',
                  p2: 'Дата Обмена',
                  p3: 'Дата Обмена',
                  p4: 'Курс', 
                  p5: 'Получили',
                  p6: 'Статус'
                },
                password: {
                  title: 'Изменить пароль',
                  pass1: 'Введите старый пароль',
                  pass2: 'Введите новый пароль',
                  pass3: 'Повторите новый пароль',
                  btn: 'Изменить'
                }
              },
              termsPage: {
                title: 'Центр помощи',
                elipse1: 'Все',
                elipse2: 'Как это работает?',
                elipse3: '',
                elipse4: 'Криптовалютные биржи',
              },
              head: {
                title: 'SS24 Обмен валют',
                exit: 'Выход',
                description: 'The description of this awesome landing page.',
                bannerStatus1: "Автоматический",
                bannerStatus2: "обмен Валют",
                status: "Проверить статус операции"
              },
              calculator: {
                left: {
                  header: "Отдаете",
                  radio1: "Криптовалюта",
                  radio2: "Фиат",
                  radio3: "Наличные",
                  radio4: "Банк",
                },
                right: {
                  header: "Получаете",
                  radio1: "Криптовалюта",
                  radio2: "Фиат",
                  radio3: "Наличные",
                  radio4: "Банк",
                }
              },
              whiteRow: {
                first: "Онлайн 24/7",
                second: "Благоприятные обменные курсы",
                third: "Лучшие условия для постоянных клиентов"
              },
              registerIndex: {
                head: "Быстрые транзакции через личный офис",
                under: "Все ваши операции всегда под рукой.Услуга доступна 24/7",
                button: "Зарегистрируйтесь сейчас >>"
              },
              news: {
                title: 'Инвестиции в криптовалюту на длинные',
                desc: 'В течение более года обмены фиксируют резкое увеличение притока новых инвесторов, которые хотят получить криптовалюту.',
                btn: 'Подробно',
                allNews: 'Все новости'
              },
              howItWorks: {
                title: "Как это работает",
                desc: "Задача организации, особенно новая модель организационной деятельности, играет важную роль в формировании позиций, занятых участниками в установленном задаче.Товарищи!Реализация запланированных задач является интересным экспериментом по проверке позиций, которые участники занимают задачи.Различный и богатый опыт в консультациях с широким активом требует определения и уточнения областей прогрессивного развития.",
                btn: 'Свернуть'
              },
              sliders: {
                question: 'Остались вопросы?',
                q1: 'Как быстро происходит обмен?',
                q1Desc: 'Все зависит от загруженности сети, в среднем обмен происходит от 10 минут до 3-х часов.',
                btn: 'Все вопросы'
              },
              mapsContact: {
                title: 'Получить консультацию',
                input1: 'Как вас зовут?',
                input2: 'Введите телефон',
                input3: 'Комментарий',
                mapsBtn: 'Оставить заявку'
              },
              footer: {
                left: {
                  p1: 'Пользовательское соглашение',
                  p2: 'Политика конфиденциальности',
                  p3: 'Комиссии'
                },
                right: {
                  p1: 'Мы доступны для связи в Telegram',
                  p2: 'с 10.30 до 18.00',
                  p2_1: 'Отвечаем быстро на все вопросы',
                  btn: 'Связаться с нами'
                }
              },
              intro: {
                title: 'Landing Page',
                subTitle: 'Some subtitle'
              }
            }
          }
        }
      }, (err, t) => {
        if (err) return console.error(err);
  
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  
        // fill language switcher
        Object.keys(lngs).map((lng) => {
          const opt = new Option(lngs[lng].nativeName, lng);
          if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
          }
          $('#languageSwitcher').append(opt);
        });
        window.addEventListener('load', function () {
          const hook = document.querySelectorAll('.all-items');
          hook.forEach(v => v.addEventListener('click', (v) => {
            const conceptName =  document.querySelectorAll('.selected-item')[0].textContent.toLocaleLowerCase();
            i18next.changeLanguage(conceptName, () => {
              rerender();
            });
          }))
        })
        
        rerender();
      });
  });