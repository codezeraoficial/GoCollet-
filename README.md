
<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="250px" />
</h1>

<h4 align="center"> 
	 NextLevelWeek 1.0 APIRestful 🚀 Done! 
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codezeraoficial/ECollect?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codezeraoficial/ECollect">
	
  <a href="https://www.linkedin.com/in/leonardo-rviana/">
    <img alt="Made by LeonardoViana" src="https://img.shields.io/badge/made%20by-LeonardoViana-%2304D361">
  </a>

  <a href="https://github.com/codezeraoficial/ECollect/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codezeraoficial/ECollect">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/codezeraoficial/ECollect/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/codezeraoficial/ECollect?style=social">
  </a>
</p>





## :gear: APIREST

This service aims to provide, record and list data that a possible customer interacts with another application, be it front, desktop or mobile.
It is totally directed to a system called "Ecoleta", responsible for providing urban services for critical consciousness of environmental preservation. Making contaminated waste disposal points available for those interested to do it intelligently.

<h1 align="center">
    <img alt="Example" title="Example" src="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/rest-api-code-main.png" width="600px" />
</h1>


## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [Knex][knex]



## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### Install API 

```bash
# Clone this repository
$ git clone https://github.com/codezeraoficial/ECollect.git

# Go into the repository
$ cd NLW-1.0/backend

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

running on port 3333
```

## :battery: How does it work? 


1 - First download the [Insomnia][insomnia] it will simulate a client for us

Port: http://localhost:3333/


2 -  We will list all available items

    - Create a request of type GET, paste the url of the port concatenating with "items". Staying like this: http://localhost:3333/items
    - Click send and watch that
    - This should work by bringing all items

3 - Now We will now create a collection point.

    - Create a POST request paste the url of the port concatenating with "points". http://localhost:3333/points
    - Click on the body option and then json as we will send our request via body. Follow the pattern:

    {
     "name": "CollectRJ",
     "image": image.svg",
     "email": "contato@zeze.com.br",
     "whatsapp": "3199999999",
     "latitude": -46.81523,
     "longitude": -26.45681,
     "city": "Belo Horizonte",
     "street": "Rua São Pedro",
     "number": "91",
     "neighborhood": "Novo Progresso",
     "uf": "RJ",
     "items": 
      [
	1,
	2,
	6
      ]
     }

    - Click send and watch that
    - This should work by creating a new point

4 - This time we will list a single point specified by id

    - Create a request of type GET, paste the url of the port concatenating with "points/id" . Staying like this: http://localhost:3333/points/3
    - Click send and watch that
    - This should work by bringing a unique specified point

5 - In this last step we will list a single point specified by city, uf and items but via query params

    - Create a request of type GET, paste the url of the port concatenating with "points" . Staying like this: http://localhost:3333/points
    - Click on the query option. Follow the example:

          city  -  Belo Horizonte
          uf    -  Minas Gerais
          items -  1,2,3

    - Click send and watch that
    - This should work by bringing a unique specified point by query params


### If you performed each step, the possibility of working perfectly is 100%. If everything went well, you were able to interact with api, that means everything went well.

Thanks! :metal:

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[knex]: http://knexjs.org/
[insomnia]: https://insomnia.rest/
