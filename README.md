<img width="1248" alt="image" src="https://user-images.githubusercontent.com/1631778/179434364-eb7591c6-6fd8-4fa0-ad2c-deee4a20eb40.png">


# external-adapter

```
$ cp .env.sample .env
```
* Fill with Moralis API infos. Used in main.js

# run-node

* This launches below 3
  * Chainlink Node
  * Chainlink Node DB
  * External Adapter

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





