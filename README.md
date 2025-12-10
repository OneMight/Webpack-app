# [Deploy](https://webpack-app-ten.vercel.app/)
# [Figma](https://www.figma.com/design/glo0wEa95C1QaexCf7AqUq/Multipurpose-Ecommerce-Website-Lo-fi-Template--Community---Copy-?node-id=0-1&p=f&t=pS8XsSOHHkAWnA1b-0)

This application realize [dummyjsonApi](https://dummyjson.com/) witch provide different url for a different needs
To login in app use [prepared users](https://dummyjson.com/users)
# Functionality
1. Authorization
2. Registration
3. Cart
4. Add to Cart
5. Delete from Cart
6. Detailed information about product
7. Viewing reviews
8. Viewing Cart
9. Filtration
10. Search production

# Dependencies

```
"devDependencies": {
    "@eslint/js": "^9.39.1",
    "@types/node": "^24.10.1",
    "@types/react": "^19.2.7",
    "@types/react-dom": "^19.2.3",
    "@types/webpack": "^5.28.5",
    "@types/webpack-dev-server": "^4.7.1",
    "@typescript-eslint/eslint-plugin": "^8.48.1",
    "@typescript-eslint/parser": "^8.48.1",
    "css-loader": "^7.1.2",
    "dotenv": "^17.2.3",
    "eslint": "^9.39.1",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-prettier": "^5.5.4",
    "eslint-plugin-react": "^7.37.5",
    "globals": "^16.5.0",
    "html-webpack-plugin": "^5.6.5",
    "jiti": "^2.6.1",
    "prettier": "^3.7.4",
    "style-loader": "^4.0.0",
    "ts-loader": "^9.5.4",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.3",
    "typescript-eslint": "^8.48.1",
    "webpack": "^5.103.0",
    "webpack-cli": "^6.0.1",
    "webpack-dev-server": "^5.2.2"
  },
  "dependencies": {
    "@mui/icons-material": "^7.3.6",
    "@mui/material": "^7.3.5",
    "@reduxjs/toolkit": "^2.11.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.9.6"
  }
```

# Intruction

To run this application first of all you need to clone repository to your computer
```
git clone https://github.com/OneMight/Webpack-app.git
```
After this you need to open code editor and open terminal. Write next expression
```
npm install
```
After installation dependencies open file ```package.json``` in root directory and complete script
```
"build:dev": "webpack --env mode=development",
```
And the last step: Open terminal and write:
```
npm run dev
```

