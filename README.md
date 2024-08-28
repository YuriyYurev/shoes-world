## ТЗ: "ShoesWorld" - онлайн-магазин обуви

**Название:**  ShoesWorld

**Описание:**  ShoesWorld - это онлайн-магазин, предлагающий широкий ассортимент качественной обуви от ведущих брендов по привлекательным ценам. Наш магазин ориентирован на молодых людей, которые ценят стиль, комфорт и удобство. Мы предлагаем стильную и качественную обувь на все случаи жизни: для спорта, прогулок, повседневной носки и  специальных событий.  

**Функционал:**

1. **Список товаров:**
    - Отображение списка товаров (кроссовок, ботинок, босоножек, сандалий,  т.д.). 
    - Каждая карточка товара должна содержать:
        - Название товара (например, "Nike Air Max 270")
        - Изображение
        - Краткое описание товара (например, "Стильные кроссовки Nike Air Max 270 с ярким дизайном, удобной посадкой и  легким  материалом"). 
        -  Цена (например, 120$). 
        -  Кнопка "Добавить в корзину" 
2. **Корзина:**
    -  Кнопка "Корзина" в шапке сайта. 
    -  При нажатии на кнопку открывается модальное окно (или отдельная страница) с корзиной. 
    -  В  корзине отображается  список  товаров  с  количеством.
    -  Для  каждого  товара  в  корзине:
        -  Кнопка  "Увеличить  количество"
        -  Кнопка  "Уменьшить  количество"
        -  Кнопка  "Удалить  из  корзины" 
    -  Общая  стоимость  товаров  в  корзине. 
3. **Дополнительные возможности (необязательные):**
    - Возможность сортировки товаров по цене, названию, популярности.
    -  Фильтрация  товаров  по  размеру,  цвету,  бренду.
    -  Поиск товаров по названию или  ключевым  словам.
4. **Облачное хранилище:**
    - Используем Cloud Storage для хранения данных о товарах (изображения, описания,  цены). 
    -  Пример реализации - Firebase Storage (или аналогичный  сервис  от  AWS  или  Azure). 
    -  Описание:  Сервис  cloud  storage  предоставляет  интерфейс  для  хранения,  загрузки  и  получения  данных  из  облачного  хранилища.  Это  позволяет  размещать  файлы  на  сервере  и  обращаться  к  ним  через  API.  
    
### Стек технологий

1. **React.js:**  Фреймворк для создания пользовательских интерфейсов. Он позволяет создавать интерактивные компоненты, управлять состоянием приложения и  эффективно рендерить страницу.
2. **TypeScript:** Язык программирования, который добавляет статическую типизацию к JavaScript. Это помогает избежать ошибок в коде, делает его более читаемым и  структурированным.
3. **Redux:** Библиотека для  управления состоянием приложения.  Она  позволяет  сохранять  данные  в  едином  месте  и  делать  их  доступными  для  всех  компонентов.  В  данном  проекте  Redux  будет  использоваться  для  хранения  списка  товаров  и  содержимого  корзины.
4. **Redux Toolkit:**  Упрощает  работу  с  Redux,  предоставляя  удобные  инструменты  для  создания  редуксеров  и  действий.
5. **Material-UI:**  Библиотека  компонентов  для  создания  UI.  Она  предоставляет  широкий  набор  готовых  компонентов,  что  позволяет  быстро  и  эффективно  разрабатывать  приложение.
6. **axios:** Библиотека для  работы  с  API.  Она  позволяет  отправлять  HTTP-запросы  к  серверу  и  получать  от  него  данные.  В  данном  проекте  axios  будет  использоваться  для  получения  данных  о  товарах  с  сервера.
7. **Cloud Storage:**  Firebase Storage,  AWS S3,  Azure Blob Storage  - сервисы для хранения  файлов в облаке.  


### Как  используются  технологии  в  приложении

* **React.js:**  Основа  приложения.  Все  компоненты  приложения  будут  написаны  на  React.js.
* **TypeScript:**  Обеспечивает  статическую  типизацию  кода  для  более  безопасной  и  структурированной  разработки.
* **Redux:**  Хранит  состояние  приложения,  такое как  список  товаров  и  содержимое  корзины.  
* **Redux Toolkit:**  Упрощает  работу  с  Redux.
* **Material-UI:**  Предоставляет  готовые  компоненты  для  создания  UI  (например,  кнопки,  ввод  текста,  модальные  окна).  
* **axios:**  Используется  для  получения  данных  о  товарах  с  сервера. 
* **Cloud Storage:**  Хранит  изображения,  описания  и  цены  товаров. 


### Детальное описание (с учетом стека)

1. **Список товаров:**
    -  Создай компонент `ProductItem` для отображения одного товара с помощью Material-UI. 
    -  Создай компонент `ProductList` для отображения списка товаров. 
    -  Используй Redux для хранения списка товаров (массив объектов с данными о товаре). 
    -  Получи данные о товарах (название, цена, описание, URL изображения) с сервера через axios.
    -  В компоненте `ProductList` отрисуй карточки товара, используя компонент `ProductItem`.
    -  Загружай изображения с  Cloud Storage  через  API  Firebase Storage  (или  аналогичного  сервиса).

2. **Корзина:**
    -  Создай компонент `Cart` для отображения корзины.
    -  Используй Redux для хранения товаров в корзине. 
    -  В компоненте `Cart` отрисуй список товаров из корзины, используя компонент `ProductItem`.
    -  Добавь логику:
        -  Добавления товара в корзину.
        -  Удаления товара из корзины.
        -  Изменения количества товара в корзине.
    -  Создай action creators для изменения состояния в Redux.

3. **Модальное окно (необязательное):**
    -  Создай компонент `CartModal` для отображения модального окна с корзиной.
    -  Используй состояние Redux для управления видимостью модального окна.

4. **Облачное хранилище:**
    -  Настройте  Cloud  Storage (например, Firebase Storage) для  хранения  данных  о  товарах  (изображения,  описания).  
    -  Получите  ссылки  на  изображения  с  Cloud  Storage  и  используйте  их  в  компонентах  `ProductItem`.


### Запуск приложения

-  Создай новый проект React.js с помощью `create-react-app` с поддержкой TypeScript: 
    ```bash
    npx create-react-app my-shop --template typescript 
    ```
-  Установи необходимые пакеты:
    ```bash
    npm install @material-ui/core @material-ui/icons redux redux-thunk redux-toolkit react-redux axios firebase
    ```
-  Создай компоненты `ProductItem`, `ProductList`, `Cart`, `CartModal` (необязательно).
-  Напиши код, который будет отрисовывать товары и  корзину.
-  Реализуй логику добавления, удаления и  изменения количества товаров в корзине с помощью Redux Toolkit.
-  Используй Material-UI для создания UI элементов.
-  Настройте Firebase Storage для  хранения  данных  о  товарах.  


### Дополнительные советы

-  Используй функциональные компоненты React.js.
-  Используй хуки `useState`, `useEffect` для управления состоянием.
-  Создай отдельные компоненты для  разных  частей приложения (например, шапку сайта, подвал).
-  Стилизуй приложение с помощью CSS, Material-UI или  других  библиотек  стилей. 

### Следующие этапы

1. Изучение TypeScript.  
2. Изучение Next.js. 
3.  ...и так далее, по плану. 

###  Помни:

-  Не бойся экспериментировать!  
-  Изучай документацию React.js, Redux,  Material-UI, Cloud Storage  (например, Firebase Storage). 
-  Используй онлайн-ресурсы (stackoverflow,  видео уроки), чтобы найти ответы на вопросы.  

```
my-shop/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ProductItem/
│   │   │   ├── ProductItem.tsx
│   │   │   └── ProductItem.styles.tsx
│   │   ├── ProductList/
│   │   │   ├── ProductList.tsx
│   │   │   └── ProductList.styles.tsx
│   │   ├── Cart/
│   │   │   ├── Cart.tsx
│   │   │   └── Cart.styles.tsx
│   │   ├── CartModal/
│   │   │   ├── CartModal.tsx
│   │   │   └── CartModal.styles.tsx
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.styles.tsx
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.styles.tsx
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── Button.styles.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   └── Home.styles.tsx
│   │   ├── Products/
│   │   │   ├── Products.tsx
│   │   │   └── Products.styles.tsx
│   │   ├── Cart/
│   │   │   ├── Cart.tsx
│   │   │   └── Cart.styles.tsx
│   │   └── ...
│   ├── services/
│   │   ├── firebase/
│   │   │   └── firebase.ts
│   │   ├── api/
│   │   │   └── productsApi.ts
│   │   └── ...
│   ├── store/
│   │   ├── rootSlice.ts
│   │   ├── cartSlice.ts
│   │   ├── productsSlice.ts
│   │   ├── store.ts
│   │   └── ...
│   ├── hooks/
│   │   ├── useProducts.ts
│   │   ├── useCart.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   ├── index.css
│   └── ...
├── package.json
├── tsconfig.json
├── .eslintrc.json
└── ...

```

**Объяснение:**

* **`public/`:**  Статические файлы, которые будут использоваться в вашем приложении (например, `index.html`, `favicon.ico`).
* **`src/`:**  
    * **`components/`:**  Компоненты пользовательского интерфейса, например, `ProductItem`, `ProductList`, `Cart`, `CartModal`, `Header`, `Footer`. 
    * **`pages/`:**  Страницы вашего приложения (например, `Home`, `Products`, `Cart`). 
    * **`services/`:**  Файлы, отвечающие за взаимодействие с Firebase Storage (например, `firebase.ts`) или с API (например, `productsApi.ts`).
    * **`store/`:**  Файлы, отвечающие за управление состоянием приложения с помощью Redux (например, `store.ts`, `productsSlice.ts`, `cartSlice.ts`).
    * **`hooks/`:**  Кастомные хуки, которые могут быть использованы в разных компонентах, например, `useProducts` для работы с данными о товарах.
    * **`App.tsx`:**  Основной компонент вашего приложения.
    * **`index.tsx`:**  Точка входа в приложение.
    * **`index.css`:**  Файл стилей приложения.

**Дополнительные рекомендации:**

* **Используйте  стили  CSS-in-JS  (например,  `styled-components`  или  Material-UI  стили):**  Это  упрощает  стилизацию  компонентов  и  делает  код  более  организованным.
* **Разбейте  большие  компоненты  на  более  мелкие:**  Это  улучшит  читаемость  и  обслуживание  кода.
* **Используйте  принципы  SOLID  для  организации  кода:**  Это  поможет  сделать  код  более  гибким,  расширяемым  и  легко  тестируемым.

**Пример:**

```
src/
└── components/
    └── ProductItem/
        ├── ProductItem.tsx
        └── ProductItem.styles.tsx

src/
└── components/
    └── ProductItem/
        └── ProductItem.tsx

```

**Пример  `ProductItem.tsx`:**

```typescript
import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Product } from '../../store/productsSlice';
import { useCart } from '../../hooks/useCart';
import { ProductItemStyles } from './ProductItem.styles';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <ProductItemStyles>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <img src={product.imageUrl} alt={product.name} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" gutterBottom>
            ${product.price}
          </Typography>
          <Button variant="contained" onClick={handleAddToCart}>
            Добавить в корзину
          </Button>
        </Grid>
      </Grid>
    </ProductItemStyles>
  );
};

export default ProductItem;
```

**Пример `ProductItem.styles.tsx`:**

```typescript
import styled from '@emotion/styled';

export const ProductItemStyles = styled('div')`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
```
