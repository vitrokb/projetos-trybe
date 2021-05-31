# Requisitos do projeto

### 1 - Crie um componente `<Header />`
#### 1.1 - Renderize o componente `<Header />`

Esse componente representará o cabeçalho da página.

**O que será verificado:**

  - O componente `<Header />` é renderizado sem quebrar a aplicação.

#### 1.2 - Renderize o texto "Movie Cards Library" dentro de `<Header />`

O texto deverá estar dentro de uma tag `h1`, que por sua vez deve estar dentro de uma tag `header`

**O que será verificado:**

  - O texto "Movie Cards Library" está dentro de uma tag `h1`.
  - O `h1` deve ser renderizado pelo componente `<Header />`.


### 2 - Crie um componente `<MovieList />`
#### 2.1 - Renderize o componente `<MovieList />`

Este componente representará toda a área com os cartões de filmes. `<MovieList />` deve receber uma prop `movies`, que é um array de objetos com informações de um filme.

**O que será verificado:**

  - O componente `<MovieList />` é renderizado sem quebrar a aplicação.

#### 2.2 - Renderize componentes `<MovieCard />` dentro de `<MovieList />`

`<MovieList />` deve renderizar um componente `<MovieCard />` para cada objeto contido no array recebido na prop `movies`.

**O que será verificado:**

  - O componente `<MovieList />` renderiza a quantidade correta de `<MovieCard />`.

#### 2.3 - Passe uma key para cada `<MovieCard />` renderizado

`<MovieList />` deve renderizar `<MovieCard />`s de forma dinâmica. Ou seja, deve utilizar a função `map` para renderizar uma lista. Cada componente `<MovieCard />` deve receber uma prop `key` com o nome do filme.

**O que será verificado:**

 - Cada `<MovieCard />` renderizado tem como `key` o título do filme.

### 3 - Crie um componente `<MovieCard />`
#### 3.1 - Renderize o componente `<MovieCard />`

Esse componente representa um cartão de filme. `<MovieCard />` deve receber uma prop `movie`. Essa prop será um objeto, contendo as propriedades, `title`, `subtitle`, `storyline`, `imagePath` e `rating`.

**O que será verificado:**

  - O componente `<MovieCard />` é renderizado sem quebrar a aplicação.

#### 3.2 - Renderize a imagem do filme dentro de uma tag `img`

`<MovieCard />` deve renderizar uma tag `img`, tendo como atributo `src` o valor da propriedade `imagePath` do objeto recebido como prop.

**O que será verificado:**

  - A imagem é renderizada dentro de uma tag `img`.
  - O atributo `src` da imagem deve ter o valor de `imagePath`.

#### 3.3 - Renderize o título do filme dentro de uma tag `h4`

`<MovieCard />` deve renderizar o título do filme dentro de uma tag `h4`. O título está contido na propriedade `title` do objeto recebido como prop.

**O que será verificado:**

  - O título do filme é renderizado dentro de uma tag `h4`.

#### 3.4 - Renderize o subtítulo do filme dentro de uma tag `h5`

`<MovieCard />` deve renderizar o subtítulo do filme dentro de uma tag `h5`. O subtítulo está contido na propriedade `subtitle` do objeto recebido como prop.

**O que será verificado:**

  - O subtítulo do filme é renderizado dentro de uma tag `h5`.

#### 3.5 - Renderize a sinopse do filme dentro de uma tag `p`

`<MovieCard />` deve renderizar a sinopse do filme dentro de uma tag `p`. A sinopse está contida na propriedade `storyline` do objeto recebido como prop.

**O que será verificado:**

  - A sinopse do filme é renderizada dentro de uma tag `p`.

#### 3.6 - Renderize o componente `<Rating />` dentro de `<MovieCard />`

`<MovieCard />` deve renderizar um componente `<Rating />`.

**O que será verificado:**

  - O componente `<Rating />` é renderizado pelo `<MovieCard />`.

#### 3.7 - Passe como prop para o componente `<Rating />` o atributo `rating`

`<MovieCard />` deve passar para o componente `<Rating />` uma prop chamada `rating`. O valor dessa prop é a propriedade `rating` do objeto recebido na prop `movie`.

**O que será verificado:**

  - O componente `<Rating />` recebe uma `prop` chamada `rating`.
  - O valor da *prop* `rating` é a propriedade `rating` do filme.

### 4 - Crie um componente `<Rating />`
#### 4.1 - Renderize o componente `<Rating />`

Esse componente representa a avaliação de um filme.

**O que será verificado:**

  - O componente `<Rating />` é renderizado sem quebrar a aplicação.

#### 4.2 - Renderize a nota de um filme dentro de `<Rating />`

`<Rating />` deve renderizar a nota do filme recebido na prop `rating` dentro de um elemento com a classe `rating`.

**O que será verificado:**

  - O componente `<Rating />` é renderizado dentro de um elemento com a classe `rating`.

### 5 - Crie um componente `<App />`
#### 5.1 - Renderize `<Header />` dentro do componente `<App />`

O componente `<App />` deve renderizar um componente `<Header />`.

**O que será verificado:**

  - Apenas um componente `<Header />` é renderizado pelo componente `<App />`.

#### 5.2 - Renderize `<MovieList />` dentro do componente `<App />`

O componente `<App />` deve renderizar um componente `<MovieList />`, passando como prop `movies` a lista de filmes contida no arquivo `data.js`. Para isso, você precisará importar `data.js` dentro de `App.js`.

**O que será verificado:**

  - Apenas um componente `<MovieList />` é renderizado pelo componente `<App />`.
  - `<MovieList />` recebe como *prop* `movie` a lista do arquivo `data.js`

### 6 - Adicione PropTypes a todos os componentes

Todos os componentes que recebem props devem ter suas proptypes corretamente declaradas. O ESLint checa automaticamente declaração de proptypes, portanto seu Pull Request deverá passar pela verificação do linter para satisfazer esse requisito.

---
