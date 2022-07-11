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
        fallbackLng: 'ua',
        resources: {
          ua: {
            translation: {
              login: {
                title: 'Увійти до кабінету',
                p1: 'Введіть E-mail',
                p2: 'Введіть пароль',
                btn: 'Увійти',
                lins: {
                  p0: 'Забули пароль?',
                  p1: 'Немає облікового запису?  <a href="/register" class="link-color">Реєстрація</a>',
                  p2_1: 'Реєстрація'
                }
              },
              modalRegister: {
                header: 'Дякую за реєстрацію!',
                under: 'На Ваш E-mail було надіслано листа для підтвердження реєстрації. Для завершення процесу створення облікового запису виконайте інструкції в листі',
                btn: 'Перейти на пошту'
              },
              register: {
                header: 'Реєстрація',
                p1: 'Введіть Ім\'я',
                p2: 'Введіть Призвище',
                p3: 'Введіть По-батькові',
                p4: 'Введіть номер телефону',
                p5: 'Введіть E-mail',
                p6: 'Введіть пароль',
                p7: 'Повторіть пароль',
                btn: 'Зареєструватись',
                underBtn: 'Є обліковий запис? <a href="/login" class="link-color">Увійти</a>',
                underCondition1: 'Реєструючись, Ви погоджуєтесь з <a href="#" class="under-link">правилами використання</a> <a href="#" class="under-link">сайту</a> та даєте згоду на <a href="#" class="under-link">обробку персональних даних</a>',
              },
              cabinet: {
                title: 'Ваші транзакції',
                modal: {
                  header: 'Деталі заявки'
                },
                table: {
                  p1: 'ID заявки',
                  p2: 'Дата Обміну',
                  p3: 'Віддали',
                  p4: 'Курс', 
                  p5: 'Отримали',
                  p6: 'Статус',
                  p7: 'Напрямок',
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
                },
                modal: {
                  notice: "Звіряйте гаманець, адже неправильне введення призведе до втрати коштів",
                  buttonCharge: 'Розрахувати',
                  buttonCreate: 'Створити заявку',
                  header: 'Заявка',
                  p1: 'Ім\'я',
                  p2: 'Призвіще',
                  p3: 'По-батькові',
                  p4: 'Введіть гаманець',
                  p5: 'Введіть картку',
                  setReview: 'Залишити відгук'
                },
                modalReview: {
                  header: 'Відгук',
                  p1: 'Ім\'я',
                  p2: 'Заголовок',
                  p3: 'Опис',
                  btn: 'Надіслати'
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
              login: {
                title: 'Log In',
                p1: 'E-mail',
                p2: 'Password',
                btn: 'Log In',
                lins: {
                  p0: 'Forgot password?',
                  p1: 'No account?  <a href="/register" class="link-color">Sign up</a>',
                  p2_1: 'Sign up'
                }
              },
              register: {
                header: 'Registration',
                p1: 'Enter Name',
                p2: 'Enter Surname',
                p3: 'Enter Parental',
                p4: 'Enter a phone number',
                p5: 'Enter E-mail',
                p6: 'Enter password',
                p7: 'Repeat password',
                btn: 'Sign up',
                underBtn: 'Have an account? <a href="/login" class="link-color">Sign In</a>',
                underCondition1: 'By registering, you agree to <a href="#" class="under-link">rules of use</a> <a href="#" class="under-link">webresource</a> and you agree to <a href="#" class="under-link">processing of personal data</a>',
              },
              modalRegister: {
                header: 'Thank you for registering!',
                under: 'A letter to confirm registration has been sent to your e-mail. Follow the instructions in the email to complete the account creation process',
                btn: 'Go to mail'
              },
              cabinet: {
                title: 'Your transactions',
                modal: {
                  header: 'Order detail'
                },
                table: {
                  p1: 'Application ID',
                  p2: 'Date of Exchange',
                  p3: 'Gave away',
                  p4: 'Rate', 
                  p5: 'Received',
                  p6: 'Status',
                  p7: 'Way'
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
                },
                modal: {
                  notice: "Check your wallet, because incorrect entry will lead to loss of funds",
                  buttonCharge: 'Calculate',
                  buttonCreate: 'Create an application',
                  header: 'Application',
                  p1: 'Name',
                  p2: 'Surname',
                  p3: 'Middle name',
                  p4: 'Enter your wallet',
                  p5: 'Enter your card',
                  setReview: 'Review'
                },
                modalReview: {
                  header: 'Rewiev',
                  p1: 'Name',
                  p2: 'Title',
                  p3: 'Description',
                  btn: 'Send'
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
              login: {
                title: 'Войти в кабинет',
                p1: 'Введите E-mail',
                p2: 'Введите пароль',
                btn: 'Войти',
                lins: {
                  p0: 'Забыли пароль?',
                  p1: 'Нет учетной записи?  <a href="/register" class="link-color">Регистрация</a>',
                  p2_1: 'Регистрация'
                }
              },
              register: {
                header: 'Регистрация',
                p1: 'Введите Имя',
                p2: 'Введите Фамилию',
                p3: 'Введите Отчество',
                p4: 'Введите номер телефона',
                p5: 'Введите E-mail',
                p6: 'Введите пароль',
                p7: 'Повторите пароль',
                btn: 'Регистрация',
                underBtn: 'Есть ли учётная запись? <a href="/login" class="link-color">Войти</a>',
                underCondition1: 'Регистрируясь, Вы соглашаетесь с <a href="#" class="under-link">правилам использования</a> <a href="#" class="under-link">сайта</a> и даете согласие на <a href="#" class="under-link">обработку персональных данных</a>',
              },
              modalRegister: {
                header: 'Спасибо за регистрацию!',
                under: 'На Ваш e-mail отправлено письмо для подтверждения регистрации. Следуйте инструкциям в письме, чтобы завершить процесс создания учетной записи.',
                btn: 'Перейти на почту'
              },
              cabinet: {
                title: 'Ваши транзакции',
                modal: {
                  header: 'Детали заявки'
                },
                table: {
                  p1: 'ID заявки	',
                  p2: 'Дата Обмена',
                  p3: 'Дата Обмена',
                  p4: 'Курс', 
                  p5: 'Получили',
                  p6: 'Статус',
                  p7: 'Направление'
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
                },
                modal: {
                  notice: "Проверьте свой кошелек, ведь неверный ввод приведет к потере средств",
                  buttonCharge: 'Рассчитать',
                  buttonCreate: 'Создать заявку',
                  header: 'Заявка',
                  p1: 'Имя',
                  p2: 'Фамилия',
                  p3: 'Отчество',
                  p4: 'Введите кошелек',
                  p5: 'Введите карту',
                  setReview: 'Оставить отзыв'
                },
                modalReview: {
                  header: 'Отзыв',
                  p1: 'Имя',
                  p2: 'Оглавление',
                  p3: 'Описание',
                  btn: 'Отправить'
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