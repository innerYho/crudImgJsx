# crudImgJsx

npm init -y
`npm i express express-myconnection cors mysql2`

npm i nodemon -D

nos vamos al apartado de scripts del archivo y lo configuramos con la siguiente linea de código

`"start": "nodemon src/index.js"`

usar File system para ingresar a los archivos del sistema
npm i multer


npm i fs
Paquete de retención de seguridad



CREATE USER 'devuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'DevUser$';
GRANT ALL PRIVILEGES ON *.* TO 'devuser'@'localhost' WITH GRANT OPTION;
ALTER USER 'devuser'@'localhost' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
