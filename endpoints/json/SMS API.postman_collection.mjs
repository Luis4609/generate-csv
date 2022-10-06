export const SMSArcanoCCA = {
	"info": {
		"_postman_id": "58be9da0-c509-41c8-aa7f-a361b0b25b54",
		"name": "SMS API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23669636"
	},
	"items": [
		{
			"name": "createUserSMS",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "lastDigitsPhoneNumber",
							"value": "2859",
							"type": "text"
						},
						{
							"key": "identificador",
							"value": "53730253E",
							"type": "text"
						},
						{
							"key": "tempPassword",
							"value": "optimissa",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/createUserSMS",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"createUserSMS"
					]
				},
				"description": "```\nCreación de nuevo usuario y envío de SMS con el código de usuario generado. \n```"
			},
			"response": []
		},
		{
			"name": "sendToken",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "lastDigitsPhoneNumber",
							"value": "2858",
							"type": "text"
						},
						{
							"key": "identifier",
							"value": "53730253A",
							"type": "text"
						},
						{
							"key": "sendType",
							"value": "1",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/sendToken",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"sendToken"
					]
				},
				"description": "```\nCreación de Token y envío por SMS o email\n```"
			},
			"response": []
		},
		{
			"name": "sendToken Contactos",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "email",
							"value": "alfredo.limon@optimissa.c",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/sendTokenC",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"sendTokenC"
					]
				},
				"description": "```\nCreación de Token y envío por SMS o email\n```"
			},
			"response": []
		},
		{
			"name": "getUrl",
			"request": {
				"method": "GET",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/getUrl?id=25d2b3ed",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"getUrl"
					],
					"query": [
						{
							"key": "id",
							"value": "25d2b3ed",
							"description": "id es la cadena corta almacenada en redis"
						}
					]
				},
				"description": "```\nBasado en la URL corta obtenemos la URL completa.\nA partir del parámetro id que es la cadena corta almacenada en redis obtenemos una URL completa\n* esta URL lleva como parámetro el token el cual se valida contra BD y el tiempo de vencimiento.\n\n```"
			},
			"response": []
		},
		{
			"name": "changePassword",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "token",
							"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGZyZWRvLmxpbW9uQG9wdGltaXNzYS5jb20iLCJleHAiOjE2NTA1NDY5MjksImlhdCI6MTY1MDU0NjMyOX0.-HEGw-XC8i8J7K0RUAHv0Yz0SC0V4xrz3bWcJE8tjnoPbva8zAP9DS4xOVdiY-Tbtv61v-yUxzWsZ8pYcTWaiw",
							"type": "text"
						},
						{
							"key": "password",
							"value": "alfredo.limon",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/changePassword",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"changePassword"
					]
				},
				"description": "```\nCambio de contraseña, la identificacion se realiza a traves del token recibido.\n\n```"
			},
			"response": []
		},
		{
			"name": "sendUser",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "phone",
							"value": "525551022596",
							"type": "text"
						},
						{
							"key": "identifier",
							"value": "00000001L",
							"type": "text"
						},
						{
							"key": "sendType",
							"value": "1",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/sendUser?phone&identifier&sendType",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"sendUser"
					],
					"query": [
						{
							"key": "phone",
							"value": "",
							"description": "Telefono del cliente"
						},
						{
							"key": "identifier",
							"value": "",
							"description": "Identificador de usuario"
						},
						{
							"key": "sendType",
							"value": "",
							"description": "Tipo de envio"
						}
					]
				},
				"description": "```\nRecuperación de usuario mediante el DNI y telefono de registro, el usuario es enviado al cliente \n dependiendo el tipo de envío seleccionado: 0 - SMS,  1 - E-Mail\n```"
			},
			"response": []
		},
		{
			"name": "sendCurrentUserSMS",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "lastDigitsPhoneNumber",
							"value": "2596",
							"type": "text"
						},
						{
							"key": "identificador",
							"value": "Y3002000P",
							"type": "text"
						},
						{
							"key": "tempPassword",
							"value": "optimissa2",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/sendCurrentUserSMS?lastDigitsPhoneNumber&identificador&tempPassword",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"sendCurrentUserSMS"
					],
					"query": [
						{
							"key": "lastDigitsPhoneNumber",
							"value": "",
							"description": "Últimos 4 dígitos del móvil asociado"
						},
						{
							"key": "identificador",
							"value": "",
							"description": "Número de documento"
						},
						{
							"key": "tempPassword",
							"value": "",
							"description": "Contraseña temporal generada"
						}
					]
				},
				"description": "```\nRecuperación de código de usuario actual a través de SMS. \n```"
			},
			"response": []
		},
		{
			"name": "sendNewUserSMS",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "lastDigitsPhoneNumber",
							"value": "2596",
							"type": "text"
						},
						{
							"key": "identificador",
							"value": "Y3002000P",
							"type": "text"
						},
						{
							"key": "tempPassword",
							"value": "optimissa3",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/sendNewUserSMS?lastDigitsPhoneNumber&identificador&tempPassword",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"sendNewUserSMS"
					],
					"query": [
						{
							"key": "lastDigitsPhoneNumber",
							"value": "",
							"description": "Últimos 4 dígitos del móvil asociado"
						},
						{
							"key": "identificador",
							"value": "",
							"description": "Número de documento"
						},
						{
							"key": "tempPassword",
							"value": "",
							"description": "Contraseña temporal generada"
						}
					]
				},
				"description": "```\nObtención de nuevo código de usuario a través de SMS.\n```"
			},
			"response": []
		},
		{
			"name": "saveNewCredentials",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "oldUserName",
							"value": "JA93GJ",
							"type": "text"
						},
						{
							"key": "newUserName",
							"value": "optimissa.test.sms",
							"type": "text"
						},
						{
							"key": "newPassword",
							"value": "optimissa",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/saveNewCredentials?oldUserName&newUserName&newPassword",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"saveNewCredentials"
					],
					"query": [
						{
							"key": "oldUserName",
							"value": "",
							"description": "Código de usuario actual"
						},
						{
							"key": "newUserName",
							"value": "",
							"description": "Nuevo código de usuario"
						},
						{
							"key": "newPassword",
							"value": "",
							"description": "Nueva contraseña"
						}
					]
				},
				"description": "```\nCambio de contraseña y de código de usuario si procede.\n```"
			},
			"response": []
		},
		{
			"name": "getUserInfo",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "oldUserName",
							"value": "JA93GJ",
							"type": "text"
						},
						{
							"key": "newUserName",
							"value": "optimissa.test.sms",
							"type": "text"
						},
						{
							"key": "newPassword",
							"value": "optimissa",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/saveNewCredentials?oldUserName&newUserName&newPassword",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"saveNewCredentials"
					],
					"query": [
						{
							"key": "oldUserName",
							"value": "",
							"description": "Código de usuario actual"
						},
						{
							"key": "newUserName",
							"value": "",
							"description": "Nuevo código de usuario"
						},
						{
							"key": "newPassword",
							"value": "",
							"description": "Nueva contraseña"
						}
					]
				},
				"description": "```\nCambio de contraseña y de código de usuario si procede.\n\n```"
			},
			"response": []
		},
		{
			"name": "getUsername",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/x-www-form-urlencoded"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "oldUserName",
							"value": "JA93GJ",
							"type": "text"
						},
						{
							"key": "newUserName",
							"value": "optimissa.test.sms",
							"type": "text"
						},
						{
							"key": "newPassword",
							"value": "optimissa",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/saveNewCredentials?oldUserName&newUserName&newPassword",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"saveNewCredentials"
					],
					"query": [
						{
							"key": "oldUserName",
							"value": "",
							"description": "Código de usuario actual"
						},
						{
							"key": "newUserName",
							"value": "",
							"description": "Nuevo código de usuario"
						},
						{
							"key": "newPassword",
							"value": "",
							"description": "Nueva contraseña"
						}
					]
				},
				"description": "```\nCambio de contraseña y de código de usuario si procede.\n\n```"
			},
			"response": []
		},
		{
			"name": "changePasswordSmsCode",
			"request": {
				"method": "POST",
				"header": [],
				"body": {
					"mode": "urlencoded",
					"urlencoded": [
						{
							"key": "code",
							"value": "123456",
							"type": "text"
						},
						{
							"key": "username",
							"value": "F5LUQZ",
							"type": "text"
						},
						{
							"key": "password",
							"value": "optimissa",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://localhost:8082/arcano-cca/SMS/changePasswordSmsCode?code&username&password",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "8082",
					"path": [
						"arcano-cca",
						"SMS",
						"changePasswordSmsCode"
					],
					"query": [
						{
							"key": "code",
							"value": "",
							"description": "El codigo enviado al usuario"
						},
						{
							"key": "username",
							"value": "",
							"description": "El usuario al cual se le va a realizar el cambio de password"
						},
						{
							"key": "password",
							"value": "",
							"description": "El nuevo password"
						}
					]
				},
				"description": "```\nCambio de contraseña, la identificacion se realiza a traves del codigo enviado por SMS\n```"
			},
			"response": []
		}
	]
}