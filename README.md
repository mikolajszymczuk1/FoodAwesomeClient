# Food Awesome Client

Food Awesome is a simple recipe app where you can store/create/share your recipes. <br>
``` !!! This project is a client app only and need working backend that serve api for client !!! ```

## 🚀 Project setup

---

Install all project packages:

```
npm install
```

Run dev server:

```
npm run watch
```

Run tests:

Unit
```
```

E2E
```
```

To build project

```
npm run build
```

or

```
npm run build:dev
```

or

```
npm run build:prod
```

## Preferred api for client (FoodAwesomeClient API v1)

| Method | Endpoint | Parameters | Data | Description |
|--------|----------|------------|------|-------------|
| <b>GET</b> | /api/recipes/random | null | null | <i>Return random recipe from database</i> |
| <b>GET</b> | /api/recipes | null | null | <i>Return all created recipes from database</i> |
| <b>GET</b> | /api/recipes/id | ( Integer ) id | | <i>Return recipe with specific id</i> |
| <b>GET</b> | /api/recipes/stats | null | null | <i>Return some statistic information like 'Number of created recipes'</i> |
| <b>POST</b> | /api/recipes/ | null | token, new recipe data | <i>Create new recipe</i>
| <b>PUT</b> | /api/recipes/id | ( Integer ) id | token, updated recipe data | <i>Update recipe</i>
| <b>DELETE</b> | /api/recipes/id | ( Integer ) id | token | <i>Delete recipe</i>
| <b>GET</b> | /api/recipes/id/details | (Integer) id | null | <i>Return details about recipe with specific id</i> |
| <b>POST</b> | /auth/login | null | login, password | <i>Log in user to service and return special secret token for user</i> |
| <b>POST</b> | /auth/register | null | login, email, password, repeat password | <i>Create new user record in database (Add new user)</i>
| <b>POST</b> | /users/id/recipes | ( Integer ) id | token | <i>Returns the user's recipes with the specified id</i> |
