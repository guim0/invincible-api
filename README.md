# Invincible API

Welcome to the Invincible API, an API that provides information about characters, races, and planets from the Invincible superhero universe.

## Who is Invincible?

![Invincible](src\assets\mark.jpg)

Invincible is the alter-ego from Mark Grayson, he is a half Human and half Viltrumite who is a race from a planet called Viltrum whose abilities are simillar to Superman from DC comics, to know more there is a animated series on Amazon Prime Video, but i always suggest to read the comic books from Image Comics.

## API Endpoints

| Endpoint                | Description                                |
| ----------------------- | ------------------------------------------ |
| **GET /characters**     | Get the list of all characters.            |
| **GET /characters/:id** | Get details of a specific character by ID. |
| **POST /characters**    | Add a new character.                       |
| **GET /races**          | Get the list of all races.                 |
| **GET /planets**        | Get the list of all planets.               |

---

### This API is being build with:

- Express (Node)
- MongoDB + Mongoose for modeling
