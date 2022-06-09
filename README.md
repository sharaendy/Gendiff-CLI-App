#### Tests and Linter status:

[![Actions Status](https://github.com/sharaendy/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/sharaendy/frontend-project-lvl2/actions)  

#### CodeClimate: Test Coverage and Maintainability:

[![Test Coverage](https://api.codeclimate.com/v1/badges/9a557dced408d87e5cb1/test_coverage)](https://codeclimate.com/github/sharaendy/frontend-project-lvl2/test_coverage)[![Maintainability](https://api.codeclimate.com/v1/badges/9a557dced408d87e5cb1/maintainability)](https://codeclimate.com/github/sharaendy/frontend-project-lvl2/maintainability)



## Установка

- `git clone` https://github.com/sharaendy/frontend-project-lvl2
- `make install` - *установить зависимости*
- `make link` - *установить приложение 'gendiff'*



## Описание

CLI-утилита сравнивает два конфигурационных файла с форматом **.json**, **.yaml** или **.yml**. Приложение принимает через командную строку два аргумента — пути до этих файлов (работает как с *относительными*, так и *абсолютными* путями) и выводит результат сравнения в указанном формате.  

- #### Использование

```bash
gendiff [options] <filepath1> <filepath2>
```

- #### Опции

помощь:

```bash
-h, --help 
```

выбрать формат:

```bash
-f, --format <format>
```

доступные форматы:

```bash
stylish (по умолчанию)
plain
json
```

- #### Пример

```bash
gendiff -f stylish <filepath1> <filepath2>
```



## Особенности

- Обеспечена кроссплатформенность;
- Код построен в иммутабельном стиле;
- Реализовано тестирование кода ( Jest );
- На Codeclimate проверяется покрытие тестами, бейджик его отображает;
- На Github Actions проверяются и стандарты кодирования (eslint airbnb) и прогоняются тесты;
- Код намеренно (в учебных целях) построен на переменных, циклах, а так же функциях высшего порядка и рекурсии;
- Внутреннее представление — это дерево, где каждый элемент — это узел, имеющий свой тип;



## Демонстрация

##### 1. Сравнение "плоских" .json файлов (формат stylish);

[![asciicast](https://asciinema.org/a/0FRB4KTZ4pH4NY0BCDnC8Ljfj.svg)](https://asciinema.org/a/0FRB4KTZ4pH4NY0BCDnC8Ljfj)

##### 2. Сравнение "плоских" .yaml и .yml файлов (формат stylish);

[![asciicast](https://asciinema.org/a/WlfEET07A0V07EGKQxjvZRfQL.svg)](https://asciinema.org/a/WlfEET07A0V07EGKQxjvZRfQL)

##### 3. Сравнение многоуровневых .json  файлов (формат stylish);

[![asciicast](https://asciinema.org/a/Ux6R3fOdasYc9pedxtt5zG32u.svg)](https://asciinema.org/a/Ux6R3fOdasYc9pedxtt5zG32u)

##### 4. Сравнение многоуровневых .yaml и .yml файлов (формат stylish);

[![asciicast](https://asciinema.org/a/Q6AAr3oWutGnCtpojGeeVRCxl.svg)](https://asciinema.org/a/Q6AAr3oWutGnCtpojGeeVRCxl)

##### 5. Сравнение многоуровневых .json  файлов (формат plain);

[![asciicast](https://asciinema.org/a/pyrL6wdh6sV31k1dj2maH2bQ1.svg)](https://asciinema.org/a/pyrL6wdh6sV31k1dj2maH2bQ1)

##### 6. Сравнение многоуровневых .yaml и .yml файлов (формат plain);

[![asciicast](https://asciinema.org/a/7sIhMiF82JPnBHZ6e5gfzrBui.svg)](https://asciinema.org/a/7sIhMiF82JPnBHZ6e5gfzrBui)

##### 7. Сравнение многоуровневых .json  файлов (выходной формат json);

[![asciicast](https://asciinema.org/a/BKBPCBRfMZf13bAvXkvuJ4mWU.svg)](https://asciinema.org/a/BKBPCBRfMZf13bAvXkvuJ4mWU)

##### 8. Сравнение многоуровневых .yaml и .yml файлов (выходной формат json);

[![asciicast](https://asciinema.org/a/egbO6AosrNFYzbQlT2u92GV4M.svg)](https://asciinema.org/a/egbO6AosrNFYzbQlT2u92GV4M)

## Автор

Шараевский Андрей (sharaendy)

[aash7133@gmail.com](mailto:aash7133@gmail.com)
