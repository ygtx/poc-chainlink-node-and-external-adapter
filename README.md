<img width="1245" alt="image" src="https://user-images.githubusercontent.com/1631778/179432881-9a71d935-33ae-4aac-9df2-87e483ea8326.png">


# external-adapters

```
$ cp .env.sample .env
```
* Fill with Moralis API infos. Used in main.js

# run-node

```
$ cp -r chainlink-volume.sample chainlink-volume
$ vim chainlink-volume/apicredentials

Decide parameters below which are used to login Chianlink Node Operator GUI.
* your_email_address_to_login_chainlink_operator_gui
* your_password_to_login_chainlink_operator_gui

$ cp .env.sample .env

set parameters below
$USERNAME
$PASSWORD
$DOCKER_INSTANCE_NAME
$DATABASE
$INFURA_KEY

$ cp database.env.sample database.env

decide parameters
```

# docker 

```
$ cd run-mode
$ docker-compose up
```

# Chainlink Node

* Login http://localhost:6688 and set adapter
  * https://zenn.dev/allegorywrite/articles/a8be18daa57980
* JOB script is ./jobs





