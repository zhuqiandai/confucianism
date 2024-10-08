category:: build

- ## Vite
-
- ```json
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  ```
-
-
- ## Typescript
- https://www.typescriptlang.org/tsconfig/#paths
-
- ```json 
  // 1. baseUrl
  
  // 2. paths
  {
    "compilerOptions": {
      "paths": {
          "app/*": ["./src/app/*"],
          "config/*": ["./src/app/_config/*"],
          "environment/*": ["./src/environments/*"],
          "shared/*": ["./src/app/_shared/*"],
          "helpers/*": ["./src/helpers/*"],
          "tests/*": ["./src/tests/*"]
      },
  }
  ```