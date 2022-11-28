
## Run Locally

Clone the project

```bash
  git clone https://github.com/komengID/challenge-8.git
```

Go to the project directory

```bash
  cd Challenge-8
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

`DB_USER`

`DB_PASSWORD`

`DB_HOST`

`DB_PORT`

## API Reference

#### API

```http
  https://challenge-8-production-4db3.up.railway.app/
```
#### Authentication


```http
  POST /v1/auth/login
```

| Parameter    | Type     | Description                       |
| :--------    | :------- | :-------------------------------- |
| `email`       | `string` | **Required**. Email  |
| `password`      | `int`    | **Required**. Password |

#### GET all cars
```http
  GET /v1/cars
```
#### POST Create cars

```http
  POST /v1/cars
```

| Parameter    | Type     | Description                       |
| :--------    | :------- | :-------------------------------- |
| `name`       | `string` | **Required**. Name of car to fetch |
| `price`      | `int`    | **Required**. Price of car to fetch |
| `size`       | `string` | **Required**. size of car to fetch |
| `image`      | `string` | **Required**. image of car to fetch |

