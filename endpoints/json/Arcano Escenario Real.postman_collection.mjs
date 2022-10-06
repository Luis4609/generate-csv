export const collectionArcano = {
	"info": {
		"_postman_id": "b5794a6c-c7bb-4434-83b3-dd900e5419ab",
		"name": "Arcano Escenario Real",
		"description": "Escenarios de Arcano con casos de pruebas reales.",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23669636"
	},
	"items": [
		{
			"name": "API Consulta",
			"item": [
				{
					"name": "api/v1/getInfo",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/getInfo",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"getInfo"
							]
						},
						"description": "Obtiene la información básica asociada al usuario que previamente ha hecho login en la aplicación."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accounts",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"disabled": true
							}
						],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts?pageNo=0&pageSize=10&sortBy=id",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"Accounts"
							],
							"query": [
								{
									"key": "pageNo",
									"value": "0",
									"description": "Página solicitada"
								},
								{
									"key": "pageSize",
									"value": "10",
									"description": "Número máximo de elementos resultantes"
								},
								{
									"key": "sortBy",
									"value": "id",
									"description": "Indica el patron de ordenamiento de la información"
								}
							]
						},
						"description": "Retorna las cuentas asociadas a un usuario, el usuario se toma de la sesión, por lo que previamente debió de haber hecho un login en la aplicación"
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accounts/BasicInformation",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicInformation",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"Accounts",
								"BasicInformation"
							]
						},
						"description": "Obtención de los datos para el buscador basico y los valores acumulativos del usuario logueado, retorna una lista de cuentas, con datos de nombres de las cuentas."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accouts/BasicSearch",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicSearch?literal=ARcano&pageNo=0&pageSize=25&sortBy=id",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"Accounts",
								"BasicSearch"
							],
							"query": [
								{
									"key": "literal",
									"value": "ARcano"
								},
								{
									"key": "pageNo",
									"value": "0",
									"description": "Página solicitada"
								},
								{
									"key": "pageSize",
									"value": "25",
									"description": "Número máximo de elementos resultantes"
								},
								{
									"key": "sortBy",
									"value": "id",
									"description": "Indica el patron de ordenamiento de la información"
								}
							]
						},
						"description": "Buscador básico para obtener las posiciones de un usuario."
					},
					"response": []
				},
				{
					"name": "api/v2/userApi/Accouts/BasicSearch V2",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v2/userApi/Accounts/BasicSearch?literal=ARcano&pageNo=0&pageSize=25&sortBy=id",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v2",
								"userApi",
								"Accounts",
								"BasicSearch"
							],
							"query": [
								{
									"key": "literal",
									"value": "ARcano",
									"description": "Literal que se quiere buscar"
								},
								{
									"key": "pageNo",
									"value": "0",
									"description": "Página solicitada"
								},
								{
									"key": "pageSize",
									"value": "25",
									"description": "Número máximo de elementos resultantes"
								},
								{
									"key": "sortBy",
									"value": "id",
									"description": "Indica el patron de ordenamiento de la información"
								}
							]
						},
						"description": "Buscador básico para obtener las posiciones de un usuario, la búsqueda se realiza a través del parámetro literal."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accouts/AdvancedSearch",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/AdvancedSearch?literal=Arcano&pageNo=0&pageSize=100&sortBy=id",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"Accounts",
								"AdvancedSearch"
							],
							"query": [
								{
									"key": "literal",
									"value": "Arcano",
									"description": "Literal que se quiere buscar"
								},
								{
									"key": "pageNo",
									"value": "0",
									"description": "Página solicitada"
								},
								{
									"key": "pageSize",
									"value": "100",
									"description": "Número máximo de elementos resultantes"
								},
								{
									"key": "sortBy",
									"value": "id",
									"description": "Patrón de ordenamiento. (Valor por defecto id)"
								}
							]
						},
						"description": "Método de búsqueda avanzada, obtiene las posiciones asociadas a un usuario."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/descarga_documentos",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/documentos/16046",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"documentos",
								"16046"
							],
							"query": [
								{
									"key": "documentId",
									"value": "16046",
									"description": "El Id del documento",
									"disabled": true
								}
							]
						},
						"description": "Método diseñado para descargar un documento, el documento se indica mediante el parámetro recibido."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/documentos/categorias",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/documentos/categorias",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"documentos",
								"categorias"
							]
						},
						"description": "Obtiene las categorías de los documentos asociados con el usuario logueado."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/estrategiasCliente",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/estrategiasCliente",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"estrategiasCliente"
							]
						},
						"description": "Método usado para obtener el detalle de la(s) estrategia(s) asociadas a la(s) cuenta(s) del cliente logueado. Devuelve una lista de estrategias de todas las cuentas."
					},
					"response": []
				},
				{
					"name": "userApi/posicionIntegradaV1",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"accounts\":[],\r\n    \"searchDate\" : \"2022-06-06\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionIntegrada",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"posicionIntegrada"
							]
						},
						"description": "Método que obtiene los cálculos para la última posición de cada una de las cuentas y productos del usuario logueado. En caso de que no se indiquen las cuentas en la llamada del endopoint, se procesaran todas las cuentas del usuario."
					},
					"response": []
				},
				{
					"name": "userApi/posicionIntegradaV2",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"accounts\":[],\r\n    \"searchDate\" : \"2022-06-06\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v2/userApi/posicionIntegrada",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v2",
								"userApi",
								"posicionIntegrada"
							]
						},
						"description": "```\nMetodo que obtiene la Posicion integrada de las cuentas seleccionadas para el usuario logueado, peticion realizada : POST METHOD.\n\n```"
					},
					"response": []
				},
				{
					"name": "userApi/posicionesUsuario",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"accounts\" : [],\r\n    \"endDate\" : \"2022-01-01\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionesUsuario",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"posicionesUsuario"
							]
						},
						"description": "Devuelve un listado de posiciones integradas disponibles para el usuario logueado."
					},
					"response": []
				},
				{
					"name": "userApi/detallePosicion",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"accounts\" : [],\r\n    \"listProductIdStrategy\": [],\r\n    \"searchDate\": \"2022-06-02\",\r\n    \"pageNo\": 0,\r\n    \"pageSize\": 28,\r\n    \"sortBy\": \"\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/detallePosicion",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"detallePosicion"
							]
						},
						"description": "Devuelve el detalle de las posiciones para la(s) cuenta(s) asociada(s) en la fecha pasada, si no se indica la fecha, se toma la posición más reciente. El detalle de posiciones procesadas se divide en dos bloques, posiciones extendidas y reducidas, las posiciones extendidas son aquellas cuya categorización corresponde a multi estrategia o crédito, el resto se considera como una posición reducida, una vez obtenidas las posiciones estas se agrupan por producto."
					},
					"response": []
				},
				{
					"name": "getUserData",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/getUserData",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"getUserData"
							]
						},
						"description": "Obtiene el id, el email y teléfono del usuario logueado."
					},
					"response": []
				},
				{
					"name": "sendValidationCode",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "sendType",
									"value": "1",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/sendValidationCode",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"sendValidationCode"
							]
						},
						"description": "Envía un código de confirmación al correo o móvil del usuario logueado. El tipo de envío lo define el parámetro sendType Tipo de envío: 0 - SMS, 1 - EMail"
					},
					"response": []
				},
				{
					"name": "updateUserData",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"id\":\"1001\",\r\n    \"phone\" : \"\",\r\n    \"email\" : \"alfredo.limon@optimissa.com\",\r\n    \"validationCode\" : \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbGZyZWRvLmxpbW9uQG9wdGltaXNzYS5jb20iLCJleHAiOjE2NTcyMTU3MTMsImlhdCI6MTY1NzIxNTExM30.1RpaVunYklQKSkXsSustZZItZ_HgCrlwbp75fTYUwDvZ6QqfXZOm3SviRrGQ3qVzcYlY-J40qnpYMQL5WQZ5Yg\",\r\n    \"password\" : \"\",\r\n    \"oldPassword\" : \"\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/updateInfo",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"updateInfo"
							]
						},
						"description": "Permite actualizar el email, el móvil o password de un usuario. No permite actualizar el móvil y el Email al mismo tiempo, para actualizar el password se requiere un código de validación el cual se envía mediante sendValidationCode, solo actualiza usuarios de tipo No distribuidor."
					},
					"response": []
				},
				{
					"name": "userApi/documentos",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"accounts\": [\r\n],\r\n    \"initDate\": \"1970-01-01\",\r\n    \"endDate\": \"\",\r\n    \"literal\": \"\",\r\n    \"tiposDocumentos\": [1,2,3,4,5,6,7,8,9,10,11,12],\r\n    \"onlyUnread\": false,\r\n    \"pageNo\": 0,\r\n    \"pageSize\": 500,\r\n    \"sortBy\": \"date\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/documentos",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"documentos"
							]
						},
						"description": "Método que retorna documentos asociados con las cuentas y productos seleccionados para el usuario logueado. El endpoint acepta diferentes parámetros los cuales utiliza para hacer una búsqueda mas especifica."
					},
					"response": []
				},
				{
					"name": "/api/v1/userApi/documentoGenerico",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentoGenerico?productId=340&categoryId=2&date=2022-06-02",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8082",
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"documentoGenerico"
							],
							"query": [
								{
									"key": "productId",
									"value": "340",
									"description": "El id del producto"
								},
								{
									"key": "categoryId",
									"value": "2",
									"description": "Id de la categoria del documento"
								},
								{
									"key": "date",
									"value": "2022-06-02",
									"description": "Fecha del documento  a buscar. (Formato yyyy-MM-dd)"
								}
							]
						},
						"description": "Devuelve un documento de tipo genérico basado en los parámetros de búsqueda recibidos y el usuario logueado."
					},
					"response": []
				},
				{
					"name": "documentsUnread",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/documentos/documentsUnread",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"documentos",
								"documentsUnread"
							]
						},
						"description": "Método diseñado para obtener el numero de documentos que aun no han sido leídos por un usuario, se realiza una agrupación por el titulo del documento."
					},
					"response": []
				},
				{
					"name": "updateReadingStatus",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/documentos/updateReadingStatus?docLeidoId=50",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"documentos",
								"updateReadingStatus"
							],
							"query": [
								{
									"key": "docLeidoId",
									"value": "50",
									"description": "El Id del documento"
								}
							]
						},
						"description": "Actualiza el estatus de un documento a leído."
					},
					"response": []
				},
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
									"value": "0000",
									"description": "Últimos 4 dígitos del móvil asociado",
									"type": "text"
								},
								{
									"key": "identificador",
									"value": "03856453C",
									"description": "Identificador del cliente (DNI/NIF)",
									"type": "text"
								},
								{
									"key": "tempPassword",
									"value": "optimissa",
									"description": "Contraseña temporal generada",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/createUserSMS",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"createUserSMS"
							]
						},
						"description": "Creación de nuevo usuario basado en los tipos inversor, representante o contacto, al mismo tiempo asocia las cuentas con el usuario creado."
					},
					"response": []
				},
				{
					"name": "createContact",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "email",
									"value": "limon@optimissa.comp",
									"description": "El Email del contacto a crear",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/createContact",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"createContact"
							]
						},
						"description": "Ingresa la información del usuario en la tabla de loguin para darle acceso a la aplicación."
					},
					"response": []
				},
				{
					"name": "createContactAndRelation",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"name\":\"contacto\",\r\n    \"lastName\":\"evidencia\",\r\n    \"secondLastName\":\"\",\r\n    \"email\":\"prueba.a.contacto@test.com\",\r\n    \"accountsId\":[2778,2510],\r\n    \"productsId\":[78,331],\r\n    \"terminationDate\":\"9999-12-01\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/contact/createContact",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"contact",
								"createContact"
							]
						},
						"description": "Inserta la información necesario para un contacto y asocia las cuentas y productos con el contacto. En caso de que el contacto ya exista, solo actualiza la relación de las cuentas con el usuario encontrado. No crea un usuario para la aplicación crea el contacto y la relación de cuentas."
					},
					"response": []
				},
				{
					"name": "getContactInfo",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": ""
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/contact/getContactInfo",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"contact",
								"getContactInfo"
							]
						},
						"description": "Obtiene la información de los contactos relacionados a un usuario de tipo inversor/representante, el usuario del cual obtiene las relaciones, es del usuario logueado en la aplicación."
					},
					"response": []
				},
				{
					"name": "updateTerminationDate",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "contactId",
									"value": "15",
									"description": "El id del contacto a modificar",
									"type": "text"
								},
								{
									"key": "accountId",
									"value": "2510",
									"description": "El id de la cuenta del contacto a modificar",
									"type": "text"
								},
								{
									"key": "productId",
									"value": "331",
									"description": "El id del producto del contacto a modificar",
									"type": "text"
								},
								{
									"key": "terminationDate",
									"value": "2022-07-06",
									"description": "Fecha de baja de contacto",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/user/contact/updateTerminationDate",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"user",
								"contact",
								"updateTerminationDate"
							]
						},
						"description": "Actualiza la fecha de vencimiento de un contacto con la cuenta y producto indicado."
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
									"value": "0001",
									"description": "Últimos 4 dígitos del móvil asociado",
									"type": "text"
								},
								{
									"key": "identifier",
									"value": "03856453C",
									"description": "Identificador de cliente (NIF/DNI)",
									"type": "text"
								},
								{
									"key": "sendType",
									"value": "1",
									"description": "Metodo de envio 0 - SMS, 1 - EMail",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/sendToken",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"sendToken"
							]
						},
						"description": "Endpoint que genera un token para confirmación de cambios de información y realiza el envío del mismo por SMS o email."
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
									"value": "alfredo.limon@optimissa.com",
									"description": "El Email del contacto",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/sendTokenC",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"sendTokenC"
							]
						},
						"description": "Endpoint que genera un token específicamente para contactos (para los contactos solo se garantiza tener como dato el email), una vez generado el token se realiza el envío del mismo por email."
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
							"raw": "http://{{server}}/arcano-cca/SMS/getUrl?id=22c15685",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"getUrl"
							],
							"query": [
								{
									"key": "id",
									"value": "22c15685",
									"description": "id es la cadena corta almacenada en redis"
								}
							]
						},
						"description": "Método que permite obtener una URL completa basado en una URL corta\n\nA partir del parámetro id que es la cadena corta obtenemos una URL completa esta URL lleva como parámetro el token el cual se valida contra BD y el tiempo de vencimiento. Se invoca después de haber generado un token con el endpoint sendToken."
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
									"value": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaW1vbkBvcHRpbWlzc2EuY29tcCIsImV4cCI6MTY1NDE5MzM0OCwiaWF0IjoxNjU0MTkyNzQ4fQ.Zo4TTqyqRrr_i8C5aHB4ilec22IQUogF0Lfhhec9Z74_1PSv6jO2XwZBpYFJwaiaurj1rpIqP9_L6H-LTdd2mA",
									"description": "Token de validación",
									"type": "text"
								},
								{
									"key": "password",
									"value": "optimissa",
									"description": "El nuevo password",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/changePassword",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"changePassword"
							]
						},
						"description": "Permite realizar un cambio de contraseña, el método utiliza un sistema de validación contra un token generado previamente. Los token tiene reglas de validación, como lo son tiempo de vigencia (10 minutos) y estatus de uso."
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
									"value": "654911812",
									"description": "Identificador de usuario",
									"type": "text"
								},
								{
									"key": "identifier",
									"value": "00000001L",
									"description": "Telefono del cliente",
									"type": "text"
								},
								{
									"key": "sendType",
									"value": "1",
									"description": "Tipo de envio (0 - SMS,  1 - E-Mail)",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/sendUser",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"sendUser"
							]
						},
						"description": "Recuperación de usuario mediante el DNI y teléfono de registro, el nombre de usuario es enviado al cliente dependiendo el tipo de envío seleccionado: 0 - SMS, 1 - E-Mail, la obtención de la información del cliente se hace a través del identificador proporcionado."
					},
					"response": []
				},
				{
					"name": "sendCurrentUserSMS",
					"protocolProfileBehavior": {
						"disabledSystemHeaders": {}
					},
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "lastDigitsPhoneNumber",
									"value": "0000",
									"description": "Últimos 4 dígitos del móvil asociado",
									"type": "text"
								},
								{
									"key": "identificador",
									"value": "03856453C",
									"description": "Identificador del cliente (DNI/NIF)",
									"type": "text"
								},
								{
									"key": "tempPassword",
									"value": "Arcano2021*",
									"description": "Contraseña temporal generada",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/sendCurrentUserSMS",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"sendCurrentUserSMS"
							]
						},
						"description": "Recuperación de código de usuario actual a través de SMS. Además de enviar por SMS el nombre de usuario realiza una actualización de password."
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
									"description": "Últimos 4 dígitos del móvil asociado",
									"type": "text"
								},
								{
									"key": "identificador",
									"value": "Y3002000P",
									"description": "Identificador del cliente (DNI/NIF)",
									"type": "text"
								},
								{
									"key": "tempPassword",
									"value": "optimissa3",
									"description": "Contraseña temporal generada",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/sendNewUserSMS",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"sendNewUserSMS"
							]
						},
						"description": "Genera un nuevo código de usuario, actualiza el password del mismo y envía mediante un SMS la información al cliente."
					},
					"response": []
				},
				{
					"name": "saveNewCredentials",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "oldUserName",
									"value": "8ECI4S",
									"description": "Código de usuario actual",
									"type": "text"
								},
								{
									"key": "newUserName",
									"value": "alfredo.test",
									"description": "Nuevo código de usuario (opcional)",
									"type": "text"
								},
								{
									"key": "newPassword",
									"value": "Arcano2021*",
									"description": "Nueva contraseña",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/saveNewCredentials",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"saveNewCredentials"
							]
						},
						"description": "Permite realizar el cambio de contraseña y de código de usuario si procede. En caso de no enviar un nuevo código de usuario, solo se realiza la actualización del password."
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
									"description": "El codigo enviado al usuario",
									"type": "text"
								},
								{
									"key": "username",
									"value": "F5LUQZ",
									"description": "El usuario al cual se le va a realizar el cambio de password",
									"type": "text"
								},
								{
									"key": "password",
									"value": "optimissa",
									"description": "El nuevo password",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://{{server}}/arcano-cca/SMS/changePasswordSmsCode",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"SMS",
								"changePasswordSmsCode"
							]
						},
						"description": "Endpoint que realiza el cambio de password a través del nombre de usuario y el código enviado vía SMS al usuario. El código enviado al usuario tiene tiempo de vencimiento (10 minutos) y estatus de uso."
					},
					"response": []
				}
			],
			"description": "En la API de consulta encontraremos aquellos endpoints que corresponden a lo que el cliente conoce como Davinci, en su mayoría son endpoints que consultan la información de un cliente y sus operaciones realizadas."
		},
		{
			"name": "CCA",
			"item": [
				{
					"name": "Security",
					"item": [
						{
							"name": "perform_login",
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
											"key": "username",
											"value": "Kutxabank",
											"description": "nombre de usuario",
											"type": "text",
											"disabled": true
										},
										{
											"key": "password",
											"value": "Arcano2021*",
											"description": "clave del usuario",
											"type": "text",
											"disabled": true
										},
										{
											"key": "username",
											"value": "usuariodev",
											"type": "text"
										},
										{
											"key": "password",
											"value": "usuariodev",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								},
								"description": "Método usado para dar acceso a la aplicación. Establece el proceso de auntenticación del usuario."
							},
							"response": []
						},
						{
							"name": "perform_logout",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_logout",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_logout"
									]
								},
								"description": "Método utilizado para dar el cierre de sesión."
							},
							"response": []
						},
						{
							"name": "is_authenticated",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": []
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/security/isAuthenticated",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"security",
										"isAuthenticated"
									]
								},
								"description": "Método que devuelve si el usuario ha hecho login en el aplicativo, devuelve verdaero si existe una sesión, false en caso contrario."
							},
							"response": []
						},
						{
							"name": "product_accounts/rolesApi",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/product_accounts/rolesApi",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product_accounts",
										"rolesApi"
									]
								},
								"description": "Endpoint que obtiene todos los roles disponibles para la aplicación."
							},
							"response": []
						},
						{
							"name": "/users/api/usersManagement",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/usersManagement",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"usersManagement"
									]
								},
								"description": "Obtiene una lista con la información completa de todos los usuarios registrados para la aplicación que tengan un perfil de tipo API"
							},
							"response": []
						},
						{
							"name": "/users/api/usersManagementIds",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/usersManagementIds",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"usersManagementIds"
									]
								},
								"description": "Obtiene una lista con los nombres de los usuarios registrados en la aplicación con un perfil de tipo API."
							},
							"response": []
						}
					],
					"description": "Clasificación de aquellos endpoints que tienen que ver con la seguridad de la aplicación como lo son el acceso, salida y validaciones de sesión activa de la aplicación."
				},
				{
					"name": "Product & Accounts",
					"item": [
						{
							"name": "products",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"date\":\"2020-03-04\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/products",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"products"
									]
								},
								"description": "Obtiene todos los productos que tengan una fecha de creación igual al parámetro date, en caso de que no se envíe el parámetro date se devuelven todos los productos."
							},
							"response": []
						},
						{
							"name": "accounts_paged",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"url": {
									"raw": "http://{{server}}/arcano-cca/product_accounts/accounts_paged?search=&pageNo=1&pageSize=15",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product_accounts",
										"accounts_paged"
									],
									"query": [
										{
											"key": "search",
											"value": "",
											"description": "Literal que se quiere buscar"
										},
										{
											"key": "pageNo",
											"value": "1",
											"description": "Página solicitada"
										},
										{
											"key": "pageSize",
											"value": "15",
											"description": "Número de elementos por página"
										}
									]
								},
								"description": "Obtiene las cuentas de los titulares, en caso de que se envíe el literal como parámetro se buscaran únicamente aquellas cuentas que contengan el literal como parte del nombre de cuenta, en caso de que no se envíe se buscaran todas las cuentas sin criterios de discriminación."
							},
							"response": []
						},
						{
							"name": "accounts",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"name\":\"JOSE\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/accounts",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"accounts"
									]
								},
								"description": "Devuelve una lista con la información de las cuentas que contengan en su nombre parte del literal enviado en el parámetro name."
							},
							"response": []
						},
						{
							"name": "last_products",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/products/latest",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"products",
										"latest"
									]
								},
								"description": "Obtiene los productos discriminando aquellos cuyo nombre sea un vacío o contenga al inicio de su nombre la cadena \"--\""
							},
							"response": []
						},
						{
							"name": "new-all-accounts",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/accounts/new-all",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"accounts",
										"new-all"
									]
								}
							},
							"response": []
						},
						{
							"name": "get all accounts paged",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/accounts/new-accounts?search=&pageNo=0&pageSize=15",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"accounts",
										"new-accounts"
									],
									"query": [
										{
											"key": "search",
											"value": "",
											"description": "Literal que se quiere buscar"
										},
										{
											"key": "pageNo",
											"value": "0",
											"description": "Página solicitada"
										},
										{
											"key": "pageSize",
											"value": "15",
											"description": "Número máximo de elementos resultantes por página"
										}
									]
								},
								"description": "Obtiene aquellas cuentas que aun no han sido asociadas a un usuario, es decir obtiene solo las cuentas recién registradas sin una posición. En caso de que se envíe el parámetro search se buscaran solo las cuentas nuevas que contengan como parte de su nombre el criterio de búsqueda, si no se envía el parámetro no hay criterio de restricción."
							},
							"response": []
						}
					],
					"description": "Aquellos endpoints que procesan la información de las diferentes cuentas y/o productos se agrupan en esta sección."
				},
				{
					"name": "Capital calls",
					"item": [
						{
							"name": "cc_calculate_totals",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\":32,\n\t\"committedPercentage\":9.87,\n\t\"applySubscriptionFee\":true,\n\t\"adjustCapitalPendingPayment\":false,\n\t\"subscriptionValue\": 987,\n\t\"date\":\"2020-03-06\",\n\t\"participantAccounts\": [\n        {\n            \"accountId\": \"002900098180ab59cac0722f32b0c94d86cabedf8001\",\n            \"accountName\": \"DIEGO GARNICA LOZANO\"\n        },\n        {\n            \"accountId\": \"00320011300dbaf5c9a245eefe2ee56bd51473bf7001\",\n            \"accountName\": \"ION ZULUETA ZABALETA\",\n            \"paf\": 100\n        }\n    ]\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/capital-calls/calculateTotals",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"capital-calls",
										"calculateTotals"
									]
								},
								"description": "Endpoint encargado de realizar los diferentes cálculos para las operaciones capital call, dichos cálculos se realizan con base en los parámetros enviados de la petición."
							},
							"response": []
						},
						{
							"name": "cc_save_data",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"capitalCallId\": 1585849601602\r\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/capital-calls/saveData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"capital-calls",
										"saveData"
									]
								},
								"description": "Endpoint para guardar una operación de tipo capital call, el proceso se encarga de guardar el capital call, los detalles del capital call, la operación efectuada y la posición, en el caso de la posición debe existir al menos un movimiento anterior para poder efectuarse el guardado de esta información."
							},
							"response": []
						}
					],
					"description": "Dentro de las diferentes operaciones que se pueden encontrar en la aplicación encontramos aquellas que son llamadas capital call, todos los endpoints relacionados con este tipo de operaciones los encontraremos en esta sección."
				},
				{
					"name": "Distributions",
					"item": [
						{
							"name": "dis_calculate_totals",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\":32,\n\t\"redemptionValue\":100,\n\t\"distributionTotalAmount\":1000000,\n\t\"averageCost\":10,\n\t\"recallable\":true,\n\t\"date\":\"2020-02-06\",\n\t\"participantAccounts\": [\n        {\n            \"accountId\": \"002900098180ab59cac0722f32b0c94d86cabedf8001\",\n            \"accountName\": \"DIEGO GARNICA LOZANO\"\n        },\n        {\n            \"accountId\": \"00320011300dbaf5c9a245eefe2ee56bd51473bf7001\",\n            \"accountName\": \"ION ZULUETA ZABALETA\"\n        }\n    ]\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/distributions/calculateTotals",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"distributions",
										"calculateTotals"
									]
								},
								"description": "Endpoint encargado de realizar los diferentes cálculos para las operaciones de distribuciones, dichos cálculos se realizan con base en los parámetros enviados de la petición."
							},
							"response": []
						},
						{
							"name": "dis_save_data",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"distributionId\":1583405484319\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/distributions/saveData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"distributions",
										"saveData"
									]
								},
								"description": "Endpoint para guardar una operación de tipo distribución, el proceso se encarga de guardar la distribución, los detalles de la distribución, la operación efectuada y la posición, en el caso de la posición debe existir al menos un movimiento anterior para poder efectuarse el guardado de esta información."
							},
							"response": []
						}
					],
					"description": "Dentro de las diferentes operaciones que se pueden encontrar en la aplicación encontramos las distribuciones, todos los endpoints relacionados con este tipo de operaciones los encontraremos en esta sección."
				},
				{
					"name": "Capital returns",
					"item": [
						{
							"name": "cr_calculate_totals",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n   \"productId\":\"403\",\r\n   \"totalReturnAmount\":\"200\",\r\n   \"recallable\":false,\r\n   \"date\":\"2021-04-12\",\r\n   \"participantAccounts\":[\r\n      {\r\n         \"accountName\":\"AFIGEST GLOBAL CORPORATION, S.L.\",\r\n         \"accountId\":\"631\",\r\n         \"paf\":0\r\n      }\r\n   ]\r\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/capital_returns/calculateTotals",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"capital_returns",
										"calculateTotals"
									]
								},
								"description": "Endpoint encargado de realizar los diferentes cálculos para las operaciones de devolución de capital, dichos cálculos se realizan con base en los parámetros enviados de la petición."
							},
							"response": []
						},
						{
							"name": "cr_calculate_totals dividend",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n   \"productId\":\"56\",\r\n   \"totalReturnAmount\":\"1000\",\r\n   \"recallable\":true,\r\n   \"totalDividendAmount\":\"20000\",\r\n   \"date\":\"2021-03-29\",\r\n   \"participantAccounts\":[\r\n      {\r\n         \"accountName\":\"JOSE LUIS MANZANARES BLANCH\",\r\n         \"accountId\":\"17d075d4e2ba7a42fb6cf6a17e57d74e\",\r\n         \"paf\":0\r\n      }\r\n   ]\r\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/capital_returns/calculateTotals",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"capital_returns",
										"calculateTotals"
									]
								},
								"description": "Endpoint encargado de realizar los diferentes cálculos para las operaciones de devolución de dividendos, dichos cálculos se realizan con base en los parámetros enviados de la petición."
							},
							"response": []
						},
						{
							"name": "cr_save_data",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"capitalReturnId\":1618849584310,\n\t\"dividendReturnId\": 1618849584477\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/capital_returns/saveData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"capital_returns",
										"saveData"
									]
								},
								"description": "Endpoint para guardar una operación de tipo devolución, el proceso se encarga de guardar la devolución, los detalles de la devolución, la operación efectuada y la posición, en el caso de la posición debe existir al menos un movimiento anterior para poder efectuarse el guardado de esta información.\n\nEn esta petición si enviamos el id de la devolución de capital se ejecutara el proceso para devoluciones de capital, en caso de que se envíe el parámetro para el id de la devolución de dividendos se ejecutara el proceso para devolución de dividendos, no son mutuamente excluyentes así que se pueden ejecutar los dos tipos de operaciones en una sola petición."
							},
							"response": []
						}
					],
					"description": "Dentro de las diferentes operaciones que se pueden encontrar en la aplicación encontramos las devoluciones, todos los endpoints relacionados con este tipo de operaciones los encontraremos en esta sección."
				},
				{
					"name": "Overpayment returns",
					"item": [
						{
							"name": "or_calculate_totals",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n\t\"productId\":32,\r\n\t\"totalOverpaymentReturn\":5000000,\r\n\t\"returnValue\": 1234,\r\n\t\"date\":\"2020-02-06\",\r\n\t\"participantAccounts\": [\r\n        {\r\n            \"accountId\": \"002900098180ab59cac0722f32b0c94d86cabedf8001\",\r\n            \"accountName\": \"DIEGO GARNICA LOZANO\"\r\n        },\r\n        {\r\n            \"accountId\": \"00320011300dbaf5c9a245eefe2ee56bd51473bf7001\",\r\n            \"accountName\": \"ION ZULUETA ZABALETA\"\r\n        }\r\n    ]\r\n}\r\n"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/overpayment_returns/calculateTotals",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"overpayment_returns",
										"calculateTotals"
									]
								},
								"description": "Endpoint encargado de realizar los diferentes cálculos para las operaciones de devolución de excesos, dichos cálculos se realizan con base en los parámetros enviados de la petición."
							},
							"response": []
						},
						{
							"name": "or_confirm_data",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n\t\"overpaymentReturnId\": 1585317064193\r\n}\r\n"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/overpayment_returns/saveData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"overpayment_returns",
										"saveData"
									]
								},
								"description": "Endpoint para guardar una operación de tipo devolución de exceso, el proceso se encarga de guardar la devolución de exceso, los detalles de la devolución, la operación efectuada y la posición, en el caso de la posición debe existir al menos un movimiento anterior para poder efectuarse el guardado de esta información."
							},
							"response": []
						}
					],
					"description": "Dentro de las diferentes operaciones que se pueden encontrar en la aplicación encontramos las devoluciones de excesos, todos los endpoints relacionados con este tipo de operaciones los encontraremos en esta sección."
				},
				{
					"name": "Positions",
					"item": [
						{
							"name": "pp_generate_registers",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productAriaId\":1,\n\t\"date\":\"2020-02-24\",\n\t\"participations\":123,\n\t\"committedAmount\":80000,\n\t\"payoutAmount\":5000,\n\t\"pendingAmount\":700,\n\t\"accounts\": [\n        {\n            \"accountId\": \"002900098180ab59cac0722f32b0c94d86cabedf8001\",\n            \"accountName\": \"DIEGO GARNICA LOZANO\"\n        },\n        {\n            \"accountId\": \"00320011300dbaf5c9a245eefe2ee56bd51473bf7001\",\n            \"accountName\": \"ION ZULUETA ZABALETA\"\n        }\n    ]\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/generateRegisters",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"generateRegisters"
									]
								},
								"description": "Realiza un parseo de la información enviada en los parámetros."
							},
							"response": []
						},
						{
							"name": "pp_confirm_data",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"portfolioId\": 1583494175204\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/saveData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"saveData"
									]
								},
								"description": "Realiza el guardado de la información de una posición"
							},
							"response": []
						},
						{
							"name": "pp_obtain_info",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productAriaId\":32,\n\t\"date\":\"2020-02-06\",\n\t\"accountId\": \"003200113b43d23be8501ae90111110aa6e0140b4001\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/obtainInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"obtainInfo"
									]
								},
								"description": "Basado en la cuenta, el producto y una fecha devuelve la información de una posición, si no encuentra información se devuelve un error."
							},
							"response": []
						},
						{
							"name": "update_positions",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/updatePositions",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"updatePositions"
									]
								},
								"description": "Endpoint que ejecuta todas aquellas operaciones que no han sido procesadas, realiza un barrido de todas las operaciones no procesadas y dependiendo el tipo (capital call, devoluciones, distribuciones, etc.) ejecuta la operación correspondiente."
							},
							"response": []
						},
						{
							"name": "transfer_calculate_balances",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"positionId\": 195102,\n    \"transferDate\": \"2021-03-23\",\n    \"targetAccounts\": [\n        {\n            \"accountId\": \"a19d508874655a86f599a58a1341b0bc\",\n            \"accountName\": \"3-GUTINVER, S.L.\",\n            \"transferPercentage\": 10\n        },\n        {\n            \"accountId\": \"7a0f9a0e9ff6867d0edc614cf8f0c76f\",\n            \"accountName\": \"36ERRES ASSETS S.L.U.\",\n            \"transferPercentage\": 90\n        }\n    ],\n    \"maxPercentage\" : 50\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/transfer/calculateBalances",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"transfer",
										"calculateBalances"
									]
								},
								"description": "Realiza los cálculos para un traspaso de una posición proporcionada mediante el parámetro positionId"
							},
							"response": []
						},
						{
							"name": "transfer_save_data",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"transferId\": 1627565793249\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/transfer/saveData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"transfer",
										"saveData"
									]
								},
								"description": "Ejecuta el guardado de la información de un traspaso, en caso de que el traspaso deje la cuenta sin fondos, esta actualiza su fecha de vencimiento, y por último realiza una actualización a las posiciones que se ven afectadas."
							},
							"response": []
						},
						{
							"name": "product_accounts_targets",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"sourcePositionId\": 38, \n\t\"date\": \"2020-03-23\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product_accounts/targets",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product_accounts",
										"targets"
									]
								},
								"description": "Obtiene las cuentas relacionadas a una posición y fecha dadas, también incluye aquellas cuentas que no tienen una posición."
							},
							"response": []
						},
						{
							"name": "last-updating-info",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/participating_positions/last-updating-info",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"participating_positions",
										"last-updating-info"
									]
								}
							},
							"response": []
						}
					],
					"description": "Aquellos endpoints que trabajan con la información de las posiciones se encuentran reunidos en esta sección."
				},
				{
					"name": "Operations",
					"item": [
						{
							"name": "operations_search",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"operationType\":\"CC\",\n\t\"productAriaId\": 32,\n\t\"endDate\":\"2020-03-01\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/operations/search",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"operations",
										"search"
									]
								},
								"description": "Dependiendo del tipo de operación enviado como parámetro, se realiza la búsqueda de las operaciones en BD por producto, en un rango de fechas especificado y que se encuentren activas, se devuelve como parte de la salida una lista con la información de las operaciones obtenidas.\n\nLos códigos de operaciones permitidas son los siguientes:\n\n| **Código** | **Tipo de operación** |\n| --- | --- |\n| CO | Compromisos |\n| CC | Capital calls |\n| DIS | Distribuciones con reembolso de participaciones |\n| CR | Devoluciones de capital |\n| OR | Devoluciones por exceso |\n| DR | Devoluciones de dividendos |"
							},
							"response": []
						},
						{
							"name": "remove_operations",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"operationType\":\"CC\",\n\t\"operationId\":181,\n\t\"detailId\":808\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/operations/remove",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"operations",
										"remove"
									]
								},
								"description": "Realiza el borrado lógico de los detalles de una operación, es decir cambia el estatus de activo a inactivo de todos los detalles que correspondan a una operación.\n\nLos tipos de operación permitida son:\n\n| Código | Tipo de operación |\n| --- | --- |\n| CO | Compromisos |\n| CC | Capital calls |\n| DIS | Distribuciones con reembolso de participaciones |\n| CR | Devoluciones de capital |\n| OR | Devoluciones por exceso |\n| DR | Devoluciones de dividendos |"
							},
							"response": []
						}
					],
					"description": "En esta sección encontramos los endpoints de consulta y borrado de operaciones."
				},
				{
					"name": "Documents",
					"item": [
						{
							"name": "upload_documents",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "date",
											"value": "2020-03-16",
											"description": "Fecha de carga del documento en formato yyyy-MM-dd",
											"type": "text"
										},
										{
											"key": "tittle",
											"value": "AEIF - Folleto del fondo",
											"description": "Título del documento",
											"type": "text"
										},
										{
											"key": "comments",
											"value": "Folleto del fondo ARCANO EARTH FUND, FCR",
											"description": "Comentarios del documento",
											"type": "text"
										},
										{
											"key": "productId",
											"value": "3",
											"description": "Id del producto",
											"type": "text"
										},
										{
											"key": "stateId",
											"value": "1",
											"description": "Estado del documento (1 - Activo, 2 - Inactivo)",
											"type": "text"
										},
										{
											"key": "categoryId",
											"value": "1",
											"description": "Id de la categoria asignada al documento",
											"type": "text"
										},
										{
											"key": "recipientTypeId",
											"value": "1",
											"description": "Id tipo destinatario",
											"type": "text"
										},
										{
											"key": "files",
											"description": "Lista con los documentos que seran cargados",
											"type": "file",
											"src": "000073236G.pdf"
										},
										{
											"key": "files",
											"type": "file",
											"src": "000117784R.pdf"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/documents/uploadDocuments",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"documents",
										"uploadDocuments"
									]
								},
								"description": "Endpoint que permite cargar una serie de documentos en la aplicación, en el proceso se genera un registro en BD, se inserta una relación con el titular y se almacena el documento en un servidor de Azure. En caso de que el documento se encuentre previamente cargado en Azure este no será procesado.\n\nUn punto importante es que el nombre del documento debe ser el identificador del cliente (DNI/NIF/...) ya que con esto se realiza la asociación del titular con el documento, en caso de que el nombre del documento no se encuentre como un identificador registrado en BD se devolverá un error."
							},
							"response": []
						},
						{
							"name": "upload generic document",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "date",
											"value": "2022-02-21",
											"description": "Fecha de carga del documento en formato yyyy-MM-dd",
											"type": "text"
										},
										{
											"key": "titleEs",
											"value": "Prueba carga",
											"description": "Título del documento en español",
											"type": "text"
										},
										{
											"key": "titleEn",
											"value": "Load test",
											"description": "Título del documento en ingles",
											"type": "text"
										},
										{
											"key": "comments",
											"value": "Test del fondo ARCANO SECONDARY FUND II",
											"description": "Comentarios del documento",
											"type": "text"
										},
										{
											"key": "productId",
											"value": "146",
											"description": "Lista con los indices de los productos",
											"type": "text"
										},
										{
											"key": "stateId\n",
											"value": "1",
											"description": "Estado del documento (1 - Activo, 2 - Inactivo)",
											"type": "text"
										},
										{
											"key": "categoryId\n",
											"value": "2",
											"description": "Id de la categoria asignada al documento",
											"type": "text"
										},
										{
											"key": "files",
											"description": "Lista con los documentos que seran cargados",
											"type": "file",
											"src": "/C:/Users/Alfredo.Limon/Downloads/TEST_DOC_FOlleto.pdf"
										},
										{
											"key": "productId",
											"value": "147",
											"type": "text"
										},
										{
											"key": "productId",
											"value": "149",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/documents/uploadGenericDocument",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"documents",
										"uploadGenericDocument"
									]
								},
								"description": "Endpoint para carga de uno o varios documento de tipo genérico (los documentos genéricos son aquellos que no tienen una cuenta asociada), el proceso se encarga de registrar el documento en BD, de generar un relación del documento con todos aquellos usuarios que tengan asociado el(los) producto(s) indicados en la petición y también se encarga de almacenar el(los) documento(s) en un servidor de Azure.\n\nEn caso de que ya se encuentre el documento en Azure no se carga, solo se genera la relación usuarios documentos."
							},
							"response": []
						},
						{
							"name": "documents_search",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"investor\":\"\",\r\n    \"recipientTypeId\":0,\r\n    \"stateId\":1,\r\n    \"productId\":1,\r\n    \"categoryId\":1,\r\n    \"initialDate\":\"2020-01-01\",\r\n    \"endDate\":\"2022-01-01\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/documents/search",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"documents",
										"search"
									]
								},
								"description": "Endpoint para búsqueda de documentos"
							},
							"response": []
						}
					],
					"description": "Aquí encontraremos los endpoints de carga de documentos y búsqueda general"
				},
				{
					"name": "Users",
					"item": [
						{
							"name": "users_obtain_info",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"username\":\"usuariodev\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/obtainInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"obtainInfo"
									]
								},
								"description": "Obtiene la información de un usuario, la búsqueda se realiza por nombre de usuario y cuando el usuario se encuentre activo."
							},
							"response": [
								{
									"name": "users_obtain_info",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\n\t\"username\":\"usuariodev\"\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/users/obtainInfo",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"users",
												"obtainInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Wed, 27 Apr 2022 15:04:38 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"username\": \"usuariodev\",\n    \"description\": \"Usuario desarrollo\",\n    \"profile\": {\n        \"id\": 1,\n        \"name\": \"USER\",\n        \"description\": \"Usuario\"\n    },\n    \"language\": {\n        \"id\": 1,\n        \"language\": \"ES\",\n        \"description\": \"Español\"\n    },\n    \"email\": \"Victormanuel.partida@optimissa.com\",\n    \"contactInfo\": \"José Echegaray 14,Las Rozas Parque Empresarial, 28232\",\n    \"identifier\": \"00000001L\",\n    \"phone\": \"(0034) 659 832 859\",\n    \"status\": \"ACTIVE\",\n    \"attempts\": 0,\n    \"rolDto\": []\n}"
								}
							]
						},
						{
							"name": "users_get_names",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"username\": \"alfredo\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/getUsersName",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"getUsersName"
									]
								},
								"description": "Obtiene una lista con los nombres de usuario que concuerden con el parámetro enviado ya sea exacto o parcialmente la coincidencia."
							},
							"response": []
						},
						{
							"name": "users_update",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"username\": \"test\",\r\n    \"password\": \"Password10\",\r\n    \"description\": \"Usuario de prueba\",\r\n    \"profileId\": 1,\r\n    \"email\": \"test@optimissa.com\",\r\n    \"contactInfo\": \"José Echegaray 14, Las Rozas Parque Empresarial, 28232 · Madrid\",\r\n    \"status\": true\r\n}\r\n"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"update"
									]
								},
								"description": "Actualiza la información de un usuario."
							},
							"response": []
						},
						{
							"name": "users_create",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n\"username\": \"optimissa.test\",\r\n\"password\": \"optimissa.test\",\r\n\"description\": \"Usuario web\",\r\n\"profileId\": 1,\r\n\"email\": \"pruebas@tribeca.com\",\r\n\"contactInfo\": \"N/A\",\r\n\"status\": true\r\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"create"
									]
								},
								"description": "Endpoint para crear un usuario."
							},
							"response": []
						},
						{
							"name": "users_resend_password",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"identifier\": \"00000001L\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/resendPassword",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"resendPassword"
									]
								},
								"description": "Endpoint que envía el nombre de usuario vía email."
							},
							"response": []
						},
						{
							"name": "users_api_create local",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"username\": \"user.api.caso6\",\r\n    \"password\": \"user.api.caso6\",\r\n    \"description\": \"Usuario con dos fondos. Una cuenta de cada\",\r\n    \"profileId\": 2,\r\n    \"email\": \"user.api.caso5@optimissa.com\",\r\n    \"contactInfo\": \"José Echegaray 14,Las Rozas Parque Empresarial, 28232\",\r\n    \"status\": true,\r\n    \"typeRoleApi\": \"Interno Arcano\",\r\n    \"accounts\" : [\"1cf25e23779bcc20ecf2de45ad0f64a6\",\"bb30ebea11da12e0ed3c20dd71aea165\"]\r\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"create"
									]
								},
								"description": "Método por el cual se registra el usuario en la tabla general de usuarios con un perfil de tipo API, posteriormente se añade la relación del usuario con las cuentas enviadas."
							},
							"response": []
						},
						{
							"name": "users_api_update",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"username\": \"prueba.api\",\r\n    \"password\": \"prueba.api\",\r\n    \"description\": \"prueba.api desde Integracion \",\r\n    \"profileId\": 2,\r\n    \"email\": \"prueba.api@optimissa.com\",\r\n    \"contactInfo\": \"José Echegaray 14,Las Rozas Parque Empresarial, 28232\",\r\n    \"status\": true,\r\n    \"typeRoleApi\": \"Interno Arcano\",\r\n    \"accounts\" : [\"1cf25e23779bcc20ecf2de45ad0f64a6\"]\r\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"update"
									]
								},
								"description": "Actualiza la información de un usuario de perfil 2, en el proceso se eliminan las relaciones de cuentas con usuario y posteriormente se crean las relaciones con las cuentas enviadas en la petición."
							},
							"response": []
						},
						{
							"name": "users_api_delete local",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"username\":\"alejandro.api2\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/delete",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"delete"
									]
								},
								"description": "Realiza un borrado lógico de un usuario con perfil 2 actualizando su estatus a inactivo."
							},
							"response": []
						}
					]
				},
				{
					"name": "Fx",
					"item": [
						{
							"name": "fx_get_all",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"currencyId\":1, \n\t\"date\":\"2020-04-01\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/fx",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"fx"
									]
								},
								"description": "Obtiene una lista con las divisas y los precios registrados en BD restringiendo los resultados por fecha y tipo de divisa."
							},
							"response": []
						},
						{
							"name": "fx_create",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"date\":\"2020-04-01\",\n\t\"currencyId\":1,\n\t\"price\": 22.05\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/fx/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"fx",
										"create"
									]
								},
								"description": "Registra el precio de una divisa para una fecha especifica."
							},
							"response": []
						},
						{
							"name": "fx_update",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":1,\n\t\"date\":\"2020-04-01\",\n\t\"currencyId\":1,\n\t\"price\": 22\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/fx/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"fx",
										"update"
									]
								},
								"description": "Permite modificar el precio, la fecha o la divisa para un registro creado previamente."
							},
							"response": []
						},
						{
							"name": "fx_delete",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":2\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/fx/delete",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"fx",
										"delete"
									]
								},
								"description": "Realiza el borrado físico de un precio para una divisa y fecha dadas."
							},
							"response": []
						}
					],
					"description": "Aquellos endpoints relacionados con el mercado de divisas (FX) se encuentran en esta sección."
				},
				{
					"name": "Prices",
					"item": [
						{
							"name": "prices_get_all",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\":1, \n\t\"date\":\"2020-04-03\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/prices",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"prices"
									]
								},
								"description": "Obtiene todos los precios que corresponden a un producto y fecha dado."
							},
							"response": []
						},
						{
							"name": "prices_create",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\":1,\n\t\"date\":\"2020-04-01\",\n\t\"price\":25.06\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/prices/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"prices",
										"create"
									]
								},
								"description": "Asigna un precio a un producto con una fecha dada, en caso de que ya exista el precio se devuelve un error."
							},
							"response": []
						},
						{
							"name": "prices_update",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":1,\n\t\"productId\":1,\n\t\"date\":\"2020-04-01\",\n\t\"price\":25.99\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/prices/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"prices",
										"update"
									]
								},
								"description": "Endpoint que permite actualizar la fecha, el precio y el producto a un registro previamente creado."
							},
							"response": []
						},
						{
							"name": "prices_delete",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":2\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/prices/delete",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"prices",
										"delete"
									]
								},
								"description": "Realiza el borrado físico de la relación producto, fecha, precio."
							},
							"response": []
						}
					],
					"description": "Se engloban aquellos endpoints relacionados con la manipulación de los precios por productos."
				},
				{
					"name": "Product Prices",
					"item": [
						{
							"name": "product_prices_get_all",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"productId\" : 12,\r\n    \"date\" : null,\r\n    \"page\" : 0\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product-prices",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product-prices"
									]
								},
								"description": "Obtiene todos los precios que corresponden a un producto y fecha dado, agregando la información de la divisa que le corresponde."
							},
							"response": []
						},
						{
							"name": "product_prices_create",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\":2,\n\t\"date\":\"2020-10-21\",\n\t\"price\":29.99,\n\t\"currencyId\":978,\n\t\"fxPrice\": 21.05\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product-prices/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product-prices",
										"create"
									]
								},
								"description": "Asigna un precio a un producto con una fecha dada, en caso de que ya exista el precio se devuelve un error, posterior a la creación del precio actualiza el precio de la divisa proporcionada, en caso de que no exista el precio de la divisa este se creará."
							},
							"response": []
						},
						{
							"name": "product_prices_update",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":42,\n\t\"productId\":1,\n\t\"date\":\"2025-07-07\",\n\t\"price\":30,\n\t\"currencyId\":978,\n\t\"fxPrice\": 23\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product-prices/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product-prices",
										"update"
									]
								},
								"description": "Endpoint que permite actualizar la fecha, el precio y el producto a un registro previamente creado, posterior a la actualización del precio del producto se actualiza el precio de la divisa proporcionada, en caso de que no exista el precio de la divisa este se creará."
							},
							"response": []
						},
						{
							"name": "product_prices_delete",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":2\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product-prices/delete",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product-prices",
										"delete"
									]
								},
								"description": "Realiza el borrado físico de la relación precio producto para la relación indicada en el parámetro recibido."
							},
							"response": []
						},
						{
							"name": "prices_by_product",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "text/plain",
										"type": "text"
									}
								],
								"body": {
									"mode": "urlencoded",
									"urlencoded": []
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product-prices/prices_by_product",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product-prices",
										"prices_by_product"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Categorizations",
					"item": [
						{
							"name": "categorizations-get-all",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/categorizations-products",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"categorizations-products"
									]
								},
								"description": "Obtiene la información de todas las categorizaciones registradas en BD"
							},
							"response": []
						},
						{
							"name": "categorizations-create",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\":1,\n\t\"componentCategorizationName\":\"cc 1\",\n\t\"categorizationName\": \"cat2\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/categorizations-products/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"categorizations-products",
										"create"
									]
								},
								"description": "Genera la relación del producto proporcionado con el componente de la categorización, en caso de que no exista el registro del componente de categorización o bien la categorización se procede con la creación de estos para finalmente generar la relación."
							},
							"response": []
						},
						{
							"name": "categorizations/Create",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"name\":\"pruebas insercion\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/categorizations/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"categorizations",
										"create"
									]
								},
								"description": "Realiza la inserción de una nueva categoría en BD."
							},
							"response": []
						},
						{
							"name": "categorizations-update",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":2,\n\t\"productId\":1,\n\t\"componentCategorizationName\":\"cc 1\",\n\t\"categorizationName\": \"cat2\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/categorizations-products/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"categorizations-products",
										"update"
									]
								},
								"description": "Actualiza la relación del producto proporcionado con el componente de la categorización, en caso de que no exista el registro del componente de categorización o bien la categorización se procede con la creación de estos para finalmente generar la relación."
							},
							"response": []
						},
						{
							"name": "categorizations-delete",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":3\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/categorizations-products/delete",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"categorizations-products",
										"delete"
									]
								},
								"description": "Se encarga del borrado de la relación producto - componente categorización."
							},
							"response": []
						}
					],
					"description": "Endpoints relacionados con el procesamiento de las categorizaciones de la aplicación"
				},
				{
					"name": "Metrics",
					"item": [
						{
							"name": "metrics",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/metrics",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"metrics"
									]
								},
								"description": "Obtiene todas las métricas registradas en BD."
							},
							"response": []
						},
						{
							"name": "metrics-products Copy",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/metrics-products",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"metrics-products"
									]
								},
								"description": "Obtiene todas las relaciones de las métricas con los productos registrados en BD."
							},
							"response": []
						},
						{
							"name": "metrics-products-create",
							"protocolProfileBehavior": {
								"disabledSystemHeaders": {}
							},
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"metricName\": \"API TEST\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/metrics-products/create",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"metrics-products",
										"create"
									]
								},
								"description": "Si únicamente se envía el valor del parámetro nombre de métrica se procede con la creación de una métrica, si por el contrario se envían todos los parámetros con información se procede con la creación de la métrica y su relación métrica producto ."
							},
							"response": []
						},
						{
							"name": "metrics-products-update",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":1,\n\t\"date\":\"2020-04-02\",\n\t\"value\": 123543.12,\n\t\"productId\":1,\n\t\"metricName\": \"IRC\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/metrics-products/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"metrics-products",
										"update"
									]
								},
								"description": "Realiza la actualización de la relación métrica producto indicada por el parámetro id, en caso de que no existiese la métrica en BD se procede con su creación y posteriormente se relaciona con el producto."
							},
							"response": []
						},
						{
							"name": "metrics-products-delete",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"id\":4\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/metrics-products/delete",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"metrics-products",
										"delete"
									]
								},
								"description": "Endpoint encargado del borrado de la relación métrica - producto."
							},
							"response": []
						}
					],
					"description": "En esta sección encontramos los endpoints relacionados con el tratamiento de las métricas para la aplicación."
				},
				{
					"name": "DataLoad",
					"item": [
						{
							"name": "data_load",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"dataLoader\":\"ACCOUNTS\",\n\t\"filePath\":\"C:\\\\app\\\\arcano-cca\\\\input\\\\Cuentas_2020_07_26.csv\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/data-load",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"data-load"
									]
								},
								"description": "Endpoint que se encarga de leer un fichero, procesar la información del mismo y cargarla en las tablas que corresponde.\n\nPara obtener el fichero de carga, en la petición se envía la ruta del fichero.\n\nDependiendo del tipo carga que se vaya a realizar el fichero puede ser un CSV o un fichero de Excel.\n\nLos tipos de carga que se pueden realizar son:\n\n| **Código de tipo de carga** | **Extensión del fichero de carga** | **Descripción** |\n| --- | --- | --- |\n| ACCOUNTS | CSV | Ejecuta una carga de cuentas, si la cuenta que se esta procesando ya existe solo se actualiza la información en caso contrario se crea la cuenta.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| INTERVENING_PEOPLE | CSV | Ejecuta la carga de información de intervinientes (un interviniente puede ser un inversor, representante o contacto), si ya existe el interviniente solo actualiza la información, en caso contrario crea el registro.  <br>Por cada tipo de interviniente encontrado en el fichero de carga, se crea un nuevo fichero que contiene, el numero de fila del registro procesado, el tipo de interviniente que es y el id del registro insertado en BD.  <br>Al finalizar el proceso se generan 3 ficheros más, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| ACCOUNT_HOLDERS | CSV | Ejecuta la carga de relaciones entre cuentas-titulares (cuentas-inversores), para poder generar la relación hace uso del fichero creado por la ejecución de carga de intervinientes reportedInversor, así como el fichero con la información de las relaciones (fichero obtenido mediante la ruta proporcionada como parámetro), si el fichero reportedInversor no se encuentra o esta vacío, no se procesa la información.  <br>En caso de que la relación cuenta-titular ya se encuentre registrada, no se realiza ninguna acción para ese registro.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| ACCOUNT_REPRESENTATIVES | CSV | Ejecuta la carga de relaciones entre cuentas-representantes, para poder generar la relación se requiere el fichero creado por el proceso de carga de intervinientes reportedRepresentante, así como el fichero con la información de las relaciones (fichero obtenido mediante la ruta proporcionada como parámetro), si el fichero reportedRepresentante no se encuentra o esta vacío, no se lleva a cabo la carga de relaciones cuentas-representantes.  <br>En caso de que la relación cuenta-representante ya se encuentre registrada no se realiza ninguna acción para ese registro.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| CONTACTS | CSV | Ejecuta la carga de relaciones entre cuentas-productos-contactos, para poder generar la relación se requiere el fichero creado por el proceso de carga de intervinientes reportedContacto, así como el fichero con la información de las relaciones (fichero obtenido mediante la ruta proporcionada como parámetro), si el fichero reportedContacto no se encuentra o esta vacío, no se lleva a cabo la carga de relaciones cuentas-productos-contactos.  <br>En caso de que la relación cuenta-producto-contacto ya se encuentre registrada, no se realiza ninguna acción para ese registro.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| OPERATIONS | EXCEL | Endpoint que procesa un fichero de excel con las diferentes operaciones que maneja la aplicación, el fichero se obtiene de la ruta proporcionada como parámetro de invocación.  <br>El fichero de excel debe contar con 7 hojas y cada hoja a su vez debe tener su propio número de columnas quedando de la siguiente manera:  <br>  <br>Cuentas - 3 columnas  <br>Capital_Calls - 11 columnas  <br>Distribuciones - 12 columnas  <br>Devolucion_dividendo - 9 columnas  <br>Devoluciones_Capital - 7 columnas  <br>Devoluciones_Exceso - 8 columnas  <br>Compromisos - 4 columnas  <br>TOIs - 4 columnas  <br>  <br>Si las hojas y columnas son correctas, se procesa la información y se ejecuta el guardado de cada uno de los registros del fichero por cada tipo de operación, posteriormente se realiza una actualización de las posiciones con las operaciones recién cargadas.  <br>Por último el proceso toma todos los errores ocurridos en la carga de registros y genera un fichero de salida con los errores. |\n| DIRECTORY_OPERATIONS | EXCEL | Obtiene todos los ficheros de un directorio que cuenten con extensión .xlsx, una vez que obtiene los ficheros procesa cada uno como un fichero de operaciones (revisar el código de carga \"OPERATIONS\" para este mismo endpoint). |\n| BNP_OPERATIONS | CSV | Procesa un fichero de operaciones de BNP para cargar las posiciones correspondientes en la aplicación, el fichero se obtiene mediante la ruta enviada como parámetro de la petición.  <br>En este proceso no se insertan operaciones si no, las posiciones correspondientes a las operaciones que BNP envía.  <br>Si algún registro ya se encuentra dado de alta previamente, no se inserta una nueva posición.  <br>En caso de que la cuenta proporcionada en el fichero de carga no se encuentre dada de alta se procede con la creación de la cuenta y se asocia con su correspondiente inversor o representante.  <br>Si en el fichero que se esta cargando no se encuentra algún registro del último fichero cargado, se procede con la inserción de este registro con cantidades en 0. |\n| DOCUMENTS | EXCEL | Procesa un fichero Excel para realizar una carga masiva de documentos, el fichero se obtiene mediante la ruta enviada como parámetro de la petición.  <br>El documento de carga debe contar con 2 hojas de información \"Documentos\" la cual debe tener 9 columnas y \"Clasificaciones\" la cual debe tener 2 columnas.  <br>En la hoja de Documentos no viene el fichero físico si no el nombre del documento, el proceso busca en el directorio de carga de documentos (se obtiene de las propiedades de la aplicación) de la aplicación el documento por nombre, lo lee y posteriormente lo coloca en un servidor de Azure, genera una relación del documento con el usuario de carga y para finalizar genera un registro en BD del documento recién cargado.  <br>Si el documento se encuentra previamente cargado en Azure solo se genera la relación del documento con el usuario.  <br> |"
							},
							"response": []
						},
						{
							"name": "data_load_File",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "dataLoader",
											"value": "DOCUMENTS",
											"type": "text"
										},
										{
											"key": "file",
											"type": "file",
											"src": "/C:/app/Plantilla_Gestión_Documental_20220315 134836.xlsx"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/data-load/file",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"data-load",
										"file"
									]
								},
								"description": "Endpoint que recibe un fichero, procesa la información del mismo y cargar los datos en las tablas que corresponde.\n\nDependiendo del tipo carga que se vaya a realizar, el fichero puede ser un CSV o un fichero de Excel.\n\nLos tipos de carga que se pueden realizar son:\n\n| **Código de tipo de carga** | **Extensión del fichero de carga** | **Descripción** |\n| --- | --- | --- |\n| ACCOUNTS | CSV | Ejecuta una carga de cuentas, si la cuenta que se esta procesando ya existe solo se actualiza la información en caso contrario se crea la cuenta.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| INTERVENING_PEOPLE | CSV | Ejecuta la carga de información de intervinientes (un interviniente puede ser un inversor, representante o contacto), si ya existe el interviniente solo actualiza la información, en caso contrario crea el registro.  <br>Por cada tipo de interviniente encontrado en el fichero de carga, se crea un nuevo fichero que contiene, el numero de fila del registro procesado, el tipo de interviniente que es y el id del registro insertado en BD.  <br>Al finalizar el proceso se generan 3 ficheros más, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| ACCOUNT_HOLDERS | CSV | Ejecuta la carga de relaciones entre cuentas-titulares (cuentas-inversores), para poder generar la relación hace uso del fichero creado por la ejecución de carga de intervinientes reportedInversor, así como el fichero recibido en la petición con la información de las relaciones, si el fichero reportedInversor no se encuentra o esta vacío, no se procesa la información.  <br>En caso de que la relación cuenta-titular ya se encuentre registrada, no se realiza ninguna acción para ese registro.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| ACCOUNT_REPRESENTATIVES | CSV | Ejecuta la carga de relaciones entre cuentas-representantes, para poder generar la relación se requiere el fichero creado por el proceso de carga de intervinientes reportedRepresentante, así como el fichero enviado en la petición con la información de las relaciones, si el fichero reportedRepresentante no se encuentra o esta vacío, no se lleva a cabo la carga de relaciones cuentas-representantes.  <br>En caso de que la relación cuenta-representante ya se encuentre registrada no se realiza ninguna acción para ese registro.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| CONTACTS | CSV | Ejecuta la carga de relaciones entre cuentas-productos-contactos, para poder generar la relación se requiere el fichero creado por el proceso de carga de intervinientes reportedContacto, así como el fichero enviado en la petición con la información de las relaciones, si el fichero reportedContacto no se encuentra o esta vacío, no se lleva a cabo la carga de relaciones cuentas-productos-contactos.  <br>En caso de que la relación cuenta-producto-contacto ya se encuentre registrada, no se realiza ninguna acción para ese registro.  <br>Al finalizar el proceso se generan 3 ficheros, uno con los registros procesados, otro con los registros que se cargaron satisfactoriamente y por último uno con los registros que tuvieron errores. |\n| OPERATIONS | EXCEL | Endpoint que procesa el fichero enviado en la petición con las diferentes operaciones de la aplicación.  <br>El fichero debe contar con 7 hojas y cada hoja a su vez debe tener su propio número de columnas quedando de la siguiente manera:  <br>  <br>Cuentas - 3 columnas  <br>Capital_Calls - 11 columnas  <br>Distribuciones - 12 columnas  <br>Devolucion_dividendo - 9 columnas  <br>Devoluciones_Capital - 7 columnas  <br>Devoluciones_Exceso - 8 columnas  <br>Compromisos - 4 columnas  <br>TOIs - 4 columnas  <br>  <br>Si las hojas y columnas son correctas, se procesa la información y se ejecuta el guardado de cada uno de los registros del fichero por cada tipo de operación, posteriormente se realiza una actualización de las posiciones con las operaciones recién cargadas.  <br>Por último el proceso toma todos los errores ocurridos en la carga de registros y genera un fichero de salida con los errores. |\n| BNP_OPERATIONS | CSV | Procesa el fichero de operaciones de BNP para cargar las posiciones correspondientes en la aplicación, dicho fichero se envía en la petición del endpoint.  <br>En este proceso no se insertan operaciones si no, las posiciones correspondientes a las operaciones que BNP envía.  <br>Si algún registro ya se encuentra dado de alta previamente, no se inserta una nueva posición.  <br>En caso de que la cuenta proporcionada en el fichero de carga no se encuentre dada de alta, se procede con la creación de la cuenta y se asocia con su correspondiente inversor o representante.  <br>Si en el fichero que se esta cargando no se encuentra algún registro del último fichero previamente cargado, se procede con la inserción de este registro con cantidades en 0. |\n| DOCUMENTS | EXCEL | Procesa un fichero con formato Excel para realizar una carga masiva de documentos, el fichero es el enviado como parámetro de la petición.  <br>El documento de carga debe contar con 2 hojas de información \"Documentos\" la cual debe tener 9 columnas y \"Clasificaciones\" la cual debe tener 2 columnas.  <br>En la hoja de Documentos no viene el fichero físico si no el nombre del documento, el proceso busca en el directorio de carga de documentos (el cual se obtiene de las propiedades de la aplicación) de la aplicación el documento por nombre, lo lee y posteriormente lo coloca en un servidor de Azure, genera una relación del documento con el usuario de carga y para finalizar genera un registro en BD del documento recién cargado.  <br>Si el documento se encuentra previamente cargado en Azure solo se genera la relación del documento con el usuario.  <br> |"
							},
							"response": []
						},
						{
							"name": "data_loaders",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/data-loaders",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"data-loaders"
									]
								},
								"description": "Obtiene los códigos y descripciones de las opciones de carga disponibles para los endpoint \"data-load\" y \"file\"."
							},
							"response": []
						}
					],
					"description": "En esta sección se encuentran aquellos endpoints que se encargan de poblar las tablas de BD con la información necesaria para poder operar."
				},
				{
					"name": "Investor",
					"item": [
						{
							"name": "investor/notProcessed",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/investor/notProcessed",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"investor",
										"notProcessed"
									]
								},
								"description": "Obtiene una lista con la información de los usuarios de tipo inversor que aun no hayan sido procesados."
							},
							"response": []
						},
						{
							"name": "investor/update",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n        \"identifier\": \"50012844B\",\n        \"name\": \"FERNANDO\",\n        \"lastname\": \"RODRIGUEZ\",\n        \"lastname2\": \"DE LA TORRE \",\n        \"cellphone\": \"12345678910\",\n        \"email\": \"FERNANDO.RODRIGUEZ@TEST.com \",\n        \"address\": \"DESCONOCIDA\",\n        \"locality\": \"MADRID\",\n        \"state\": \"MADRID\",\n        \"country\": \" ESPAÑA\",\n        \"postalCode\": \"28027\",\n        \"procesed\": false\n    }"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/investor/update",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"investor",
										"update"
									]
								},
								"description": "Actualiza la información de un inversor, basado en el identificador enviado en la petición."
							},
							"response": []
						}
					],
					"description": "Los endpoints relacionados a un inversor se agrupan en esta sección."
				},
				{
					"name": "Compromiso Cuenta",
					"item": [
						{
							"name": "compromiso/getProducts",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/compromiso/getProducts",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"compromiso",
										"getProducts"
									]
								},
								"description": "Obtiene la información de todos los productos relacionados a un compromiso."
							},
							"response": []
						},
						{
							"name": "compromiso/getAccounts",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/compromiso/getAccounts?idProduct=33",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"compromiso",
										"getAccounts"
									],
									"query": [
										{
											"key": "idProduct",
											"value": "33",
											"description": "id del producto del cual se quiere obtener las relaciones con compromisos"
										}
									]
								},
								"description": "Obtiene la información de las cuentas y productos asociados a un compromiso, la búsqueda esta limitada por el producto enviado en la petición."
							},
							"response": []
						},
						{
							"name": "compromiso/addCompromiso",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "\n{\n\t\"idProduct\": 56,\n    \"idCuenta\": 224,\n    \"totalCompromiso\": 30000,\n    \"fechaCompromiso\": \"2019-11-21\" \n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/compromiso/addCompromiso",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"compromiso",
										"addCompromiso"
									]
								},
								"description": "Permite añadir un nuevo compromiso a una cuenta, dentro de las restricciones encontramos que debe existir al menos un compromiso previo para poder ejecutar esta operación y no debe existir un traspaso con fecha posterior a la fecha del nuevo compromiso que se intenta añadir.\n\nAdemás de lo anterior realiza una actualización de las posiciones posteriores a la fecha del compromiso ingresado."
							},
							"response": []
						},
						{
							"name": "compromiso/deleteCompromiso",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "\n{\"idProduct\":56,\"idCuenta\":224,\"totalCompromiso\":10000,\"fechaCompromiso\":\"2019-11-12\"}\n"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/compromiso/deleteCompromiso",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"compromiso",
										"deleteCompromiso"
									]
								},
								"description": "Permite el borrado físico del compromiso y realiza una actualización de las posiciones posteriores a la fecha del registro borrado.\n\nComo restricciones encontramos:\n\n*   La cuenta debe tener más de un compromiso registrado.\n*   No debe contar con traspasos posteriores a la fecha del compromiso que se desea eliminar."
							},
							"response": []
						},
						{
							"name": "compromiso/editCompromiso",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/json"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "\n{\n\t\"idProduct\": 56,\n    \"idCuenta\": 224,\n    \"totalCompromiso\": 30000,\n    \"fechaCompromiso\": \"2019-11-17\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/compromiso/editCompromiso",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"compromiso",
										"editCompromiso"
									]
								},
								"description": "Permite la modificación del compromiso y realiza una actualización de las posiciones posteriores a la fecha del compromiso modificado.\n\nComo restricciones encontramos:\n\n*   La cuenta debe tener al menos un compromiso a editar.\n*   La cuenta no debe contar con traspasos posteriores a la fecha del compromiso que se desea modificar."
							},
							"response": []
						}
					]
				},
				{
					"name": "Catalogs",
					"item": [
						{
							"name": "operation_types",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/operationTypes",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"operationTypes"
									]
								},
								"description": "Obtiene todos los códigos y descripciones de las operaciones permitidas en la aplicación."
							},
							"response": []
						},
						{
							"name": "categories",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/categories",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"categories"
									]
								},
								"description": "Obtiene todas las categorías de los documentos. No confundir con las categorizaciones de la aplicación."
							},
							"response": []
						},
						{
							"name": "recipient_types",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/recipientTypes",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"recipientTypes"
									]
								},
								"description": "Obtiene los tipos de destinatario registrados en BD."
							},
							"response": []
						},
						{
							"name": "states",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/states",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"states"
									]
								},
								"description": "Obtiene la información de los estados registrados en BD."
							},
							"response": []
						},
						{
							"name": "profiles",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/profiles",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"profiles"
									]
								},
								"description": "Obtiene la información de los perfiles registrados en BD."
							},
							"response": []
						},
						{
							"name": "currencies",
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/currencies",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"currencies"
									]
								},
								"description": "Obtiene la información de las divisas registradas en BD."
							},
							"response": []
						},
						{
							"name": "data_loaders",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/catalogs/data-loaders",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"catalogs",
										"data-loaders"
									]
								}
							},
							"response": []
						}
					],
					"description": "Endpoints relacionados con la información de los catálogos de la aplicación"
				}
			],
			"description": "Los endpoints encargados de ingresar, actualizar o borrar las operaciones se encuentran en esta sección, estos endpoints corresponden a la parte de mantenimiento de la información."
		},
		{
			"name": "Test",
			"item": [
				{
					"name": "Login",
					"item": [
						{
							"name": "perform_login OK Distribuidor",
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
											"key": "username",
											"value": "ArcanoRE",
											"type": "text"
										},
										{
											"key": "password",
											"value": "Arcano2021*",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login OK",
									"originalRequest": {
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
													"key": "username",
													"value": "rdiaz@arcanopartners.com",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=E51DC3D7333267BE64573D31CF631112; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Content-Length",
											"value": "108"
										},
										{
											"key": "Date",
											"value": "Mon, 25 Apr 2022 08:09:34 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"result\": \"success\",\n    \"user\": \"rdiaz@arcanopartners.com\",\n    \"timestamp\": \"Mon Apr 25 10:09:34 CEST 2022\"\n}"
								}
							]
						},
						{
							"name": "perform_login OK NO_Distribuidor",
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
											"key": "username",
											"value": "rdiaz@arcanopartners.com",
											"type": "text"
										},
										{
											"key": "password",
											"value": "Arcano2021*",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login OK NO_Distribuidor",
									"originalRequest": {
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
													"key": "username",
													"value": "rdiaz@arcanopartners.com",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "plain",
									"header": [
										{
											"key": "Date",
											"value": "Wed, 18 May 2022 19:04:02 GMT"
										},
										{
											"key": "Server",
											"value": "Apache/2.4.37 (centos)"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Length",
											"value": "108"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=39E7BF96E8CA66FDE2D729F5F049C879; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Keep-Alive",
											"value": "timeout=5, max=100"
										},
										{
											"key": "Connection",
											"value": "Keep-Alive"
										}
									],
									"cookie": [],
									"body": "{\"result\" : \"success\",\"user\" : \"rdiaz@arcanopartners.com\", \"timestamp\" : \"Wed May 18 21:04:02 CEST 2022\" }\r\n"
								}
							]
						},
						{
							"name": "perform_login OK Usuariodev",
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
											"key": "username",
											"value": "usuariodev",
											"type": "text"
										},
										{
											"key": "password",
											"value": "usuariodev",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login OK",
									"originalRequest": {
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
													"key": "username",
													"value": "rdiaz@arcanopartners.com",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=E51DC3D7333267BE64573D31CF631112; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Content-Length",
											"value": "108"
										},
										{
											"key": "Date",
											"value": "Mon, 25 Apr 2022 08:09:34 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"result\": \"success\",\n    \"user\": \"rdiaz@arcanopartners.com\",\n    \"timestamp\": \"Mon Apr 25 10:09:34 CEST 2022\"\n}"
								}
							]
						},
						{
							"name": "perform_login KO",
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
											"key": "username",
											"value": "usuariodev1",
											"type": "text"
										},
										{
											"key": "password",
											"value": "usuariodev1",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login KO",
									"originalRequest": {
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
													"key": "username",
													"value": "usuariodev1",
													"type": "text"
												},
												{
													"key": "password",
													"value": "usuariodev1",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "Unauthorized",
									"code": 401,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Length",
											"value": "117"
										},
										{
											"key": "Date",
											"value": "Mon, 25 Apr 2022 08:14:01 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"result\": \"error\",\n    \"message\": \"User not found or inactive user\",\n    \"timestamp\": \"Mon Apr 25 10:14:01 CEST 2022\"\n}"
								}
							]
						},
						{
							"name": "users_obtain_info",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"username\":\"00405375T\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/obtainInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"obtainInfo"
									]
								}
							},
							"response": [
								{
									"name": "users_obtain_info",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\n\t\"username\":\"usuariodev\"\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/users/obtainInfo",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"users",
												"obtainInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Thu, 28 Apr 2022 08:23:31 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"id\": 1,\n    \"username\": \"usuariodev\",\n    \"description\": \"Usuario desarrollo\",\n    \"profile\": {\n        \"id\": 1,\n        \"name\": \"USER\",\n        \"description\": \"Usuario\"\n    },\n    \"language\": {\n        \"id\": 1,\n        \"language\": \"ES\",\n        \"description\": \"Español\"\n    },\n    \"email\": \"Victormanuel.partida@optimissa.com\",\n    \"contactInfo\": \"José Echegaray 14,Las Rozas Parque Empresarial, 28232\",\n    \"identifier\": \"00000001L\",\n    \"phone\": \"(0034) 659 832 859\",\n    \"status\": \"ACTIVE\",\n    \"attempts\": 0,\n    \"rolDto\": []\n}"
								}
							]
						},
						{
							"name": "users_obtain_info Search",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"username\":\"rdi\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/obtainInfoSearch",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"obtainInfoSearch"
									]
								}
							},
							"response": [
								{
									"name": "users_obtain_info",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\n\t\"username\":\"usuariodev\"\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/users/obtainInfo",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"users",
												"obtainInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Thu, 28 Apr 2022 08:23:31 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"id\": 1,\n    \"username\": \"usuariodev\",\n    \"description\": \"Usuario desarrollo\",\n    \"profile\": {\n        \"id\": 1,\n        \"name\": \"USER\",\n        \"description\": \"Usuario\"\n    },\n    \"language\": {\n        \"id\": 1,\n        \"language\": \"ES\",\n        \"description\": \"Español\"\n    },\n    \"email\": \"Victormanuel.partida@optimissa.com\",\n    \"contactInfo\": \"José Echegaray 14,Las Rozas Parque Empresarial, 28232\",\n    \"identifier\": \"00000001L\",\n    \"phone\": \"(0034) 659 832 859\",\n    \"status\": \"ACTIVE\",\n    \"attempts\": 0,\n    \"rolDto\": []\n}"
								}
							]
						}
					]
				},
				{
					"name": "Acounts",
					"item": [
						{
							"name": "accounts paged",
							"protocolProfileBehavior": {
								"disableBodyPruning": true
							},
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\": 32, \n\t\"date\": \"2020-03-23\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product_accounts/accounts_paged?search=&pageNo=1&pageSize=15",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product_accounts",
										"accounts_paged"
									],
									"query": [
										{
											"key": "search",
											"value": ""
										},
										{
											"key": "pageNo",
											"value": "1"
										},
										{
											"key": "pageSize",
											"value": "15"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/userApi/Accounts",
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"value": "application/x-www-form-urlencoded"
									}
								],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts?pageNo=0&pageSize=10",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"Accounts"
									],
									"query": [
										{
											"key": "pageNo",
											"value": "0",
											"description": "Página solicitada"
										},
										{
											"key": "pageSize",
											"value": "10",
											"description": "Número máximo de elementos resultantes"
										}
									]
								},
								"description": "Metodo usado Retorna un Listado de cuentas. Obtención de las cuentas asociadas al usuario logueado."
							},
							"response": [
								{
									"name": "api/v1/userApi/Accounts",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"key": "Content-Type",
												"value": "application/x-www-form-urlencoded"
											}
										],
										"url": {
											"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts?pageNo=0&pageSize=10",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"Accounts"
											],
											"query": [
												{
													"key": "pageNo",
													"value": "0",
													"description": "Página solicitada"
												},
												{
													"key": "pageSize",
													"value": "10",
													"description": "Número máximo de elementos resultantes"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Thu, 21 Apr 2022 15:20:10 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"page\": 0,\n    \"size\": 10,\n    \"totalPages\": 5,\n    \"totalElements\": 44,\n    \"role\": \"Gestor de banco\",\n    \"capitalComprometido\": \"71012595.83392097\",\n    \"desembolsado\": \"38730854.71277955\",\n    \"distribuido\": \"8959814.86170000\",\n    \"detailAccountListeds\": [\n        {\n            \"accountName\": \"ANTONIO DANIEL VILCHEZ RODRIGUEZ, S.L.\",\n            \"ctaAriaId\": \"1aa4bd68782b5db0cd3e29c94fc5bccf\",\n            \"idCtaAriaId\": \"514\",\n            \"fechaAlta\": \"2016-11-04\",\n            \"desembolsado\": \"1594527.08279487\",\n            \"distribuído\": \"310397.84630000\",\n            \"capitalComprometido\": \"2480774.53260964\",\n            \"dni\": [\n                \"B23764566\"\n            ],\n            \"codigoPostal\": [\n                \"23170\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"841247.44981478\",\n            \"valoracion\": \"3217624.33220719\",\n            \"products\": [\n                \"AC ADVANTAGE-CREDIT STRATEGIES, FIL   \\\"FR\\\"\",\n                \"EUROPEAN INCOME FUND - ESG SELECTION, FIL   \\\"A1\\\"\",\n                \"EUROPEAN SENIOR SECURED LOAN FUND - ESG SELECTION, FIL   \\\"RA\\\"\",\n                \"ARCANO CAPITAL X, FCR   \\\"A\\\"\",\n                \"ARCANO CAPITAL XII, FCR   \\\"B4\\\"\",\n                \"ARCANO SECONDARY FUND BP II, FCR\",\n                \"ARCANO SECONDARY FUND XIV, FCR   \\\"A7\\\"\",\n                \"ARCANO VENTURES, FCR   \\\"A\\\"   (USD)\",\n                \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"B\\\"\",\n                \"ARCANO VENTURES II, SCA   \\\"ORD.SHS.\\\"   (USD)\"\n            ]\n        },\n        {\n            \"accountName\": \"JON GARAIYURREBASO EGUIA\",\n            \"ctaAriaId\": \"c309b28db3147cd75272bc7b3a552a1e\",\n            \"idCtaAriaId\": \"3330\",\n            \"fechaAlta\": \"2018-10-12\",\n            \"desembolsado\": \"0E-8\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"0E-8\",\n            \"dni\": [\n                \"14612029Z\"\n            ],\n            \"codigoPostal\": [\n                \"28023\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"0E-8\",\n            \"valoracion\": \"33694.19178532\",\n            \"products\": [\n                \"ARCANO PRIVATE DEBT, FIL   \\\"D\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"BARCIAL INVERSIONES, S.L.\",\n            \"ctaAriaId\": \"e81d7e76081e8c4f896d7cc36e384c73\",\n            \"idCtaAriaId\": \"3970\",\n            \"fechaAlta\": \"2021-01-10\",\n            \"desembolsado\": \"910001.07000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"2500000.00000000\",\n            \"dni\": [\n                \"B36849651\"\n            ],\n            \"codigoPostal\": [\n                \"36202\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"1589998.93000000\",\n            \"valoracion\": \"962473.92190711\",\n            \"products\": [\n                \"ARCANO EARTH, SCR   \\\"A6\\\"\",\n                \"ARCANO CAPITAL INVESTMENTS AC XII, SCR   \\\"A4\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"JOSE GARCIA MORENO\",\n            \"ctaAriaId\": \"10f03383f832887c1fa41bb3942d41cd\",\n            \"idCtaAriaId\": \"323\",\n            \"fechaAlta\": \"2019-01-04\",\n            \"desembolsado\": \"72000.00000000\",\n            \"distribuído\": \"30120.00000000\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"07779304Z\"\n            ],\n            \"codigoPostal\": [\n                \"28035\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"23000.00000000\",\n            \"valoracion\": \"92201.68283683\",\n            \"products\": [\n                \"ARCANO CAPITAL XI, FCR   \\\"A1\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"KLUSTER TRUST, S.L.\",\n            \"ctaAriaId\": \"5c338281aafc1692ba7eee1a75c53905\",\n            \"idCtaAriaId\": \"1605\",\n            \"fechaAlta\": \"2019-06-12\",\n            \"desembolsado\": \"60000.00000000\",\n            \"distribuído\": \"2500.00000000\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"B61769402\"\n            ],\n            \"codigoPostal\": [\n                \"08022\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"42500.00000000\",\n            \"valoracion\": \"59690.02805417\",\n            \"products\": [\n                \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"MONTAUK MANAGEMENT, S.L.\",\n            \"ctaAriaId\": \"98002fa7849c04fab5dc991eb0471a55\",\n            \"idCtaAriaId\": \"2631\",\n            \"fechaAlta\": \"2022-09-11\",\n            \"desembolsado\": \"375000.00000000\",\n            \"distribuído\": \"50750.00000000\",\n            \"capitalComprometido\": \"650000.00000000\",\n            \"dni\": [\n                \"B86454998\"\n            ],\n            \"codigoPostal\": [\n                \"28109\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"250000.00000000\",\n            \"valoracion\": \"478490.20314396\",\n            \"products\": [\n                \"ARCANO CAPITAL X, FCR   \\\"A\\\"\",\n                \"ARCANO SECONDARY FUND XIV, FCR   \\\"A8\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"RAUL DIAZ CAMPS\",\n            \"ctaAriaId\": \"0d33661bccb43c8f4498d795abb3959c\",\n            \"idCtaAriaId\": \"264\",\n            \"fechaAlta\": \"2021-08-10\",\n            \"desembolsado\": \"9100.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"20000.00000000\",\n            \"dni\": [\n                \"20039738E\"\n            ],\n            \"codigoPostal\": [\n                \"\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"10900.00000000\",\n            \"valoracion\": \"11931.22175412\",\n            \"products\": [\n                \"ARCANO SECONDARY FUND XIV, FCR   \\\"A9\\\"\",\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A6\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"VICENTE ORTA CALVET\",\n            \"ctaAriaId\": \"11883df6c11c4e74105a9e50f69acea3\",\n            \"idCtaAriaId\": \"330\",\n            \"fechaAlta\": \"2021-04-03\",\n            \"desembolsado\": \"25000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"37737684C\"\n            ],\n            \"codigoPostal\": [\n                \"08037\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"75000.00000000\",\n            \"valoracion\": \"24205.05393928\",\n            \"products\": [\n                \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A6\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"OLGA ZAPATA GIL\",\n            \"ctaAriaId\": \"77cd64cfc7ad85c3325c3aeb64586029\",\n            \"idCtaAriaId\": \"5451\",\n            \"fechaAlta\": \"2021-06-30\",\n            \"desembolsado\": \"0E-8\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"0E-8\",\n            \"dni\": [\n                \"50713552R\"\n            ],\n            \"codigoPostal\": [\n                \" \"\n            ],\n            \"pais\": [\n                \" \"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"0E-8\",\n            \"valoracion\": \"446079.39305240\",\n            \"products\": [\n                \"EUROPEAN INCOME FUND - ESG SELECTION, FIL   \\\"D2\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"QUINTET EUROPEAN PRIVATE BANKERS / BEMO EUROPE (KBL)\",\n            \"ctaAriaId\": \"3afc76f1aaa17fc8baa60b960de01614\",\n            \"idCtaAriaId\": \"1036\",\n            \"fechaAlta\": \"2021-06-10\",\n            \"desembolsado\": \"260959.59520000\",\n            \"distribuído\": \"76256.86550000\",\n            \"capitalComprometido\": \"799998.75900000\",\n            \"dni\": [\n                \"11318951\"\n            ],\n            \"codigoPostal\": [\n                \"\"\n            ],\n            \"pais\": [\n                \"LUXEMBURGO\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"539039.16380000\",\n            \"valoracion\": \"132584.08634773\",\n            \"products\": [\n                \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\"\n            ]\n        }\n    ],\n    \"pdtDesembolso\": \"30706968.68114147\",\n    \"valoracion\": \"69137726.15743307\"\n}"
								}
							]
						},
						{
							"name": "api/v1/getInfo",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/getInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"getInfo"
									]
								},
								"description": "Metodo usado para obtener la Informacion detallada del usuario, Obtención de la información básica asociada con el usuario logueado."
							},
							"response": [
								{
									"name": "api/v1/getInfo",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/getInfo",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"getInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Mon, 25 Apr 2022 13:10:29 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"username\": \"rdiaz@arcanopartners.com\",\n    \"apiRole\": \"Gestor de banco\",\n    \"accountList\": [\n        \"20\",\n        \"96\",\n        \"206\",\n        \"264\",\n        \"296\",\n        \"301\",\n        \"318\",\n        \"323\",\n        \"330\",\n        \"402\",\n        \"506\",\n        \"514\",\n        \"590\",\n        \"623\",\n        \"747\",\n        \"826\",\n        \"865\",\n        \"933\",\n        \"954\",\n        \"1036\",\n        \"1111\",\n        \"1149\",\n        \"1328\",\n        \"1498\",\n        \"1502\",\n        \"1605\",\n        \"1771\",\n        \"1903\",\n        \"2016\",\n        \"2256\",\n        \"2273\",\n        \"2504\",\n        \"2526\",\n        \"2533\",\n        \"2540\",\n        \"2631\",\n        \"2638\",\n        \"2650\",\n        \"2778\",\n        \"3033\",\n        \"3167\",\n        \"3215\",\n        \"3330\",\n        \"3410\",\n        \"3414\",\n        \"3612\",\n        \"3970\",\n        \"5451\",\n        \"5497\"\n    ]\n}"
								}
							]
						},
						{
							"name": "accounts paged",
							"protocolProfileBehavior": {
								"disableBodyPruning": true
							},
							"request": {
								"method": "GET",
								"header": [
									{
										"key": "Content-Type",
										"name": "Content-Type",
										"value": "application/json",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\n\t\"productId\": 32, \n\t\"date\": \"2020-03-23\"\n}"
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/product_accounts/accounts_paged?search=&pageNo=900&pageSize=7",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"product_accounts",
										"accounts_paged"
									],
									"query": [
										{
											"key": "search",
											"value": ""
										},
										{
											"key": "pageNo",
											"value": "900"
										},
										{
											"key": "pageSize",
											"value": "7"
										}
									]
								}
							},
							"response": [
								{
									"name": "accounts paged",
									"originalRequest": {
										"method": "GET",
										"header": [
											{
												"key": "Content-Type",
												"name": "Content-Type",
												"value": "application/json",
												"type": "text"
											}
										],
										"url": {
											"raw": "http://localhost:8082/arcano-cca/product_accounts/accounts_paged?search=&pageNo=1&pageSize=15",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"product_accounts",
												"accounts_paged"
											],
											"query": [
												{
													"key": "search",
													"value": ""
												},
												{
													"key": "pageNo",
													"value": "1"
												},
												{
													"key": "pageSize",
													"value": "15"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Wed, 27 Apr 2022 08:31:26 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"accounts\": [\n        {\n            \"ariaId\": \"c890ab8f323cb010d71de378d263110d\",\n            \"name\": \"MARIA ESTRELLA GARCIA ALVAREZ\",\n            \"ipfId\": \"50079129X\"\n        },\n        {\n            \"ariaId\": \"b667e525ee61d123f346a2d6151acf0f\",\n            \"name\": \"JOSE MARTÍNEZ SEPTIEN\",\n            \"createdDate\": \"2021-11-22T00:00:00.000+01:00\",\n            \"ipfId\": \"00647297P\"\n        },\n        {\n            \"ariaId\": \"03fc996969fc637621c2e8bc1e5a01ab\",\n            \"name\": \"FRANCISCO TORRES FERRER\",\n            \"ipfId\": \"28996836T\"\n        },\n        {\n            \"ariaId\": \"aa1c7e9fa97329482380404c207ad651\",\n            \"name\": \"JOSE IGNACIO SLOCKER SAN BENITO\",\n            \"createdDate\": \"2021-11-22T00:00:00.000+01:00\",\n            \"ipfId\": \"00820080S\"\n        },\n        {\n            \"ariaId\": \"1348db3aac194752f450e1ee36fbf331\",\n            \"name\": \"JAUME TORRES SEGURA\",\n            \"ipfId\": \"4033282\"\n        },\n        {\n            \"ariaId\": \"006395e0f0170cc4c0a4d7b4d4182cd9\",\n            \"name\": \"ALBERTO ALONSO ALDAMA | SOFIA ALBALADEJO VIDAL\",\n            \"ipfId\": \"33505880D03849465R\"\n        },\n        {\n            \"ariaId\": \"a7824351819417a6b52f1831fb001f91\",\n            \"name\": \"ARIN INVERSIONES FINANCIERAS, SIL,\",\n            \"createdDate\": \"2021-11-22T00:00:00.000+01:00\",\n            \"ipfId\": \"A82648973\"\n        },\n        {\n            \"ariaId\": \"7b43837d064d23c9812eb0c1695a4daf\",\n            \"name\": \"GEMMA BARDOLET DEL CASTILLO\",\n            \"createdDate\": \"2021-12-31T00:00:00.000+01:00\",\n            \"ipfId\": \"07499547Y\"\n        },\n        {\n            \"ariaId\": \"4970a053aad5a57902ce8d86b740d3d1\",\n            \"name\": \"GESFIN SUST LIMITED INFRASTRUCTURE FUND\",\n            \"createdDate\": \"2021-12-31T00:00:00.000+01:00\",\n            \"ipfId\": \"000708959\"\n        },\n        {\n            \"ariaId\": \"15591cc216319a0dcf6bcfcb19fac11b\",\n            \"name\": \"JOSE RAMON FERNANDEZ LOPEZ | LAURA ALONSO HERNANDEZ\",\n            \"ipfId\": \"51060086V07220797Q\"\n        },\n        {\n            \"ariaId\": \"7fe2d40062400422fcb2c12cfdae32f3\",\n            \"name\": \"MARGARITA GALINDO RUBIO\",\n            \"createdDate\": \"2021-11-22T00:00:00.000+01:00\",\n            \"ipfId\": \"08038103V\"\n        },\n        {\n            \"ariaId\": \"132b5d9429665306c8928244ae5b9ddd\",\n            \"name\": \"MARGARITA SERRANO VERDU\",\n            \"createdDate\": \"2021-12-31T00:00:00.000+01:00\",\n            \"ipfId\": \"74219121F\"\n        },\n        {\n            \"ariaId\": \"4dfa6995b70608f0f8030b499efeb313\",\n            \"name\": \"LUIS JAIME SERRANO SERRANO\",\n            \"ipfId\": \"50400562H\"\n        }\n    ],\n    \"page\": 1,\n    \"totalElements\": 5911\n}"
								}
							]
						},
						{
							"name": "userApi/posicionIntegrada Copy",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"accounts\":[96]\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionIntegrada",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"posicionIntegrada"
									]
								},
								"description": "```\nMetodo que obtiene la Posicion integrada de las cuentas seleccionadas para el usuario logueado, peticion realizada : POST METHOD.\n\n```"
							},
							"response": [
								{
									"name": "userApi/posicionIntegrada Copy",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"accounts\":[96]\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionIntegrada",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"posicionIntegrada"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Date",
											"value": "Mon, 25 Apr 2022 14:54:20 GMT"
										},
										{
											"key": "Server",
											"value": "Apache/2.4.37 (centos)"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Keep-Alive",
											"value": "timeout=5, max=100"
										},
										{
											"key": "Connection",
											"value": "Keep-Alive"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										}
									],
									"cookie": [],
									"body": "{\n    \"valoracionTotal\": 25698.36613888,\n    \"valoracionesProductsValues\": {\n        \"productsName\": [\n            \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A8\\\"\"\n        ],\n        \"value\": [\n            25698.36613888\n        ],\n        \"strategyProduct\": [\n            \"Private Equity\"\n        ]\n    },\n    \"exposicionTotal\": 100698.36613888,\n    \"exposicionesProductsValues\": {\n        \"productsName\": [\n            \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A8\\\"\"\n        ],\n        \"value\": [\n            100698.36613888\n        ],\n        \"strategyProduct\": [\n            \"Private Equity\"\n        ]\n    },\n    \"comprometidoTotal\": 100000,\n    \"comprometidosProductsValues\": {\n        \"productsName\": [\n            \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A8\\\"\"\n        ],\n        \"value\": [\n            100000\n        ],\n        \"strategyProduct\": [\n            \"Private Equity\"\n        ]\n    },\n    \"desembolsadoTotal\": 25000,\n    \"desembolsadosProductsValues\": {\n        \"productsName\": [\n            \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A8\\\"\"\n        ],\n        \"value\": [\n            25000\n        ],\n        \"strategyProduct\": [\n            \"Private Equity\"\n        ]\n    },\n    \"pteDesembolsadoTotal\": 75000,\n    \"pdtesDesembolsadosProductsValues\": {\n        \"productsName\": [\n            \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A8\\\"\"\n        ],\n        \"value\": [\n            75000\n        ],\n        \"strategyProduct\": [\n            \"Private Equity\"\n        ]\n    },\n    \"distribuidoTotal\": 0,\n    \"distribuidoProductsValues\": {\n        \"productsName\": [\n            \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A8\\\"\"\n        ],\n        \"value\": [\n            0\n        ],\n        \"strategyProduct\": [\n            \"Private Equity\"\n        ]\n    }\n}"
								}
							]
						},
						{
							"name": "get all new accounts paged",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/accounts/new-accounts?search=Manu&pageNo=0&pageSize=15",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"accounts",
										"new-accounts"
									],
									"query": [
										{
											"key": "search",
											"value": "Manu"
										},
										{
											"key": "pageNo",
											"value": "0"
										},
										{
											"key": "pageSize",
											"value": "15"
										}
									]
								}
							},
							"response": [
								{
									"name": "get all accounts paged",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://localhost:8082/arcano-cca/accounts/new-accounts?search=Manu&pageNo=0&pageSize=15",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"accounts",
												"new-accounts"
											],
											"query": [
												{
													"key": "search",
													"value": "Manu"
												},
												{
													"key": "pageNo",
													"value": "0"
												},
												{
													"key": "pageSize",
													"value": "15"
												}
											]
										}
									},
									"status": "Forbidden",
									"code": 403,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Tue, 26 Apr 2022 08:10:13 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"timestamp\": \"2022-04-26T10:10:13.018+0200\",\n    \"status\": 403,\n    \"error\": \"Forbidden\",\n    \"message\": \"Forbidden\",\n    \"path\": \"/arcano-cca/accounts/new-accounts\"\n}"
								},
								{
									"name": "get all accounts paged",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://localhost:8082/arcano-cca/accounts/new-accounts?search=Manu&pageNo=0&pageSize=15",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"accounts",
												"new-accounts"
											],
											"query": [
												{
													"key": "search",
													"value": "Manu"
												},
												{
													"key": "pageNo",
													"value": "0"
												},
												{
													"key": "pageSize",
													"value": "15"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Tue, 26 Apr 2022 13:20:31 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"accounts\": [\n        {\n            \"id\": 5499,\n            \"ariaId\": \"66f117bba646ae256751116f70858b43\",\n            \"name\": \"MANUEL PUERTOLAS NUBIOLA\",\n            \"loadingDate\": \"2021-11-04T00:00:00.000+01:00\",\n            \"createdDate\": \"2021-04-05T00:00:00.000+02:00\"\n        },\n        {\n            \"id\": 2850,\n            \"ariaId\": \"a57f546b738981b73a278f233b3baaa2\",\n            \"name\": \"MANUEL JOSE PIQUER BELLOCH\",\n            \"loadingDate\": \"2021-09-24T00:00:00.000+02:00\",\n            \"createdDate\": \"2021-04-03T00:00:00.000+02:00\"\n        },\n        {\n            \"id\": 5824,\n            \"ariaId\": \"49a45cd06c7d65264f8837b13ca22da3\",\n            \"name\": \"JUAN MANUEL ORMAZABAL GALARDI\",\n            \"loadingDate\": \"2022-02-23T00:00:00.000+01:00\",\n            \"createdDate\": \"2022-11-01T00:00:00.000+01:00\"\n        }\n    ],\n    \"pageSize\": 77\n}"
								}
							]
						},
						{
							"name": "BasicInformation",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicInformation",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"Accounts",
										"BasicInformation"
									]
								},
								"description": "Obtención de los datos para el buscador basico y los valores acumulativos del usuario logueado, retorna una lista de cuentas, con datos de nombres de las cuentas."
							},
							"response": [
								{
									"name": "BasicInformation",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicInformation",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"Accounts",
												"BasicInformation"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Date",
											"value": "Wed, 18 May 2022 19:05:39 GMT"
										},
										{
											"key": "Server",
											"value": "Apache/2.4.37 (centos)"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Keep-Alive",
											"value": "timeout=5, max=99"
										},
										{
											"key": "Connection",
											"value": "Keep-Alive"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										}
									],
									"cookie": [],
									"body": "{\n    \"listaNombreCuentas\": [\n        \"RAUL DIAZ CAMPS\",\n        \"ARCANO ASESORES FINANCIEROS, S.L.\",\n        \"ALVARO DE REMEDIOS SALABERT\",\n        \"JOSE LUIS DEL RIO GALAN\",\n        \"NAWAL BIDAH | YOUNES BERRADA SOUNNI LAYT\",\n        \"ILDEFONSO MARIA PEDRO RIBOT BELDA\",\n        \"CARLOS COLOMER COLOMER CASELLAS\",\n        \"GALODUE13, S.L.\",\n        \"NAWAL BIDAH | YOUNES BERRADA SOUNNI LAYT\",\n        \"VICENTE ORTA CALVET\",\n        \"FERMIN LALINDE ARACIL\",\n        \"JOSE LORENZO BARINAGA\",\n        \"RICARDO MIRO-QUESADA BAMBAREN\",\n        \"VICENTE BELTRAN ESCRIG\",\n        \"VALONSADERO INVERSIONES, S.L.\",\n        \"TOAD CAPITAL, S.L.\",\n        \"JON GARAIYURREBASO EGUIA\",\n        \"SANTIAGO FERNANDEZ  CABALLERO\",\n        \"JOSE GARCIA MORENO\",\n        \"OBRAS Y CONSTRUCCIONES CORTIZO, S.L.\",\n        \"ANTONIO DANIEL VILCHEZ RODRIGUEZ, S.L.\",\n        \"ANTONIO DANIEL VILCHEZ RODRIGUEZ\",\n        \"VILCHEZ-RODRIGUEZ FUSION, S.L.\",\n        \"JUAN JOSE ARMERO ARNEDO\",\n        \"MARIA JOSEFA GUIL NAVARRO\",\n        \"CORPORACION JUAN SEGARRA, S.L.\",\n        \"BARCIAL INVERSIONES, S.L.\",\n        \"OLGA ZAPATA GIL\",\n        \"HALEAKALA 2003, S.L.\",\n        \"KLUSTER TRUST, S.L.\",\n        \"ITALO DURAZZO\",\n        \"PEDRO RAIMUNDO SAENZ LAFOURCADE\",\n        \"MAGIC BOX MEDIA, S.L.U.\",\n        \"MOME INVESTMENTS, S.L.\",\n        \"PRIMAWOOD, S.L.U.\",\n        \"INFELIX 2002, S.L.\",\n        \"IMPULSO DESARROLLO EMPRESARIAL SCR, S.A.\",\n        \"ESPERANZA HUEDO FELTRER\",\n        \"FUTURESPAÑA HORIZONTE XI, F.P.\",\n        \"QUINTET EUROPEAN PRIVATE BANKERS / BEMO EUROPE (KBL)\",\n        \"EFG BANK, A.G.\",\n        \"UNIFONDO RENTA FIJA MIXTA 15, F.P.\",\n        \"BBVA TRESCIENTOS, F.P.\",\n        \"CAJA GRANADA VIDA Y PENSIONES II, F.P.\",\n        \"CAJA AHORROS MURCIA, F.P.\",\n        \"CAJA MURCIA VIDA Y PENSIONES COMPAÑIA DE SEGUROS Y REASEGUROS, S.A.\",\n        \"BANKIA MAPFRE VIDA, S.A.\",\n        \"SAMASTHITI SCR, S.A.\",\n        \"MONTAUK MANAGEMENT, S.L.\",\n        \"ORAVLA INVERSIONES, S.L.\",\n        \"SATISTEGUI 2002, S.L.\",\n        \"CARMOR DESARROLLOS E INVERSIONES, S.L.\",\n        \"ROYO WOOD, S.L.\",\n        \"RENTURIA CAPITAL, S.L.\",\n        \"MONKEY BUSINESS CONSULTANTS, S.L.\",\n        \"ISABA TRADE BUSINESS, S.L.\",\n        \"GALWAY TRADING & CONSULTING, S.L.\",\n        \"COMPAÑIA DE MARIA MARIANISTAS PROVINCIA DE ESPAÑA\",\n        \"PA&NOA TROPICALES, S.L.U.\",\n        \"EXPOBUSINESS, S.L.\",\n        \"MONKEY BUSINESS CONSULTANTS, S.L.\",\n        \"ISABA TRADE BUSINESS, S.L.\",\n        \"GALWAY TRADING & CONSULTING, S.L.\",\n        \"COMPAÑIA DE MARIA MARIANISTAS PROVINCIA DE ESPAÑA\",\n        \"PA&NOA TROPICALES, S.L.U.\",\n        \"EXPOBUSINESS, S.L.\",\n        \"MONKEY BUSINESS CONSULTANTS, S.L.\",\n        \"ISABA TRADE BUSINESS, S.L.\",\n        \"GALWAY TRADING & CONSULTING, S.L.\",\n        \"COMPAÑIA DE MARIA MARIANISTAS PROVINCIA DE ESPAÑA\",\n        \"PA&NOA TROPICALES, S.L.U.\",\n        \"EXPOBUSINESS, S.L.\"\n    ],\n    \"listaProductos\": [\n        \"ARCANO SECONDARY FUND XIV, FCR   \\\"A9\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A8\\\"\",\n        \"EUROPEAN INCOME FUND - ESG SELECTION, FIL   \\\"A4\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"D\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO GLOBAL OPPORTUNITY FUND II, FCR   \\\"A\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A5\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A6\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A8\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A5\\\"\",\n        \"ARCANO VENTURES II, SCA   \\\"ORD.SHS.\\\"   (USD)\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A8\\\"\",\n        \"ARCANO PRIVATE DEBT, FIL   \\\"D\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A6\\\"\",\n        \"ARCANO CAPITAL XI, FCR   \\\"A1\\\"\",\n        \"ARCANO CAPITAL XI, FCR   \\\"A2\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"B4\\\"\",\n        \"ARCANO PRIVATE DEBT, FIL   \\\"A\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A6\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO EARTH, SCR   \\\"A6\\\"\",\n        \"ARCANO SECONDARY CAPITAL INVESTMENTS XIV, SCR   \\\"B5\\\"\",\n        \"ARCANO CAPITAL INVESTMENTS AC XII, SCR   \\\"A4\\\"\",\n        \"EUROPEAN INCOME FUND - ESG SELECTION, FIL   \\\"D2\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"A5\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO CAPITAL XI, FCR   \\\"A1\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"D\\\"\",\n        \"ARCANO CAPITAL XII, SCR   \\\"B4\\\"\",\n        \"ARCANO CAPITAL XII, SCR   \\\"B3\\\"\",\n        \"ARCANO CAPITAL XII, SCR   \\\"A4\\\"\",\n        \"ARCANO CAPITAL XII, SCR   \\\"A3\\\"\",\n        \"ARCANO CAPITAL XII, FCR   \\\"B3\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"A\\\"\",\n        \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n        \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n        \"EUROPEAN INCOME FUND - ESG SELECTION, FIL   \\\"D1\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\" B´ \\\"\",\n        \"ARCANO SPANISH OPPORTUNITY REAL ESTATE, SCA - SICAR   \\\"FCI\\\"\",\n        \"ARCANO SPANISH OPPORTUNITY REAL ESTATE, SCA - SICAR   \\\"FCI\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"A\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"A\\\"\",\n        \"ARCANO CAPITAL INVESTMENTS AC XII, SCR   \\\"A9\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"A\\\"\",\n        \"ARCANO CAPITAL X, FCR   \\\"B\\\"\",\n        \"ARCANO VENTURES, FCR   \\\"A\\\"   (USD)\",\n        \"ARCANO SECONDARY FUND XIV, FCR   \\\"A6\\\"\",\n        \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A1\\\"\",\n        \"EUROPEAN SENIOR SECURED LOAN FUND - ESG SELECTION, FIL   \\\"RA\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A5\\\"\",\n        \"ARCANO VENTURES, FCR   \\\"A\\\"   (USD)\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A5\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A5\\\"\",\n        \"ARCANO VENTURES, FCR   \\\"A\\\"   (USD)\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A5\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A5\\\"\",\n        \"ARCANO VENTURES, FCR   \\\"A\\\"   (USD)\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO IMPACT PRIVATE EQUITY FUND, FCR   \\\"A5\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\",\n        \"ARCANO EARTH FUND, FCR   \\\"A6\\\"\"\n    ],\n    \"listaDnis\": [\n        \"20039738E\",\n        \"B83680322\",\n        \"05268205D\",\n        \"05270050Z\",\n        \"55140966F\",\n        \"X3650240W\",\n        \"50675199N\",\n        \"37608023X\",\n        \"B23765431\",\n        \"37737684C\",\n        \"21467206H\",\n        \"15891811F\",\n        \"06630063Z\",\n        \"18940054Z\",\n        \"B84682970\",\n        \"B02864825\",\n        \"14612029Z\",\n        \"09632711N\",\n        \"07779304Z\",\n        \"B27220284\",\n        \"B23764566\",\n        \"26036533G\",\n        \"B23766140\",\n        \"17837038D\",\n        \"01476718A\",\n        \"B12604823\",\n        \"B36849651\",\n        \"50713552R\",\n        \"B86379732\",\n        \"B61769402\",\n        \"X0904187B\",\n        \"02632389Q\",\n        \"B63534721\",\n        \"L713586P\",\n        \"B65421414\",\n        \"B01329283\",\n        \"A84469980\",\n        \"52681234X\",\n        \"V24525016\",\n        \"11318951\",\n        \"105956745\",\n        \"V78974409\",\n        \"V87280038\",\n        \"V92446897\",\n        \"V78968492\",\n        \"A73505158\",\n        \"A80434699\",\n        \"A05416854\",\n        \"B86454998\",\n        \"B81796591\",\n        \"B48921050\",\n        \"B95736138\",\n        \"B96773494\",\n        \"B97418180\",\n        \"B71354088\",\n        \"B62077573\",\n        \"B09453911\",\n        \"R2800032A\",\n        \"B76562511\",\n        \"B82442963\"\n    ],\n    \"listaNombreInversores\": [\n        \"RAUL\",\n        \"ARCANO ASESORES FINANCIEROS, S.L.\",\n        \"ALVARO\",\n        \"JOSE LUIS\",\n        \"YOUNES\",\n        \"NAWAL\",\n        \"ILDEFONSO MARIA PEDRO\",\n        \"CARLOS COLOMER\",\n        \"GALODUE13, S.L.\",\n        \"VICENTE\",\n        \"FERMIN\",\n        \"JOSE\",\n        \"RICARDO\",\n        \"VALONSADERO INVERSIONES, S.L.\",\n        \"TOAD CAPITAL, S.L.\",\n        \"JON\",\n        \"SANTIAGO\",\n        \"OBRAS Y CONSTRUCCIONES CORTIZO, S.L.\",\n        \"ANTONIO DANIEL VILCHEZ RODRIGUEZ, S.L.\",\n        \"ANTONIO DANIEL\",\n        \"VILCHEZ-RODRIGUEZ FUSION, S.L.\",\n        \"JUAN JOSE\",\n        \"MARIA JOSEFA\",\n        \"CORPORACION JUAN SEGARRA, S.L.\",\n        \"BARCIAL INVERSIONES, S.L.\",\n        \"OLGA\",\n        \"HALEAKALA 2003, S.L.\",\n        \"KLUSTER TRUST, S.L.\",\n        \"ITALO\",\n        \"PEDRO RAIMUNDO\",\n        \"MAGIC BOX MEDIA, S.L.U.\",\n        \"MOME INVESTMENTS, S.L.\",\n        \"PRIMAWOOD, S.L.U.\",\n        \"INFELIX 2002, S.L.\",\n        \"IMPULSO DESARROLLO EMPRESARIAL SCR, S.A.\",\n        \"ESPERANZA\",\n        \"FUTURESPAÑA HORIZONTE XI, F.P.\",\n        \"QUINTET EUROPEAN PRIVATE BANKERS / BEMO EUROPE (KBL)\",\n        \"EFG BANK, A.G.\",\n        \"UNIFONDO RENTA FIJA MIXTA 15, F.P.\",\n        \"BBVA TRESCIENTOS, F.P.\",\n        \"CAJA GRANADA VIDA Y PENSIONES II, F.P.\",\n        \"CAJA AHORROS MURCIA, F.P.\",\n        \"CAJA MURCIA VIDA Y PENSIONES COMPAÑIA DE SEGUROS Y REASEGUROS, S.A.\",\n        \"BANKIA MAPFRE VIDA, S.A.\",\n        \"SAMASTHITI SCR, S.A.\",\n        \"MONTAUK MANAGEMENT, S.L.\",\n        \"ORAVLA INVERSIONES, S.L.\",\n        \"SATISTEGUI 2002, S.L.\",\n        \"CARMOR DESARROLLOS E INVERSIONES, S.L.\",\n        \"ROYO WOOD, S.L.\",\n        \"RENTURIA CAPITAL, S.L.\",\n        \"MONKEY BUSINESS CONSULTANTS, S.L.\",\n        \"ISABA TRADE BUSINESS, S.L.\",\n        \"GALWAY TRADING & CONSULTING, S.L.\",\n        \"COMPAÑIA DE MARIA MARIANISTAS PROVINCIA DE ESPAÑA\",\n        \"PA&NOA TROPICALES, S.L.U.\",\n        \"EXPOBUSINESS, S.L.\"\n    ],\n    \"capitalComprometido\": 31955000,\n    \"desembolsado\": 19646698.07,\n    \"distribuido\": 1903560.72\n}"
								}
							]
						},
						{
							"name": "detallePosicion",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"accounts\" : [],\r\n    \"listProductIdStrategy\": [],\r\n    \"searchDate\": \"\",\r\n    \"pageNo\": 0,\r\n    \"pageSize\": 28,\r\n    \"sortBy\": \"\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/detallePosicion",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"detallePosicion"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "detallePosicion",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"accounts\" : [],\r\n    \"listProductIdStrategy\": [],\r\n    \"searchDate\": \"\",\r\n    \"pageNo\": 0,\r\n    \"pageSize\": 28,\r\n    \"sortBy\": \"\"\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/detallePosicion",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"detallePosicion"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Date",
											"value": "Wed, 18 May 2022 19:26:41 GMT"
										},
										{
											"key": "Server",
											"value": "Apache/2.4.37 (centos)"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Keep-Alive",
											"value": "timeout=5, max=100"
										},
										{
											"key": "Connection",
											"value": "Keep-Alive"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										}
									],
									"cookie": [],
									"body": "{\n    \"page\": 0,\n    \"size\": 13,\n    \"total\": 13,\n    \"detallePosicionReducidaList\": [],\n    \"detallePosicionExtendidaList\": [\n        {\n            \"productId\": 205,\n            \"productName\": \"ARCANO SPANISH OPPORTUNITY REAL ESTATE, SCA - SICAR   \\\"FCI\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 1792710.6361428,\n            \"nav\": \"0.200400000000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 8945661.857,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 12000000,\n            \"desembolsado\": 9444000,\n            \"pendiente\": 2556000,\n            \"distribuido\": 11766670.2366,\n            \"porcenTirNeta\": \"12.035118937500\",\n            \"porcenMultiploNeto\": \"1.435000000000\",\n            \"porcenDistribuido\": \"71.960000000000\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 209,\n            \"productName\": \"ARCANO SPANISH OPPORTUNITY REAL ESTATE, SCA - SICAR   \\\"PBI\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 492001.75719085,\n            \"nav\": \"0.099500000000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 4944741.2783,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 6500000,\n            \"desembolsado\": 5115500,\n            \"pendiente\": 1384500,\n            \"distribuido\": 6373613.0467,\n            \"porcenTirNeta\": \"12.035118937500\",\n            \"porcenMultiploNeto\": \"1.435000000000\",\n            \"porcenDistribuido\": \"71.960000000000\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 203,\n            \"productName\": \"ARCANO SPANISH OPPORTUNITY REAL ESTATE, SCA - SICAR   \\\"AI\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 2668339.64220976,\n            \"nav\": \"0.240200000000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 11108824.4888,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 15000000,\n            \"desembolsado\": 11805000,\n            \"pendiente\": 3195000,\n            \"distribuido\": 14708337.7998,\n            \"porcenTirNeta\": \"12.035118937500\",\n            \"porcenMultiploNeto\": \"1.435000000000\",\n            \"porcenDistribuido\": \"71.960000000000\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 226,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"A\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 5128687.99628241,\n            \"nav\": \"0.548067122000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 9357773.5106,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 28690655.35,\n            \"desembolsado\": 9358891.7752,\n            \"pendiente\": 19331763.5748,\n            \"distribuido\": 3299425.3652,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 228,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"B\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 508176.5109152,\n            \"nav\": \"0.429689818000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 1182658.9545,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 8750000,\n            \"desembolsado\": 2949750,\n            \"pendiente\": 7471500,\n            \"distribuido\": 2629750,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 230,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"C\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 2797299.03212137,\n            \"nav\": \"0.446404967000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 6266281.1548,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 34350000,\n            \"desembolsado\": 11204970,\n            \"pendiente\": 28082380,\n            \"distribuido\": 8792100,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 207,\n            \"productName\": \"ARCANO SPANISH OPPORTUNITY REAL ESTATE, SCA - SICAR   \\\"SCI\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 454874.53327182,\n            \"nav\": \"0.174600000000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 2605237.8767,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 3500000,\n            \"desembolsado\": 2754500,\n            \"pendiente\": 745500,\n            \"distribuido\": 3431945.4866,\n            \"porcenTirNeta\": \"12.035118937500\",\n            \"porcenMultiploNeto\": \"1.435000000000\",\n            \"porcenDistribuido\": \"71.960000000000\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 232,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 1991253.22441023,\n            \"nav\": \"0.392949047000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 5067459.1009,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 15150000,\n            \"desembolsado\": 4955680,\n            \"pendiente\": 10194320,\n            \"distribuido\": 1727875,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 234,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"E\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 1477757.60132037,\n            \"nav\": \"0.486815130000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 3035562.1883,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 9250000,\n            \"desembolsado\": 3017350,\n            \"pendiente\": 6232650,\n            \"distribuido\": 1063750,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 217,\n            \"productName\": \"ARCANO SPANISH OPPORTUNITY REAL ESTATE II, SCA - SICAR   \\\"AI\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 2405328.3928895,\n            \"nav\": \"0.214600000000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 11208426.8075,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 15000000,\n            \"desembolsado\": 11805000,\n            \"pendiente\": 3195000,\n            \"distribuido\": 14708336.8452,\n            \"porcenTirNeta\": \"11.983278393700\",\n            \"porcenMultiploNeto\": \"1.427400000000\",\n            \"porcenDistribuido\": \"71.960000000000\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 233,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"   (USD)\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 240964.44980168,\n            \"nav\": \"0.428705452000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 652400,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 1545601.27948652,\n            \"desembolsado\": 562074.61014905,\n            \"pendiente\": 983526.66933747,\n            \"distribuido\": 198156.28500044,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1.1607\n        },\n        {\n            \"productId\": 236,\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 175729.91977828,\n            \"nav\": \"0.562080606000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 312641.8487,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 2000000,\n            \"desembolsado\": 652400,\n            \"pendiente\": 1673626,\n            \"distribuido\": 556026,\n            \"porcenTirNeta\": \"\",\n            \"porcenMultiploNeto\": \"0.824800000000\",\n            \"porcenDistribuido\": \"\",\n            \"fxPrecio\": 1\n        },\n        {\n            \"productId\": 219,\n            \"productName\": \"ARCANO SPANISH OPPORTUNITY REAL ESTATE II, SCA - SICAR   \\\"SCI\\\"\",\n            \"strategyProduct\": \"Inmobiliario\",\n            \"valoracion\": 1019394.76770902,\n            \"nav\": \"0.147800000000\",\n            \"fecha\": \"2021-12-31T00:00:00.000+0100\",\n            \"participaciones\": 6897122.9209,\n            \"idDocs\": [\n                2,\n                7\n            ],\n            \"extendida\": 1,\n            \"capitalCompromemtido\": 9200000,\n            \"desembolsado\": 7240400,\n            \"pendiente\": 1959600,\n            \"distribuido\": 9021113.265,\n            \"porcenTirNeta\": \"11.983278393700\",\n            \"porcenMultiploNeto\": \"1.427400000000\",\n            \"porcenDistribuido\": \"71.960000000000\",\n            \"fxPrecio\": 1\n        }\n    ]\n}"
								}
							]
						}
					]
				},
				{
					"name": "Recuperar Usuario",
					"item": [
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
									"raw": "http://{{server}}/arcano-cca/SMS/createUserSMS",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"SMS",
										"createUserSMS"
									]
								},
								"description": "```\nCreación de nuevo usuario y envío de SMS con el código de usuario generado. \n```"
							},
							"response": [
								{
									"name": "createUserSMS",
									"originalRequest": {
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
											"raw": "http://{{server}}/arcano-cca/SMS/createUserSMS",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"SMS",
												"createUserSMS"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Mon, 25 Apr 2022 08:08:54 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
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
											"value": "53730253E",
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
									"raw": "http://{{server}}/arcano-cca/SMS/sendToken",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"SMS",
										"sendToken"
									]
								},
								"description": "```\nCreación de Token y envío por SMS o email\n```"
							},
							"response": [
								{
									"name": "sendToken",
									"originalRequest": {
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
													"value": "53730253E",
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
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 22 Apr 2022 16:06:19 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\",\n    \"extraInfo\": \"Username : \\\"alfredo.limon@optimissa.com\\\"\"\n}"
								}
							]
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
											"value": "alfredo.limon@optimissa.com",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/SMS/sendTokenC",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"SMS",
										"sendTokenC"
									]
								},
								"description": "```\nCreación de Token y envío por SMS o email\n```"
							},
							"response": [
								{
									"name": "sendToken Contactos",
									"originalRequest": {
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
													"value": "alfredo.limon@optimissa.com",
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
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 22 Apr 2022 19:13:48 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\",\n    \"extraInfo\": \"Username : \\\"alfredo.limon@optimissa.com\\\"\"\n}"
								}
							]
						},
						{
							"name": "createContact",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "test@opti.com",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/createContact",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"createContact"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "createContact",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "email",
													"value": "test@opti.com",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/api/user/createContact",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"api",
												"user",
												"createContact"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 22 Apr 2022 16:19:40 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
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
							"name": "getUserData",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/user/getUserData",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"user",
										"getUserData"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": []
						},
						{
							"name": "createContact",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "test@opti.comad",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/user/createContact",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"user",
										"createContact"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": []
						},
						{
							"name": "updateUserData",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"id\":\"6\",\r\n    \"password\":\"optimissa\",\r\n    \"oldPassword\" : \"optimissa\",\r\n    \"phone\" : \"(0034) 609 112 533\",\r\n    \"email\" : \"coro.sarria@gmail.com\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/user/updateInfo",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"user",
										"updateInfo"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": []
						},
						{
							"name": "userApi/documentos",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"accounts\": [],\r\n    \"initDate\": \"\",\r\n    \"endDate\": \"\",\r\n    \"literal\": \"\",\r\n    \"tiposDocumentos\": [],\r\n    \"onlyUnread\": true,\r\n    \"pageNo\": 0,\r\n    \"pageSize\": 500,\r\n    \"sortBy\": \"date\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentos",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"documentos"
									]
								},
								"description": "```\nMetodo que retorna Documentos asociados con las cuentas y productos seleccionados para el usuario logueado, el HTTP method aqui es POST.\n```"
							},
							"response": []
						}
					]
				},
				{
					"name": "Maximo cuentas",
					"item": [
						{
							"name": "perform_login",
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
											"key": "username",
											"value": "usuariodev",
											"type": "text"
										},
										{
											"key": "password",
											"value": "usuariodev",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login",
									"originalRequest": {
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
													"key": "username",
													"value": "middle_adp@arcanopartners.com",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "plain",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=8D513FD0A232DDE60292A92501DEC37E; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Content-Length",
											"value": "113"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 13:47:01 GMT"
										}
									],
									"cookie": [],
									"body": "{\"result\" : \"success\",\"user\" : \"middle_adp@arcanopartners.com\", \"timestamp\" : \"Fri Apr 29 15:47:01 CEST 2022\" }\r\n"
								}
							]
						},
						{
							"name": "BasicSearch",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicSearch?literal=BALBOA",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"Accounts",
										"BasicSearch"
									],
									"query": [
										{
											"key": "literal",
											"value": "BALBOA"
										}
									]
								}
							},
							"response": [
								{
									"name": "BasicSearch",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicSearch?literal=BALBOA",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"Accounts",
												"BasicSearch"
											],
											"query": [
												{
													"key": "literal",
													"value": "BALBOA"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 18:30:16 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"page\": 0,\n    \"size\": 10,\n    \"totalPages\": 22,\n    \"totalElements\": 211,\n    \"capitalComprometido\": \"112060878.17696219\",\n    \"desembolsado\": \"42025865.81804085\",\n    \"distribuido\": \"30000.00000000\",\n    \"detailAccountListeds\": [\n        {\n            \"accountName\": \"VENTU EUROPE, S.L.\",\n            \"ctaAriaId\": \"7574e67c5e7e4e158f16ce62b6fb5cbf\",\n            \"idCtaAriaId\": \"2052\",\n            \"fechaAlta\": \"2021-06-06\",\n            \"desembolsado\": \"560000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"1000000.00000000\",\n            \"dni\": [\n                \"B99508749\"\n            ],\n            \"codigoPostal\": [\n                \"50016\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"440000.00000000\",\n            \"valoracion\": \"842570.18551200\",\n            \"products\": [\n                \"BALBOA VENTURES, SCR   \\\"A2\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"ASIRENALIA, S.L.U.\",\n            \"ctaAriaId\": \"3a6d1303a845d2c0cdecaa2c114ff537\",\n            \"idCtaAriaId\": \"1029\",\n            \"fechaAlta\": \"2020-05-03\",\n            \"desembolsado\": \"105000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"300000.00000000\",\n            \"dni\": [\n                \"B98902844\"\n            ],\n            \"codigoPostal\": [\n                \"46530\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"195000.00000000\",\n            \"valoracion\": \"192223.36200000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A7\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"JACINTO CASANOVAS GIMENEZ\",\n            \"ctaAriaId\": \"3b19fad1380d16527eea04b64ad1ff9e\",\n            \"idCtaAriaId\": \"1038\",\n            \"fechaAlta\": \"2021-07-10\",\n            \"desembolsado\": \"35000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"37636291B\"\n            ],\n            \"codigoPostal\": [\n                \"\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"65000.00000000\",\n            \"valoracion\": \"61431.85170000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A4\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"JOSE HALCON JAEN | SILVIA RUIZ DE ALDA DE CARLOS\",\n            \"ctaAriaId\": \"594841f4820717e17f2170f356a802b8\",\n            \"idCtaAriaId\": \"1552\",\n            \"fechaAlta\": \"2018-07-12\",\n            \"desembolsado\": \"35000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"00861224N\",\n                \"15030091M\"\n            ],\n            \"codigoPostal\": [\n                \"31200\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"65000.00000000\",\n            \"valoracion\": \"61431.85170000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A4\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"DAMATEIZA, S.L.\",\n            \"ctaAriaId\": \"945ac22d18c91cfe56bb5ce98a716dbd\",\n            \"idCtaAriaId\": \"2577\",\n            \"fechaAlta\": \"2019-12-04\",\n            \"desembolsado\": \"35000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"B31872682\"\n            ],\n            \"codigoPostal\": [\n                \"03203\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"65000.00000000\",\n            \"valoracion\": \"61431.85170000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A4\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"FERMAT INVERSIONES, S.L.\",\n            \"ctaAriaId\": \"1c0635d68420e261d3ec59f437ba929a\",\n            \"idCtaAriaId\": \"531\",\n            \"fechaAlta\": \"2020-06-02\",\n            \"desembolsado\": \"35000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"B87990446\"\n            ],\n            \"codigoPostal\": [\n                \"28023\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"65000.00000000\",\n            \"valoracion\": \"64074.45400000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A7\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"FRANCISCO JAVIER VEREMUNDO ALBENIZ GARCIA-FALCES | MARIA LOURDES ALICIA ORDOYO DELGADO\",\n            \"ctaAriaId\": \"00db4a51daa25a46ff778b18b8314659\",\n            \"idCtaAriaId\": \"20\",\n            \"fechaAlta\": \"2023-12-03\",\n            \"desembolsado\": \"35000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"15770211P\",\n                \"15782700P\"\n            ],\n            \"codigoPostal\": [\n                \"31892\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"65000.00000000\",\n            \"valoracion\": \"61431.85170000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A4\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"JAVIER IZAGUIRRE CARBONELL\",\n            \"ctaAriaId\": \"1c12a0d55b71dd9a60fd62cfa53f48cc\",\n            \"idCtaAriaId\": \"533\",\n            \"fechaAlta\": \"2021-06-07\",\n            \"desembolsado\": \"35000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"100000.00000000\",\n            \"dni\": [\n                \"48670621E\"\n            ],\n            \"codigoPostal\": [\n                \"03016\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"65000.00000000\",\n            \"valoracion\": \"61431.85170000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A4\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"MAQUINARIA AGRICOLA INDUSTRIAL, S.A.\",\n            \"ctaAriaId\": \"3ba11b2d3ac1e1e44c159913a2e63f08\",\n            \"idCtaAriaId\": \"1046\",\n            \"fechaAlta\": \"2022-01-11\",\n            \"desembolsado\": \"560000.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"1000000.00000000\",\n            \"dni\": [\n                \"A25040924\"\n            ],\n            \"codigoPostal\": [\n                \"25191\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"440000.00000000\",\n            \"valoracion\": \"842570.18551200\",\n            \"products\": [\n                \"BALBOA VENTURES, SCR   \\\"A2\\\"\"\n            ]\n        },\n        {\n            \"accountName\": \"MARIA TERESA LLOBET IBAÑEZ\",\n            \"ctaAriaId\": \"f0cff2ac1cb4de78cc6116cb84848868\",\n            \"idCtaAriaId\": \"4125\",\n            \"fechaAlta\": \"2023-11-03\",\n            \"desembolsado\": \"52500.00000000\",\n            \"distribuído\": \"0E-8\",\n            \"capitalComprometido\": \"150000.00000000\",\n            \"dni\": [\n                \"36450929T\"\n            ],\n            \"codigoPostal\": [\n                \"\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"97500.00000000\",\n            \"valoracion\": \"92147.77755000\",\n            \"products\": [\n                \"BALBOA VENTURE INVESTMENTS, FCR   \\\"A4\\\"\"\n            ]\n        }\n    ],\n    \"pdtDesembolso\": \"70035012.35892137\",\n    \"valoracion\": \"69651714.35570926\"\n}"
								}
							]
						},
						{
							"name": "getInfo",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/getInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"getInfo"
									]
								},
								"description": "Metodo usado para obtener la Informacion detallada del usuario, Obtención de la información básica asociada con el usuario logueado."
							},
							"response": [
								{
									"name": "getInfo",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/getInfo",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"getInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 17:34:15 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"username\": \"middle_adp@arcanopartners.com\",\n    \"apiRole\": \"Interno Arcano\",\n    \"accountList\": [\n        \"1\",\n        \"2\",\n        \"3\",\n        \"4\",\n        \"5\",\n        \"6\",\n        \"7\",\n        \"8\",\n        \"9\",\n        \"10\",\n        \"10\",\n        \"11\",\n        \"12\",\n        \"13\",\n        \"13\",\n        \"14\",\n        \"15\",\n        \"15\",\n        \"16\",\n        \"17\",\n        \"18\",\n        \"20\",\n        \"20\",\n        \"20\",\n        \"20\",\n        \"20\",\n        \"21\",\n        \"22\",\n        \"23\",\n        \"24\",\n        \"25\",\n        \"26\",\n        \"26\",\n        \"27\",\n        \"28\",\n        \"29\",\n        \"30\",\n        \"30\",\n        \"31\",\n        \"32\",\n        \"33\",\n        \"33\",\n        \"34\",\n        \"35\",\n        \"36\",\n        \"37\",\n        \"38\",\n        \"39\",\n        \"40\",\n        \"41\",\n        \"42\",\n        \"43\",\n        \"44\",\n        \"45\",\n        \"46\",\n        \"47\",\n        \"48\",\n        \"49\",\n        \"50\",\n        \"51\",\n        \"52\",\n        \"53\",\n        \"54\",\n        \"55\",\n        \"56\",\n        \"57\",\n        \"58\",\n        \"58\",\n        \"59\",\n        \"60\",\n        \"60\",\n        \"61\",\n        \"62\",\n        \"63\",\n        \"65\",\n        \"65\",\n        \"66\",\n        \"67\",\n        \"67\",\n        \"67\",\n        \"68\",\n        \"68\",\n        \"68\",\n        \"69\",\n        \"70\",\n        \"71\",\n        \"71\",\n        \"72\",\n        \"73\",\n        \"74\",\n        \"75\",\n        \"76\",\n        \"77\",\n        \"78\",\n        \"79\",\n        \"79\",\n        \"80\",\n        \"81\",\n        \"81\",\n        \"82\",\n        \"83\",\n        \"83\",\n        \"84\",\n        \"84\",\n        \"85\",\n        \"86\",\n        \"87\",\n        \"87\",\n        \"88\",\n        \"89\",\n        \"90\",\n        \"91\",\n        \"92\",\n        \"93\",\n        \"94\",\n        \"95\",\n        \"95\",\n        \"96\",\n        \"96\",\n        \"96\",\n        \"96\",\n        \"96\",\n        \"96\",\n        \"96\",\n        \"97\",\n        \"98\",\n        \"100\",\n        \"101\",\n        \"102\",\n        \"103\",\n        \"104\",\n        \"105\",\n        \"106\",\n        \"107\",\n        \"108\",\n        \"108\",\n        \"108\",\n        \"109\",\n        \"110\",\n        \"111\",\n        \"112\",\n        \"113\",\n        \"114\",\n        \"115\",\n        \"116\",\n        \"117\",\n        \"118\",\n        \"119\",\n        \"120\",\n        \"121\",\n        \"122\",\n        \"123\",\n        \"124\",\n        \"125\",\n        \"126\",\n        \"127\",\n        \"128\",\n        \"129\",\n        \"130\",\n        \"131\",\n        \"132\",\n        \"133\",\n        \"134\",\n        \"135\",\n        \"136\",\n        \"137\",\n        \"138\",\n        \"139\",\n        \"140\",\n        \"140\",\n        \"141\",\n        \"142\",\n        \"143\",\n        \"143\",\n        \"144\",\n        \"145\",\n        \"146\",\n        \"148\",\n        \"149\",\n        \"150\",\n        \"151\",\n        \"152\",\n        \"152\",\n        \"153\",\n        \"154\",\n        \"155\",\n        \"156\",\n        \"157\",\n        \"158\",\n        \"159\",\n        \"160\",\n        \"161\",\n        \"162\",\n        \"162\",\n        \"162\",\n        \"163\",\n        \"164\",\n        \"165\",\n        \"166\",\n        \"167\",\n        \"168\",\n        \"169\",\n        \"170\",\n        \"171\",\n        \"171\",\n        \"172\",\n        \"173\",\n        \"174\",\n        \"175\",\n        \"176\",\n        \"176\",\n        \"177\",\n        \"178\",\n        \"179\",\n        \"180\",\n        \"181\",\n        \"182\",\n        \"183\",\n        \"184\",\n        \"185\",\n        \"185\",\n        \"186\",\n        \"186\",\n        \"187\",\n        \"188\",\n        \"189\",\n        \"190\",\n        \"191\",\n        \"192\",\n        \"192\",\n        \"193\",\n        \"194\",\n        \"195\",\n        \"195\",\n        \"196\",\n        \"197\",\n        \"198\",\n        \"199\",\n        \"200\",\n        \"201\",\n        \"202\",\n        \"203\",\n        \"204\",\n        \"205\",\n        \"206\",\n        \"206\",\n        \"207\",\n        \"208\",\n        \"209\",\n        \"209\",\n        \"210\",\n        \"211\",\n        \"212\",\n        \"213\",\n        \"214\",\n        \"214\",\n        \"215\",\n        \"216\",\n        \"217\",\n        \"218\",\n        \"219\",\n        \"219\",\n        \"219\",\n        \"219\",\n        \"220\",\n        \"221\",\n        \"222\",\n        \"222\",\n        \"223\",\n        \"224\",\n        \"224\",\n        \"225\",\n        \"226\",\n        \"227\",\n        \"228\",\n        \"229\",\n        \"230\",\n        \"231\",\n        \"232\",\n        \"233\",\n        \"234\",\n        \"235\",\n        \"236\",\n        \"237\",\n        \"237\",\n        \"238\",\n        \"239\",\n        \"240\",\n        \"241\",\n        \"242\",\n        \"243\",\n        \"244\",\n        \"244\",\n        \"244\",\n        \"244\",\n        \"244\",\n        \"245\",\n        \"246\",\n        \"247\",\n        \"248\",\n        \"248\",\n        \"248\",\n        \"249\",\n        \"250\",\n        \"251\",\n        \"252\",\n        \"253\",\n        \"254\",\n        \"255\",\n        \"256\",\n        \"256\",\n        \"256\",\n        \"256\",\n        \"257\",\n        \"258\",\n        \"258\",\n        \"259\",\n        \"261\",\n        \"262\",\n        \"263\",\n        \"264\",\n        \"264\",\n        \"265\",\n        \"266\",\n        \"266\",\n        \"267\",\n        \"268\",\n        \"269\",\n        \"270\",\n        \"271\",\n        \"272\",\n        \"273\",\n        \"273\",\n        \"274\",\n        \"275\",\n        \"276\",\n        \"277\",\n        \"278\",\n        \"279\",\n        \"280\",\n        \"281\",\n        \"282\",\n        \"282\",\n        \"282\",\n        \"283\",\n        \"284\",\n        \"285\",\n        \"285\",\n        \"286\",\n        \"287\",\n        \"288\",\n        \"289\",\n        \"290\",\n        \"291\",\n        \"292\",\n        \"293\",\n        \"293\",\n        \"294\",\n        \"295\",\n        \"296\",\n        \"297\",\n        \"298\",\n        \"299\",\n        \"300\",\n        \"301\",\n        \"301\",\n        \"302\",\n        \"303\",\n        \"303\",\n        \"303\",\n        \"304\",\n        \"305\",\n        \"306\",\n        \"307\",\n        \"308\",\n        \"309\",\n        \"310\",\n        \"311\",\n        \"312\",\n        \"313\",\n        \"314\",\n        \"314\",\n        \"315\",\n        \"316\",\n        \"316\",\n        \"317\",\n        \"318\",\n        \"319\",\n        \"320\",\n        \"320\",\n        \"320\",\n        \"321\",\n        \"322\",\n        \"323\",\n        \"324\",\n        \"325\",\n        \"326\",\n        \"327\",\n        \"328\",\n        \"329\",\n        \"330\",\n        \"332\",\n        \"333\",\n        \"334\",\n        \"335\",\n        \"336\",\n        \"337\",\n        \"337\",\n        \"338\",\n        \"339\",\n        \"340\",\n        \"341\",\n        \"342\",\n        \"342\",\n        \"342\",\n        \"342\",\n        \"342\",\n        \"343\",\n        \"344\",\n        \"345\",\n        \"346\",\n        \"347\",\n        \"348\",\n        \"349\",\n        \"350\",\n        \"351\",\n        \"352\",\n        \"353\",\n        \"354\",\n        \"355\",\n        \"356\",\n        \"357\",\n        \"358\",\n        \"359\",\n        \"360\",\n        \"361\",\n        \"361\",\n        \"362\",\n        \"363\",\n        \"364\",\n        \"365\",\n        \"366\",\n        \"367\",\n        \"367\",\n        \"367\",\n        \"367\",\n        \"368\",\n        \"369\",\n        \"370\",\n        \"371\",\n        \"372\",\n        \"372\",\n        \"372\",\n        \"372\",\n        \"373\",\n        \"374\",\n        \"375\",\n        \"376\",\n        \"377\",\n        \"377\",\n        \"378\",\n        \"379\",\n        \"380\",\n        \"381\",\n        \"382\",\n        \"383\",\n        \"384\",\n        \"384\",\n        \"385\",\n        \"386\",\n        \"386\",\n        \"387\",\n        \"388\",\n        \"389\",\n        \"390\",\n        \"391\",\n        \"391\",\n        \"392\",\n        \"393\",\n        \"394\",\n        \"394\",\n        \"395\",\n        \"395\",\n        \"396\",\n        \"397\",\n        \"398\",\n        \"399\",\n        \"400\",\n        \"400\",\n        \"401\",\n        \"402\",\n        \"403\",\n        \"404\",\n        \"405\",\n        \"406\",\n        \"407\",\n        \"408\",\n        \"409\",\n        \"410\",\n        \"411\",\n        \"412\",\n        \"413\",\n        \"414\",\n        \"415\",\n        \"416\",\n        \"417\",\n        \"418\",\n        \"419\",\n        \"420\",\n        \"421\",\n        \"422\",\n        \"422\",\n        \"422\",\n        \"423\",\n        \"424\",\n        \"425\",\n        \"426\",\n        \"427\",\n        \"428\",\n        \"429\",\n        \"430\",\n        \"431\",\n        \"431\",\n        \"431\",\n        \"432\",\n        \"433\",\n        \"434\",\n        \"434\",\n        \"434\",\n        \"435\",\n        \"436\",\n        \"437\",\n        \"438\",\n        \"438\",\n        \"438\",\n        \"438\",\n        \"438\",\n        \"438\",\n        \"439\",\n        \"440\",\n        \"441\",\n        \"442\",\n        \"443\",\n        \"444\",\n        \"445\",\n        \"446\",\n        \"447\",\n        \"448\",\n        \"449\",\n        \"450\",\n        \"451\",\n        \"452\",\n        \"453\",\n        \"453\",\n        \"454\",\n        \"455\",\n        \"456\",\n        \"456\",\n        \"457\",\n        \"458\",\n        \"459\",\n        \"459\",\n        \"459\",\n        \"460\",\n        \"460\",\n        \"461\",\n        \"462\",\n        \"462\",\n        \"463\",\n        \"464\",\n        \"465\",\n        \"466\",\n        \"467\",\n        \"468\",\n        \"469\",\n        \"470\",\n        \"471\",\n        \"471\",\n        \"472\",\n        \"472\",\n        \"472\",\n        \"472\",\n        \"472\",\n        \"473\",\n        \"474\",\n        \"475\",\n        \"476\",\n        \"477\",\n        \"478\",\n        \"479\",\n        \"480\",\n        \"481\",\n        \"482\",\n        \"483\",\n        \"484\",\n        \"485\",\n        \"486\",\n        \"487\",\n        \"488\",\n        \"489\",\n        \"490\",\n        \"491\",\n        \"492\",\n        \"493\",\n        \"494\",\n        \"494\",\n        \"494\",\n        \"494\",\n        \"494\",\n        \"494\",\n        \"495\",\n        \"495\",\n        \"496\",\n        \"496\",\n        \"497\",\n        \"498\",\n        \"498\",\n        \"498\",\n        \"498\",\n        \"498\",\n        \"499\",\n        \"499\",\n        \"500\",\n        \"501\",\n        \"502\",\n        \"503\",\n        \"504\",\n        \"505\",\n        \"506\",\n        \"507\",\n        \"507\",\n        \"508\",\n        \"509\",\n        \"510\",\n        \"510\",\n        \"510\",\n        \"510\",\n        \"511\",\n        \"511\",\n        \"512\",\n        \"513\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"514\",\n        \"515\",\n        \"516\",\n        \"517\",\n        \"518\",\n        \"519\",\n        \"520\",\n        \"521\",\n        \"523\",\n        \"524\",\n        \"525\",\n        \"526\",\n        \"527\",\n        \"528\",\n        \"529\",\n        \"530\",\n        \"531\",\n        \"532\",\n        \"533\",\n        \"534\",\n        \"535\",\n        \"536\",\n        \"537\",\n        \"538\",\n        \"539\",\n        \"540\",\n        \"541\",\n        \"542\",\n        \"543\",\n        \"544\",\n        \"545\",\n        \"546\",\n        \"547\",\n        \"547\",\n        \"548\",\n        \"549\",\n        \"550\",\n        \"551\",\n        \"552\",\n        \"553\",\n        \"554\",\n        \"555\",\n        \"556\",\n        \"557\",\n        \"557\",\n        \"558\",\n        \"559\",\n        \"560\",\n        \"560\",\n        \"561\",\n        \"561\",\n        \"562\",\n        \"563\",\n        \"563\",\n        \"564\",\n        \"565\",\n        \"566\",\n        \"567\",\n        \"568\",\n        \"569\",\n        \"570\",\n        \"571\",\n        \"572\",\n        \"573\",\n        \"574\",\n        \"574\",\n        \"574\",\n        \"575\",\n        \"575\",\n        \"576\",\n        \"577\",\n        \"578\",\n        \"579\",\n        \"580\",\n        \"581\",\n        \"581\",\n        \"582\",\n        \"583\",\n        \"584\",\n        \"585\",\n        \"586\",\n        \"587\",\n        \"588\",\n        \"589\",\n        \"590\",\n        \"590\",\n        \"590\",\n        \"591\",\n        \"592\",\n        \"593\",\n        \"594\",\n        \"595\",\n        \"596\",\n        \"597\",\n        \"598\",\n        \"599\",\n        \"600\",\n        \"601\",\n        \"602\",\n        \"603\",\n        \"604\",\n        \"605\",\n        \"605\",\n        \"606\",\n        \"607\",\n        \"608\",\n        \"608\",\n        \"609\",\n        \"610\",\n        \"611\",\n        \"612\",\n        \"613\",\n        \"613\",\n        \"614\",\n        \"615\",\n        \"616\",\n        \"617\",\n        \"618\",\n        \"619\",\n        \"619\",\n        \"620\",\n        \"621\",\n        \"622\",\n        \"623\",\n        \"623\",\n        \"624\",\n        \"625\",\n        \"626\",\n        \"627\",\n        \"628\",\n        \"629\",\n        \"629\",\n        \"630\",\n        \"631\",\n        \"631\",\n        \"631\",\n        \"632\",\n        \"633\",\n        \"634\",\n        \"635\",\n        \"636\",\n        \"637\",\n        \"638\",\n        \"638\",\n        \"639\",\n        \"640\",\n        \"641\",\n        \"642\",\n        \"643\",\n        \"644\",\n        \"644\",\n        \"645\",\n        \"646\",\n        \"647\",\n        \"648\",\n        \"648\",\n        \"649\",\n        \"650\",\n        \"651\",\n        \"652\",\n        \"653\",\n        \"654\",\n        \"655\",\n        \"656\",\n        \"657\",\n        \"658\",\n        \"659\",\n        \"660\",\n        \"661\",\n        \"662\",\n        \"663\",\n        \"664\",\n        \"665\",\n        \"665\",\n        \"666\",\n        \"667\",\n        \"667\",\n        \"668\",\n        \"669\",\n        \"670\",\n        \"671\",\n        \"672\",\n        \"673\",\n        \"674\",\n        \"675\",\n        \"676\",\n        \"676\",\n        \"677\",\n        \"678\",\n        \"678\",\n        \"679\",\n        \"680\",\n        \"681\",\n        \"682\",\n        \"682\",\n        \"683\",\n        \"684\",\n        \"685\",\n        \"686\",\n        \"687\",\n        \"688\",\n        \"689\",\n        \"689\",\n        \"689\",\n        \"690\",\n        \"691\",\n        \"692\",\n        \"693\",\n        \"693\",\n        \"694\",\n        \"695\",\n        \"696\",\n        \"697\",\n        \"698\",\n        \"699\",\n        \"699\",\n        \"699\",\n        \"700\",\n        \"701\",\n        \"702\",\n        \"703\",\n        \"704\",\n        \"705\",\n        \"706\",\n        \"707\",\n        \"708\",\n        \"709\",\n        \"710\",\n        \"710\",\n        \"711\",\n        \"712\",\n        \"713\",\n        \"714\",\n        \"715\",\n        \"716\",\n        \"717\",\n        \"718\",\n        \"719\",\n        \"720\",\n        \"721\",\n        \"722\",\n        \"723\",\n        \"724\",\n        \"725\",\n        \"726\",\n        \"727\",\n        \"728\",\n        \"728\",\n        \"730\",\n        \"731\",\n        \"732\",\n        \"732\",\n        \"733\",\n        \"733\",\n        \"734\",\n        \"734\",\n        \"735\",\n        \"736\",\n        \"737\",\n        \"737\",\n        \"737\",\n        \"737\",\n        \"738\",\n        \"739\",\n        \"740\",\n        \"740\",\n        \"741\",\n        \"742\",\n        \"743\",\n        \"744\",\n        \"745\",\n        \"746\",\n        \"747\",\n        \"748\",\n        \"749\",\n        \"750\",\n        \"751\",\n        \"752\",\n        \"753\",\n        \"754\",\n        \"755\",\n        \"756\",\n        \"757\",\n        \"758\",\n        \"759\",\n        \"760\",\n        \"761\",\n        \"762\",\n        \"763\",\n        \"764\",\n        \"765\",\n        \"766\",\n        \"767\",\n        \"767\",\n        \"768\",\n        \"769\",\n        \"770\",\n        \"771\",\n        \"772\",\n        \"773\",\n        \"773\",\n        \"774\",\n        \"775\",\n        \"776\",\n        \"777\",\n        \"778\",\n        \"779\",\n        \"780\",\n        \"781\",\n        \"782\",\n        \"783\",\n        \"784\",\n        \"785\",\n        \"786\",\n        \"787\",\n        \"788\",\n        \"789\",\n        \"790\",\n        \"791\",\n        \"792\",\n        \"793\",\n        \"794\",\n        \"795\",\n        \"796\",\n        \"797\",\n        \"798\",\n        \"799\",\n        \"800\",\n        \"801\",\n        \"801\",\n        \"801\",\n        \"802\",\n        \"803\",\n        \"804\",\n        \"805\",\n        \"806\",\n        \"807\",\n        \"808\",\n        \"809\",\n        \"809\",\n        \"809\",\n        \"811\",\n        \"812\",\n        \"813\",\n        \"814\",\n        \"815\",\n        \"816\",\n        \"817\",\n        \"817\",\n        \"817\",\n        \"818\",\n        \"819\",\n        \"820\",\n        \"821\",\n        \"822\",\n        \"823\",\n        \"824\",\n        \"824\",\n        \"825\",\n        \"826\",\n        \"826\",\n        \"826\",\n        \"826\",\n        \"827\",\n        \"828\",\n        \"829\",\n        \"830\",\n        \"831\",\n        \"832\",\n        \"832\",\n        \"833\",\n        \"834\",\n        \"835\",\n        \"836\",\n        \"837\",\n        \"838\",\n        \"839\",\n        \"839\",\n        \"840\",\n        \"841\",\n        \"842\",\n        \"843\",\n        \"844\",\n        \"845\",\n        \"846\",\n        \"847\",\n        \"847\",\n        \"848\",\n        \"849\",\n        \"849\",\n        \"849\",\n        \"849\",\n        \"849\",\n        \"850\",\n        \"851\",\n        \"852\",\n        \"853\",\n        \"854\",\n        \"855\",\n        \"856\",\n        \"857\",\n        \"857\",\n        \"858\",\n        \"859\",\n        \"860\",\n        \"861\",\n        \"862\",\n        \"863\",\n        \"863\",\n        \"864\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"865\",\n        \"866\",\n        \"867\",\n        \"868\",\n        \"869\",\n        \"870\",\n        \"870\",\n        \"870\",\n        \"871\",\n        \"872\",\n        \"873\",\n        \"874\",\n        \"875\",\n        \"876\",\n        \"877\",\n        \"878\",\n        \"879\",\n        \"879\",\n        \"879\",\n        \"880\",\n        \"881\",\n        \"882\",\n        \"883\",\n        \"884\",\n        \"885\",\n        \"886\",\n        \"887\",\n        \"888\",\n        \"889\",\n        \"890\",\n        \"891\",\n        \"892\",\n        \"893\",\n        \"893\",\n        \"894\",\n        \"895\",\n        \"895\",\n        \"896\",\n        \"897\",\n        \"898\",\n        \"899\",\n        \"899\",\n        \"899\",\n        \"899\",\n        \"900\",\n        \"901\",\n        \"902\",\n        \"902\",\n        \"902\",\n        \"902\",\n        \"902\",\n        \"902\",\n        \"902\",\n        \"903\",\n        \"904\",\n        \"905\",\n        \"907\",\n        \"908\",\n        \"909\",\n        \"910\",\n        \"911\",\n        \"912\",\n        \"913\",\n        \"914\",\n        \"915\",\n        \"916\",\n        \"917\",\n        \"917\",\n        \"918\",\n        \"919\",\n        \"920\",\n        \"921\",\n        \"922\",\n        \"923\",\n        \"925\",\n        \"926\",\n        \"927\",\n        \"928\",\n        \"928\",\n        \"928\",\n        \"928\",\n        \"929\",\n        \"930\",\n        \"931\",\n        \"932\",\n        \"933\",\n        \"933\",\n        \"933\",\n        \"934\",\n        \"935\",\n        \"936\",\n        \"937\",\n        \"938\",\n        \"939\",\n        \"940\",\n        \"941\",\n        \"942\",\n        \"942\",\n        \"943\",\n        \"944\",\n        \"945\",\n        \"946\",\n        \"947\",\n        \"948\",\n        \"948\",\n        \"949\",\n        \"950\",\n        \"951\",\n        \"952\",\n        \"953\",\n        \"953\",\n        \"953\",\n        \"953\",\n        \"953\",\n        \"954\",\n        \"954\",\n        \"954\",\n        \"954\",\n        \"955\",\n        \"956\",\n        \"957\",\n        \"958\",\n        \"959\",\n        \"960\",\n        \"961\",\n        \"961\",\n        \"962\",\n        \"963\",\n        \"964\",\n        \"965\",\n        \"966\",\n        \"967\",\n        \"968\",\n        \"969\",\n        \"970\",\n        \"971\",\n        \"971\",\n        \"972\",\n        \"973\",\n        \"974\",\n        \"975\",\n        \"976\",\n        \"977\",\n        \"978\",\n        \"979\",\n        \"979\",\n        \"980\",\n        \"981\",\n        \"982\",\n        \"982\",\n        \"982\",\n        \"982\",\n        \"982\",\n        \"983\",\n        \"984\",\n        \"984\",\n        \"984\",\n        \"984\",\n        \"984\",\n        \"985\",\n        \"985\",\n        \"986\",\n        \"987\",\n        \"988\",\n        \"989\",\n        \"990\",\n        \"992\",\n        \"993\",\n        \"994\",\n        \"995\",\n        \"996\",\n        \"997\",\n        \"998\",\n        \"999\",\n        \"1000\",\n        \"1001\",\n        \"1002\",\n        \"1003\",\n        \"1004\",\n        \"1005\",\n        \"1005\",\n        \"1005\",\n        \"1006\",\n        \"1007\",\n        \"1008\",\n        \"1009\",\n        \"1010\",\n        \"1011\",\n        \"1012\",\n        \"1012\",\n        \"1013\",\n        \"1014\",\n        \"1015\",\n        \"1016\",\n        \"1017\",\n        \"1017\",\n        \"1018\",\n        \"1019\",\n        \"1019\",\n        \"1020\",\n        \"1021\",\n        \"1021\",\n        \"1022\",\n        \"1023\",\n        \"1024\",\n        \"1025\",\n        \"1026\",\n        \"1027\",\n        \"1028\",\n        \"1029\",\n        \"1030\",\n        \"1030\",\n        \"1031\",\n        \"1032\",\n        \"1033\",\n        \"1034\",\n        \"1035\",\n        \"1036\",\n        \"1037\",\n        \"1038\",\n        \"1038\",\n        \"1039\",\n        \"1040\",\n        \"1041\",\n        \"1042\",\n        \"1043\",\n        \"1044\",\n        \"1045\",\n        \"1045\",\n        \"1046\",\n        \"1047\",\n        \"1048\",\n        \"1049\",\n        \"1050\",\n        \"1051\",\n        \"1052\",\n        \"1053\",\n        \"1054\",\n        \"1055\",\n        \"1056\",\n        \"1056\",\n        \"1057\",\n        \"1057\",\n        \"1057\",\n        \"1058\",\n        \"1059\",\n        \"1060\",\n        \"1061\",\n        \"1062\",\n        \"1063\",\n        \"1064\",\n        \"1065\",\n        \"1066\",\n        \"1066\",\n        \"1067\",\n        \"1068\",\n        \"1068\",\n        \"1068\",\n        \"1069\",\n        \"1070\",\n        \"1071\",\n        \"1072\",\n        \"1073\",\n        \"1074\",\n        \"1075\",\n        \"1076\",\n        \"1077\",\n        \"1078\",\n        \"1078\",\n        \"1079\",\n        \"1080\",\n        \"1081\",\n        \"1082\",\n        \"1082\",\n        \"1083\",\n        \"1084\",\n        \"1085\",\n        \"1086\",\n        \"1087\",\n        \"1087\",\n        \"1088\",\n        \"1089\",\n        \"1090\",\n        \"1090\",\n        \"1091\",\n        \"1092\",\n        \"1093\",\n        \"1094\",\n        \"1095\",\n        \"1096\",\n        \"1097\",\n        \"1098\",\n        \"1099\",\n        \"1100\",\n        \"1101\",\n        \"1102\",\n        \"1103\",\n        \"1104\",\n        \"1104\",\n        \"1105\",\n        \"1106\",\n        \"1107\",\n        \"1108\",\n        \"1109\",\n        \"1109\",\n        \"1110\",\n        \"1111\",\n        \"1112\",\n        \"1113\",\n        \"1114\",\n        \"1115\",\n        \"1116\",\n        \"1117\",\n        \"1118\",\n        \"1118\",\n        \"1119\",\n        \"1120\",\n        \"1121\",\n        \"1122\",\n        \"1123\",\n        \"1124\",\n        \"1125\",\n        \"1126\",\n        \"1127\",\n        \"1128\",\n        \"1129\",\n        \"1129\",\n        \"1130\",\n        \"1131\",\n        \"1131\",\n        \"1131\",\n        \"1132\",\n        \"1133\",\n        \"1134\",\n        \"1135\",\n        \"1136\",\n        \"1137\",\n        \"1138\",\n        \"1139\",\n        \"1140\",\n        \"1141\",\n        \"1141\",\n        \"1142\",\n        \"1143\",\n        \"1144\",\n        \"1144\",\n        \"1145\",\n        \"1146\",\n        \"1147\",\n        \"1148\",\n        \"1149\",\n        \"1149\",\n        \"1150\",\n        \"1151\",\n        \"1152\",\n        \"1153\",\n        \"1154\",\n        \"1155\",\n        \"1156\",\n        \"1157\",\n        \"1158\",\n        \"1159\",\n        \"1160\",\n        \"1161\",\n        \"1162\",\n        \"1163\",\n        \"1164\",\n        \"1164\",\n        \"1165\",\n        \"1165\",\n        \"1166\",\n        \"1167\",\n        \"1168\",\n        \"1169\",\n        \"1170\",\n        \"1171\",\n        \"1172\",\n        \"1173\",\n        \"1174\",\n        \"1175\",\n        \"1176\",\n        \"1177\",\n        \"1178\",\n        \"1179\",\n        \"1180\",\n        \"1180\",\n        \"1181\",\n        \"1182\",\n        \"1183\",\n        \"1184\",\n        \"1185\",\n        \"1185\",\n        \"1185\",\n        \"1185\",\n        \"1185\",\n        \"1185\",\n        \"1186\",\n        \"1187\",\n        \"1187\",\n        \"1188\",\n        \"1188\",\n        \"1189\",\n        \"1189\",\n        \"1190\",\n        \"1191\",\n        \"1192\",\n        \"1192\",\n        \"1193\",\n        \"1194\",\n        \"1195\",\n        \"1196\",\n        \"1197\",\n        \"1197\",\n        \"1198\",\n        \"1199\",\n        \"1200\",\n        \"1201\",\n        \"1202\",\n        \"1203\",\n        \"1204\",\n        \"1205\",\n        \"1206\",\n        \"1206\",\n        \"1207\",\n        \"1208\",\n        \"1209\",\n        \"1210\",\n        \"1211\",\n        \"1212\",\n        \"1213\",\n        \"1214\",\n        \"1215\",\n        \"1216\",\n        \"1217\",\n        \"1217\",\n        \"1218\",\n        \"1219\",\n        \"1220\",\n        \"1221\",\n        \"1222\",\n        \"1222\",\n        \"1223\",\n        \"1224\",\n        \"1224\",\n        \"1225\",\n        \"1226\",\n        \"1227\",\n        \"1228\",\n        \"1229\",\n        \"1230\",\n        \"1231\",\n        \"1232\",\n        \"1233\",\n        \"1234\",\n        \"1235\",\n        \"1236\",\n        \"1236\",\n        \"1237\",\n        \"1238\",\n        \"1239\",\n        \"1240\",\n        \"1241\",\n        \"1242\",\n        \"1243\",\n        \"1244\",\n        \"1245\",\n        \"1246\",\n        \"1247\",\n        \"1247\",\n        \"1248\",\n        \"1248\",\n        \"1249\",\n        \"1250\",\n        \"1250\",\n        \"1250\",\n        \"1250\",\n        \"1251\",\n        \"1251\",\n        \"1251\",\n        \"1252\",\n        \"1253\",\n        \"1253\",\n        \"1254\",\n        \"1255\",\n        \"1256\",\n        \"1257\",\n        \"1258\",\n        \"1259\",\n        \"1260\",\n        \"1261\",\n        \"1262\",\n        \"1263\",\n        \"1264\",\n        \"1265\",\n        \"1266\",\n        \"1267\",\n        \"1268\",\n        \"1269\",\n        \"1270\",\n        \"1271\",\n        \"1271\",\n        \"1271\",\n        \"1272\",\n        \"1272\",\n        \"1272\",\n        \"1272\",\n        \"1273\",\n        \"1274\",\n        \"1275\",\n        \"1276\",\n        \"1277\",\n        \"1278\",\n        \"1279\",\n        \"1279\",\n        \"1280\",\n        \"1281\",\n        \"1282\",\n        \"1282\",\n        \"1283\",\n        \"1284\",\n        \"1284\",\n        \"1285\",\n        \"1286\",\n        \"1286\",\n        \"1286\",\n        \"1286\",\n        \"1286\",\n        \"1286\",\n        \"1288\",\n        \"1289\",\n        \"1289\",\n        \"1290\",\n        \"1291\",\n        \"1291\",\n        \"1292\",\n        \"1293\",\n        \"1294\",\n        \"1295\",\n        \"1296\",\n        \"1297\",\n        \"1298\",\n        \"1299\",\n        \"1299\",\n        \"1300\",\n        \"1301\",\n        \"1301\",\n        \"1302\",\n        \"1303\",\n        \"1304\",\n        \"1305\",\n        \"1306\",\n        \"1307\",\n        \"1308\",\n        \"1309\",\n        \"1310\",\n        \"1311\",\n        \"1312\",\n        \"1313\",\n        \"1314\",\n        \"1315\",\n        \"1316\",\n        \"1317\",\n        \"1318\",\n        \"1318\",\n        \"1318\",\n        \"1319\",\n        \"1320\",\n        \"1320\",\n        \"1320\",\n        \"1321\",\n        \"1322\",\n        \"1323\",\n        \"1324\",\n        \"1325\",\n        \"1326\",\n        \"1327\",\n        \"1328\",\n        \"1328\",\n        \"1328\",\n        \"1329\",\n        \"1330\",\n        \"1331\",\n        \"1332\",\n        \"1334\",\n        \"1335\",\n        \"1336\",\n        \"1337\",\n        \"1338\",\n        \"1339\",\n        \"1340\",\n        \"1341\",\n        \"1342\",\n        \"1343\",\n        \"1344\",\n        \"1345\",\n        \"1346\",\n        \"1346\",\n        \"1346\",\n        \"1347\",\n        \"1348\",\n        \"1349\",\n        \"1350\",\n        \"1351\",\n        \"1352\",\n        \"1353\",\n        \"1354\",\n        \"1355\",\n        \"1356\",\n        \"1357\",\n        \"1358\",\n        \"1359\",\n        \"1360\",\n        \"1360\",\n        \"1361\",\n        \"1362\",\n        \"1363\",\n        \"1363\",\n        \"1364\",\n        \"1365\",\n        \"1366\",\n        \"1366\",\n        \"1366\",\n        \"1366\",\n        \"1366\",\n        \"1366\",\n        \"1367\",\n        \"1368\",\n        \"1369\",\n        \"1369\",\n        \"1369\",\n        \"1370\",\n        \"1371\",\n        \"1372\",\n        \"1373\",\n        \"1374\",\n        \"1375\",\n        \"1376\",\n        \"1376\",\n        \"1377\",\n        \"1378\",\n        \"1379\",\n        \"1380\",\n        \"1381\",\n        \"1382\",\n        \"1383\",\n        \"1384\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1385\",\n        \"1386\",\n        \"1387\",\n        \"1387\",\n        \"1388\",\n        \"1389\",\n        \"1389\",\n        \"1389\",\n        \"1389\",\n        \"1390\",\n        \"1391\",\n        \"1391\",\n        \"1392\",\n        \"1392\",\n        \"1392\",\n        \"1393\",\n        \"1394\",\n        \"1395\",\n        \"1396\",\n        \"1397\",\n        \"1398\",\n        \"1399\",\n        \"1400\",\n        \"1401\",\n        \"1402\",\n        \"1403\",\n        \"1404\",\n        \"1405\",\n        \"1406\",\n        \"1407\",\n        \"1408\",\n        \"1408\",\n        \"1409\",\n        \"1410\",\n        \"1411\",\n        \"1412\",\n        \"1413\",\n        \"1414\",\n        \"1415\",\n        \"1416\",\n        \"1417\",\n        \"1418\",\n        \"1419\",\n        \"1420\",\n        \"1421\",\n        \"1422\",\n        \"1423\",\n        \"1424\",\n        \"1425\",\n        \"1425\",\n        \"1426\",\n        \"1427\",\n        \"1428\",\n        \"1429\",\n        \"1430\",\n        \"1431\",\n        \"1432\",\n        \"1433\",\n        \"1434\",\n        \"1435\",\n        \"1436\",\n        \"1437\",\n        \"1438\",\n        \"1438\",\n        \"1439\",\n        \"1440\",\n        \"1441\",\n        \"1442\",\n        \"1443\",\n        \"1444\",\n        \"1445\",\n        \"1446\",\n        \"1447\",\n        \"1448\",\n        \"1449\",\n        \"1450\",\n        \"1451\",\n        \"1452\",\n        \"1453\",\n        \"1454\",\n        \"1455\",\n        \"1456\",\n        \"1457\",\n        \"1458\",\n        \"1459\",\n        \"1460\",\n        \"1461\",\n        \"1461\",\n        \"1461\",\n        \"1462\",\n        \"1462\",\n        \"1463\",\n        \"1464\",\n        \"1465\",\n        \"1466\",\n        \"1467\",\n        \"1468\",\n        \"1469\",\n        \"1470\",\n        \"1471\",\n        \"1472\",\n        \"1473\",\n        \"1474\",\n        \"1475\",\n        \"1476\",\n        \"1477\",\n        \"1477\",\n        \"1478\",\n        \"1479\",\n        \"1479\",\n        \"1480\",\n        \"1481\",\n        \"1482\",\n        \"1483\",\n        \"1484\",\n        \"1485\",\n        \"1486\",\n        \"1486\",\n        \"1487\",\n        \"1488\",\n        \"1489\",\n        \"1490\",\n        \"1491\",\n        \"1492\",\n        \"1493\",\n        \"1494\",\n        \"1495\",\n        \"1496\",\n        \"1497\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1498\",\n        \"1499\",\n        \"1500\",\n        \"1501\",\n        \"1502\",\n        \"1503\",\n        \"1504\",\n        \"1505\",\n        \"1505\",\n        \"1506\",\n        \"1507\",\n        \"1508\",\n        \"1509\",\n        \"1510\",\n        \"1510\",\n        \"1511\",\n        \"1512\",\n        \"1513\",\n        \"1514\",\n        \"1515\",\n        \"1516\",\n        \"1517\",\n        \"1518\",\n        \"1519\",\n        \"1520\",\n        \"1521\",\n        \"1522\",\n        \"1523\",\n        \"1523\",\n        \"1523\",\n        \"1523\",\n        \"1524\",\n        \"1525\",\n        \"1526\",\n        \"1527\",\n        \"1528\",\n        \"1529\",\n        \"1530\",\n        \"1530\",\n        \"1531\",\n        \"1532\",\n        \"1533\",\n        \"1534\",\n        \"1535\",\n        \"1536\",\n        \"1537\",\n        \"1538\",\n        \"1539\",\n        \"1540\",\n        \"1541\",\n        \"1541\",\n        \"1542\",\n        \"1543\",\n        \"1544\",\n        \"1545\",\n        \"1546\",\n        \"1546\",\n        \"1547\",\n        \"1548\",\n        \"1549\",\n        \"1550\",\n        \"1551\",\n        \"1552\",\n        \"1552\",\n        \"1552\",\n        \"1552\",\n        \"1553\",\n        \"1554\",\n        \"1555\",\n        \"1555\",\n        \"1556\",\n        \"1557\",\n        \"1558\",\n        \"1559\",\n        \"1560\",\n        \"1562\",\n        \"1562\",\n        \"1563\",\n        \"1564\",\n        \"1565\",\n        \"1566\",\n        \"1567\",\n        \"1568\",\n        \"1569\",\n        \"1570\",\n        \"1571\",\n        \"1571\",\n        \"1571\",\n        \"1572\",\n        \"1573\",\n        \"1574\",\n        \"1575\",\n        \"1576\",\n        \"1577\",\n        \"1578\",\n        \"1579\",\n        \"1580\",\n        \"1581\",\n        \"1581\",\n        \"1582\",\n        \"1583\",\n        \"1584\",\n        \"1585\",\n        \"1586\",\n        \"1587\",\n        \"1588\",\n        \"1589\",\n        \"1590\",\n        \"1591\",\n        \"1592\",\n        \"1593\",\n        \"1594\",\n        \"1595\",\n        \"1596\",\n        \"1597\",\n        \"1598\",\n        \"1599\",\n        \"1600\",\n        \"1601\",\n        \"1602\",\n        \"1603\",\n        \"1604\",\n        \"1605\",\n        \"1606\",\n        \"1606\",\n        \"1607\",\n        \"1607\",\n        \"1608\",\n        \"1609\",\n        \"1610\",\n        \"1611\",\n        \"1612\",\n        \"1613\",\n        \"1614\",\n        \"1615\",\n        \"1616\",\n        \"1617\",\n        \"1618\",\n        \"1618\",\n        \"1618\",\n        \"1619\",\n        \"1620\",\n        \"1621\",\n        \"1621\",\n        \"1622\",\n        \"1623\",\n        \"1624\",\n        \"1624\",\n        \"1624\",\n        \"1624\",\n        \"1625\",\n        \"1626\",\n        \"1627\",\n        \"1628\",\n        \"1629\",\n        \"1630\",\n        \"1630\",\n        \"1631\",\n        \"1632\",\n        \"1633\",\n        \"1634\",\n        \"1635\",\n        \"1635\",\n        \"1636\",\n        \"1637\",\n        \"1638\",\n        \"1639\",\n        \"1640\",\n        \"1641\",\n        \"1642\",\n        \"1643\",\n        \"1644\",\n        \"1644\",\n        \"1644\",\n        \"1644\",\n        \"1645\",\n        \"1646\",\n        \"1646\",\n        \"1646\",\n        \"1646\",\n        \"1647\",\n        \"1648\",\n        \"1649\",\n        \"1649\",\n        \"1650\",\n        \"1651\",\n        \"1652\",\n        \"1653\",\n        \"1653\",\n        \"1654\",\n        \"1654\",\n        \"1655\",\n        \"1656\",\n        \"1657\",\n        \"1658\",\n        \"1659\",\n        \"1660\",\n        \"1660\",\n        \"1660\",\n        \"1661\",\n        \"1661\",\n        \"1662\",\n        \"1662\",\n        \"1663\",\n        \"1663\",\n        \"1663\",\n        \"1663\",\n        \"1663\",\n        \"1664\",\n        \"1665\",\n        \"1666\",\n        \"1667\",\n        \"1668\",\n        \"1668\",\n        \"1669\",\n        \"1670\",\n        \"1670\",\n        \"1671\",\n        \"1672\",\n        \"1673\",\n        \"1674\",\n        \"1675\",\n        \"1676\",\n        \"1677\",\n        \"1678\",\n        \"1679\",\n        \"1680\",\n        \"1681\",\n        \"1682\",\n        \"1682\",\n        \"1682\",\n        \"1683\",\n        \"1684\",\n        \"1685\",\n        \"1686\",\n        \"1686\",\n        \"1687\",\n        \"1689\",\n        \"1690\",\n        \"1691\",\n        \"1692\",\n        \"1693\",\n        \"1694\",\n        \"1695\",\n        \"1696\",\n        \"1696\",\n        \"1697\",\n        \"1698\",\n        \"1699\",\n        \"1699\",\n        \"1699\",\n        \"1700\",\n        \"1700\",\n        \"1701\",\n        \"1702\",\n        \"1703\",\n        \"1704\",\n        \"1705\",\n        \"1706\",\n        \"1707\",\n        \"1708\",\n        \"1709\",\n        \"1710\",\n        \"1711\",\n        \"1712\",\n        \"1713\",\n        \"1714\",\n        \"1715\",\n        \"1716\",\n        \"1717\",\n        \"1718\",\n        \"1719\",\n        \"1720\",\n        \"1721\",\n        \"1722\",\n        \"1723\",\n        \"1724\",\n        \"1725\",\n        \"1725\",\n        \"1725\",\n        \"1726\",\n        \"1726\",\n        \"1727\",\n        \"1728\",\n        \"1729\",\n        \"1730\",\n        \"1731\",\n        \"1732\",\n        \"1733\",\n        \"1734\",\n        \"1735\",\n        \"1736\",\n        \"1737\",\n        \"1738\",\n        \"1739\",\n        \"1740\",\n        \"1741\",\n        \"1742\",\n        \"1743\",\n        \"1744\",\n        \"1745\",\n        \"1746\",\n        \"1747\",\n        \"1748\",\n        \"1749\",\n        \"1750\",\n        \"1751\",\n        \"1752\",\n        \"1753\",\n        \"1754\",\n        \"1755\",\n        \"1756\",\n        \"1756\",\n        \"1757\",\n        \"1758\",\n        \"1758\",\n        \"1759\",\n        \"1760\",\n        \"1761\",\n        \"1762\",\n        \"1762\",\n        \"1763\",\n        \"1764\",\n        \"1765\",\n        \"1767\",\n        \"1768\",\n        \"1769\",\n        \"1770\",\n        \"1771\",\n        \"1771\",\n        \"1771\",\n        \"1771\",\n        \"1771\",\n        \"1771\",\n        \"1772\",\n        \"1773\",\n        \"1774\",\n        \"1775\",\n        \"1776\",\n        \"1777\",\n        \"1778\",\n        \"1779\",\n        \"1780\",\n        \"1781\",\n        \"1782\",\n        \"1783\",\n        \"1784\",\n        \"1785\",\n        \"1786\",\n        \"1786\",\n        \"1786\",\n        \"1787\",\n        \"1788\",\n        \"1789\",\n        \"1790\",\n        \"1791\",\n        \"1793\",\n        \"1794\",\n        \"1795\",\n        \"1796\",\n        \"1797\",\n        \"1798\",\n        \"1799\",\n        \"1800\",\n        \"1801\",\n        \"1802\",\n        \"1803\",\n        \"1804\",\n        \"1805\",\n        \"1806\",\n        \"1807\",\n        \"1808\",\n        \"1809\",\n        \"1810\",\n        \"1811\",\n        \"1811\",\n        \"1812\",\n        \"1813\",\n        \"1814\",\n        \"1815\",\n        \"1816\",\n        \"1817\",\n        \"1817\",\n        \"1818\",\n        \"1819\",\n        \"1820\",\n        \"1820\",\n        \"1821\",\n        \"1822\",\n        \"1823\",\n        \"1823\",\n        \"1824\",\n        \"1825\",\n        \"1826\",\n        \"1827\",\n        \"1828\",\n        \"1828\",\n        \"1829\",\n        \"1830\",\n        \"1831\",\n        \"1832\",\n        \"1833\",\n        \"1834\",\n        \"1835\",\n        \"1836\",\n        \"1837\",\n        \"1838\",\n        \"1839\",\n        \"1840\",\n        \"1841\",\n        \"1842\",\n        \"1843\",\n        \"1843\",\n        \"1844\",\n        \"1845\",\n        \"1845\",\n        \"1845\",\n        \"1845\",\n        \"1846\",\n        \"1846\",\n        \"1847\",\n        \"1848\",\n        \"1848\",\n        \"1849\",\n        \"1849\",\n        \"1850\",\n        \"1851\",\n        \"1852\",\n        \"1852\",\n        \"1852\",\n        \"1852\",\n        \"1852\",\n        \"1852\",\n        \"1853\",\n        \"1854\",\n        \"1855\",\n        \"1856\",\n        \"1857\",\n        \"1859\",\n        \"1860\",\n        \"1861\",\n        \"1862\",\n        \"1863\",\n        \"1864\",\n        \"1864\",\n        \"1865\",\n        \"1866\",\n        \"1867\",\n        \"1868\",\n        \"1869\",\n        \"1870\",\n        \"1871\",\n        \"1872\",\n        \"1873\",\n        \"1874\",\n        \"1875\",\n        \"1877\",\n        \"1878\",\n        \"1878\",\n        \"1878\",\n        \"1878\",\n        \"1878\",\n        \"1878\",\n        \"1878\",\n        \"1878\",\n        \"1879\",\n        \"1880\",\n        \"1881\",\n        \"1882\",\n        \"1883\",\n        \"1884\",\n        \"1885\",\n        \"1886\",\n        \"1887\",\n        \"1888\",\n        \"1889\",\n        \"1890\",\n        \"1891\",\n        \"1892\",\n        \"1893\",\n        \"1893\",\n        \"1894\",\n        \"1894\",\n        \"1894\",\n        \"1895\",\n        \"1896\",\n        \"1897\",\n        \"1898\",\n        \"1899\",\n        \"1900\",\n        \"1901\",\n        \"1902\",\n        \"1903\",\n        \"1903\",\n        \"1903\",\n        \"1904\",\n        \"1905\",\n        \"1905\",\n        \"1906\",\n        \"1907\",\n        \"1908\",\n        \"1908\",\n        \"1909\",\n        \"1910\",\n        \"1911\",\n        \"1912\",\n        \"1913\",\n        \"1914\",\n        \"1914\",\n        \"1915\",\n        \"1916\",\n        \"1917\",\n        \"1917\",\n        \"1917\",\n        \"1918\",\n        \"1919\",\n        \"1920\",\n        \"1921\",\n        \"1922\",\n        \"1923\",\n        \"1924\",\n        \"1925\",\n        \"1926\",\n        \"1927\",\n        \"1928\",\n        \"1929\",\n        \"1930\",\n        \"1931\",\n        \"1932\",\n        \"1932\",\n        \"1932\",\n        \"1932\",\n        \"1933\",\n        \"1934\",\n        \"1935\",\n        \"1936\",\n        \"1936\",\n        \"1936\",\n        \"1936\",\n        \"1937\",\n        \"1938\",\n        \"1939\",\n        \"1940\",\n        \"1941\",\n        \"1941\",\n        \"1941\",\n        \"1942\",\n        \"1943\",\n        \"1943\",\n        \"1943\",\n        \"1944\",\n        \"1945\",\n        \"1946\",\n        \"1947\",\n        \"1948\",\n        \"1948\",\n        \"1949\",\n        \"1950\",\n        \"1951\",\n        \"1951\",\n        \"1952\",\n        \"1953\",\n        \"1953\",\n        \"1954\",\n        \"1955\",\n        \"1956\",\n        \"1957\",\n        \"1958\",\n        \"1958\",\n        \"1959\",\n        \"1960\",\n        \"1961\",\n        \"1962\",\n        \"1963\",\n        \"1964\",\n        \"1965\",\n        \"1965\",\n        \"1965\",\n        \"1965\",\n        \"1966\",\n        \"1966\",\n        \"1967\",\n        \"1968\",\n        \"1968\",\n        \"1969\",\n        \"1970\",\n        \"1971\",\n        \"1972\",\n        \"1973\",\n        \"1974\",\n        \"1975\",\n        \"1976\",\n        \"1977\",\n        \"1978\",\n        \"1978\",\n        \"1979\",\n        \"1980\",\n        \"1981\",\n        \"1981\",\n        \"1982\",\n        \"1983\",\n        \"1984\",\n        \"1985\",\n        \"1985\",\n        \"1985\",\n        \"1986\",\n        \"1987\",\n        \"1988\",\n        \"1989\",\n        \"1990\",\n        \"1991\",\n        \"1992\",\n        \"1993\",\n        \"1994\",\n        \"1995\",\n        \"1996\",\n        \"1997\",\n        \"1998\",\n        \"1999\",\n        \"2000\",\n        \"2000\",\n        \"2000\",\n        \"2001\",\n        \"2002\",\n        \"2002\",\n        \"2003\",\n        \"2004\",\n        \"2005\",\n        \"2006\",\n        \"2006\",\n        \"2007\",\n        \"2008\",\n        \"2009\",\n        \"2010\",\n        \"2011\",\n        \"2011\",\n        \"2012\",\n        \"2013\",\n        \"2014\",\n        \"2015\",\n        \"2016\",\n        \"2016\",\n        \"2017\",\n        \"2018\",\n        \"2019\",\n        \"2020\",\n        \"2021\",\n        \"2022\",\n        \"2023\",\n        \"2024\",\n        \"2025\",\n        \"2026\",\n        \"2027\",\n        \"2027\",\n        \"2028\",\n        \"2029\",\n        \"2030\",\n        \"2031\",\n        \"2032\",\n        \"2033\",\n        \"2034\",\n        \"2035\",\n        \"2036\",\n        \"2037\",\n        \"2038\",\n        \"2038\",\n        \"2039\",\n        \"2039\",\n        \"2040\",\n        \"2041\",\n        \"2041\",\n        \"2042\",\n        \"2042\",\n        \"2043\",\n        \"2044\",\n        \"2045\",\n        \"2045\",\n        \"2046\",\n        \"2047\",\n        \"2047\",\n        \"2048\",\n        \"2049\",\n        \"2050\",\n        \"2051\",\n        \"2052\",\n        \"2052\",\n        \"2052\",\n        \"2052\",\n        \"2053\",\n        \"2054\",\n        \"2055\",\n        \"2056\",\n        \"2057\",\n        \"2058\",\n        \"2058\",\n        \"2059\",\n        \"2060\",\n        \"2061\",\n        \"2061\",\n        \"2062\",\n        \"2063\",\n        \"2064\",\n        \"2065\",\n        \"2066\",\n        \"2067\",\n        \"2068\",\n        \"2069\",\n        \"2070\",\n        \"2071\",\n        \"2072\",\n        \"2073\",\n        \"2073\",\n        \"2073\",\n        \"2073\",\n        \"2074\",\n        \"2074\",\n        \"2074\",\n        \"2074\",\n        \"2075\",\n        \"2076\",\n        \"2077\",\n        \"2077\",\n        \"2077\",\n        \"2078\",\n        \"2079\",\n        \"2080\",\n        \"2080\",\n        \"2080\",\n        \"2080\",\n        \"2081\",\n        \"2082\",\n        \"2082\",\n        \"2083\",\n        \"2084\",\n        \"2084\",\n        \"2084\",\n        \"2085\",\n        \"2086\",\n        \"2087\",\n        \"2088\",\n        \"2089\",\n        \"2090\",\n        \"2091\",\n        \"2092\",\n        \"2092\",\n        \"2092\",\n        \"2092\",\n        \"2093\",\n        \"2094\",\n        \"2094\",\n        \"2095\",\n        \"2096\",\n        \"2097\",\n        \"2098\",\n        \"2099\",\n        \"2100\",\n        \"2101\",\n        \"2102\",\n        \"2103\",\n        \"2104\",\n        \"2104\",\n        \"2105\",\n        \"2106\",\n        \"2106\",\n        \"2107\",\n        \"2108\",\n        \"2109\",\n        \"2110\",\n        \"2111\",\n        \"2112\",\n        \"2113\",\n        \"2114\",\n        \"2115\",\n        \"2115\",\n        \"2115\",\n        \"2116\",\n        \"2117\",\n        \"2118\",\n        \"2118\",\n        \"2119\",\n        \"2120\",\n        \"2121\",\n        \"2121\",\n        \"2121\",\n        \"2122\",\n        \"2123\",\n        \"2124\",\n        \"2125\",\n        \"2125\",\n        \"2126\",\n        \"2127\",\n        \"2128\",\n        \"2129\",\n        \"2129\",\n        \"2130\",\n        \"2131\",\n        \"2132\",\n        \"2133\",\n        \"2134\",\n        \"2135\",\n        \"2136\",\n        \"2136\",\n        \"2137\",\n        \"2137\",\n        \"2138\",\n        \"2139\",\n        \"2140\",\n        \"2141\",\n        \"2142\",\n        \"2142\",\n        \"2143\",\n        \"2144\",\n        \"2145\",\n        \"2146\",\n        \"2147\",\n        \"2147\",\n        \"2147\",\n        \"2148\",\n        \"2148\",\n        \"2148\",\n        \"2148\",\n        \"2149\",\n        \"2150\",\n        \"2151\",\n        \"2151\",\n        \"2151\",\n        \"2151\",\n        \"2152\",\n        \"2153\",\n        \"2154\",\n        \"2154\",\n        \"2155\",\n        \"2156\",\n        \"2157\",\n        \"2158\",\n        \"2159\",\n        \"2159\",\n        \"2160\",\n        \"2161\",\n        \"2161\",\n        \"2162\",\n        \"2163\",\n        \"2164\",\n        \"2165\",\n        \"2166\",\n        \"2167\",\n        \"2168\",\n        \"2169\",\n        \"2169\",\n        \"2169\",\n        \"2169\",\n        \"2170\",\n        \"2171\",\n        \"2172\",\n        \"2173\",\n        \"2174\",\n        \"2174\",\n        \"2175\",\n        \"2176\",\n        \"2177\",\n        \"2178\",\n        \"2179\",\n        \"2180\",\n        \"2181\",\n        \"2182\",\n        \"2182\",\n        \"2183\",\n        \"2184\",\n        \"2185\",\n        \"2186\",\n        \"2187\",\n        \"2187\",\n        \"2187\",\n        \"2188\",\n        \"2189\",\n        \"2189\",\n        \"2190\",\n        \"2190\",\n        \"2190\",\n        \"2190\",\n        \"2191\",\n        \"2192\",\n        \"2193\",\n        \"2194\",\n        \"2195\",\n        \"2196\",\n        \"2197\",\n        \"2198\",\n        \"2199\",\n        \"2200\",\n        \"2200\",\n        \"2201\",\n        \"2202\",\n        \"2203\",\n        \"2204\",\n        \"2205\",\n        \"2206\",\n        \"2207\",\n        \"2208\",\n        \"2208\",\n        \"2209\",\n        \"2210\",\n        \"2211\",\n        \"2212\",\n        \"2213\",\n        \"2214\",\n        \"2215\",\n        \"2216\",\n        \"2216\",\n        \"2216\",\n        \"2217\",\n        \"2218\",\n        \"2219\",\n        \"2220\",\n        \"2221\",\n        \"2222\",\n        \"2222\",\n        \"2223\",\n        \"2224\",\n        \"2225\",\n        \"2226\",\n        \"2227\",\n        \"2228\",\n        \"2229\",\n        \"2229\",\n        \"2230\",\n        \"2231\",\n        \"2232\",\n        \"2233\",\n        \"2234\",\n        \"2235\",\n        \"2236\",\n        \"2237\",\n        \"2238\",\n        \"2239\",\n        \"2240\",\n        \"2241\",\n        \"2242\",\n        \"2243\",\n        \"2244\",\n        \"2245\",\n        \"2246\",\n        \"2247\",\n        \"2247\",\n        \"2248\",\n        \"2248\",\n        \"2249\",\n        \"2250\",\n        \"2251\",\n        \"2251\",\n        \"2252\",\n        \"2253\",\n        \"2254\",\n        \"2255\",\n        \"2256\",\n        \"2256\",\n        \"2256\",\n        \"2256\",\n        \"2257\",\n        \"2257\",\n        \"2258\",\n        \"2259\",\n        \"2260\",\n        \"2261\",\n        \"2262\",\n        \"2263\",\n        \"2264\",\n        \"2265\",\n        \"2266\",\n        \"2267\",\n        \"2268\",\n        \"2268\",\n        \"2268\",\n        \"2269\",\n        \"2270\",\n        \"2271\",\n        \"2272\",\n        \"2273\",\n        \"2273\",\n        \"2273\",\n        \"2274\",\n        \"2275\",\n        \"2276\",\n        \"2277\",\n        \"2278\",\n        \"2279\",\n        \"2280\",\n        \"2281\",\n        \"2281\",\n        \"2282\",\n        \"2283\",\n        \"2284\",\n        \"2285\",\n        \"2286\",\n        \"2287\",\n        \"2288\",\n        \"2289\",\n        \"2290\",\n        \"2290\",\n        \"2291\",\n        \"2292\",\n        \"2292\",\n        \"2293\",\n        \"2294\",\n        \"2295\",\n        \"2296\",\n        \"2297\",\n        \"2298\",\n        \"2299\",\n        \"2300\",\n        \"2300\",\n        \"2301\",\n        \"2302\",\n        \"2303\",\n        \"2304\",\n        \"2305\",\n        \"2306\",\n        \"2306\",\n        \"2306\",\n        \"2307\",\n        \"2308\",\n        \"2309\",\n        \"2310\",\n        \"2311\",\n        \"2312\",\n        \"2312\",\n        \"2313\",\n        \"2314\",\n        \"2315\",\n        \"2316\",\n        \"2317\",\n        \"2318\",\n        \"2319\",\n        \"2320\",\n        \"2321\",\n        \"2322\",\n        \"2322\",\n        \"2323\",\n        \"2324\",\n        \"2325\",\n        \"2326\",\n        \"2327\",\n        \"2328\",\n        \"2329\",\n        \"2330\",\n        \"2330\",\n        \"2331\",\n        \"2332\",\n        \"2332\",\n        \"2333\",\n        \"2334\",\n        \"2335\",\n        \"2335\",\n        \"2336\",\n        \"2336\",\n        \"2337\",\n        \"2337\",\n        \"2337\",\n        \"2337\",\n        \"2337\",\n        \"2338\",\n        \"2339\",\n        \"2340\",\n        \"2341\",\n        \"2342\",\n        \"2343\",\n        \"2344\",\n        \"2344\",\n        \"2345\",\n        \"2346\",\n        \"2347\",\n        \"2348\",\n        \"2349\",\n        \"2350\",\n        \"2351\",\n        \"2352\",\n        \"2353\",\n        \"2354\",\n        \"2355\",\n        \"2355\",\n        \"2356\",\n        \"2357\",\n        \"2358\",\n        \"2358\",\n        \"2359\",\n        \"2360\",\n        \"2361\",\n        \"2362\",\n        \"2363\",\n        \"2364\",\n        \"2365\",\n        \"2366\",\n        \"2367\",\n        \"2368\",\n        \"2368\",\n        \"2369\",\n        \"2370\",\n        \"2371\",\n        \"2372\",\n        \"2373\",\n        \"2374\",\n        \"2375\",\n        \"2376\",\n        \"2377\",\n        \"2378\",\n        \"2379\",\n        \"2380\",\n        \"2381\",\n        \"2382\",\n        \"2383\",\n        \"2384\",\n        \"2384\",\n        \"2385\",\n        \"2386\",\n        \"2387\",\n        \"2388\",\n        \"2389\",\n        \"2390\",\n        \"2391\",\n        \"2391\",\n        \"2391\",\n        \"2392\",\n        \"2393\",\n        \"2394\",\n        \"2394\",\n        \"2394\",\n        \"2395\",\n        \"2396\",\n        \"2397\",\n        \"2398\",\n        \"2399\",\n        \"2400\",\n        \"2401\",\n        \"2402\",\n        \"2403\",\n        \"2404\",\n        \"2405\",\n        \"2406\",\n        \"2407\",\n        \"2408\",\n        \"2409\",\n        \"2410\",\n        \"2411\",\n        \"2412\",\n        \"2413\",\n        \"2414\",\n        \"2415\",\n        \"2416\",\n        \"2417\",\n        \"2418\",\n        \"2419\",\n        \"2420\",\n        \"2421\",\n        \"2422\",\n        \"2423\",\n        \"2424\",\n        \"2425\",\n        \"2426\",\n        \"2427\",\n        \"2427\",\n        \"2427\",\n        \"2428\",\n        \"2428\",\n        \"2429\",\n        \"2430\",\n        \"2431\",\n        \"2432\",\n        \"2432\",\n        \"2432\",\n        \"2433\",\n        \"2434\",\n        \"2435\",\n        \"2436\",\n        \"2437\",\n        \"2437\",\n        \"2438\",\n        \"2439\",\n        \"2440\",\n        \"2441\",\n        \"2442\",\n        \"2443\",\n        \"2444\",\n        \"2444\",\n        \"2445\",\n        \"2446\",\n        \"2447\",\n        \"2447\",\n        \"2448\",\n        \"2449\",\n        \"2450\",\n        \"2451\",\n        \"2452\",\n        \"2453\",\n        \"2454\",\n        \"2455\",\n        \"2456\",\n        \"2457\",\n        \"2458\",\n        \"2459\",\n        \"2459\",\n        \"2460\",\n        \"2461\",\n        \"2462\",\n        \"2463\",\n        \"2464\",\n        \"2465\",\n        \"2466\",\n        \"2467\",\n        \"2468\",\n        \"2469\",\n        \"2470\",\n        \"2471\",\n        \"2472\",\n        \"2473\",\n        \"2474\",\n        \"2475\",\n        \"2476\",\n        \"2476\",\n        \"2476\",\n        \"2476\",\n        \"2476\",\n        \"2477\",\n        \"2478\",\n        \"2479\",\n        \"2480\",\n        \"2481\",\n        \"2482\",\n        \"2483\",\n        \"2485\",\n        \"2486\",\n        \"2487\",\n        \"2488\",\n        \"2489\",\n        \"2490\",\n        \"2491\",\n        \"2492\",\n        \"2493\",\n        \"2494\",\n        \"2495\",\n        \"2496\",\n        \"2497\",\n        \"2498\",\n        \"2498\",\n        \"2499\",\n        \"2500\",\n        \"2501\",\n        \"2502\",\n        \"2502\",\n        \"2503\",\n        \"2504\",\n        \"2504\",\n        \"2505\",\n        \"2506\",\n        \"2507\",\n        \"2508\",\n        \"2508\",\n        \"2509\",\n        \"2510\",\n        \"2510\",\n        \"2510\",\n        \"2511\",\n        \"2512\",\n        \"2513\",\n        \"2514\",\n        \"2515\",\n        \"2516\",\n        \"2517\",\n        \"2518\",\n        \"2519\",\n        \"2520\",\n        \"2521\",\n        \"2522\",\n        \"2522\",\n        \"2522\",\n        \"2523\",\n        \"2524\",\n        \"2525\",\n        \"2525\",\n        \"2526\",\n        \"2526\",\n        \"2526\",\n        \"2526\",\n        \"2526\",\n        \"2526\",\n        \"2526\",\n        \"2526\",\n        \"2527\",\n        \"2528\",\n        \"2529\",\n        \"2529\",\n        \"2530\",\n        \"2531\",\n        \"2531\",\n        \"2531\",\n        \"2532\",\n        \"2533\",\n        \"2534\",\n        \"2535\",\n        \"2536\",\n        \"2537\",\n        \"2538\",\n        \"2539\",\n        \"2540\",\n        \"2540\",\n        \"2540\",\n        \"2540\",\n        \"2540\",\n        \"2540\",\n        \"2541\",\n        \"2542\",\n        \"2543\",\n        \"2544\",\n        \"2545\",\n        \"2546\",\n        \"2547\",\n        \"2547\",\n        \"2548\",\n        \"2549\",\n        \"2549\",\n        \"2550\",\n        \"2551\",\n        \"2552\",\n        \"2553\",\n        \"2553\",\n        \"2553\",\n        \"2554\",\n        \"2555\",\n        \"2556\",\n        \"2557\",\n        \"2558\",\n        \"2559\",\n        \"2559\",\n        \"2560\",\n        \"2561\",\n        \"2562\",\n        \"2563\",\n        \"2564\",\n        \"2565\",\n        \"2566\",\n        \"2567\",\n        \"2568\",\n        \"2569\",\n        \"2570\",\n        \"2571\",\n        \"2571\",\n        \"2572\",\n        \"2573\",\n        \"2574\",\n        \"2575\",\n        \"2575\",\n        \"2576\",\n        \"2577\",\n        \"2577\",\n        \"2577\",\n        \"2578\",\n        \"2579\",\n        \"2579\",\n        \"2580\",\n        \"2581\",\n        \"2582\",\n        \"2582\",\n        \"2583\",\n        \"2584\",\n        \"2585\",\n        \"2586\",\n        \"2587\",\n        \"2588\",\n        \"2589\",\n        \"2590\",\n        \"2591\",\n        \"2592\",\n        \"2593\",\n        \"2594\",\n        \"2595\",\n        \"2596\",\n        \"2597\",\n        \"2598\",\n        \"2599\",\n        \"2600\",\n        \"2601\",\n        \"2602\",\n        \"2602\",\n        \"2603\",\n        \"2604\",\n        \"2604\",\n        \"2605\",\n        \"2605\",\n        \"2605\",\n        \"2606\",\n        \"2607\",\n        \"2608\",\n        \"2609\",\n        \"2610\",\n        \"2611\",\n        \"2612\",\n        \"2613\",\n        \"2614\",\n        \"2615\",\n        \"2616\",\n        \"2616\",\n        \"2617\",\n        \"2618\",\n        \"2619\",\n        \"2620\",\n        \"2621\",\n        \"2622\",\n        \"2622\",\n        \"2622\",\n        \"2623\",\n        \"2623\",\n        \"2624\",\n        \"2625\",\n        \"2625\",\n        \"2626\",\n        \"2627\",\n        \"2628\",\n        \"2629\",\n        \"2630\",\n        \"2631\",\n        \"2631\",\n        \"2632\",\n        \"2633\",\n        \"2633\",\n        \"2634\",\n        \"2635\",\n        \"2636\",\n        \"2637\",\n        \"2638\",\n        \"2638\",\n        \"2639\",\n        \"2640\",\n        \"2641\",\n        \"2642\",\n        \"2643\",\n        \"2644\",\n        \"2645\",\n        \"2646\",\n        \"2647\",\n        \"2648\",\n        \"2648\",\n        \"2649\",\n        \"2650\",\n        \"2651\",\n        \"2651\",\n        \"2652\",\n        \"2653\",\n        \"2654\",\n        \"2655\",\n        \"2656\",\n        \"2657\",\n        \"2658\",\n        \"2660\",\n        \"2660\",\n        \"2661\",\n        \"2662\",\n        \"2663\",\n        \"2664\",\n        \"2665\",\n        \"2666\",\n        \"2667\",\n        \"2667\",\n        \"2668\",\n        \"2669\",\n        \"2670\",\n        \"2671\",\n        \"2672\",\n        \"2673\",\n        \"2674\",\n        \"2675\",\n        \"2676\",\n        \"2677\",\n        \"2678\",\n        \"2679\",\n        \"2679\",\n        \"2680\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2681\",\n        \"2682\",\n        \"2683\",\n        \"2684\",\n        \"2685\",\n        \"2685\",\n        \"2686\",\n        \"2687\",\n        \"2688\",\n        \"2689\",\n        \"2690\",\n        \"2691\",\n        \"2692\",\n        \"2693\",\n        \"2694\",\n        \"2695\",\n        \"2696\",\n        \"2697\",\n        \"2697\",\n        \"2697\",\n        \"2698\",\n        \"2699\",\n        \"2699\",\n        \"2700\",\n        \"2701\",\n        \"2702\",\n        \"2703\",\n        \"2704\",\n        \"2704\",\n        \"2704\",\n        \"2705\",\n        \"2706\",\n        \"2707\",\n        \"2708\",\n        \"2709\",\n        \"2712\",\n        \"2713\",\n        \"2714\",\n        \"2715\",\n        \"2715\",\n        \"2716\",\n        \"2717\",\n        \"2718\",\n        \"2719\",\n        \"2720\",\n        \"2721\",\n        \"2721\",\n        \"2722\",\n        \"2723\",\n        \"2724\",\n        \"2725\",\n        \"2726\",\n        \"2727\",\n        \"2728\",\n        \"2729\",\n        \"2730\",\n        \"2731\",\n        \"2731\",\n        \"2731\",\n        \"2732\",\n        \"2733\",\n        \"2734\",\n        \"2735\",\n        \"2736\",\n        \"2737\",\n        \"2738\",\n        \"2739\",\n        \"2740\",\n        \"2740\",\n        \"2741\",\n        \"2741\",\n        \"2742\",\n        \"2743\",\n        \"2744\",\n        \"2745\",\n        \"2746\",\n        \"2747\",\n        \"2748\",\n        \"2749\",\n        \"2749\",\n        \"2750\",\n        \"2751\",\n        \"2752\",\n        \"2753\",\n        \"2754\",\n        \"2754\",\n        \"2754\",\n        \"2755\",\n        \"2756\",\n        \"2757\",\n        \"2758\",\n        \"2759\",\n        \"2760\",\n        \"2761\",\n        \"2761\",\n        \"2762\",\n        \"2763\",\n        \"2764\",\n        \"2764\",\n        \"2765\",\n        \"2766\",\n        \"2766\",\n        \"2766\",\n        \"2767\",\n        \"2768\",\n        \"2769\",\n        \"2770\",\n        \"2771\",\n        \"2771\",\n        \"2772\",\n        \"2773\",\n        \"2773\",\n        \"2773\",\n        \"2773\",\n        \"2774\",\n        \"2775\",\n        \"2776\",\n        \"2777\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2778\",\n        \"2779\",\n        \"2780\",\n        \"2781\",\n        \"2782\",\n        \"2783\",\n        \"2783\",\n        \"2783\",\n        \"2784\",\n        \"2785\",\n        \"2786\",\n        \"2787\",\n        \"2788\",\n        \"2789\",\n        \"2790\",\n        \"2791\",\n        \"2792\",\n        \"2793\",\n        \"2794\",\n        \"2795\",\n        \"2796\",\n        \"2797\",\n        \"2798\",\n        \"2799\",\n        \"2800\",\n        \"2801\",\n        \"2801\",\n        \"2802\",\n        \"2803\",\n        \"2804\",\n        \"2805\",\n        \"2805\",\n        \"2806\",\n        \"2807\",\n        \"2808\",\n        \"2809\",\n        \"2810\",\n        \"2811\",\n        \"2812\",\n        \"2813\",\n        \"2813\",\n        \"2814\",\n        \"2814\",\n        \"2815\",\n        \"2816\",\n        \"2817\",\n        \"2818\",\n        \"2819\",\n        \"2820\",\n        \"2820\",\n        \"2821\",\n        \"2821\",\n        \"2821\",\n        \"2821\",\n        \"2822\",\n        \"2823\",\n        \"2824\",\n        \"2825\",\n        \"2825\",\n        \"2825\",\n        \"2826\",\n        \"2828\",\n        \"2829\",\n        \"2830\",\n        \"2831\",\n        \"2832\",\n        \"2833\",\n        \"2834\",\n        \"2835\",\n        \"2836\",\n        \"2837\",\n        \"2838\",\n        \"2839\",\n        \"2840\",\n        \"2841\",\n        \"2841\",\n        \"2842\",\n        \"2843\",\n        \"2844\",\n        \"2845\",\n        \"2846\",\n        \"2847\",\n        \"2848\",\n        \"2849\",\n        \"2851\",\n        \"2852\",\n        \"2853\",\n        \"2854\",\n        \"2855\",\n        \"2856\",\n        \"2856\",\n        \"2857\",\n        \"2858\",\n        \"2859\",\n        \"2860\",\n        \"2861\",\n        \"2862\",\n        \"2863\",\n        \"2864\",\n        \"2865\",\n        \"2866\",\n        \"2867\",\n        \"2868\",\n        \"2869\",\n        \"2870\",\n        \"2871\",\n        \"2872\",\n        \"2873\",\n        \"2874\",\n        \"2875\",\n        \"2876\",\n        \"2877\",\n        \"2878\",\n        \"2879\",\n        \"2879\",\n        \"2879\",\n        \"2880\",\n        \"2881\",\n        \"2882\",\n        \"2883\",\n        \"2884\",\n        \"2885\",\n        \"2885\",\n        \"2885\",\n        \"2885\",\n        \"2886\",\n        \"2887\",\n        \"2888\",\n        \"2889\",\n        \"2890\",\n        \"2891\",\n        \"2892\",\n        \"2893\",\n        \"2894\",\n        \"2895\",\n        \"2896\",\n        \"2897\",\n        \"2898\",\n        \"2899\",\n        \"2900\",\n        \"2901\",\n        \"2902\",\n        \"2903\",\n        \"2904\",\n        \"2905\",\n        \"2906\",\n        \"2907\",\n        \"2908\",\n        \"2909\",\n        \"2910\",\n        \"2911\",\n        \"2911\",\n        \"2912\",\n        \"2913\",\n        \"2914\",\n        \"2915\",\n        \"2916\",\n        \"2917\",\n        \"2918\",\n        \"2919\",\n        \"2920\",\n        \"2921\",\n        \"2922\",\n        \"2923\",\n        \"2924\",\n        \"2925\",\n        \"2926\",\n        \"2927\",\n        \"2928\",\n        \"2929\",\n        \"2930\",\n        \"2931\",\n        \"2932\",\n        \"2933\",\n        \"2934\",\n        \"2935\",\n        \"2936\",\n        \"2937\",\n        \"2938\",\n        \"2939\",\n        \"2940\",\n        \"2941\",\n        \"2942\",\n        \"2942\",\n        \"2942\",\n        \"2943\",\n        \"2944\",\n        \"2945\",\n        \"2945\",\n        \"2946\",\n        \"2947\",\n        \"2947\",\n        \"2947\",\n        \"2948\",\n        \"2949\",\n        \"2950\",\n        \"2951\",\n        \"2952\",\n        \"2952\",\n        \"2953\",\n        \"2954\",\n        \"2955\",\n        \"2955\",\n        \"2956\",\n        \"2957\",\n        \"2958\",\n        \"2959\",\n        \"2960\",\n        \"2961\",\n        \"2962\",\n        \"2963\",\n        \"2964\",\n        \"2964\",\n        \"2964\",\n        \"2965\",\n        \"2966\",\n        \"2967\",\n        \"2967\",\n        \"2968\",\n        \"2969\",\n        \"2970\",\n        \"2971\",\n        \"2973\",\n        \"2974\",\n        \"2975\",\n        \"2976\",\n        \"2977\",\n        \"2978\",\n        \"2978\",\n        \"2978\",\n        \"2979\",\n        \"2980\",\n        \"2981\",\n        \"2982\",\n        \"2983\",\n        \"2984\",\n        \"2985\",\n        \"2986\",\n        \"2987\",\n        \"2988\",\n        \"2989\",\n        \"2990\",\n        \"2991\",\n        \"2992\",\n        \"2993\",\n        \"2994\",\n        \"2995\",\n        \"2996\",\n        \"2997\",\n        \"2998\",\n        \"2999\",\n        \"2999\",\n        \"3000\",\n        \"3000\",\n        \"3001\",\n        \"3002\",\n        \"3003\",\n        \"3004\",\n        \"3005\",\n        \"3006\",\n        \"3007\",\n        \"3007\",\n        \"3007\",\n        \"3008\",\n        \"3009\",\n        \"3011\",\n        \"3012\",\n        \"3012\",\n        \"3013\",\n        \"3014\",\n        \"3015\",\n        \"3016\",\n        \"3017\",\n        \"3018\",\n        \"3018\",\n        \"3019\",\n        \"3020\",\n        \"3021\",\n        \"3021\",\n        \"3021\",\n        \"3022\",\n        \"3022\",\n        \"3023\",\n        \"3024\",\n        \"3025\",\n        \"3026\",\n        \"3026\",\n        \"3027\",\n        \"3028\",\n        \"3029\",\n        \"3030\",\n        \"3031\",\n        \"3032\",\n        \"3033\",\n        \"3033\",\n        \"3033\",\n        \"3033\",\n        \"3033\",\n        \"3033\",\n        \"3033\",\n        \"3034\",\n        \"3034\",\n        \"3035\",\n        \"3036\",\n        \"3037\",\n        \"3038\",\n        \"3039\",\n        \"3039\",\n        \"3040\",\n        \"3041\",\n        \"3042\",\n        \"3043\",\n        \"3044\",\n        \"3045\",\n        \"3046\",\n        \"3047\",\n        \"3049\",\n        \"3049\",\n        \"3050\",\n        \"3051\",\n        \"3051\",\n        \"3051\",\n        \"3051\",\n        \"3052\",\n        \"3052\",\n        \"3053\",\n        \"3054\",\n        \"3055\",\n        \"3055\",\n        \"3056\",\n        \"3057\",\n        \"3058\",\n        \"3059\",\n        \"3060\",\n        \"3061\",\n        \"3061\",\n        \"3061\",\n        \"3062\",\n        \"3063\",\n        \"3064\",\n        \"3065\",\n        \"3066\",\n        \"3067\",\n        \"3068\",\n        \"3069\",\n        \"3070\",\n        \"3071\",\n        \"3073\",\n        \"3074\",\n        \"3075\",\n        \"3076\",\n        \"3077\",\n        \"3078\",\n        \"3079\",\n        \"3080\",\n        \"3081\",\n        \"3082\",\n        \"3083\",\n        \"3084\",\n        \"3085\",\n        \"3086\",\n        \"3087\",\n        \"3088\",\n        \"3089\",\n        \"3090\",\n        \"3091\",\n        \"3091\",\n        \"3092\",\n        \"3093\",\n        \"3094\",\n        \"3095\",\n        \"3096\",\n        \"3097\",\n        \"3098\",\n        \"3099\",\n        \"3100\",\n        \"3101\",\n        \"3102\",\n        \"3103\",\n        \"3104\",\n        \"3105\",\n        \"3106\",\n        \"3107\",\n        \"3108\",\n        \"3109\",\n        \"3109\",\n        \"3110\",\n        \"3111\",\n        \"3111\",\n        \"3111\",\n        \"3112\",\n        \"3112\",\n        \"3113\",\n        \"3113\",\n        \"3114\",\n        \"3115\",\n        \"3116\",\n        \"3117\",\n        \"3118\",\n        \"3119\",\n        \"3120\",\n        \"3121\",\n        \"3122\",\n        \"3123\",\n        \"3124\",\n        \"3125\",\n        \"3126\",\n        \"3126\",\n        \"3127\",\n        \"3128\",\n        \"3128\",\n        \"3128\",\n        \"3128\",\n        \"3128\",\n        \"3129\",\n        \"3130\",\n        \"3131\",\n        \"3132\",\n        \"3133\",\n        \"3134\",\n        \"3135\",\n        \"3135\",\n        \"3136\",\n        \"3137\",\n        \"3138\",\n        \"3139\",\n        \"3140\",\n        \"3141\",\n        \"3142\",\n        \"3143\",\n        \"3144\",\n        \"3144\",\n        \"3144\",\n        \"3145\",\n        \"3146\",\n        \"3147\",\n        \"3149\",\n        \"3150\",\n        \"3150\",\n        \"3150\",\n        \"3150\",\n        \"3151\",\n        \"3152\",\n        \"3153\",\n        \"3153\",\n        \"3154\",\n        \"3155\",\n        \"3156\",\n        \"3156\",\n        \"3156\",\n        \"3157\",\n        \"3158\",\n        \"3159\",\n        \"3160\",\n        \"3161\",\n        \"3162\",\n        \"3162\",\n        \"3163\",\n        \"3164\",\n        \"3165\",\n        \"3166\",\n        \"3167\",\n        \"3167\",\n        \"3167\",\n        \"3167\",\n        \"3168\",\n        \"3169\",\n        \"3170\",\n        \"3171\",\n        \"3172\",\n        \"3172\",\n        \"3173\",\n        \"3174\",\n        \"3175\",\n        \"3176\",\n        \"3177\",\n        \"3177\",\n        \"3177\",\n        \"3178\",\n        \"3179\",\n        \"3180\",\n        \"3181\",\n        \"3182\",\n        \"3183\",\n        \"3183\",\n        \"3184\",\n        \"3185\",\n        \"3186\",\n        \"3187\",\n        \"3188\",\n        \"3189\",\n        \"3190\",\n        \"3191\",\n        \"3192\",\n        \"3193\",\n        \"3194\",\n        \"3195\",\n        \"3196\",\n        \"3196\",\n        \"3197\",\n        \"3198\",\n        \"3198\",\n        \"3199\",\n        \"3200\",\n        \"3201\",\n        \"3202\",\n        \"3203\",\n        \"3204\",\n        \"3205\",\n        \"3205\",\n        \"3206\",\n        \"3207\",\n        \"3208\",\n        \"3209\",\n        \"3209\",\n        \"3210\",\n        \"3211\",\n        \"3212\",\n        \"3213\",\n        \"3214\",\n        \"3214\",\n        \"3215\",\n        \"3215\",\n        \"3215\",\n        \"3215\",\n        \"3215\",\n        \"3215\",\n        \"3215\",\n        \"3215\",\n        \"3216\",\n        \"3217\",\n        \"3217\",\n        \"3217\",\n        \"3217\",\n        \"3217\",\n        \"3218\",\n        \"3218\",\n        \"3218\",\n        \"3218\",\n        \"3218\",\n        \"3219\",\n        \"3220\",\n        \"3221\",\n        \"3222\",\n        \"3223\",\n        \"3224\",\n        \"3225\",\n        \"3225\",\n        \"3226\",\n        \"3226\",\n        \"3227\",\n        \"3227\",\n        \"3228\",\n        \"3229\",\n        \"3229\",\n        \"3229\",\n        \"3229\",\n        \"3229\",\n        \"3229\",\n        \"3230\",\n        \"3231\",\n        \"3232\",\n        \"3232\",\n        \"3233\",\n        \"3234\",\n        \"3235\",\n        \"3236\",\n        \"3237\",\n        \"3238\",\n        \"3239\",\n        \"3240\",\n        \"3240\",\n        \"3241\",\n        \"3242\",\n        \"3243\",\n        \"3244\",\n        \"3245\",\n        \"3246\",\n        \"3247\",\n        \"3248\",\n        \"3249\",\n        \"3250\",\n        \"3251\",\n        \"3251\",\n        \"3252\",\n        \"3253\",\n        \"3254\",\n        \"3254\",\n        \"3255\",\n        \"3256\",\n        \"3257\",\n        \"3258\",\n        \"3259\",\n        \"3260\",\n        \"3260\",\n        \"3261\",\n        \"3261\",\n        \"3261\",\n        \"3261\",\n        \"3261\",\n        \"3262\",\n        \"3263\",\n        \"3265\",\n        \"3266\",\n        \"3267\",\n        \"3268\",\n        \"3269\",\n        \"3270\",\n        \"3271\",\n        \"3272\",\n        \"3272\",\n        \"3273\",\n        \"3274\",\n        \"3275\",\n        \"3277\",\n        \"3278\",\n        \"3278\",\n        \"3279\",\n        \"3280\",\n        \"3281\",\n        \"3282\",\n        \"3283\",\n        \"3283\",\n        \"3283\",\n        \"3283\",\n        \"3283\",\n        \"3284\",\n        \"3284\",\n        \"3285\",\n        \"3286\",\n        \"3287\",\n        \"3288\",\n        \"3289\",\n        \"3290\",\n        \"3291\",\n        \"3292\",\n        \"3293\",\n        \"3294\",\n        \"3295\",\n        \"3296\",\n        \"3296\",\n        \"3297\",\n        \"3298\",\n        \"3298\",\n        \"3298\",\n        \"3298\",\n        \"3299\",\n        \"3300\",\n        \"3301\",\n        \"3301\",\n        \"3302\",\n        \"3303\",\n        \"3304\",\n        \"3305\",\n        \"3306\",\n        \"3307\",\n        \"3308\",\n        \"3309\",\n        \"3309\",\n        \"3310\",\n        \"3311\",\n        \"3312\",\n        \"3313\",\n        \"3314\",\n        \"3315\",\n        \"3315\",\n        \"3315\",\n        \"3315\",\n        \"3316\",\n        \"3316\",\n        \"3317\",\n        \"3318\",\n        \"3318\",\n        \"3319\",\n        \"3320\",\n        \"3321\",\n        \"3322\",\n        \"3323\",\n        \"3324\",\n        \"3325\",\n        \"3326\",\n        \"3326\",\n        \"3326\",\n        \"3326\",\n        \"3327\",\n        \"3328\",\n        \"3329\",\n        \"3330\",\n        \"3330\",\n        \"3330\",\n        \"3330\",\n        \"3331\",\n        \"3332\",\n        \"3333\",\n        \"3334\",\n        \"3334\",\n        \"3334\",\n        \"3335\",\n        \"3336\",\n        \"3337\",\n        \"3338\",\n        \"3339\",\n        \"3339\",\n        \"3339\",\n        \"3340\",\n        \"3341\",\n        \"3342\",\n        \"3343\",\n        \"3344\",\n        \"3345\",\n        \"3346\",\n        \"3346\",\n        \"3347\",\n        \"3348\",\n        \"3349\",\n        \"3350\",\n        \"3351\",\n        \"3352\",\n        \"3353\",\n        \"3353\",\n        \"3353\",\n        \"3354\",\n        \"3355\",\n        \"3356\",\n        \"3357\",\n        \"3358\",\n        \"3358\",\n        \"3359\",\n        \"3359\",\n        \"3359\",\n        \"3359\",\n        \"3359\",\n        \"3359\",\n        \"3360\",\n        \"3361\",\n        \"3362\",\n        \"3363\",\n        \"3364\",\n        \"3365\",\n        \"3366\",\n        \"3366\",\n        \"3366\",\n        \"3367\",\n        \"3368\",\n        \"3369\",\n        \"3369\",\n        \"3369\",\n        \"3369\",\n        \"3370\",\n        \"3371\",\n        \"3372\",\n        \"3373\",\n        \"3374\",\n        \"3375\",\n        \"3375\",\n        \"3375\",\n        \"3376\",\n        \"3377\",\n        \"3378\",\n        \"3379\",\n        \"3380\",\n        \"3380\",\n        \"3381\",\n        \"3382\",\n        \"3382\",\n        \"3383\",\n        \"3384\",\n        \"3384\",\n        \"3385\",\n        \"3386\",\n        \"3387\",\n        \"3387\",\n        \"3387\",\n        \"3388\",\n        \"3389\",\n        \"3390\",\n        \"3391\",\n        \"3392\",\n        \"3393\",\n        \"3394\",\n        \"3394\",\n        \"3395\",\n        \"3395\",\n        \"3396\",\n        \"3397\",\n        \"3398\",\n        \"3399\",\n        \"3400\",\n        \"3401\",\n        \"3402\",\n        \"3403\",\n        \"3404\",\n        \"3405\",\n        \"3406\",\n        \"3407\",\n        \"3408\",\n        \"3409\",\n        \"3410\",\n        \"3411\",\n        \"3412\",\n        \"3413\",\n        \"3414\",\n        \"3415\",\n        \"3415\",\n        \"3416\",\n        \"3417\",\n        \"3417\",\n        \"3418\",\n        \"3418\",\n        \"3419\",\n        \"3420\",\n        \"3421\",\n        \"3421\",\n        \"3422\",\n        \"3423\",\n        \"3424\",\n        \"3425\",\n        \"3426\",\n        \"3426\",\n        \"3426\",\n        \"3426\",\n        \"3426\",\n        \"3427\",\n        \"3427\",\n        \"3428\",\n        \"3429\",\n        \"3429\",\n        \"3430\",\n        \"3431\",\n        \"3432\",\n        \"3433\",\n        \"3433\",\n        \"3434\",\n        \"3435\",\n        \"3436\",\n        \"3437\",\n        \"3438\",\n        \"3439\",\n        \"3440\",\n        \"3441\",\n        \"3442\",\n        \"3442\",\n        \"3443\",\n        \"3444\",\n        \"3444\",\n        \"3445\",\n        \"3446\",\n        \"3447\",\n        \"3448\",\n        \"3449\",\n        \"3450\",\n        \"3451\",\n        \"3452\",\n        \"3453\",\n        \"3454\",\n        \"3454\",\n        \"3455\",\n        \"3456\",\n        \"3457\",\n        \"3457\",\n        \"3457\",\n        \"3457\",\n        \"3457\",\n        \"3458\",\n        \"3459\",\n        \"3460\",\n        \"3461\",\n        \"3462\",\n        \"3463\",\n        \"3464\",\n        \"3465\",\n        \"3466\",\n        \"3466\",\n        \"3467\",\n        \"3468\",\n        \"3469\",\n        \"3470\",\n        \"3471\",\n        \"3471\",\n        \"3472\",\n        \"3473\",\n        \"3474\",\n        \"3475\",\n        \"3476\",\n        \"3477\",\n        \"3478\",\n        \"3479\",\n        \"3480\",\n        \"3481\",\n        \"3482\",\n        \"3483\",\n        \"3483\",\n        \"3483\",\n        \"3484\",\n        \"3485\",\n        \"3485\",\n        \"3486\",\n        \"3487\",\n        \"3488\",\n        \"3489\",\n        \"3490\",\n        \"3490\",\n        \"3491\",\n        \"3492\",\n        \"3493\",\n        \"3493\",\n        \"3494\",\n        \"3495\",\n        \"3496\",\n        \"3497\",\n        \"3497\",\n        \"3498\",\n        \"3499\",\n        \"3500\",\n        \"3501\",\n        \"3502\",\n        \"3502\",\n        \"3503\",\n        \"3504\",\n        \"3505\",\n        \"3505\",\n        \"3506\",\n        \"3507\",\n        \"3508\",\n        \"3509\",\n        \"3510\",\n        \"3510\",\n        \"3510\",\n        \"3511\",\n        \"3512\",\n        \"3513\",\n        \"3514\",\n        \"3515\",\n        \"3516\",\n        \"3517\",\n        \"3518\",\n        \"3519\",\n        \"3519\",\n        \"3520\",\n        \"3521\",\n        \"3522\",\n        \"3523\",\n        \"3523\",\n        \"3524\",\n        \"3525\",\n        \"3526\",\n        \"3527\",\n        \"3528\",\n        \"3529\",\n        \"3531\",\n        \"3532\",\n        \"3533\",\n        \"3534\",\n        \"3535\",\n        \"3535\",\n        \"3536\",\n        \"3536\",\n        \"3537\",\n        \"3538\",\n        \"3539\",\n        \"3540\",\n        \"3541\",\n        \"3542\",\n        \"3543\",\n        \"3543\",\n        \"3544\",\n        \"3545\",\n        \"3546\",\n        \"3547\",\n        \"3548\",\n        \"3549\",\n        \"3550\",\n        \"3551\",\n        \"3552\",\n        \"3553\",\n        \"3554\",\n        \"3554\",\n        \"3555\",\n        \"3556\",\n        \"3557\",\n        \"3558\",\n        \"3559\",\n        \"3560\",\n        \"3561\",\n        \"3562\",\n        \"3563\",\n        \"3564\",\n        \"3565\",\n        \"3566\",\n        \"3567\",\n        \"3568\",\n        \"3569\",\n        \"3570\",\n        \"3571\",\n        \"3572\",\n        \"3573\",\n        \"3574\",\n        \"3575\",\n        \"3576\",\n        \"3577\",\n        \"3578\",\n        \"3579\",\n        \"3580\",\n        \"3580\",\n        \"3581\",\n        \"3581\",\n        \"3581\",\n        \"3582\",\n        \"3583\",\n        \"3584\",\n        \"3585\",\n        \"3586\",\n        \"3587\",\n        \"3588\",\n        \"3589\",\n        \"3590\",\n        \"3591\",\n        \"3592\",\n        \"3593\",\n        \"3594\",\n        \"3595\",\n        \"3596\",\n        \"3597\",\n        \"3598\",\n        \"3599\",\n        \"3599\",\n        \"3600\",\n        \"3601\",\n        \"3602\",\n        \"3603\",\n        \"3603\",\n        \"3604\",\n        \"3605\",\n        \"3606\",\n        \"3607\",\n        \"3608\",\n        \"3609\",\n        \"3610\",\n        \"3611\",\n        \"3612\",\n        \"3612\",\n        \"3612\",\n        \"3612\",\n        \"3613\",\n        \"3614\",\n        \"3615\",\n        \"3615\",\n        \"3615\",\n        \"3615\",\n        \"3616\",\n        \"3617\",\n        \"3618\",\n        \"3619\",\n        \"3620\",\n        \"3621\",\n        \"3622\",\n        \"3622\",\n        \"3623\",\n        \"3624\",\n        \"3625\",\n        \"3627\",\n        \"3628\",\n        \"3628\",\n        \"3628\",\n        \"3629\",\n        \"3630\",\n        \"3631\",\n        \"3632\",\n        \"3633\",\n        \"3634\",\n        \"3634\",\n        \"3634\",\n        \"3635\",\n        \"3636\",\n        \"3637\",\n        \"3638\",\n        \"3639\",\n        \"3640\",\n        \"3641\",\n        \"3642\",\n        \"3643\",\n        \"3644\",\n        \"3645\",\n        \"3646\",\n        \"3647\",\n        \"3648\",\n        \"3649\",\n        \"3650\",\n        \"3651\",\n        \"3651\",\n        \"3651\",\n        \"3652\",\n        \"3652\",\n        \"3652\",\n        \"3653\",\n        \"3654\",\n        \"3655\",\n        \"3656\",\n        \"3657\",\n        \"3658\",\n        \"3659\",\n        \"3660\",\n        \"3660\",\n        \"3661\",\n        \"3662\",\n        \"3662\",\n        \"3662\",\n        \"3662\",\n        \"3662\",\n        \"3663\",\n        \"3664\",\n        \"3665\",\n        \"3666\",\n        \"3667\",\n        \"3668\",\n        \"3669\",\n        \"3670\",\n        \"3671\",\n        \"3672\",\n        \"3672\",\n        \"3672\",\n        \"3673\",\n        \"3674\",\n        \"3675\",\n        \"3677\",\n        \"3678\",\n        \"3679\",\n        \"3679\",\n        \"3679\",\n        \"3679\",\n        \"3679\",\n        \"3679\",\n        \"3680\",\n        \"3681\",\n        \"3681\",\n        \"3682\",\n        \"3683\",\n        \"3684\",\n        \"3685\",\n        \"3686\",\n        \"3686\",\n        \"3687\",\n        \"3688\",\n        \"3689\",\n        \"3690\",\n        \"3691\",\n        \"3692\",\n        \"3693\",\n        \"3694\",\n        \"3695\",\n        \"3696\",\n        \"3697\",\n        \"3698\",\n        \"3699\",\n        \"3700\",\n        \"3700\",\n        \"3701\",\n        \"3702\",\n        \"3702\",\n        \"3703\",\n        \"3704\",\n        \"3705\",\n        \"3706\",\n        \"3707\",\n        \"3708\",\n        \"3709\",\n        \"3710\",\n        \"3711\",\n        \"3712\",\n        \"3713\",\n        \"3714\",\n        \"3715\",\n        \"3716\",\n        \"3717\",\n        \"3717\",\n        \"3718\",\n        \"3719\",\n        \"3719\",\n        \"3719\",\n        \"3720\",\n        \"3721\",\n        \"3722\",\n        \"3723\",\n        \"3724\",\n        \"3725\",\n        \"3726\",\n        \"3727\",\n        \"3728\",\n        \"3729\",\n        \"3729\",\n        \"3730\",\n        \"3731\",\n        \"3732\",\n        \"3733\",\n        \"3734\",\n        \"3735\",\n        \"3736\",\n        \"3737\",\n        \"3738\",\n        \"3739\",\n        \"3740\",\n        \"3741\",\n        \"3742\",\n        \"3743\",\n        \"3744\",\n        \"3745\",\n        \"3746\",\n        \"3747\",\n        \"3748\",\n        \"3749\",\n        \"3750\",\n        \"3751\",\n        \"3752\",\n        \"3753\",\n        \"3754\",\n        \"3755\",\n        \"3756\",\n        \"3757\",\n        \"3758\",\n        \"3759\",\n        \"3760\",\n        \"3761\",\n        \"3762\",\n        \"3763\",\n        \"3763\",\n        \"3763\",\n        \"3763\",\n        \"3764\",\n        \"3764\",\n        \"3764\",\n        \"3764\",\n        \"3764\",\n        \"3765\",\n        \"3766\",\n        \"3767\",\n        \"3768\",\n        \"3769\",\n        \"3770\",\n        \"3771\",\n        \"3771\",\n        \"3771\",\n        \"3771\",\n        \"3772\",\n        \"3773\",\n        \"3774\",\n        \"3775\",\n        \"3776\",\n        \"3777\",\n        \"3777\",\n        \"3777\",\n        \"3777\",\n        \"3778\",\n        \"3778\",\n        \"3779\",\n        \"3780\",\n        \"3781\",\n        \"3782\",\n        \"3782\",\n        \"3782\",\n        \"3783\",\n        \"3783\",\n        \"3784\",\n        \"3785\",\n        \"3786\",\n        \"3786\",\n        \"3786\",\n        \"3786\",\n        \"3787\",\n        \"3788\",\n        \"3789\",\n        \"3790\",\n        \"3791\",\n        \"3792\",\n        \"3793\",\n        \"3794\",\n        \"3795\",\n        \"3796\",\n        \"3797\",\n        \"3798\",\n        \"3799\",\n        \"3800\",\n        \"3801\",\n        \"3802\",\n        \"3803\",\n        \"3803\",\n        \"3804\",\n        \"3805\",\n        \"3806\",\n        \"3807\",\n        \"3808\",\n        \"3809\",\n        \"3810\",\n        \"3811\",\n        \"3812\",\n        \"3813\",\n        \"3814\",\n        \"3815\",\n        \"3816\",\n        \"3817\",\n        \"3818\",\n        \"3819\",\n        \"3819\",\n        \"3820\",\n        \"3821\",\n        \"3821\",\n        \"3821\",\n        \"3822\",\n        \"3823\",\n        \"3824\",\n        \"3825\",\n        \"3826\",\n        \"3827\",\n        \"3828\",\n        \"3829\",\n        \"3830\",\n        \"3831\",\n        \"3832\",\n        \"3833\",\n        \"3834\",\n        \"3835\",\n        \"3836\",\n        \"3837\",\n        \"3838\",\n        \"3839\",\n        \"3840\",\n        \"3841\",\n        \"3842\",\n        \"3843\",\n        \"3844\",\n        \"3845\",\n        \"3845\",\n        \"3846\",\n        \"3847\",\n        \"3848\",\n        \"3849\",\n        \"3850\",\n        \"3851\",\n        \"3852\",\n        \"3853\",\n        \"3854\",\n        \"3854\",\n        \"3855\",\n        \"3856\",\n        \"3857\",\n        \"3858\",\n        \"3859\",\n        \"3860\",\n        \"3861\",\n        \"3862\",\n        \"3863\",\n        \"3863\",\n        \"3864\",\n        \"3865\",\n        \"3866\",\n        \"3867\",\n        \"3868\",\n        \"3868\",\n        \"3869\",\n        \"3870\",\n        \"3871\",\n        \"3872\",\n        \"3873\",\n        \"3874\",\n        \"3875\",\n        \"3876\",\n        \"3876\",\n        \"3877\",\n        \"3878\",\n        \"3879\",\n        \"3880\",\n        \"3881\",\n        \"3882\",\n        \"3883\",\n        \"3884\",\n        \"3885\",\n        \"3885\",\n        \"3886\",\n        \"3887\",\n        \"3888\",\n        \"3889\",\n        \"3890\",\n        \"3890\",\n        \"3891\",\n        \"3892\",\n        \"3893\",\n        \"3893\",\n        \"3894\",\n        \"3894\",\n        \"3894\",\n        \"3895\",\n        \"3896\",\n        \"3896\",\n        \"3897\",\n        \"3898\",\n        \"3899\",\n        \"3900\",\n        \"3902\",\n        \"3903\",\n        \"3903\",\n        \"3904\",\n        \"3905\",\n        \"3906\",\n        \"3907\",\n        \"3908\",\n        \"3909\",\n        \"3909\",\n        \"3910\",\n        \"3911\",\n        \"3912\",\n        \"3912\",\n        \"3913\",\n        \"3913\",\n        \"3914\",\n        \"3915\",\n        \"3916\",\n        \"3917\",\n        \"3918\",\n        \"3918\",\n        \"3919\",\n        \"3920\",\n        \"3920\",\n        \"3921\",\n        \"3922\",\n        \"3923\",\n        \"3924\",\n        \"3925\",\n        \"3926\",\n        \"3927\",\n        \"3928\",\n        \"3929\",\n        \"3930\",\n        \"3931\",\n        \"3932\",\n        \"3933\",\n        \"3934\",\n        \"3934\",\n        \"3935\",\n        \"3936\",\n        \"3937\",\n        \"3937\",\n        \"3938\",\n        \"3939\",\n        \"3940\",\n        \"3941\",\n        \"3941\",\n        \"3942\",\n        \"3942\",\n        \"3943\",\n        \"3944\",\n        \"3945\",\n        \"3946\",\n        \"3947\",\n        \"3948\",\n        \"3949\",\n        \"3950\",\n        \"3951\",\n        \"3951\",\n        \"3952\",\n        \"3953\",\n        \"3954\",\n        \"3955\",\n        \"3956\",\n        \"3957\",\n        \"3958\",\n        \"3959\",\n        \"3960\",\n        \"3961\",\n        \"3962\",\n        \"3963\",\n        \"3964\",\n        \"3965\",\n        \"3965\",\n        \"3966\",\n        \"3967\",\n        \"3968\",\n        \"3969\",\n        \"3970\",\n        \"3970\",\n        \"3971\",\n        \"3972\",\n        \"3973\",\n        \"3974\",\n        \"3975\",\n        \"3976\",\n        \"3977\",\n        \"3978\",\n        \"3979\",\n        \"3980\",\n        \"3980\",\n        \"3981\",\n        \"3982\",\n        \"3983\",\n        \"3983\",\n        \"3983\",\n        \"3983\",\n        \"3983\",\n        \"3983\",\n        \"3984\",\n        \"3985\",\n        \"3986\",\n        \"3987\",\n        \"3988\",\n        \"3990\",\n        \"3991\",\n        \"3992\",\n        \"3993\",\n        \"3994\",\n        \"3995\",\n        \"3995\",\n        \"3995\",\n        \"3996\",\n        \"3997\",\n        \"3998\",\n        \"3998\",\n        \"3999\",\n        \"4000\",\n        \"4001\",\n        \"4002\",\n        \"4003\",\n        \"4004\",\n        \"4006\",\n        \"4006\",\n        \"4006\",\n        \"4007\",\n        \"4008\",\n        \"4008\",\n        \"4009\",\n        \"4010\",\n        \"4011\",\n        \"4012\",\n        \"4013\",\n        \"4014\",\n        \"4015\",\n        \"4016\",\n        \"4016\",\n        \"4017\",\n        \"4018\",\n        \"4019\",\n        \"4020\",\n        \"4021\",\n        \"4022\",\n        \"4023\",\n        \"4023\",\n        \"4023\",\n        \"4024\",\n        \"4025\",\n        \"4026\",\n        \"4027\",\n        \"4028\",\n        \"4029\",\n        \"4029\",\n        \"4029\",\n        \"4030\",\n        \"4032\",\n        \"4033\",\n        \"4033\",\n        \"4034\",\n        \"4035\",\n        \"4036\",\n        \"4037\",\n        \"4038\",\n        \"4038\",\n        \"4038\",\n        \"4038\",\n        \"4038\",\n        \"4038\",\n        \"4039\",\n        \"4040\",\n        \"4041\",\n        \"4042\",\n        \"4043\",\n        \"4044\",\n        \"4045\",\n        \"4046\",\n        \"4047\",\n        \"4048\",\n        \"4049\",\n        \"4050\",\n        \"4051\",\n        \"4052\",\n        \"4053\",\n        \"4054\",\n        \"4055\",\n        \"4056\",\n        \"4057\",\n        \"4058\",\n        \"4059\",\n        \"4060\",\n        \"4061\",\n        \"4062\",\n        \"4063\",\n        \"4063\",\n        \"4064\",\n        \"4065\",\n        \"4066\",\n        \"4067\",\n        \"4068\",\n        \"4069\",\n        \"4070\",\n        \"4071\",\n        \"4072\",\n        \"4072\",\n        \"4073\",\n        \"4074\",\n        \"4075\",\n        \"4076\",\n        \"4077\",\n        \"4078\",\n        \"4079\",\n        \"4079\",\n        \"4080\",\n        \"4081\",\n        \"4082\",\n        \"4083\",\n        \"4084\",\n        \"4085\",\n        \"4085\",\n        \"4086\",\n        \"4087\",\n        \"4088\",\n        \"4089\",\n        \"4090\",\n        \"4091\",\n        \"4092\",\n        \"4093\",\n        \"4094\",\n        \"4095\",\n        \"4096\",\n        \"4097\",\n        \"4098\",\n        \"4099\",\n        \"4100\",\n        \"4101\",\n        \"4102\",\n        \"4103\",\n        \"4104\",\n        \"4105\",\n        \"4106\",\n        \"4107\",\n        \"4108\",\n        \"4109\",\n        \"4110\",\n        \"4111\",\n        \"4111\",\n        \"4111\",\n        \"4112\",\n        \"4113\",\n        \"4114\",\n        \"4115\",\n        \"4116\",\n        \"4116\",\n        \"4117\",\n        \"4119\",\n        \"4120\",\n        \"4121\",\n        \"4122\",\n        \"4123\",\n        \"4124\",\n        \"4125\",\n        \"4125\",\n        \"4126\",\n        \"4127\",\n        \"4128\",\n        \"4129\",\n        \"4130\",\n        \"4131\",\n        \"4132\",\n        \"4133\",\n        \"4134\",\n        \"4135\",\n        \"4135\",\n        \"4135\",\n        \"4136\",\n        \"4137\",\n        \"4137\",\n        \"4138\",\n        \"4139\",\n        \"4140\",\n        \"4140\",\n        \"4141\",\n        \"4141\",\n        \"4142\",\n        \"4142\",\n        \"4143\",\n        \"4144\",\n        \"4145\",\n        \"4146\",\n        \"4147\",\n        \"4147\",\n        \"4147\",\n        \"4147\",\n        \"4147\",\n        \"4148\",\n        \"4148\",\n        \"4148\",\n        \"4149\",\n        \"4149\",\n        \"4150\",\n        \"4151\",\n        \"4152\",\n        \"4153\",\n        \"4154\",\n        \"4155\",\n        \"4156\",\n        \"4157\",\n        \"4158\",\n        \"4159\",\n        \"4160\",\n        \"4161\",\n        \"4162\",\n        \"4163\",\n        \"4164\",\n        \"4164\",\n        \"4165\",\n        \"4166\",\n        \"4166\",\n        \"4167\",\n        \"4168\",\n        \"4169\",\n        \"4170\",\n        \"4170\",\n        \"4170\",\n        \"4170\",\n        \"4170\",\n        \"4171\",\n        \"4172\",\n        \"4173\",\n        \"4174\",\n        \"4175\",\n        \"4176\",\n        \"4177\",\n        \"4178\",\n        \"4178\",\n        \"4178\",\n        \"4178\",\n        \"4179\",\n        \"4180\",\n        \"4181\",\n        \"4182\",\n        \"4183\",\n        \"4183\",\n        \"4183\",\n        \"4183\",\n        \"4183\",\n        \"4184\",\n        \"4185\",\n        \"4185\",\n        \"4186\",\n        \"4187\",\n        \"4188\",\n        \"4188\",\n        \"4189\",\n        \"4190\",\n        \"4190\",\n        \"4191\",\n        \"4192\",\n        \"4193\",\n        \"4194\",\n        \"4195\",\n        \"4196\",\n        \"4197\",\n        \"4198\",\n        \"4198\",\n        \"4199\",\n        \"4200\",\n        \"4201\",\n        \"4202\",\n        \"4202\",\n        \"4202\",\n        \"4203\",\n        \"4203\",\n        \"4204\",\n        \"4205\",\n        \"4206\",\n        \"4206\",\n        \"4207\",\n        \"4207\",\n        \"4208\",\n        \"4209\",\n        \"4210\",\n        \"4211\",\n        \"4212\",\n        \"4213\",\n        \"4214\",\n        \"4215\",\n        \"4216\",\n        \"4217\",\n        \"4218\",\n        \"4219\",\n        \"4220\",\n        \"4221\",\n        \"4222\",\n        \"4223\",\n        \"4224\",\n        \"4225\",\n        \"4226\",\n        \"4227\",\n        \"4228\",\n        \"4229\",\n        \"4230\",\n        \"4231\",\n        \"4232\",\n        \"4233\",\n        \"4234\",\n        \"4235\",\n        \"4236\",\n        \"4237\",\n        \"4238\",\n        \"4239\",\n        \"4239\",\n        \"4239\",\n        \"4240\",\n        \"4241\",\n        \"4241\",\n        \"4242\",\n        \"4243\",\n        \"4244\",\n        \"4245\",\n        \"4246\",\n        \"4247\",\n        \"4248\",\n        \"4248\",\n        \"4249\",\n        \"4250\",\n        \"4250\",\n        \"4251\",\n        \"4252\",\n        \"4253\",\n        \"4254\",\n        \"4255\",\n        \"4256\",\n        \"4257\",\n        \"4258\",\n        \"4259\",\n        \"4260\",\n        \"4261\",\n        \"4261\",\n        \"4261\",\n        \"4262\",\n        \"4262\",\n        \"4263\",\n        \"4264\",\n        \"4265\",\n        \"4266\",\n        \"4267\",\n        \"4268\",\n        \"4269\",\n        \"4270\",\n        \"4271\",\n        \"4271\",\n        \"4272\",\n        \"4273\",\n        \"4274\",\n        \"4275\",\n        \"4276\",\n        \"4277\",\n        \"4278\",\n        \"4279\",\n        \"4280\",\n        \"4281\",\n        \"4282\",\n        \"4283\",\n        \"4284\",\n        \"4285\",\n        \"4286\",\n        \"4287\",\n        \"4287\",\n        \"4288\",\n        \"4288\",\n        \"4289\",\n        \"4290\",\n        \"4291\",\n        \"4292\",\n        \"4293\",\n        \"4294\",\n        \"4295\",\n        \"4296\",\n        \"4296\",\n        \"4297\",\n        \"4297\",\n        \"4298\",\n        \"4298\",\n        \"4298\",\n        \"4298\",\n        \"4299\",\n        \"4300\",\n        \"4300\",\n        \"4300\",\n        \"4301\",\n        \"4302\",\n        \"4303\",\n        \"4304\",\n        \"4305\",\n        \"4306\",\n        \"4307\",\n        \"4308\",\n        \"4309\",\n        \"4310\",\n        \"4310\",\n        \"4310\",\n        \"4310\",\n        \"4311\",\n        \"4312\",\n        \"4313\",\n        \"4314\",\n        \"4315\",\n        \"4315\",\n        \"4316\",\n        \"4317\",\n        \"4318\",\n        \"4319\",\n        \"4320\",\n        \"4320\",\n        \"4321\",\n        \"4322\",\n        \"4323\",\n        \"4324\",\n        \"4325\",\n        \"4326\",\n        \"4327\",\n        \"4328\",\n        \"4329\",\n        \"4330\",\n        \"4331\",\n        \"4332\",\n        \"4332\",\n        \"4332\",\n        \"4333\",\n        \"4334\",\n        \"4334\",\n        \"4335\",\n        \"4336\",\n        \"4337\",\n        \"4338\",\n        \"4339\",\n        \"4340\",\n        \"4341\",\n        \"4342\",\n        \"4342\",\n        \"4342\",\n        \"4342\",\n        \"4343\",\n        \"4344\",\n        \"4344\",\n        \"4345\",\n        \"4346\",\n        \"4347\",\n        \"4348\",\n        \"4349\",\n        \"4350\",\n        \"4351\",\n        \"4352\",\n        \"4353\",\n        \"4354\",\n        \"4355\",\n        \"4356\",\n        \"4357\",\n        \"4358\",\n        \"4359\",\n        \"4359\",\n        \"4360\",\n        \"4360\",\n        \"4361\",\n        \"4362\",\n        \"4363\",\n        \"4364\",\n        \"4365\",\n        \"4366\",\n        \"4367\",\n        \"4368\",\n        \"4368\",\n        \"4369\",\n        \"4370\",\n        \"4371\",\n        \"4372\",\n        \"4373\",\n        \"4374\",\n        \"4375\",\n        \"4375\",\n        \"4376\",\n        \"4377\",\n        \"4378\",\n        \"4379\",\n        \"4380\",\n        \"4925\",\n        \"4926\",\n        \"4926\",\n        \"4927\",\n        \"4928\",\n        \"4929\",\n        \"4930\",\n        \"4931\",\n        \"4932\",\n        \"4933\",\n        \"4934\",\n        \"4935\",\n        \"4936\",\n        \"4937\",\n        \"4938\",\n        \"4939\",\n        \"4940\",\n        \"4941\",\n        \"4942\",\n        \"4943\",\n        \"4944\",\n        \"4945\",\n        \"4946\",\n        \"4947\",\n        \"4948\",\n        \"4949\",\n        \"4950\",\n        \"4951\",\n        \"4952\",\n        \"4953\",\n        \"4954\",\n        \"4955\",\n        \"4956\",\n        \"4957\",\n        \"4958\",\n        \"4959\",\n        \"4960\",\n        \"4961\",\n        \"4962\",\n        \"4963\",\n        \"4964\",\n        \"4965\",\n        \"4966\",\n        \"4966\",\n        \"4966\",\n        \"4966\",\n        \"4966\",\n        \"4967\",\n        \"4968\",\n        \"4969\",\n        \"4970\",\n        \"4971\",\n        \"4972\",\n        \"4973\",\n        \"4974\",\n        \"4975\",\n        \"4976\",\n        \"4977\",\n        \"4978\",\n        \"4979\",\n        \"4980\",\n        \"4981\",\n        \"4982\",\n        \"4983\",\n        \"4984\",\n        \"4985\",\n        \"4986\",\n        \"4987\",\n        \"4988\",\n        \"4989\",\n        \"4990\",\n        \"4991\",\n        \"4992\",\n        \"4993\",\n        \"4994\",\n        \"4995\",\n        \"4996\",\n        \"4997\",\n        \"4998\",\n        \"4999\",\n        \"5000\",\n        \"5001\",\n        \"5002\",\n        \"5003\",\n        \"5004\",\n        \"5005\",\n        \"5006\",\n        \"5007\",\n        \"5008\",\n        \"5009\",\n        \"5010\",\n        \"5011\",\n        \"5011\",\n        \"5012\",\n        \"5012\",\n        \"5013\",\n        \"5014\",\n        \"5015\",\n        \"5016\",\n        \"5017\",\n        \"5017\",\n        \"5017\",\n        \"5017\",\n        \"5018\",\n        \"5018\",\n        \"5019\",\n        \"5020\",\n        \"5021\",\n        \"5022\",\n        \"5022\",\n        \"5022\",\n        \"5022\",\n        \"5023\",\n        \"5023\",\n        \"5023\",\n        \"5024\",\n        \"5025\",\n        \"5026\",\n        \"5026\",\n        \"5026\",\n        \"5026\",\n        \"5027\",\n        \"5028\",\n        \"5028\",\n        \"5029\",\n        \"5030\",\n        \"5031\",\n        \"5032\",\n        \"5033\",\n        \"5034\",\n        \"5035\",\n        \"5036\",\n        \"5037\",\n        \"5038\",\n        \"5039\",\n        \"5040\",\n        \"5041\",\n        \"5042\",\n        \"5043\",\n        \"5044\",\n        \"5045\",\n        \"5046\",\n        \"5047\",\n        \"5048\",\n        \"5049\",\n        \"5050\",\n        \"5051\",\n        \"5052\",\n        \"5053\",\n        \"5054\",\n        \"5055\",\n        \"5056\",\n        \"5057\",\n        \"5058\",\n        \"5059\",\n        \"5060\",\n        \"5061\",\n        \"5062\",\n        \"5063\",\n        \"5064\",\n        \"5065\",\n        \"5066\",\n        \"5066\",\n        \"5067\",\n        \"5068\",\n        \"5068\",\n        \"5069\",\n        \"5069\",\n        \"5070\",\n        \"5070\",\n        \"5071\",\n        \"5072\",\n        \"5073\",\n        \"5074\",\n        \"5075\",\n        \"5076\",\n        \"5077\",\n        \"5078\",\n        \"5079\",\n        \"5080\",\n        \"5081\",\n        \"5081\",\n        \"5082\",\n        \"5082\",\n        \"5083\",\n        \"5083\",\n        \"5084\",\n        \"5084\",\n        \"5084\",\n        \"5085\",\n        \"5085\",\n        \"5086\",\n        \"5087\",\n        \"5088\",\n        \"5089\",\n        \"5090\",\n        \"5091\",\n        \"5092\",\n        \"5093\",\n        \"5094\",\n        \"5095\",\n        \"5096\",\n        \"5097\",\n        \"5098\",\n        \"5099\",\n        \"5100\",\n        \"5101\",\n        \"5102\",\n        \"5103\",\n        \"5104\",\n        \"5105\",\n        \"5106\",\n        \"5107\",\n        \"5108\",\n        \"5109\",\n        \"5110\",\n        \"5111\",\n        \"5112\",\n        \"5112\",\n        \"5113\",\n        \"5113\",\n        \"5114\",\n        \"5115\",\n        \"5116\",\n        \"5117\",\n        \"5118\",\n        \"5119\",\n        \"5120\",\n        \"5121\",\n        \"5122\",\n        \"5123\",\n        \"5124\",\n        \"5125\",\n        \"5126\",\n        \"5127\",\n        \"5128\",\n        \"5129\",\n        \"5130\",\n        \"5131\",\n        \"5132\",\n        \"5133\",\n        \"5134\",\n        \"5135\",\n        \"5136\",\n        \"5137\",\n        \"5138\",\n        \"5138\",\n        \"5139\",\n        \"5140\",\n        \"5141\",\n        \"5142\",\n        \"5143\",\n        \"5144\",\n        \"5145\",\n        \"5146\",\n        \"5146\",\n        \"5147\",\n        \"5148\",\n        \"5149\",\n        \"5150\",\n        \"5151\",\n        \"5152\",\n        \"5153\",\n        \"5154\",\n        \"5155\",\n        \"5156\",\n        \"5157\",\n        \"5158\",\n        \"5159\",\n        \"5159\",\n        \"5160\",\n        \"5161\",\n        \"5162\",\n        \"5163\",\n        \"5164\",\n        \"5165\",\n        \"5166\",\n        \"5167\",\n        \"5168\",\n        \"5168\",\n        \"5169\",\n        \"5169\",\n        \"5170\",\n        \"5170\",\n        \"5171\",\n        \"5172\",\n        \"5172\",\n        \"5173\",\n        \"5174\",\n        \"5175\",\n        \"5176\",\n        \"5177\",\n        \"5178\",\n        \"5179\",\n        \"5180\",\n        \"5181\",\n        \"5182\",\n        \"5183\",\n        \"5184\",\n        \"5185\",\n        \"5186\",\n        \"5187\",\n        \"5188\",\n        \"5189\",\n        \"5189\",\n        \"5190\",\n        \"5191\",\n        \"5192\",\n        \"5193\",\n        \"5194\",\n        \"5195\",\n        \"5196\",\n        \"5196\",\n        \"5197\",\n        \"5198\",\n        \"5199\",\n        \"5200\",\n        \"5201\",\n        \"5202\",\n        \"5203\",\n        \"5204\",\n        \"5205\",\n        \"5205\",\n        \"5206\",\n        \"5207\",\n        \"5208\",\n        \"5209\",\n        \"5210\",\n        \"5211\",\n        \"5212\",\n        \"5213\",\n        \"5214\",\n        \"5215\",\n        \"5216\",\n        \"5217\",\n        \"5218\",\n        \"5219\",\n        \"5220\",\n        \"5221\",\n        \"5222\",\n        \"5223\",\n        \"5224\",\n        \"5225\",\n        \"5226\",\n        \"5227\",\n        \"5228\",\n        \"5229\",\n        \"5229\",\n        \"5230\",\n        \"5231\",\n        \"5232\",\n        \"5233\",\n        \"5234\",\n        \"5235\",\n        \"5236\",\n        \"5237\",\n        \"5238\",\n        \"5239\",\n        \"5240\",\n        \"5241\",\n        \"5242\",\n        \"5243\",\n        \"5244\",\n        \"5245\",\n        \"5246\",\n        \"5247\",\n        \"5248\",\n        \"5249\",\n        \"5250\",\n        \"5251\",\n        \"5252\",\n        \"5253\",\n        \"5254\",\n        \"5255\",\n        \"5256\",\n        \"5257\",\n        \"5258\",\n        \"5259\",\n        \"5260\",\n        \"5261\",\n        \"5262\",\n        \"5263\",\n        \"5264\",\n        \"5264\",\n        \"5265\",\n        \"5266\",\n        \"5267\",\n        \"5268\",\n        \"5269\",\n        \"5270\",\n        \"5271\",\n        \"5272\",\n        \"5273\",\n        \"5274\",\n        \"5275\",\n        \"5276\",\n        \"5277\",\n        \"5278\",\n        \"5279\",\n        \"5280\",\n        \"5281\",\n        \"5282\",\n        \"5283\",\n        \"5284\",\n        \"5285\",\n        \"5286\",\n        \"5287\",\n        \"5288\",\n        \"5289\",\n        \"5290\",\n        \"5291\",\n        \"5291\",\n        \"5292\",\n        \"5293\",\n        \"5294\",\n        \"5295\",\n        \"5296\",\n        \"5296\",\n        \"5297\",\n        \"5298\",\n        \"5299\",\n        \"5300\",\n        \"5301\",\n        \"5301\",\n        \"5302\",\n        \"5303\",\n        \"5304\",\n        \"5305\",\n        \"5306\",\n        \"5307\",\n        \"5308\",\n        \"5309\",\n        \"5310\",\n        \"5311\",\n        \"5312\",\n        \"5313\",\n        \"5314\",\n        \"5315\",\n        \"5316\",\n        \"5317\",\n        \"5318\",\n        \"5319\",\n        \"5320\",\n        \"5321\",\n        \"5322\",\n        \"5323\",\n        \"5324\",\n        \"5325\",\n        \"5325\",\n        \"5326\",\n        \"5327\",\n        \"5328\",\n        \"5329\",\n        \"5330\",\n        \"5331\",\n        \"5332\",\n        \"5333\",\n        \"5334\",\n        \"5335\",\n        \"5336\",\n        \"5337\",\n        \"5338\",\n        \"5339\",\n        \"5339\",\n        \"5340\",\n        \"5341\",\n        \"5342\",\n        \"5343\",\n        \"5344\",\n        \"5345\",\n        \"5345\",\n        \"5346\",\n        \"5347\",\n        \"5348\",\n        \"5349\",\n        \"5350\",\n        \"5351\",\n        \"5352\",\n        \"5353\",\n        \"5354\",\n        \"5355\",\n        \"5356\",\n        \"5357\",\n        \"5358\",\n        \"5359\",\n        \"5360\",\n        \"5361\",\n        \"5362\",\n        \"5363\",\n        \"5364\",\n        \"5364\",\n        \"5365\",\n        \"5366\",\n        \"5367\",\n        \"5367\",\n        \"5368\",\n        \"5368\",\n        \"5369\",\n        \"5370\",\n        \"5371\",\n        \"5371\",\n        \"5372\",\n        \"5373\",\n        \"5374\",\n        \"5375\",\n        \"5376\",\n        \"5377\",\n        \"5378\",\n        \"5379\",\n        \"5380\",\n        \"5381\",\n        \"5381\",\n        \"5382\",\n        \"5382\",\n        \"5383\",\n        \"5384\",\n        \"5385\",\n        \"5386\",\n        \"5387\",\n        \"5388\",\n        \"5389\",\n        \"5389\",\n        \"5390\",\n        \"5391\",\n        \"5392\",\n        \"5393\",\n        \"5394\",\n        \"5395\",\n        \"5396\",\n        \"5397\",\n        \"5398\",\n        \"5399\",\n        \"5400\",\n        \"5401\",\n        \"5401\",\n        \"5402\",\n        \"5403\",\n        \"5403\",\n        \"5404\",\n        \"5404\",\n        \"5405\",\n        \"5406\",\n        \"5407\",\n        \"5408\",\n        \"5409\",\n        \"5410\",\n        \"5411\",\n        \"5412\",\n        \"5413\",\n        \"5414\",\n        \"5415\",\n        \"5416\",\n        \"5417\",\n        \"5418\",\n        \"5419\",\n        \"5420\",\n        \"5421\",\n        \"5422\",\n        \"5423\",\n        \"5424\",\n        \"5424\",\n        \"5424\",\n        \"5425\",\n        \"5426\",\n        \"5426\",\n        \"5427\",\n        \"5427\",\n        \"5428\",\n        \"5429\",\n        \"5430\",\n        \"5431\",\n        \"5432\",\n        \"5433\",\n        \"5433\",\n        \"5433\",\n        \"5434\",\n        \"5435\",\n        \"5436\",\n        \"5437\",\n        \"5437\",\n        \"5437\",\n        \"5438\",\n        \"5439\",\n        \"5440\",\n        \"5441\",\n        \"5442\",\n        \"5443\",\n        \"5444\",\n        \"5445\",\n        \"5446\",\n        \"5447\",\n        \"5448\",\n        \"5449\",\n        \"5450\",\n        \"5451\",\n        \"5452\",\n        \"5453\",\n        \"5454\",\n        \"5455\",\n        \"5456\",\n        \"5456\",\n        \"5457\",\n        \"5458\",\n        \"5459\",\n        \"5460\",\n        \"5461\",\n        \"5462\",\n        \"5463\",\n        \"5464\",\n        \"5465\",\n        \"5466\",\n        \"5467\",\n        \"5467\",\n        \"5468\",\n        \"5469\",\n        \"5469\",\n        \"5470\",\n        \"5472\",\n        \"5473\",\n        \"5474\",\n        \"5475\",\n        \"5476\",\n        \"5477\",\n        \"5478\",\n        \"5479\",\n        \"5479\",\n        \"5481\",\n        \"5482\",\n        \"5483\",\n        \"5484\",\n        \"5485\",\n        \"5486\",\n        \"5487\",\n        \"5488\",\n        \"5489\",\n        \"5490\",\n        \"5491\",\n        \"5492\",\n        \"5493\",\n        \"5494\",\n        \"5495\",\n        \"5496\",\n        \"5497\",\n        \"5498\",\n        \"5499\",\n        \"5500\",\n        \"5501\",\n        \"5502\",\n        \"5503\",\n        \"5504\",\n        \"5505\",\n        \"5506\",\n        \"5507\",\n        \"5508\",\n        \"5509\",\n        \"5510\",\n        \"5511\",\n        \"5512\",\n        \"5513\",\n        \"5514\",\n        \"5515\",\n        \"5516\",\n        \"5517\",\n        \"5518\",\n        \"5519\",\n        \"5520\",\n        \"5521\",\n        \"5522\",\n        \"5523\",\n        \"5524\",\n        \"5525\",\n        \"5526\",\n        \"5527\",\n        \"5528\",\n        \"5529\",\n        \"5530\",\n        \"5531\",\n        \"5531\",\n        \"5532\",\n        \"5533\",\n        \"5534\",\n        \"5535\",\n        \"5536\",\n        \"5537\",\n        \"5538\",\n        \"5539\",\n        \"5540\",\n        \"5541\",\n        \"5542\",\n        \"5543\",\n        \"5544\",\n        \"5546\",\n        \"5547\",\n        \"5548\",\n        \"5549\",\n        \"5550\",\n        \"5551\",\n        \"5552\",\n        \"5553\",\n        \"5554\",\n        \"5555\",\n        \"5556\",\n        \"5557\",\n        \"5558\",\n        \"5559\",\n        \"5560\",\n        \"5561\",\n        \"5562\",\n        \"5563\",\n        \"5564\",\n        \"5565\",\n        \"5566\",\n        \"5567\",\n        \"5568\",\n        \"5569\",\n        \"5570\",\n        \"5571\",\n        \"5572\",\n        \"5573\",\n        \"5574\",\n        \"5575\",\n        \"5577\",\n        \"5578\",\n        \"5579\",\n        \"5580\",\n        \"5581\",\n        \"5582\",\n        \"5583\",\n        \"5584\",\n        \"5585\",\n        \"5586\",\n        \"5587\",\n        \"5588\",\n        \"5589\",\n        \"5590\",\n        \"5591\",\n        \"5592\",\n        \"5593\",\n        \"5595\",\n        \"5596\",\n        \"5597\",\n        \"5598\",\n        \"5599\",\n        \"5600\",\n        \"5601\",\n        \"5602\",\n        \"5603\",\n        \"5604\",\n        \"5605\",\n        \"5606\",\n        \"5607\",\n        \"5608\",\n        \"5609\",\n        \"5610\",\n        \"5611\",\n        \"5612\",\n        \"5613\",\n        \"5614\",\n        \"5615\",\n        \"5616\",\n        \"5617\",\n        \"5618\",\n        \"5619\",\n        \"5620\",\n        \"5621\",\n        \"5622\",\n        \"5623\",\n        \"5624\",\n        \"5625\",\n        \"5626\",\n        \"5627\",\n        \"5628\",\n        \"5628\",\n        \"5629\",\n        \"5630\",\n        \"5631\",\n        \"5632\",\n        \"5633\",\n        \"5634\",\n        \"5635\",\n        \"5636\",\n        \"5637\",\n        \"5638\",\n        \"5639\",\n        \"5640\",\n        \"5641\",\n        \"5642\",\n        \"5643\",\n        \"5644\",\n        \"5645\",\n        \"5646\",\n        \"5647\",\n        \"5648\",\n        \"5649\",\n        \"5650\",\n        \"5651\",\n        \"5652\",\n        \"5653\",\n        \"5654\",\n        \"5655\",\n        \"5656\",\n        \"5657\",\n        \"5658\",\n        \"5659\",\n        \"5660\",\n        \"5661\",\n        \"5662\",\n        \"5663\",\n        \"5664\",\n        \"5665\",\n        \"5666\",\n        \"5667\",\n        \"5668\",\n        \"5669\",\n        \"5670\",\n        \"5671\",\n        \"5672\",\n        \"5673\",\n        \"5674\",\n        \"5675\",\n        \"5676\",\n        \"5677\",\n        \"5678\",\n        \"5679\",\n        \"5680\",\n        \"5681\",\n        \"5682\",\n        \"5682\",\n        \"5683\",\n        \"5684\",\n        \"5685\",\n        \"5686\",\n        \"5687\",\n        \"5688\",\n        \"5689\",\n        \"5690\",\n        \"5691\",\n        \"5692\",\n        \"5693\",\n        \"5694\",\n        \"5695\",\n        \"5696\",\n        \"5697\",\n        \"5698\",\n        \"5699\",\n        \"5700\",\n        \"5702\",\n        \"5703\",\n        \"5704\",\n        \"5705\",\n        \"5706\",\n        \"5708\",\n        \"5709\",\n        \"5710\",\n        \"5711\",\n        \"5712\",\n        \"5713\",\n        \"5714\",\n        \"5715\",\n        \"5716\",\n        \"5717\",\n        \"5718\",\n        \"5719\",\n        \"5720\",\n        \"5721\",\n        \"5722\",\n        \"5722\",\n        \"5722\",\n        \"5723\",\n        \"5724\",\n        \"5725\",\n        \"5726\",\n        \"5727\",\n        \"5728\",\n        \"5729\",\n        \"5730\",\n        \"5731\",\n        \"5732\",\n        \"5733\",\n        \"5734\",\n        \"5735\",\n        \"5736\",\n        \"5737\",\n        \"5738\",\n        \"5739\",\n        \"5740\",\n        \"5741\",\n        \"5742\",\n        \"5743\",\n        \"5744\",\n        \"5745\",\n        \"5746\",\n        \"5747\",\n        \"5748\",\n        \"5750\",\n        \"5751\",\n        \"5752\",\n        \"5753\",\n        \"5754\",\n        \"5755\",\n        \"5756\",\n        \"5757\",\n        \"5758\",\n        \"5759\",\n        \"5760\",\n        \"5761\",\n        \"5762\",\n        \"5763\",\n        \"5764\",\n        \"5765\",\n        \"5766\",\n        \"5767\",\n        \"5768\",\n        \"5769\",\n        \"5769\",\n        \"5770\",\n        \"5771\",\n        \"5772\",\n        \"5773\",\n        \"5774\",\n        \"5775\",\n        \"5776\",\n        \"5777\",\n        \"5778\",\n        \"5779\",\n        \"5780\",\n        \"5781\",\n        \"5782\",\n        \"5783\",\n        \"5784\",\n        \"5785\",\n        \"5786\",\n        \"5787\",\n        \"5788\",\n        \"5789\",\n        \"5790\",\n        \"5791\",\n        \"5792\",\n        \"5793\",\n        \"5794\",\n        \"5795\",\n        \"5796\",\n        \"5797\",\n        \"5798\",\n        \"5801\",\n        \"5802\",\n        \"5803\",\n        \"5804\",\n        \"5805\",\n        \"5806\",\n        \"5807\",\n        \"5808\",\n        \"5809\",\n        \"5810\",\n        \"5811\",\n        \"5812\",\n        \"5813\",\n        \"5814\",\n        \"5815\",\n        \"5816\",\n        \"5818\",\n        \"5820\",\n        \"5821\",\n        \"5824\",\n        \"5825\",\n        \"5826\",\n        \"5827\",\n        \"5828\",\n        \"5829\",\n        \"5830\",\n        \"5831\",\n        \"5832\",\n        \"5832\",\n        \"5833\",\n        \"5834\",\n        \"5836\",\n        \"5838\",\n        \"5839\",\n        \"5841\",\n        \"5842\",\n        \"5848\",\n        \"5849\",\n        \"5850\",\n        \"5852\",\n        \"5853\",\n        \"5854\",\n        \"5855\",\n        \"5856\",\n        \"5857\",\n        \"5858\",\n        \"5859\",\n        \"5860\",\n        \"5861\",\n        \"5862\",\n        \"5863\",\n        \"5864\",\n        \"5865\",\n        \"5866\",\n        \"5867\",\n        \"5869\",\n        \"5870\",\n        \"5871\",\n        \"5872\",\n        \"5873\",\n        \"5874\",\n        \"5875\",\n        \"5876\",\n        \"5879\",\n        \"5880\",\n        \"5882\",\n        \"5883\",\n        \"5884\",\n        \"5885\",\n        \"5886\",\n        \"5888\",\n        \"5896\",\n        \"5899\",\n        \"5905\",\n        \"5909\",\n        \"5909\",\n        \"5916\",\n        \"5919\",\n        \"5921\",\n        \"5922\",\n        \"5923\",\n        \"5924\",\n        \"5948\",\n        \"5974\"\n    ],\n    \"productList\": [\n        122,\n        122,\n        77,\n        171,\n        372,\n        372,\n        162,\n        104,\n        85,\n        322,\n        340,\n        371,\n        372,\n        86,\n        140,\n        122,\n        77,\n        163,\n        372,\n        372,\n        122,\n        86,\n        104,\n        122,\n        190,\n        232,\n        85,\n        162,\n        122,\n        372,\n        162,\n        77,\n        171,\n        85,\n        372,\n        372,\n        179,\n        331,\n        372,\n        372,\n        121,\n        373,\n        373,\n        122,\n        122,\n        163,\n        372,\n        371,\n        192,\n        372,\n        372,\n        372,\n        372,\n        104,\n        372,\n        372,\n        122,\n        86,\n        190,\n        190,\n        122,\n        372,\n        372,\n        372,\n        372,\n        104,\n        105,\n        191,\n        372,\n        77,\n        162,\n        122,\n        122,\n        77,\n        179,\n        403,\n        74,\n        74,\n        77,\n        161,\n        279,\n        384,\n        488,\n        372,\n        372,\n        104,\n        162,\n        372,\n        372,\n        162,\n        373,\n        372,\n        85,\n        104,\n        104,\n        190,\n        373,\n        77,\n        161,\n        122,\n        72,\n        147,\n        77,\n        162,\n        372,\n        372,\n        86,\n        162,\n        86,\n        372,\n        122,\n        85,\n        122,\n        188,\n        86,\n        104,\n        171,\n        14,\n        78,\n        92,\n        106,\n        164,\n        192,\n        374,\n        85,\n        192,\n        122,\n        122,\n        373,\n        86,\n        122,\n        372,\n        179,\n        140,\n        4,\n        77,\n        189,\n        85,\n        372,\n        77,\n        122,\n        85,\n        373,\n        372,\n        101,\n        160,\n        209,\n        122,\n        372,\n        122,\n        122,\n        372,\n        373,\n        179,\n        122,\n        122,\n        77,\n        189,\n        85,\n        372,\n        122,\n        85,\n        122,\n        190,\n        104,\n        121,\n        122,\n        105,\n        121,\n        371,\n        372,\n        91,\n        74,\n        226,\n        85,\n        104,\n        85,\n        132,\n        85,\n        104,\n        179,\n        104,\n        162,\n        122,\n        122,\n        104,\n        132,\n        120,\n        92,\n        372,\n        122,\n        372,\n        77,\n        121,\n        372,\n        372,\n        171,\n        85,\n        373,\n        372,\n        121,\n        104,\n        373,\n        2,\n        162,\n        140,\n        103,\n        122,\n        122,\n        122,\n        371,\n        77,\n        371,\n        373,\n        372,\n        122,\n        77,\n        122,\n        121,\n        164,\n        192,\n        122,\n        372,\n        122,\n        372,\n        122,\n        122,\n        85,\n        91,\n        191,\n        373,\n        121,\n        179,\n        403,\n        232,\n        122,\n        372,\n        372,\n        122,\n        122,\n        122,\n        132,\n        373,\n        106,\n        72,\n        147,\n        372,\n        372,\n        331,\n        382,\n        372,\n        85,\n        372,\n        77,\n        85,\n        372,\n        77,\n        372,\n        122,\n        372,\n        5,\n        31,\n        101,\n        159,\n        77,\n        190,\n        122,\n        232,\n        372,\n        77,\n        162,\n        372,\n        85,\n        162,\n        122,\n        132,\n        132,\n        104,\n        371,\n        372,\n        331,\n        122,\n        132,\n        72,\n        147,\n        372,\n        122,\n        372,\n        122,\n        372,\n        85,\n        74,\n        104,\n        122,\n        140,\n        190,\n        162,\n        104,\n        171,\n        32,\n        103,\n        162,\n        372,\n        122,\n        122,\n        122,\n        122,\n        373,\n        85,\n        102,\n        170,\n        189,\n        371,\n        372,\n        122,\n        162,\n        162,\n        187,\n        104,\n        372,\n        164,\n        192,\n        122,\n        46,\n        281,\n        171,\n        372,\n        373,\n        122,\n        122,\n        189,\n        104,\n        162,\n        85,\n        77,\n        373,\n        372,\n        85,\n        122,\n        122,\n        121,\n        78,\n        92,\n        106,\n        372,\n        372,\n        161,\n        189,\n        188,\n        140,\n        172,\n        171,\n        122,\n        104,\n        372,\n        35,\n        230,\n        86,\n        86,\n        122,\n        85,\n        121,\n        372,\n        122,\n        122,\n        372,\n        170,\n        77,\n        110,\n        169,\n        162,\n        77,\n        85,\n        372,\n        85,\n        372,\n        372,\n        372,\n        122,\n        122,\n        77,\n        162,\n        162,\n        86,\n        140,\n        372,\n        372,\n        372,\n        104,\n        162,\n        372,\n        104,\n        171,\n        85,\n        85,\n        85,\n        372,\n        85,\n        122,\n        122,\n        372,\n        372,\n        372,\n        104,\n        122,\n        75,\n        77,\n        171,\n        372,\n        103,\n        122,\n        372,\n        74,\n        101,\n        179,\n        205,\n        228,\n        85,\n        372,\n        122,\n        171,\n        122,\n        122,\n        372,\n        122,\n        373,\n        372,\n        85,\n        122,\n        372,\n        121,\n        372,\n        372,\n        122,\n        77,\n        121,\n        372,\n        85,\n        372,\n        104,\n        373,\n        372,\n        75,\n        101,\n        119,\n        310,\n        122,\n        122,\n        122,\n        122,\n        31,\n        77,\n        190,\n        232,\n        373,\n        122,\n        122,\n        372,\n        122,\n        372,\n        121,\n        132,\n        89,\n        268,\n        122,\n        104,\n        47,\n        122,\n        77,\n        230,\n        290,\n        85,\n        372,\n        372,\n        122,\n        104,\n        372,\n        244,\n        104,\n        122,\n        372,\n        32,\n        122,\n        373,\n        122,\n        74,\n        171,\n        32,\n        354,\n        122,\n        132,\n        87,\n        122,\n        371,\n        85,\n        104,\n        372,\n        171,\n        85,\n        190,\n        121,\n        372,\n        122,\n        104,\n        122,\n        190,\n        122,\n        372,\n        122,\n        77,\n        72,\n        120,\n        244,\n        162,\n        122,\n        171,\n        372,\n        372,\n        372,\n        372,\n        372,\n        35,\n        147,\n        205,\n        372,\n        104,\n        32,\n        104,\n        162,\n        372,\n        373,\n        372,\n        86,\n        104,\n        122,\n        171,\n        190,\n        232,\n        372,\n        372,\n        74,\n        122,\n        122,\n        122,\n        244,\n        372,\n        372,\n        122,\n        122,\n        122,\n        104,\n        122,\n        72,\n        179,\n        122,\n        372,\n        86,\n        104,\n        122,\n        372,\n        78,\n        164,\n        236,\n        170,\n        190,\n        372,\n        86,\n        162,\n        122,\n        77,\n        371,\n        85,\n        372,\n        104,\n        372,\n        372,\n        179,\n        403,\n        125,\n        194,\n        464,\n        480,\n        488,\n        85,\n        85,\n        122,\n        171,\n        372,\n        372,\n        373,\n        122,\n        410,\n        162,\n        373,\n        372,\n        86,\n        372,\n        171,\n        122,\n        122,\n        85,\n        373,\n        122,\n        121,\n        278,\n        290,\n        331,\n        352,\n        382,\n        488,\n        140,\n        232,\n        140,\n        354,\n        104,\n        4,\n        47,\n        77,\n        161,\n        190,\n        122,\n        372,\n        122,\n        104,\n        232,\n        372,\n        121,\n        372,\n        269,\n        171,\n        256,\n        372,\n        372,\n        75,\n        101,\n        119,\n        304,\n        122,\n        373,\n        122,\n        372,\n        4,\n        31,\n        47,\n        72,\n        110,\n        140,\n        162,\n        179,\n        228,\n        403,\n        122,\n        372,\n        171,\n        122,\n        372,\n        85,\n        372,\n        91,\n        179,\n        132,\n        372,\n        132,\n        77,\n        372,\n        103,\n        193,\n        140,\n        190,\n        122,\n        122,\n        372,\n        373,\n        172,\n        372,\n        372,\n        122,\n        179,\n        122,\n        122,\n        132,\n        372,\n        104,\n        122,\n        122,\n        371,\n        371,\n        104,\n        179,\n        372,\n        171,\n        140,\n        121,\n        205,\n        228,\n        162,\n        122,\n        85,\n        162,\n        3,\n        74,\n        372,\n        85,\n        122,\n        85,\n        85,\n        372,\n        103,\n        122,\n        105,\n        122,\n        372,\n        85,\n        372,\n        161,\n        162,\n        189,\n        77,\n        162,\n        372,\n        121,\n        101,\n        122,\n        87,\n        72,\n        147,\n        122,\n        122,\n        187,\n        192,\n        372,\n        372,\n        122,\n        122,\n        35,\n        72,\n        230,\n        373,\n        372,\n        171,\n        372,\n        372,\n        122,\n        372,\n        122,\n        122,\n        373,\n        373,\n        104,\n        122,\n        372,\n        122,\n        372,\n        122,\n        87,\n        122,\n        372,\n        171,\n        122,\n        85,\n        122,\n        85,\n        122,\n        372,\n        371,\n        373,\n        122,\n        372,\n        85,\n        122,\n        75,\n        372,\n        140,\n        104,\n        162,\n        122,\n        372,\n        122,\n        121,\n        372,\n        47,\n        85,\n        122,\n        244,\n        403,\n        479,\n        372,\n        372,\n        104,\n        372,\n        373,\n        121,\n        31,\n        86,\n        372,\n        122,\n        122,\n        232,\n        122,\n        32,\n        104,\n        132,\n        373,\n        85,\n        77,\n        162,\n        171,\n        372,\n        230,\n        122,\n        372,\n        103,\n        104,\n        232,\n        147,\n        122,\n        122,\n        410,\n        372,\n        372,\n        77,\n        372,\n        74,\n        163,\n        122,\n        101,\n        159,\n        372,\n        171,\n        373,\n        122,\n        122,\n        122,\n        122,\n        373,\n        75,\n        132,\n        122,\n        31,\n        140,\n        372,\n        104,\n        171,\n        122,\n        372,\n        122,\n        104,\n        122,\n        122,\n        372,\n        122,\n        77,\n        86,\n        103,\n        122,\n        171,\n        281,\n        179,\n        403,\n        121,\n        122,\n        121,\n        372,\n        85,\n        103,\n        179,\n        232,\n        104,\n        85,\n        74,\n        72,\n        372,\n        122,\n        373,\n        190,\n        132,\n        280,\n        86,\n        104,\n        122,\n        104,\n        122,\n        372,\n        372,\n        162,\n        372,\n        372,\n        104,\n        372,\n        77,\n        192,\n        104,\n        86,\n        91,\n        122,\n        372,\n        104,\n        162,\n        372,\n        171,\n        47,\n        72,\n        169,\n        280,\n        85,\n        162,\n        85,\n        373,\n        121,\n        161,\n        189,\n        371,\n        87,\n        104,\n        85,\n        140,\n        122,\n        179,\n        122,\n        372,\n        122,\n        372,\n        86,\n        372,\n        85,\n        372,\n        372,\n        372,\n        122,\n        372,\n        370,\n        122,\n        85,\n        371,\n        179,\n        171,\n        373,\n        122,\n        122,\n        372,\n        171,\n        373,\n        122,\n        372,\n        372,\n        372,\n        122,\n        77,\n        190,\n        85,\n        171,\n        171,\n        121,\n        122,\n        190,\n        105,\n        122,\n        372,\n        372,\n        122,\n        122,\n        122,\n        372,\n        179,\n        110,\n        190,\n        122,\n        373,\n        373,\n        122,\n        122,\n        122,\n        372,\n        372,\n        372,\n        122,\n        85,\n        372,\n        77,\n        140,\n        171,\n        372,\n        122,\n        122,\n        372,\n        122,\n        122,\n        149,\n        110,\n        121,\n        232,\n        85,\n        86,\n        122,\n        372,\n        77,\n        372,\n        78,\n        92,\n        106,\n        371,\n        372,\n        372,\n        373,\n        373,\n        372,\n        192,\n        403,\n        85,\n        254,\n        266,\n        290,\n        339,\n        122,\n        371,\n        373,\n        122,\n        132,\n        122,\n        372,\n        120,\n        122,\n        171,\n        373,\n        122,\n        122,\n        121,\n        161,\n        372,\n        122,\n        372,\n        86,\n        122,\n        372,\n        122,\n        106,\n        123,\n        77,\n        74,\n        103,\n        140,\n        187,\n        232,\n        122,\n        372,\n        373,\n        122,\n        122,\n        372,\n        121,\n        140,\n        170,\n        122,\n        372,\n        373,\n        373,\n        372,\n        162,\n        373,\n        104,\n        21,\n        31,\n        45,\n        103,\n        122,\n        161,\n        189,\n        232,\n        371,\n        372,\n        85,\n        85,\n        122,\n        5,\n        74,\n        101,\n        122,\n        372,\n        122,\n        372,\n        104,\n        179,\n        122,\n        372,\n        104,\n        121,\n        280,\n        122,\n        122,\n        122,\n        122,\n        162,\n        372,\n        372,\n        85,\n        122,\n        232,\n        86,\n        104,\n        122,\n        77,\n        171,\n        372,\n        122,\n        373,\n        122,\n        372,\n        372,\n        109,\n        119,\n        304,\n        369,\n        104,\n        122,\n        2,\n        21,\n        102,\n        119,\n        147,\n        187,\n        307,\n        147,\n        372,\n        122,\n        121,\n        104,\n        372,\n        121,\n        372,\n        209,\n        92,\n        122,\n        373,\n        171,\n        122,\n        372,\n        122,\n        85,\n        372,\n        122,\n        372,\n        122,\n        103,\n        122,\n        373,\n        74,\n        140,\n        179,\n        340,\n        372,\n        122,\n        122,\n        121,\n        121,\n        253,\n        373,\n        372,\n        133,\n        232,\n        122,\n        122,\n        121,\n        372,\n        373,\n        101,\n        132,\n        132,\n        122,\n        370,\n        372,\n        77,\n        75,\n        101,\n        85,\n        122,\n        122,\n        120,\n        13,\n        290,\n        322,\n        353,\n        488,\n        103,\n        180,\n        190,\n        403,\n        373,\n        104,\n        403,\n        132,\n        372,\n        85,\n        122,\n        372,\n        372,\n        372,\n        85,\n        85,\n        121,\n        122,\n        372,\n        163,\n        122,\n        161,\n        189,\n        85,\n        104,\n        85,\n        372,\n        373,\n        85,\n        86,\n        121,\n        371,\n        372,\n        121,\n        45,\n        121,\n        161,\n        189,\n        371,\n        122,\n        74,\n        104,\n        122,\n        140,\n        190,\n        109,\n        132,\n        122,\n        121,\n        122,\n        372,\n        86,\n        77,\n        122,\n        372,\n        140,\n        103,\n        122,\n        132,\n        162,\n        162,\n        307,\n        372,\n        106,\n        373,\n        72,\n        219,\n        230,\n        122,\n        372,\n        122,\n        372,\n        372,\n        85,\n        105,\n        191,\n        77,\n        122,\n        373,\n        132,\n        85,\n        122,\n        87,\n        122,\n        171,\n        77,\n        85,\n        122,\n        77,\n        372,\n        372,\n        373,\n        120,\n        132,\n        132,\n        193,\n        75,\n        132,\n        122,\n        372,\n        372,\n        122,\n        372,\n        232,\n        179,\n        162,\n        190,\n        373,\n        372,\n        122,\n        372,\n        372,\n        104,\n        103,\n        373,\n        290,\n        77,\n        122,\n        372,\n        85,\n        104,\n        372,\n        122,\n        372,\n        85,\n        122,\n        373,\n        77,\n        104,\n        171,\n        103,\n        372,\n        104,\n        372,\n        162,\n        85,\n        372,\n        121,\n        31,\n        171,\n        122,\n        35,\n        205,\n        230,\n        122,\n        87,\n        372,\n        372,\n        372,\n        372,\n        91,\n        373,\n        372,\n        104,\n        162,\n        85,\n        372,\n        121,\n        85,\n        372,\n        122,\n        122,\n        372,\n        372,\n        47,\n        372,\n        372,\n        122,\n        162,\n        310,\n        372,\n        122,\n        122,\n        122,\n        122,\n        104,\n        403,\n        372,\n        105,\n        410,\n        121,\n        171,\n        122,\n        121,\n        140,\n        85,\n        105,\n        122,\n        122,\n        77,\n        162,\n        106,\n        104,\n        77,\n        179,\n        372,\n        372,\n        179,\n        85,\n        170,\n        171,\n        372,\n        92,\n        372,\n        140,\n        383,\n        122,\n        86,\n        122,\n        372,\n        122,\n        85,\n        331,\n        371,\n        170,\n        179,\n        403,\n        372,\n        122,\n        179,\n        372,\n        190,\n        122,\n        122,\n        77,\n        373,\n        35,\n        230,\n        190,\n        372,\n        3,\n        74,\n        122,\n        226,\n        122,\n        171,\n        75,\n        132,\n        122,\n        75,\n        77,\n        372,\n        85,\n        104,\n        371,\n        85,\n        85,\n        122,\n        371,\n        162,\n        105,\n        373,\n        77,\n        162,\n        104,\n        190,\n        371,\n        372,\n        191,\n        372,\n        372,\n        162,\n        372,\n        372,\n        172,\n        372,\n        373,\n        122,\n        122,\n        85,\n        104,\n        162,\n        122,\n        122,\n        132,\n        372,\n        3,\n        35,\n        38,\n        46,\n        50,\n        132,\n        122,\n        104,\n        162,\n        85,\n        171,\n        104,\n        162,\n        372,\n        226,\n        122,\n        372,\n        372,\n        122,\n        85,\n        85,\n        122,\n        372,\n        120,\n        122,\n        122,\n        122,\n        104,\n        122,\n        255,\n        372,\n        255,\n        289,\n        280,\n        371,\n        104,\n        122,\n        122,\n        105,\n        121,\n        372,\n        372,\n        122,\n        121,\n        373,\n        372,\n        122,\n        372,\n        77,\n        122,\n        372,\n        121,\n        77,\n        104,\n        122,\n        372,\n        122,\n        78,\n        122,\n        372,\n        372,\n        372,\n        85,\n        122,\n        373,\n        31,\n        104,\n        85,\n        372,\n        372,\n        372,\n        372,\n        162,\n        77,\n        370,\n        372,\n        187,\n        209,\n        232,\n        180,\n        192,\n        122,\n        72,\n        133,\n        147,\n        168,\n        35,\n        301,\n        366,\n        162,\n        77,\n        189,\n        162,\n        121,\n        122,\n        122,\n        372,\n        122,\n        122,\n        122,\n        373,\n        121,\n        372,\n        101,\n        122,\n        140,\n        104,\n        85,\n        372,\n        14,\n        106,\n        164,\n        45,\n        72,\n        121,\n        230,\n        89,\n        372,\n        132,\n        77,\n        122,\n        372,\n        85,\n        372,\n        372,\n        122,\n        77,\n        104,\n        372,\n        109,\n        119,\n        85,\n        74,\n        104,\n        122,\n        140,\n        179,\n        189,\n        373,\n        77,\n        162,\n        122,\n        31,\n        103,\n        372,\n        77,\n        122,\n        122,\n        77,\n        171,\n        372,\n        31,\n        122,\n        190,\n        122,\n        372,\n        372,\n        162,\n        122,\n        74,\n        122,\n        372,\n        372,\n        86,\n        122,\n        372,\n        122,\n        122,\n        230,\n        194,\n        372,\n        85,\n        196,\n        394,\n        403,\n        122,\n        92,\n        164,\n        192,\n        372,\n        104,\n        373,\n        86,\n        132,\n        122,\n        372,\n        72,\n        147,\n        205,\n        372,\n        372,\n        122,\n        372,\n        105,\n        162,\n        91,\n        372,\n        77,\n        372,\n        373,\n        372,\n        171,\n        353,\n        122,\n        372,\n        92,\n        164,\n        192,\n        372,\n        122,\n        187,\n        372,\n        372,\n        372,\n        77,\n        372,\n        373,\n        372,\n        372,\n        85,\n        190,\n        105,\n        172,\n        372,\n        72,\n        179,\n        190,\n        372,\n        103,\n        35,\n        72,\n        91,\n        119,\n        147,\n        205,\n        372,\n        372,\n        4,\n        85,\n        103,\n        122,\n        372,\n        104,\n        179,\n        104,\n        372,\n        85,\n        171,\n        373,\n        179,\n        122,\n        122,\n        122,\n        171,\n        120,\n        372,\n        75,\n        108,\n        149,\n        179,\n        187,\n        203,\n        209,\n        217,\n        392,\n        464,\n        371,\n        77,\n        140,\n        122,\n        72,\n        91,\n        119,\n        147,\n        122,\n        77,\n        104,\n        77,\n        121,\n        162,\n        372,\n        372,\n        122,\n        85,\n        339,\n        86,\n        122,\n        86,\n        372,\n        74,\n        104,\n        372,\n        372,\n        171,\n        122,\n        162,\n        190,\n        190,\n        122,\n        105,\n        268,\n        373,\n        77,\n        104,\n        122,\n        121,\n        179,\n        85,\n        372,\n        86,\n        162,\n        372,\n        122,\n        85,\n        372,\n        147,\n        122,\n        122,\n        171,\n        372,\n        85,\n        122,\n        372,\n        104,\n        171,\n        162,\n        85,\n        140,\n        209,\n        372,\n        122,\n        85,\n        122,\n        191,\n        373,\n        122,\n        104,\n        372,\n        122,\n        372,\n        140,\n        171,\n        179,\n        122,\n        122,\n        77,\n        373,\n        104,\n        372,\n        372,\n        372,\n        77,\n        171,\n        179,\n        77,\n        162,\n        122,\n        122,\n        172,\n        372,\n        179,\n        77,\n        171,\n        122,\n        104,\n        75,\n        372,\n        372,\n        77,\n        192,\n        161,\n        162,\n        179,\n        121,\n        373,\n        122,\n        179,\n        122,\n        372,\n        372,\n        85,\n        75,\n        132,\n        122,\n        372,\n        122,\n        132,\n        372,\n        373,\n        372,\n        372,\n        372,\n        372,\n        372,\n        2,\n        14,\n        45,\n        49,\n        78,\n        123,\n        180,\n        192,\n        210,\n        236,\n        372,\n        179,\n        85,\n        122,\n        372,\n        85,\n        104,\n        162,\n        372,\n        122,\n        86,\n        372,\n        77,\n        171,\n        72,\n        370,\n        372,\n        163,\n        372,\n        86,\n        122,\n        77,\n        372,\n        372,\n        122,\n        122,\n        33,\n        45,\n        149,\n        289,\n        120,\n        121,\n        122,\n        122,\n        372,\n        122,\n        77,\n        162,\n        163,\n        104,\n        372,\n        372,\n        171,\n        122,\n        372,\n        119,\n        372,\n        410,\n        92,\n        106,\n        103,\n        372,\n        85,\n        372,\n        86,\n        179,\n        86,\n        373,\n        122,\n        372,\n        122,\n        74,\n        104,\n        190,\n        232,\n        179,\n        85,\n        122,\n        373,\n        86,\n        122,\n        122,\n        122,\n        171,\n        104,\n        171,\n        373,\n        85,\n        132,\n        372,\n        85,\n        372,\n        85,\n        373,\n        21,\n        124,\n        169,\n        106,\n        372,\n        373,\n        122,\n        103,\n        77,\n        122,\n        122,\n        373,\n        32,\n        85,\n        373,\n        122,\n        122,\n        372,\n        122,\n        121,\n        162,\n        372,\n        104,\n        171,\n        373,\n        122,\n        122,\n        104,\n        163,\n        372,\n        187,\n        122,\n        122,\n        121,\n        77,\n        163,\n        77,\n        122,\n        122,\n        372,\n        179,\n        403,\n        372,\n        372,\n        85,\n        122,\n        122,\n        122,\n        121,\n        122,\n        372,\n        122,\n        31,\n        86,\n        163,\n        372,\n        372,\n        72,\n        132,\n        104,\n        122,\n        74,\n        140,\n        149,\n        179,\n        372,\n        122,\n        230,\n        85,\n        372,\n        87,\n        170,\n        372,\n        372,\n        179,\n        373,\n        85,\n        121,\n        77,\n        372,\n        104,\n        171,\n        372,\n        372,\n        122,\n        132,\n        120,\n        282,\n        312,\n        488,\n        122,\n        85,\n        104,\n        179,\n        230,\n        120,\n        191,\n        104,\n        372,\n        373,\n        103,\n        122,\n        77,\n        104,\n        122,\n        373,\n        122,\n        77,\n        77,\n        105,\n        122,\n        86,\n        121,\n        373,\n        86,\n        140,\n        77,\n        162,\n        2,\n        14,\n        24,\n        180,\n        192,\n        103,\n        77,\n        373,\n        188,\n        104,\n        162,\n        372,\n        164,\n        192,\n        122,\n        85,\n        122,\n        171,\n        372,\n        372,\n        104,\n        372,\n        104,\n        133,\n        373,\n        32,\n        162,\n        190,\n        372,\n        121,\n        104,\n        103,\n        161,\n        190,\n        122,\n        372,\n        372,\n        372,\n        162,\n        372,\n        122,\n        77,\n        171,\n        74,\n        372,\n        77,\n        331,\n        340,\n        77,\n        103,\n        122,\n        171,\n        189,\n        122,\n        372,\n        122,\n        372,\n        122,\n        122,\n        85,\n        122,\n        190,\n        190,\n        170,\n        372,\n        105,\n        77,\n        162,\n        163,\n        372,\n        122,\n        372,\n        372,\n        372,\n        74,\n        140,\n        179,\n        4,\n        190,\n        104,\n        372,\n        372,\n        122,\n        372,\n        171,\n        372,\n        122,\n        372,\n        122,\n        372,\n        171,\n        85,\n        372,\n        372,\n        190,\n        372,\n        85,\n        230,\n        122,\n        104,\n        372,\n        122,\n        104,\n        121,\n        372,\n        77,\n        140,\n        179,\n        75,\n        132,\n        122,\n        85,\n        122,\n        104,\n        75,\n        179,\n        85,\n        122,\n        77,\n        372,\n        371,\n        77,\n        372,\n        372,\n        122,\n        74,\n        91,\n        269,\n        324,\n        331,\n        386,\n        101,\n        122,\n        104,\n        85,\n        122,\n        373,\n        373,\n        122,\n        372,\n        121,\n        85,\n        121,\n        373,\n        372,\n        4,\n        106,\n        236,\n        372,\n        372,\n        372,\n        104,\n        372,\n        122,\n        372,\n        122,\n        132,\n        179,\n        122,\n        122,\n        104,\n        122,\n        171,\n        122,\n        122,\n        372,\n        372,\n        304,\n        372,\n        121,\n        122,\n        77,\n        104,\n        372,\n        373,\n        106,\n        353,\n        105,\n        72,\n        147,\n        372,\n        372,\n        85,\n        104,\n        85,\n        372,\n        103,\n        171,\n        122,\n        85,\n        372,\n        85,\n        417,\n        424,\n        122,\n        373,\n        179,\n        163,\n        85,\n        372,\n        372,\n        372,\n        230,\n        372,\n        372,\n        392,\n        171,\n        120,\n        163,\n        410,\n        373,\n        74,\n        140,\n        209,\n        232,\n        72,\n        119,\n        85,\n        86,\n        140,\n        86,\n        161,\n        372,\n        373,\n        21,\n        31,\n        32,\n        179,\n        230,\n        392,\n        372,\n        122,\n        122,\n        86,\n        132,\n        122,\n        122,\n        104,\n        372,\n        372,\n        85,\n        104,\n        373,\n        122,\n        122,\n        122,\n        372,\n        163,\n        104,\n        372,\n        171,\n        122,\n        74,\n        121,\n        4,\n        21,\n        85,\n        103,\n        121,\n        170,\n        189,\n        372,\n        372,\n        122,\n        372,\n        171,\n        85,\n        372,\n        104,\n        372,\n        179,\n        132,\n        372,\n        372,\n        372,\n        104,\n        147,\n        167,\n        101,\n        179,\n        188,\n        122,\n        85,\n        122,\n        373,\n        373,\n        77,\n        77,\n        372,\n        2,\n        21,\n        31,\n        77,\n        104,\n        162,\n        372,\n        372,\n        75,\n        132,\n        122,\n        122,\n        373,\n        132,\n        190,\n        86,\n        120,\n        122,\n        86,\n        2,\n        47,\n        179,\n        171,\n        162,\n        372,\n        122,\n        372,\n        122,\n        122,\n        373,\n        122,\n        179,\n        244,\n        122,\n        372,\n        122,\n        121,\n        161,\n        189,\n        232,\n        86,\n        122,\n        372,\n        31,\n        86,\n        256,\n        354,\n        372,\n        86,\n        163,\n        179,\n        161,\n        172,\n        373,\n        373,\n        77,\n        104,\n        162,\n        372,\n        122,\n        372,\n        75,\n        104,\n        162,\n        190,\n        372,\n        120,\n        373,\n        104,\n        85,\n        86,\n        122,\n        132,\n        132,\n        410,\n        122,\n        190,\n        372,\n        179,\n        85,\n        372,\n        373,\n        85,\n        75,\n        101,\n        119,\n        304,\n        85,\n        162,\n        372,\n        47,\n        122,\n        372,\n        122,\n        372,\n        373,\n        372,\n        122,\n        162,\n        104,\n        122,\n        122,\n        372,\n        372,\n        103,\n        75,\n        133,\n        122,\n        103,\n        372,\n        109,\n        119,\n        369,\n        179,\n        122,\n        122,\n        122,\n        122,\n        149,\n        132,\n        122,\n        372,\n        122,\n        122,\n        373,\n        122,\n        103,\n        45,\n        121,\n        170,\n        122,\n        85,\n        372,\n        372,\n        121,\n        122,\n        169,\n        170,\n        372,\n        104,\n        122,\n        162,\n        77,\n        104,\n        122,\n        122,\n        104,\n        132,\n        4,\n        372,\n        120,\n        373,\n        122,\n        179,\n        122,\n        179,\n        373,\n        104,\n        372,\n        372,\n        122,\n        373,\n        372,\n        122,\n        171,\n        122,\n        122,\n        372,\n        368,\n        162,\n        122,\n        372,\n        85,\n        190,\n        121,\n        372,\n        85,\n        77,\n        171,\n        122,\n        171,\n        122,\n        122,\n        32,\n        122,\n        122,\n        74,\n        372,\n        85,\n        121,\n        232,\n        122,\n        281,\n        290,\n        353,\n        382,\n        372,\n        372,\n        74,\n        372,\n        122,\n        122,\n        373,\n        171,\n        373,\n        77,\n        171,\n        122,\n        104,\n        373,\n        179,\n        122,\n        372,\n        74,\n        72,\n        77,\n        372,\n        162,\n        14,\n        78,\n        106,\n        164,\n        87,\n        256,\n        312,\n        488,\n        371,\n        122,\n        78,\n        92,\n        106,\n        372,\n        122,\n        74,\n        91,\n        147,\n        331,\n        372,\n        104,\n        122,\n        122,\n        189,\n        268,\n        373,\n        372,\n        372,\n        122,\n        170,\n        190,\n        85,\n        85,\n        87,\n        255,\n        331,\n        354,\n        122,\n        122,\n        372,\n        140,\n        122,\n        122,\n        372,\n        86,\n        149,\n        372,\n        121,\n        121,\n        209,\n        232,\n        171,\n        74,\n        104,\n        372,\n        373,\n        372,\n        122,\n        372,\n        179,\n        85,\n        85,\n        74,\n        190,\n        403,\n        85,\n        372,\n        77,\n        162,\n        190,\n        372,\n        244,\n        289,\n        488,\n        122,\n        372,\n        373,\n        104,\n        162,\n        171,\n        372,\n        372,\n        85,\n        170,\n        122,\n        370,\n        372,\n        75,\n        190,\n        189,\n        85,\n        162,\n        189,\n        371,\n        372,\n        122,\n        372,\n        372,\n        122,\n        372,\n        75,\n        104,\n        122,\n        189,\n        77,\n        161,\n        189,\n        109,\n        119,\n        304,\n        369,\n        372,\n        372,\n        256,\n        290,\n        331,\n        340,\n        121,\n        122,\n        75,\n        132,\n        372,\n        372,\n        383,\n        122,\n        77,\n        171,\n        104,\n        122,\n        373,\n        85,\n        372,\n        190,\n        122,\n        122,\n        189,\n        122,\n        75,\n        101,\n        119,\n        304,\n        121,\n        189,\n        372,\n        180,\n        77,\n        172,\n        121,\n        75,\n        162,\n        372,\n        190,\n        122,\n        373,\n        85,\n        162,\n        163,\n        104,\n        118,\n        122,\n        33,\n        47,\n        232,\n        123,\n        77,\n        162,\n        72,\n        109,\n        305,\n        368,\n        122,\n        162,\n        85,\n        122,\n        372,\n        372,\n        372,\n        122,\n        372,\n        85,\n        171,\n        162,\n        162,\n        85,\n        372,\n        104,\n        373,\n        104,\n        171,\n        190,\n        122,\n        85,\n        122,\n        373,\n        373,\n        132,\n        371,\n        74,\n        188,\n        232,\n        132,\n        77,\n        122,\n        91,\n        122,\n        147,\n        167,\n        122,\n        171,\n        372,\n        122,\n        140,\n        244,\n        2,\n        140,\n        162,\n        171,\n        373,\n        162,\n        122,\n        179,\n        121,\n        121,\n        103,\n        372,\n        85,\n        77,\n        373,\n        103,\n        122,\n        86,\n        122,\n        103,\n        170,\n        122,\n        372,\n        122,\n        122,\n        122,\n        373,\n        122,\n        140,\n        162,\n        140,\n        35,\n        72,\n        205,\n        230,\n        86,\n        120,\n        122,\n        371,\n        372,\n        104,\n        122,\n        372,\n        85,\n        179,\n        372,\n        85,\n        74,\n        179,\n        228,\n        179,\n        371,\n        121,\n        121,\n        72,\n        147,\n        205,\n        77,\n        372,\n        121,\n        122,\n        371,\n        372,\n        122,\n        149,\n        179,\n        122,\n        122,\n        122,\n        191,\n        140,\n        122,\n        372,\n        104,\n        106,\n        164,\n        122,\n        121,\n        371,\n        372,\n        122,\n        122,\n        372,\n        122,\n        372,\n        85,\n        77,\n        162,\n        122,\n        372,\n        104,\n        373,\n        122,\n        31,\n        190,\n        371,\n        371,\n        372,\n        372,\n        372,\n        372,\n        121,\n        372,\n        162,\n        372,\n        372,\n        85,\n        104,\n        122,\n        373,\n        372,\n        85,\n        121,\n        371,\n        372,\n        122,\n        104,\n        122,\n        372,\n        372,\n        179,\n        14,\n        103,\n        372,\n        122,\n        373,\n        77,\n        104,\n        122,\n        372,\n        103,\n        161,\n        31,\n        45,\n        179,\n        187,\n        403,\n        122,\n        122,\n        122,\n        85,\n        121,\n        122,\n        85,\n        103,\n        171,\n        122,\n        122,\n        373,\n        77,\n        122,\n        189,\n        161,\n        86,\n        122,\n        104,\n        162,\n        122,\n        85,\n        394,\n        403,\n        372,\n        122,\n        122,\n        85,\n        122,\n        162,\n        121,\n        132,\n        122,\n        121,\n        122,\n        372,\n        372,\n        122,\n        372,\n        122,\n        122,\n        122,\n        372,\n        234,\n        121,\n        122,\n        373,\n        372,\n        85,\n        372,\n        87,\n        354,\n        122,\n        372,\n        122,\n        372,\n        122,\n        122,\n        37,\n        105,\n        163,\n        371,\n        86,\n        109,\n        119,\n        369,\n        372,\n        122,\n        162,\n        104,\n        77,\n        122,\n        372,\n        121,\n        372,\n        85,\n        122,\n        122,\n        373,\n        191,\n        77,\n        104,\n        122,\n        170,\n        372,\n        232,\n        104,\n        179,\n        372,\n        122,\n        372,\n        122,\n        371,\n        372,\n        77,\n        122,\n        77,\n        122,\n        86,\n        140,\n        162,\n        86,\n        104,\n        372,\n        77,\n        132,\n        35,\n        72,\n        205,\n        122,\n        122,\n        372,\n        372,\n        121,\n        373,\n        122,\n        122,\n        171,\n        122,\n        74,\n        85,\n        121,\n        372,\n        372,\n        373,\n        32,\n        85,\n        372,\n        122,\n        122,\n        122,\n        86,\n        372,\n        85,\n        122,\n        122,\n        85,\n        372,\n        74,\n        226,\n        103,\n        163,\n        372,\n        121,\n        372,\n        85,\n        122,\n        77,\n        372,\n        122,\n        74,\n        85,\n        290,\n        122,\n        122,\n        122,\n        72,\n        101,\n        179,\n        230,\n        368,\n        122,\n        122,\n        226,\n        77,\n        372,\n        372,\n        85,\n        122,\n        372,\n        104,\n        85,\n        85,\n        122,\n        120,\n        122,\n        122,\n        74,\n        101,\n        372,\n        372,\n        77,\n        171,\n        372,\n        372,\n        77,\n        122,\n        179,\n        372,\n        72,\n        147,\n        122,\n        122,\n        122,\n        179,\n        219,\n        372,\n        256,\n        279,\n        331,\n        122,\n        171,\n        163,\n        85,\n        372,\n        92,\n        85,\n        85,\n        122,\n        372,\n        122,\n        31,\n        85,\n        104,\n        372,\n        120,\n        179,\n        232,\n        31,\n        45,\n        74,\n        91,\n        109,\n        179,\n        188,\n        461,\n        122,\n        373,\n        290,\n        331,\n        122,\n        77,\n        104,\n        171,\n        371,\n        85,\n        122,\n        122,\n        85,\n        122,\n        372,\n        171,\n        14,\n        32,\n        34,\n        45,\n        49,\n        180,\n        77,\n        372,\n        122,\n        372,\n        122,\n        372,\n        85,\n        104,\n        85,\n        47,\n        74,\n        372,\n        372,\n        122,\n        77,\n        161,\n        171,\n        372,\n        122,\n        372,\n        371,\n        121,\n        106,\n        123,\n        162,\n        372,\n        179,\n        122,\n        372,\n        372,\n        122,\n        85,\n        371,\n        372,\n        86,\n        32,\n        162,\n        372,\n        104,\n        122,\n        77,\n        104,\n        122,\n        122,\n        190,\n        372,\n        122,\n        14,\n        78,\n        230,\n        122,\n        85,\n        373,\n        372,\n        105,\n        372,\n        372,\n        372,\n        372,\n        373,\n        372,\n        122,\n        85,\n        122,\n        104,\n        122,\n        122,\n        75,\n        140,\n        122,\n        410,\n        86,\n        77,\n        171,\n        75,\n        77,\n        162,\n        74,\n        140,\n        179,\n        372,\n        120,\n        373,\n        75,\n        86,\n        122,\n        122,\n        179,\n        372,\n        104,\n        122,\n        179,\n        372,\n        122,\n        372,\n        85,\n        190,\n        74,\n        140,\n        209,\n        77,\n        162,\n        372,\n        122,\n        372,\n        122,\n        122,\n        122,\n        123,\n        372,\n        72,\n        163,\n        132,\n        122,\n        373,\n        121,\n        121,\n        122,\n        373,\n        78,\n        123,\n        372,\n        372,\n        372,\n        122,\n        122,\n        162,\n        122,\n        85,\n        373,\n        103,\n        179,\n        104,\n        104,\n        87,\n        170,\n        372,\n        122,\n        372,\n        372,\n        372,\n        85,\n        85,\n        117,\n        149,\n        372,\n        162,\n        85,\n        189,\n        122,\n        122,\n        74,\n        179,\n        122,\n        373,\n        372,\n        122,\n        171,\n        75,\n        372,\n        354,\n        373,\n        104,\n        372,\n        244,\n        289,\n        372,\n        4,\n        31,\n        47,\n        72,\n        110,\n        140,\n        162,\n        179,\n        228,\n        403,\n        372,\n        170,\n        77,\n        104,\n        162,\n        372,\n        103,\n        85,\n        85,\n        122,\n        122,\n        372,\n        230,\n        122,\n        122,\n        85,\n        4,\n        91,\n        191,\n        85,\n        122,\n        372,\n        122,\n        101,\n        105,\n        163,\n        104,\n        162,\n        190,\n        162,\n        171,\n        190,\n        86,\n        371,\n        122,\n        120,\n        122,\n        73,\n        147,\n        85,\n        122,\n        122,\n        190,\n        372,\n        122,\n        372,\n        373,\n        373,\n        372,\n        74,\n        122,\n        372,\n        122,\n        372,\n        121,\n        2,\n        164,\n        192,\n        122,\n        122,\n        372,\n        122,\n        372,\n        140,\n        122,\n        85,\n        351,\n        353,\n        75,\n        132,\n        122,\n        85,\n        230,\n        373,\n        372,\n        140,\n        162,\n        32,\n        162,\n        122,\n        372,\n        162,\n        372,\n        77,\n        103,\n        162,\n        85,\n        77,\n        122,\n        104,\n        372,\n        104,\n        31,\n        104,\n        121,\n        122,\n        85,\n        162,\n        122,\n        161,\n        189,\n        371,\n        372,\n        372,\n        122,\n        372,\n        87,\n        140,\n        78,\n        2,\n        74,\n        179,\n        403,\n        372,\n        372,\n        372,\n        372,\n        2,\n        14,\n        24,\n        78,\n        106,\n        123,\n        147,\n        164,\n        180,\n        192,\n        210,\n        236,\n        312,\n        374,\n        394,\n        403,\n        171,\n        77,\n        121,\n        122,\n        3,\n        91,\n        230,\n        122,\n        372,\n        372,\n        372,\n        372,\n        86,\n        372,\n        122,\n        122,\n        122,\n        132,\n        372,\n        85,\n        372,\n        372,\n        372,\n        77,\n        104,\n        161,\n        122,\n        122,\n        122,\n        35,\n        85,\n        122,\n        372,\n        392,\n        372,\n        373,\n        190,\n        103,\n        105,\n        163,\n        35,\n        209,\n        104,\n        86,\n        122,\n        104,\n        371,\n        32,\n        171,\n        191,\n        256,\n        331,\n        340,\n        104,\n        121,\n        122,\n        121,\n        179,\n        187,\n        179,\n        372,\n        122,\n        122,\n        85,\n        122,\n        372,\n        372,\n        122,\n        372,\n        121,\n        122,\n        372,\n        121,\n        77,\n        162,\n        122,\n        122,\n        372,\n        104,\n        372,\n        85,\n        122,\n        121,\n        122,\n        372,\n        122,\n        122,\n        244,\n        104,\n        162,\n        122,\n        85,\n        372,\n        372,\n        104,\n        372,\n        122,\n        122,\n        86,\n        372,\n        179,\n        122,\n        373,\n        122,\n        119,\n        140,\n        372,\n        85,\n        77,\n        372,\n        372,\n        122,\n        104,\n        162,\n        372,\n        372,\n        77,\n        121,\n        122,\n        372,\n        74,\n        140,\n        209,\n        232,\n        372,\n        372,\n        372,\n        373,\n        122,\n        372,\n        192,\n        86,\n        122,\n        372,\n        122,\n        104,\n        121,\n        372,\n        121,\n        372,\n        372,\n        77,\n        121,\n        162,\n        371,\n        77,\n        171,\n        104,\n        77,\n        47,\n        122,\n        121,\n        122,\n        104,\n        372,\n        85,\n        149,\n        372,\n        85,\n        372,\n        171,\n        122,\n        122,\n        121,\n        372,\n        122,\n        372,\n        122,\n        85,\n        122,\n        372,\n        163,\n        77,\n        85,\n        104,\n        122,\n        132,\n        122,\n        85,\n        372,\n        372,\n        31,\n        47,\n        161,\n        85,\n        232,\n        77,\n        140,\n        372,\n        85,\n        122,\n        162,\n        179,\n        372,\n        140,\n        85,\n        207,\n        230,\n        373,\n        372,\n        77,\n        104,\n        122,\n        122,\n        122,\n        372,\n        179,\n        179,\n        122,\n        122,\n        74,\n        87,\n        269,\n        104,\n        122,\n        85,\n        162,\n        77,\n        122,\n        122,\n        104,\n        85,\n        122,\n        85,\n        104,\n        372,\n        73,\n        133,\n        147,\n        91,\n        373,\n        373,\n        85,\n        110,\n        179,\n        85,\n        164,\n        122,\n        121,\n        372,\n        104,\n        122,\n        122,\n        122,\n        372,\n        372,\n        86,\n        104,\n        122,\n        31,\n        74,\n        86,\n        162,\n        373,\n        187,\n        104,\n        372,\n        372,\n        75,\n        23,\n        256,\n        281,\n        85,\n        122,\n        77,\n        72,\n        101,\n        372,\n        122,\n        104,\n        122,\n        372,\n        121,\n        372,\n        77,\n        383,\n        87,\n        121,\n        370,\n        289,\n        392,\n        122,\n        372,\n        372,\n        162,\n        179,\n        372,\n        122,\n        372,\n        122,\n        140,\n        86,\n        31,\n        47,\n        74,\n        102,\n        103,\n        179,\n        403,\n        121,\n        372,\n        372,\n        104,\n        372,\n        372,\n        104,\n        162,\n        122,\n        373,\n        122,\n        122,\n        122,\n        372,\n        77,\n        101,\n        77,\n        162,\n        104,\n        121,\n        169,\n        170,\n        373,\n        122,\n        372,\n        372,\n        162,\n        122,\n        372,\n        122,\n        179,\n        372,\n        372,\n        85,\n        14,\n        210,\n        236,\n        77,\n        122,\n        85,\n        122,\n        372,\n        104,\n        372,\n        122,\n        162,\n        172,\n        372,\n        372,\n        372,\n        179,\n        104,\n        105,\n        372,\n        122,\n        103,\n        85,\n        103,\n        74,\n        371,\n        372,\n        372,\n        122,\n        122,\n        122,\n        104,\n        162,\n        372,\n        372,\n        122,\n        122,\n        72,\n        209,\n        372,\n        86,\n        372,\n        122,\n        122,\n        104,\n        122,\n        122,\n        120,\n        122,\n        267,\n        75,\n        132,\n        372,\n        77,\n        104,\n        162,\n        77,\n        162,\n        31,\n        85,\n        85,\n        162,\n        104,\n        75,\n        122,\n        372,\n        121,\n        372,\n        372,\n        372,\n        372,\n        372,\n        73,\n        147,\n        372,\n        37,\n        48,\n        72,\n        209,\n        228,\n        132,\n        122,\n        121,\n        77,\n        372,\n        87,\n        4,\n        230,\n        120,\n        372,\n        86,\n        372,\n        85,\n        371,\n        372,\n        122,\n        92,\n        192,\n        236,\n        372,\n        373,\n        122,\n        372,\n        5,\n        31,\n        74,\n        101,\n        372,\n        372,\n        86,\n        179,\n        122,\n        372,\n        74,\n        120,\n        179,\n        372,\n        372,\n        372,\n        372,\n        122,\n        269,\n        331,\n        372,\n        372,\n        372,\n        122,\n        106,\n        123,\n        180,\n        192,\n        205,\n        122,\n        372,\n        121,\n        122,\n        162,\n        121,\n        372,\n        372,\n        179,\n        74,\n        91,\n        269,\n        122,\n        122,\n        77,\n        104,\n        373,\n        85,\n        103,\n        85,\n        122,\n        160,\n        86,\n        244,\n        122,\n        372,\n        74,\n        372,\n        121,\n        120,\n        372,\n        171,\n        372,\n        372,\n        179,\n        403,\n        122,\n        372,\n        122,\n        122,\n        179,\n        373,\n        72,\n        147,\n        77,\n        122,\n        372,\n        74,\n        190,\n        122,\n        77,\n        121,\n        179,\n        162,\n        190,\n        72,\n        121,\n        140,\n        172,\n        179,\n        189,\n        228,\n        403,\n        147,\n        85,\n        104,\n        189,\n        190,\n        372,\n        47,\n        121,\n        140,\n        170,\n        179,\n        372,\n        372,\n        122,\n        372,\n        311,\n        179,\n        77,\n        103,\n        77,\n        171,\n        122,\n        372,\n        373,\n        31,\n        90,\n        179,\n        194,\n        464,\n        488,\n        85,\n        121,\n        121,\n        372,\n        372,\n        373,\n        103,\n        372,\n        122,\n        372,\n        122,\n        171,\n        190,\n        78,\n        122,\n        122,\n        122,\n        161,\n        122,\n        372,\n        122,\n        372,\n        121,\n        77,\n        104,\n        77,\n        372,\n        72,\n        132,\n        372,\n        171,\n        86,\n        77,\n        122,\n        179,\n        373,\n        4,\n        103,\n        121,\n        187,\n        372,\n        75,\n        372,\n        373,\n        122,\n        373,\n        122,\n        92,\n        122,\n        372,\n        122,\n        372,\n        372,\n        372,\n        105,\n        122,\n        32,\n        104,\n        122,\n        149,\n        372,\n        122,\n        14,\n        47,\n        85,\n        104,\n        163,\n        77,\n        189,\n        122,\n        372,\n        372,\n        373,\n        372,\n        372,\n        372,\n        104,\n        122,\n        179,\n        122,\n        32,\n        85,\n        373,\n        109,\n        119,\n        304,\n        369,\n        372,\n        104,\n        122,\n        373,\n        372,\n        122,\n        122,\n        122,\n        77,\n        122,\n        372,\n        77,\n        162,\n        122,\n        85,\n        122,\n        372,\n        122,\n        14,\n        78,\n        164,\n        192,\n        2,\n        92,\n        162,\n        105,\n        172,\n        104,\n        104,\n        372,\n        372,\n        171,\n        104,\n        372,\n        256,\n        322,\n        340,\n        383,\n        372,\n        372,\n        104,\n        24,\n        106,\n        123,\n        180,\n        104,\n        372,\n        77,\n        14,\n        78,\n        132,\n        372,\n        122,\n        86,\n        140,\n        85,\n        103,\n        162,\n        85,\n        372,\n        190,\n        122,\n        140,\n        121,\n        77,\n        162,\n        372,\n        77,\n        122,\n        372,\n        187,\n        122,\n        86,\n        140,\n        171,\n        372,\n        85,\n        372,\n        121,\n        122,\n        372,\n        74,\n        104,\n        122,\n        140,\n        179,\n        190,\n        372,\n        122,\n        86,\n        372,\n        133,\n        162,\n        74,\n        149,\n        244,\n        122,\n        372,\n        132,\n        147,\n        179,\n        266,\n        372,\n        85,\n        371,\n        122,\n        171,\n        140,\n        209,\n        232,\n        304,\n        122,\n        122,\n        162,\n        171,\n        372,\n        372,\n        122,\n        372,\n        104,\n        49,\n        78,\n        104,\n        85,\n        31,\n        121,\n        170,\n        164,\n        172,\n        162,\n        122,\n        104,\n        372,\n        104,\n        162,\n        21,\n        104,\n        147,\n        372,\n        372,\n        122,\n        86,\n        122,\n        372,\n        122,\n        372,\n        373,\n        193,\n        372,\n        233,\n        372,\n        256,\n        372,\n        122,\n        372,\n        255,\n        77,\n        171,\n        392,\n        85,\n        171,\n        47,\n        372,\n        101,\n        140,\n        85,\n        104,\n        162,\n        122,\n        77,\n        372,\n        266,\n        289,\n        357,\n        480,\n        488,\n        122,\n        372,\n        102,\n        122,\n        372,\n        122,\n        74,\n        372,\n        4,\n        190,\n        74,\n        85,\n        373,\n        85,\n        372,\n        373,\n        179,\n        372,\n        32,\n        122,\n        372,\n        75,\n        149,\n        104,\n        132,\n        122,\n        85,\n        172,\n        122,\n        121,\n        179,\n        122,\n        86,\n        121,\n        372,\n        372,\n        3,\n        21,\n        35,\n        188,\n        230,\n        122,\n        372,\n        122,\n        104,\n        372,\n        122,\n        85,\n        372,\n        121,\n        371,\n        372,\n        122,\n        86,\n        120,\n        120,\n        373,\n        122,\n        372,\n        122,\n        372,\n        122,\n        122,\n        410,\n        372,\n        373,\n        104,\n        121,\n        2,\n        21,\n        31,\n        372,\n        35,\n        147,\n        372,\n        372,\n        162,\n        372,\n        85,\n        162,\n        122,\n        72,\n        122,\n        371,\n        122,\n        122,\n        372,\n        85,\n        171,\n        372,\n        77,\n        74,\n        372,\n        122,\n        372,\n        132,\n        122,\n        122,\n        179,\n        372,\n        372,\n        104,\n        132,\n        77,\n        105,\n        187,\n        104,\n        372,\n        104,\n        372,\n        149,\n        162,\n        85,\n        179,\n        77,\n        104,\n        372,\n        372,\n        140,\n        104,\n        171,\n        372,\n        122,\n        122,\n        85,\n        122,\n        122,\n        372,\n        122,\n        122,\n        187,\n        86,\n        104,\n        122,\n        372,\n        122,\n        122,\n        372,\n        122,\n        372,\n        104,\n        103,\n        170,\n        372,\n        122,\n        122,\n        86,\n        372,\n        122,\n        104,\n        106,\n        372,\n        104,\n        85,\n        104,\n        122,\n        170,\n        122,\n        372,\n        171,\n        122,\n        122,\n        85,\n        121,\n        122,\n        372,\n        372,\n        171,\n        373,\n        190,\n        122,\n        122,\n        122,\n        373,\n        372,\n        372,\n        122,\n        122,\n        103,\n        372,\n        104,\n        162,\n        121,\n        172,\n        373,\n        122,\n        171,\n        122,\n        372,\n        372,\n        179,\n        122,\n        372,\n        104,\n        372,\n        171,\n        373,\n        234,\n        280,\n        371,\n        86,\n        372,\n        74,\n        410,\n        162,\n        104,\n        122,\n        104,\n        171,\n        171,\n        162,\n        179,\n        122,\n        122,\n        122,\n        91,\n        372,\n        281,\n        322,\n        354,\n        373,\n        122,\n        373,\n        14,\n        78,\n        106,\n        123,\n        103,\n        194,\n        372,\n        85,\n        372,\n        85,\n        140,\n        162,\n        372,\n        122,\n        122,\n        122,\n        85,\n        161,\n        232,\n        85,\n        122,\n        122,\n        372,\n        85,\n        101,\n        119,\n        368,\n        122,\n        85,\n        122,\n        179,\n        372,\n        372,\n        121,\n        77,\n        371,\n        122,\n        104,\n        77,\n        373,\n        122,\n        372,\n        140,\n        14,\n        180,\n        192,\n        161,\n        331,\n        340,\n        372,\n        122,\n        122,\n        122,\n        122,\n        372,\n        122,\n        37,\n        187,\n        122,\n        86,\n        104,\n        122,\n        190,\n        232,\n        104,\n        372,\n        122,\n        122,\n        372,\n        122,\n        77,\n        372,\n        85,\n        14,\n        78,\n        192,\n        85,\n        122,\n        171,\n        103,\n        132,\n        32,\n        47,\n        122,\n        189,\n        232,\n        372,\n        122,\n        371,\n        384,\n        122,\n        372,\n        122,\n        72,\n        106,\n        123,\n        122,\n        122,\n        372,\n        122,\n        132,\n        372,\n        120,\n        372,\n        122,\n        121,\n        372,\n        104,\n        105,\n        104,\n        162,\n        121,\n        77,\n        162,\n        180,\n        101,\n        122,\n        105,\n        104,\n        122,\n        372,\n        122,\n        371,\n        372,\n        371,\n        121,\n        122,\n        373,\n        32,\n        122,\n        122,\n        104,\n        122,\n        232,\n        86,\n        179,\n        85,\n        162,\n        171,\n        85,\n        122,\n        85,\n        372,\n        77,\n        163,\n        372,\n        132,\n        372,\n        122,\n        122,\n        120,\n        104,\n        209,\n        372,\n        122,\n        104,\n        162,\n        122,\n        179,\n        372,\n        122,\n        122,\n        121,\n        85,\n        372,\n        179,\n        104,\n        372,\n        101,\n        162,\n        372,\n        85,\n        372,\n        122,\n        104,\n        372,\n        373,\n        85,\n        74,\n        109,\n        119,\n        234,\n        21,\n        105,\n        120,\n        172,\n        187,\n        122,\n        121,\n        372,\n        77,\n        372,\n        121,\n        32,\n        77,\n        171,\n        179,\n        162,\n        372,\n        86,\n        372,\n        140,\n        2,\n        21,\n        191,\n        209,\n        105,\n        172,\n        162,\n        86,\n        85,\n        77,\n        104,\n        171,\n        85,\n        171,\n        122,\n        372,\n        74,\n        122,\n        190,\n        232,\n        372,\n        122,\n        77,\n        372,\n        372,\n        85,\n        372,\n        122,\n        121,\n        122,\n        122,\n        104,\n        122,\n        85,\n        105,\n        122,\n        31,\n        104,\n        372,\n        171,\n        122,\n        372,\n        162,\n        188,\n        424,\n        122,\n        372,\n        372,\n        122,\n        122,\n        104,\n        372,\n        373,\n        77,\n        162,\n        140,\n        46,\n        121,\n        373,\n        372,\n        122,\n        121,\n        85,\n        101,\n        122,\n        372,\n        372,\n        372,\n        122,\n        122,\n        122,\n        372,\n        372,\n        122,\n        372,\n        122,\n        372,\n        372,\n        104,\n        373,\n        190,\n        255,\n        85,\n        340,\n        372,\n        179,\n        373,\n        372,\n        179,\n        104,\n        122,\n        122,\n        120,\n        373,\n        86,\n        104,\n        179,\n        122,\n        269,\n        103,\n        120,\n        162,\n        86,\n        161,\n        122,\n        192,\n        122,\n        372,\n        122,\n        372,\n        122,\n        122,\n        372,\n        122,\n        121,\n        105,\n        122,\n        31,\n        122,\n        122,\n        373,\n        123,\n        122,\n        372,\n        121,\n        132,\n        104,\n        256,\n        331,\n        122,\n        162,\n        162,\n        104,\n        86,\n        122,\n        122,\n        122,\n        121,\n        373,\n        331,\n        340,\n        383,\n        340,\n        104,\n        162,\n        372,\n        193,\n        373,\n        104,\n        104,\n        77,\n        190,\n        85,\n        372,\n        171,\n        85,\n        372,\n        163,\n        372,\n        85,\n        371,\n        85,\n        162,\n        47,\n        122,\n        256,\n        372,\n        372,\n        122,\n        122,\n        373,\n        372,\n        104,\n        190,\n        122,\n        372,\n        86,\n        122,\n        171,\n        77,\n        179,\n        132,\n        372,\n        122,\n        85,\n        122,\n        179,\n        86,\n        232,\n        122,\n        104,\n        122,\n        371,\n        122,\n        372,\n        372,\n        86,\n        371,\n        122,\n        372,\n        372,\n        122,\n        373,\n        373,\n        372,\n        372,\n        77,\n        372,\n        104,\n        162,\n        372,\n        122,\n        104,\n        104,\n        372,\n        232,\n        85,\n        104,\n        372,\n        104,\n        373,\n        85,\n        85,\n        75,\n        133,\n        417,\n        85,\n        121,\n        77,\n        269,\n        383,\n        121,\n        372,\n        372,\n        77,\n        372,\n        122,\n        372,\n        372,\n        85,\n        122,\n        372,\n        149,\n        74,\n        35,\n        72,\n        91,\n        119,\n        147,\n        205,\n        190,\n        373,\n        372,\n        122,\n        368,\n        104,\n        122,\n        85,\n        122,\n        132,\n        103,\n        104,\n        162,\n        372,\n        140,\n        122,\n        372,\n        121,\n        162,\n        372,\n        372,\n        372,\n        122,\n        256,\n        269,\n        290,\n        171,\n        122,\n        372,\n        121,\n        122,\n        122,\n        122,\n        122,\n        122,\n        104,\n        4,\n        190,\n        372,\n        372,\n        244,\n        372,\n        103,\n        179,\n        103,\n        161,\n        179,\n        122,\n        372,\n        373,\n        179,\n        372,\n        74,\n        179,\n        234,\n        162,\n        403,\n        122,\n        372,\n        170,\n        372,\n        77,\n        372,\n        2,\n        31,\n        45,\n        72,\n        147,\n        187,\n        373,\n        122,\n        122,\n        226,\n        122,\n        87,\n        74,\n        371,\n        86,\n        179,\n        122,\n        171,\n        163,\n        122,\n        372,\n        372,\n        77,\n        207,\n        372,\n        85,\n        122,\n        373,\n        122,\n        162,\n        121,\n        190,\n        179,\n        120,\n        77,\n        122,\n        75,\n        162,\n        86,\n        372,\n        106,\n        164,\n        234,\n        85,\n        121,\n        86,\n        85,\n        122,\n        77,\n        162,\n        121,\n        372,\n        372,\n        122,\n        372,\n        77,\n        104,\n        372,\n        372,\n        104,\n        162,\n        162,\n        85,\n        372,\n        171,\n        78,\n        372,\n        122,\n        121,\n        424,\n        373,\n        373,\n        372,\n        104,\n        373,\n        372,\n        122,\n        104,\n        122,\n        104,\n        122,\n        122,\n        77,\n        85,\n        140,\n        85,\n        104,\n        85,\n        85,\n        77,\n        104,\n        122,\n        372,\n        123,\n        86,\n        85,\n        372,\n        372,\n        4,\n        190,\n        121,\n        122,\n        373,\n        149,\n        371,\n        122,\n        122,\n        85,\n        171,\n        31,\n        230,\n        370,\n        104,\n        77,\n        171,\n        187,\n        121,\n        85,\n        162,\n        75,\n        132,\n        31,\n        104,\n        104,\n        122,\n        121,\n        372,\n        4,\n        74,\n        103,\n        170,\n        371,\n        32,\n        103,\n        189,\n        74,\n        162,\n        171,\n        372,\n        372,\n        179,\n        372,\n        372,\n        372,\n        372,\n        122,\n        104,\n        122,\n        372,\n        171,\n        122,\n        104,\n        162,\n        77,\n        122,\n        372,\n        372,\n        372,\n        219,\n        45,\n        122,\n        162,\n        190,\n        232,\n        372,\n        85,\n        162,\n        122,\n        373,\n        121,\n        104,\n        47,\n        49,\n        106,\n        123,\n        121,\n        122,\n        122,\n        110,\n        267,\n        323,\n        354,\n        383,\n        477,\n        104,\n        121,\n        372,\n        86,\n        85,\n        122,\n        373,\n        122,\n        31,\n        103,\n        120,\n        122,\n        372,\n        372,\n        372,\n        122,\n        122,\n        105,\n        172,\n        331,\n        104,\n        179,\n        86,\n        179,\n        230,\n        31,\n        122,\n        372,\n        122,\n        91,\n        119,\n        77,\n        171,\n        103,\n        122,\n        85,\n        372,\n        122,\n        122,\n        85,\n        85,\n        104,\n        372,\n        122,\n        171,\n        86,\n        372,\n        122,\n        179,\n        372,\n        372,\n        122,\n        372,\n        190,\n        372,\n        122,\n        104,\n        372,\n        122,\n        104,\n        171,\n        372,\n        106,\n        372,\n        72,\n        120,\n        244,\n        122,\n        104,\n        171,\n        85,\n        410,\n        122,\n        122,\n        140,\n        171,\n        122,\n        372,\n        104,\n        77,\n        104,\n        162,\n        72,\n        372,\n        104,\n        372,\n        122,\n        122,\n        103,\n        122,\n        372,\n        85,\n        140,\n        171,\n        122,\n        372,\n        77,\n        104,\n        122,\n        77,\n        122,\n        372,\n        106,\n        85,\n        122,\n        372,\n        179,\n        372,\n        85,\n        104,\n        232,\n        372,\n        85,\n        372,\n        104,\n        121,\n        162,\n        122,\n        162,\n        104,\n        122,\n        164,\n        192,\n        77,\n        162,\n        179,\n        372,\n        372,\n        121,\n        372,\n        122,\n        104,\n        77,\n        162,\n        47,\n        371,\n        74,\n        140,\n        209,\n        232,\n        372,\n        77,\n        104,\n        171,\n        104,\n        371,\n        122,\n        77,\n        372,\n        104,\n        77,\n        372,\n        119,\n        77,\n        103,\n        170,\n        371,\n        372,\n        370,\n        85,\n        372,\n        219,\n        488,\n        85,\n        85,\n        372,\n        77,\n        24,\n        123,\n        232,\n        122,\n        373,\n        372,\n        122,\n        104,\n        122,\n        122,\n        372,\n        372,\n        77,\n        74,\n        140,\n        232,\n        75,\n        77,\n        162,\n        372,\n        372,\n        122,\n        372,\n        140,\n        122,\n        122,\n        78,\n        92,\n        106,\n        164,\n        122,\n        77,\n        105,\n        179,\n        122,\n        372,\n        101,\n        372,\n        85,\n        86,\n        104,\n        122,\n        190,\n        77,\n        85,\n        162,\n        77,\n        86,\n        121,\n        122,\n        372,\n        372,\n        372,\n        85,\n        372,\n        190,\n        122,\n        219,\n        77,\n        104,\n        74,\n        403,\n        104,\n        372,\n        78,\n        122,\n        122,\n        372,\n        372,\n        85,\n        101,\n        191,\n        372,\n        12,\n        13,\n        49,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        32,\n        34,\n        47,\n        49,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        14,\n        3,\n        14,\n        2,\n        31,\n        2,\n        2,\n        2,\n        2,\n        2,\n        21,\n        31,\n        45,\n        2,\n        31,\n        2,\n        2,\n        2,\n        2,\n        31,\n        35,\n        45,\n        2,\n        31,\n        45,\n        2,\n        2,\n        2,\n        31,\n        35,\n        45,\n        2,\n        2,\n        21,\n        3,\n        3,\n        3,\n        3,\n        3,\n        3,\n        3,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        4,\n        5,\n        31,\n        45,\n        45,\n        31,\n        45,\n        22,\n        45,\n        31,\n        45,\n        45,\n        45,\n        45,\n        45,\n        45,\n        45,\n        45,\n        45,\n        46,\n        47,\n        47,\n        49,\n        23,\n        47,\n        23,\n        47,\n        23,\n        45,\n        47,\n        23,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        31,\n        47,\n        31,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        32,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        32,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        31,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        47,\n        37,\n        48,\n        37,\n        48,\n        37,\n        48,\n        48,\n        37,\n        48,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        47,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        21,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        32,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        162,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        31,\n        34,\n        31,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        160,\n        32,\n        32,\n        32,\n        32,\n        32,\n        36,\n        32,\n        32,\n        32,\n        32,\n        32,\n        47,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        33,\n        33,\n        47,\n        33,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        160,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        162,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        35,\n        37,\n        37,\n        37,\n        37,\n        37,\n        37,\n        37,\n        32,\n        47,\n        31,\n        32,\n        45,\n        49,\n        32,\n        47,\n        47,\n        47,\n        33,\n        47,\n        47,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        45,\n        32,\n        47,\n        47,\n        47,\n        31,\n        32,\n        32,\n        32,\n        47,\n        49,\n        31,\n        32,\n        32,\n        47,\n        47,\n        35,\n        4,\n        47,\n        32,\n        31,\n        31,\n        36,\n        48,\n        31,\n        31,\n        32,\n        32,\n        47,\n        32,\n        31,\n        31,\n        31,\n        31,\n        31,\n        32,\n        32,\n        33,\n        32,\n        32,\n        33,\n        33,\n        32,\n        45,\n        47,\n        31,\n        32,\n        32,\n        21,\n        31,\n        51,\n        21,\n        21,\n        162,\n        21,\n        52,\n        21,\n        21,\n        21,\n        21,\n        24,\n        24,\n        49,\n        160,\n        31,\n        32,\n        32,\n        21,\n        479,\n        488,\n        47,\n        45,\n        32,\n        32,\n        49,\n        49,\n        32,\n        32,\n        32,\n        32,\n        47,\n        32,\n        32,\n        36,\n        32,\n        36,\n        4,\n        47,\n        32,\n        47,\n        31,\n        32,\n        32,\n        32,\n        32,\n        32,\n        33,\n        34,\n        32,\n        32,\n        34,\n        49,\n        45,\n        31,\n        45,\n        47,\n        162,\n        122,\n        122,\n        122,\n        161,\n        162,\n        162,\n        161,\n        371,\n        162,\n        162,\n        162,\n        162,\n        122,\n        164,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        162,\n        122,\n        232,\n        162,\n        122,\n        122,\n        162,\n        162,\n        122,\n        162,\n        122,\n        122,\n        122,\n        122,\n        161,\n        162,\n        162,\n        122,\n        122,\n        162,\n        161,\n        179,\n        122,\n        162,\n        122,\n        162,\n        122,\n        162,\n        122,\n        162,\n        162,\n        122,\n        122,\n        162,\n        162,\n        162,\n        164,\n        192,\n        162,\n        192,\n        122,\n        161,\n        161,\n        162,\n        163,\n        162,\n        162,\n        162,\n        161,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        162,\n        162,\n        161,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        161,\n        162,\n        162,\n        162,\n        162,\n        162,\n        164,\n        162,\n        47,\n        47,\n        45,\n        31,\n        32,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        163,\n        162,\n        162,\n        162,\n        163,\n        162,\n        163,\n        162,\n        163,\n        162,\n        162,\n        161,\n        162,\n        162,\n        162,\n        162,\n        163,\n        163,\n        162,\n        162,\n        162,\n        32,\n        32,\n        32,\n        32,\n        32,\n        372,\n        32,\n        32,\n        32,\n        36,\n        45,\n        31,\n        32,\n        32,\n        32,\n        32,\n        32,\n        32,\n        36,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        45,\n        47,\n        47,\n        47,\n        47,\n        162,\n        162,\n        162,\n        340,\n        161,\n        162,\n        162,\n        162,\n        162,\n        161,\n        162,\n        340,\n        162,\n        162,\n        162,\n        160,\n        162,\n        340,\n        162,\n        162,\n        162,\n        162,\n        162,\n        122,\n        162,\n        162,\n        340,\n        383,\n        162,\n        340,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        373,\n        162,\n        162,\n        162,\n        161,\n        372,\n        162,\n        162,\n        373,\n        232,\n        162,\n        162,\n        162,\n        85,\n        162,\n        85,\n        163,\n        163,\n        22,\n        162,\n        162,\n        162,\n        162,\n        162,\n        279,\n        384,\n        488,\n        162,\n        162,\n        162,\n        162,\n        36,\n        161,\n        162,\n        162,\n        74,\n        162,\n        162,\n        161,\n        162,\n        161,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        302,\n        305,\n        308,\n        310,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        160,\n        162,\n        162,\n        162,\n        162,\n        162,\n        464,\n        163,\n        162,\n        162,\n        161,\n        161,\n        163,\n        331,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        464,\n        162,\n        162,\n        162,\n        162,\n        32,\n        35,\n        35,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        162,\n        162,\n        462,\n        164,\n        163,\n        162,\n        162,\n        162,\n        162,\n        23,\n        23,\n        23,\n        24,\n        45,\n        45,\n        161,\n        162,\n        162,\n        36,\n        331,\n        340,\n        372,\n        32,\n        32,\n        32,\n        366,\n        162,\n        373,\n        162,\n        162,\n        34,\n        49,\n        162,\n        162,\n        161,\n        162,\n        162,\n        162,\n        52,\n        489,\n        488,\n        489,\n        32,\n        32,\n        36,\n        162,\n        162,\n        162,\n        162,\n        162,\n        162,\n        161,\n        162,\n        162,\n        162,\n        163,\n        163,\n        163,\n        162,\n        162,\n        32,\n        32,\n        32,\n        32,\n        33,\n        162,\n        85,\n        85,\n        169,\n        234,\n        32,\n        33,\n        14,\n        122,\n        122,\n        122,\n        14,\n        86,\n        140,\n        14,\n        85,\n        32,\n        32,\n        32,\n        36,\n        232,\n        322\n    ]\n}"
								}
							]
						},
						{
							"name": "AdvancedSearch",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/AdvancedSearch?literal=arcano&pageNo=0&pageSize=10&sortBy=id",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"Accounts",
										"AdvancedSearch"
									],
									"query": [
										{
											"key": "literal",
											"value": "arcano",
											"description": "Literal que se quiere buscar"
										},
										{
											"key": "pageNo",
											"value": "0",
											"description": "Página solicitada"
										},
										{
											"key": "pageSize",
											"value": "10",
											"description": "Número máximo de elementos resultantes"
										},
										{
											"key": "sortBy",
											"value": "id",
											"description": "Order by. (Valor por defecto id)"
										}
									]
								},
								"description": "Metodo de Búsqueda avanzada, Obtención de las posiciones asociadas al buscador avanzado."
							},
							"response": [
								{
									"name": "AdvancedSearch",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/AdvancedSearch?literal=arcano&pageNo=0&pageSize=10&sortBy=id",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"Accounts",
												"AdvancedSearch"
											],
											"query": [
												{
													"key": "literal",
													"value": "arcano",
													"description": "Literal que se quiere buscar"
												},
												{
													"key": "pageNo",
													"value": "0",
													"description": "Página solicitada"
												},
												{
													"key": "pageSize",
													"value": "10",
													"description": "Número máximo de elementos resultantes"
												},
												{
													"key": "sortBy",
													"value": "id",
													"description": "Order by. (Valor por defecto id)"
												}
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Mon, 02 May 2022 15:18:59 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"page\": 0,\n    \"size\": 122,\n    \"capitalComprometido\": \"2975000.0000\",\n    \"desembolsado\": \"984195.0000\",\n    \"distribuido\": \"653776.0000\",\n    \"detailAccountListeds\": [\n        {\n            \"accountName\": \"JUAN JOSE ALONSO PEREZ\",\n            \"ctaAriaId\": \"311bb1bd35874297248782931ad77649\",\n            \"idCtaAriaId\": \"5706\",\n            \"fechaAlta\": \"2021-10-12\",\n            \"desembolsado\": \"54525.0000\",\n            \"distribuído\": \"0.0000\",\n            \"capitalComprometido\": \"125000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n            \"dni\": [\n                \"01397607N\"\n            ],\n            \"codigoPostal\": [\n                \"09004\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"70475.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"MARTIN DE ABBAD FABRA\",\n            \"ctaAriaId\": \"6681597b0b21e4f6d87f0ccd5e95639a\",\n            \"idCtaAriaId\": \"1786\",\n            \"fechaAlta\": \"2019-06-11\",\n            \"desembolsado\": \"32620.0000\",\n            \"distribuído\": \"30600.0000\",\n            \"capitalComprometido\": \"100000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"dni\": [\n                \"05205197K\"\n            ],\n            \"codigoPostal\": [\n                \"28109\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"86480.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"MANUEL ANTONIO MENDIVIL BORRACHERO\",\n            \"ctaAriaId\": \"18181e842b365b53efc1f790b3ce0dd0\",\n            \"idCtaAriaId\": \"459\",\n            \"fechaAlta\": \"2023-03-10\",\n            \"desembolsado\": \"163100.0000\",\n            \"distribuído\": \"153000.0000\",\n            \"capitalComprometido\": \"500000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"dni\": [\n                \"05402111D\"\n            ],\n            \"codigoPostal\": [\n                \"28109\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"432400.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"LUCIA RAMOS GOMEZ-LUBEN\",\n            \"ctaAriaId\": \"b7273d0e502cfec89be3a84a25d8e6d1\",\n            \"idCtaAriaId\": \"3144\",\n            \"fechaAlta\": \"2018-05-03\",\n            \"desembolsado\": \"9786.0000\",\n            \"distribuído\": \"4776.0000\",\n            \"capitalComprometido\": \"30000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"dni\": [\n                \"04849709K\"\n            ],\n            \"codigoPostal\": [\n                \"29003\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"21540.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"JOSE LUIS DEL RIO GALAN\",\n            \"ctaAriaId\": \"55ef03485301f27dd5aa9139f07569ab\",\n            \"idCtaAriaId\": \"1498\",\n            \"fechaAlta\": \"2015-08-07\",\n            \"desembolsado\": \"163100.0000\",\n            \"distribuído\": \"153000.0000\",\n            \"capitalComprometido\": \"500000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"dni\": [\n                \"05270050Z\"\n            ],\n            \"codigoPostal\": [\n                \"28003\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"432400.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"EDUARDO FERNANDEZ-CUESTA LUCA DE TENA\",\n            \"ctaAriaId\": \"b24ad119d76c92506e11c152b82c1fce\",\n            \"idCtaAriaId\": \"3061\",\n            \"fechaAlta\": \"2015-08-07\",\n            \"desembolsado\": \"32620.0000\",\n            \"distribuído\": \"30600.0000\",\n            \"capitalComprometido\": \"100000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"dni\": [\n                \"05202675Y\"\n            ],\n            \"codigoPostal\": [\n                \"28016\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"86480.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"ARCANO ASESORES FINANCIEROS, S.L.\",\n            \"ctaAriaId\": \"a170031073f8014eb72aa0274a37455f\",\n            \"idCtaAriaId\": \"2778\",\n            \"fechaAlta\": \"2020-09-12\",\n            \"desembolsado\": \"251174.0000\",\n            \"distribuído\": \"184050.0000\",\n            \"capitalComprometido\": \"770000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"F\\\"\",\n            \"dni\": [\n                \"B83680322\"\n            ],\n            \"codigoPostal\": [\n                \"28006\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"614326.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"VICENTE BELTRAN ESCRIG\",\n            \"ctaAriaId\": \"30f1d9abf51e0593713211d7550ec329\",\n            \"idCtaAriaId\": \"865\",\n            \"fechaAlta\": \"2022-05-12\",\n            \"desembolsado\": \"81550.0000\",\n            \"distribuído\": \"28750.0000\",\n            \"capitalComprometido\": \"250000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n            \"dni\": [\n                \"18940054Z\"\n            ],\n            \"codigoPostal\": [\n                \"12003\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"168450.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"RECANTO INVERSIONES, S.L.\",\n            \"ctaAriaId\": \"90a19826efc9bdd1f42a500205108edd\",\n            \"idCtaAriaId\": \"2525\",\n            \"fechaAlta\": \"2017-04-05\",\n            \"desembolsado\": \"97860.0000\",\n            \"distribuído\": \"34500.0000\",\n            \"capitalComprometido\": \"300000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n            \"dni\": [\n                \"B72061104\"\n            ],\n            \"codigoPostal\": [\n                \"28010\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"202140.0000\",\n            \"products\": []\n        },\n        {\n            \"accountName\": \"INES SANCHEZ URZAINQUI | RAUL GARCIA ESCUDERO\",\n            \"ctaAriaId\": \"7cbf6d5e6fd977ddeed7e7e1a89ef622\",\n            \"idCtaAriaId\": \"2187\",\n            \"fechaAlta\": \"2020-03-10\",\n            \"desembolsado\": \"97860.0000\",\n            \"distribuído\": \"34500.0000\",\n            \"capitalComprometido\": \"300000.0000\",\n            \"productName\": \"ARCANO SPANISH VALUE ADDED REAL ESTATE II, SCA - SICAR   \\\"D\\\"\",\n            \"dni\": [\n                \"44620221Z\",\n                \"72807668H\"\n            ],\n            \"codigoPostal\": [\n                \"48992\",\n                \"48930\"\n            ],\n            \"pais\": [\n                \"ESPAÑA\"\n            ],\n            \"rm1\": \"ABELARDO DOMINGUEZ\",\n            \"rm2\": \"ABELARDO DOMINGUEZ\",\n            \"tipoCliente\": \"COMPAÑIAS DE SEGUROS\",\n            \"grupo\": \"\",\n            \"pdtDesembolso\": \"202140.0000\",\n            \"products\": []\n        }\n    ],\n    \"pdtDesembolso\": \"2316831.0000\"\n}"
								}
							]
						},
						{
							"name": "posicionIntegrada",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"accounts\":[{{body.accountList}}]\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionIntegrada",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"posicionIntegrada"
									]
								},
								"description": "```\nMetodo que obtiene la Posicion integrada de las cuentas seleccionadas para el usuario logueado, peticion realizada : POST METHOD.\n\n```"
							},
							"response": [
								{
									"name": "posicionIntegrada",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"accounts\":[{{body.accountList}}]\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionIntegrada",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"posicionIntegrada"
											]
										}
									},
									"status": "Bad Request",
									"code": 400,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 19:12:51 GMT"
										},
										{
											"key": "Connection",
											"value": "close"
										}
									],
									"cookie": [],
									"body": "{\n    \"timestamp\": \"2022-04-29T21:12:51.151+0200\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": \"JSON parse error: Cannot deserialize instance of `java.lang.String` out of START_OBJECT token; nested exception is com.fasterxml.jackson.databind.exc.MismatchedInputException: Cannot deserialize instance of `java.lang.String` out of START_OBJECT token\\n at [Source: (PushbackInputStream); line: 2, column: 17] (through reference chain: es.arcano.cca.core.dto.PosicionIntegradaRequest[\\\"accounts\\\"]->java.util.ArrayList[0])\",\n    \"path\": \"/arcano-cca/api/v1/userApi/posicionIntegrada\"\n}"
								}
							]
						},
						{
							"name": "posicionesUsuario",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"accounts\" : [{{body.accountList}}],\r\n    \"endDate\" : \"\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionesUsuario",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"posicionesUsuario"
									]
								},
								"description": "```\nA partir del usuario logueaddo, este metofo devuelve las fechas en las que tiene participaciones y los productos asociados con esas participaciones\nLa fecha es opcional. Si se usa se buscaran las posiciones anteirores a dicha fecha\nparametro : authentication\nretorna : Las posiciones que se pueden analizar hasta la fecha indicada \nHTTP Methos : POST\n\n```"
							},
							"response": [
								{
									"name": "posicionesUsuario",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"accounts\" : [{{body.accountList}}],\r\n    \"endDate\" : \"\"\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/posicionesUsuario",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"posicionesUsuario"
											]
										}
									},
									"status": "Bad Request",
									"code": 400,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 20:31:38 GMT"
										},
										{
											"key": "Connection",
											"value": "close"
										}
									],
									"cookie": [],
									"body": "{\n    \"timestamp\": \"2022-04-29T22:31:38.375+0200\",\n    \"status\": 400,\n    \"error\": \"Bad Request\",\n    \"message\": \"JSON parse error: Cannot deserialize instance of `java.lang.Long` out of START_OBJECT token; nested exception is com.fasterxml.jackson.databind.exc.MismatchedInputException: Cannot deserialize instance of `java.lang.Long` out of START_OBJECT token\\n at [Source: (PushbackInputStream); line: 2, column: 19] (through reference chain: es.arcano.cca.core.dto.PosicionesUsuarioRequest[\\\"accounts\\\"]->java.util.ArrayList[0])\",\n    \"path\": \"/arcano-cca/api/v1/userApi/posicionesUsuario\"\n}"
								}
							]
						}
					]
				},
				{
					"name": "Contactos",
					"item": [
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
											"value": "alfredo.limon@optimissa.com",
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
							"response": [
								{
									"name": "sendToken Contactos",
									"originalRequest": {
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
													"value": "alfredo.limon@optimissa.com",
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
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 22 Apr 2022 19:13:48 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\",\n    \"extraInfo\": \"Username : \\\"alfredo.limon@optimissa.com\\\"\"\n}"
								}
							]
						},
						{
							"name": "createContact Ok",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "test@opti.com",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/user/createContact",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"user",
										"createContact"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "createContact",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "email",
													"value": "test@opti.com",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/api/user/createContact",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"api",
												"user",
												"createContact"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 22 Apr 2022 16:19:40 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
						},
						{
							"name": "createContact KO",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "email",
											"value": "test@opti.comad",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/user/createContact",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"user",
										"createContact"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": []
						},
						{
							"name": "getContactInfoTest",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": ""
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/contact/getContactInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"contact",
										"getContactInfo"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "getContactInfoTest",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": ""
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/user/contact/getContactInfo",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"user",
												"contact",
												"getContactInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Date",
											"value": "Fri, 08 Jul 2022 13:01:39 GMT"
										},
										{
											"key": "Server",
											"value": "Apache/2.4.37 (centos)"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Keep-Alive",
											"value": "timeout=5, max=100"
										},
										{
											"key": "Connection",
											"value": "Keep-Alive"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										}
									],
									"cookie": [],
									"body": "[\n    {\n        \"initDate\": \"2022-05-24T08:27:36.527+0200\",\n        \"email\": \"rdiazcamps@gmail.com\",\n        \"lastName\": \"DIAZ\",\n        \"accountId\": 264,\n        \"productId\": 164,\n        \"endDate\": \"9999-01-12T00:00:00.000+0100\",\n        \"accountName\": \"RAUL DIAZ CAMPS\",\n        \"secondLastName\": \"CAMPS\",\n        \"productName\": \"ARCANO SECONDARY FUND XIV, FCR   \\\"A9\\\"\",\n        \"contactId\": 12,\n        \"name\": \"RAUL\"\n    },\n    {\n        \"initDate\": \"2022-07-05T20:41:12.483+0200\",\n        \"email\": \"alfredo.limon@optimissa.com\",\n        \"movil\": \"(0052) 000 000 001\",\n        \"lastName\": \"SANZ-BUSTILLO\",\n        \"accountId\": 264,\n        \"productId\": 164,\n        \"endDate\": \"9999-12-01T00:00:00.000+0100\",\n        \"accountName\": \"RAUL DIAZ CAMPS\",\n        \"secondLastName\": \"GARCIA\",\n        \"productName\": \"ARCANO SECONDARY FUND XIV, FCR   \\\"A9\\\"\",\n        \"contactId\": 9,\n        \"name\": \"MARIA DOLORES\"\n    },\n    {\n        \"initDate\": \"2022-07-06T20:30:40.577+0200\",\n        \"email\": \"prueba.a.contacto@test.com\",\n        \"lastName\": \"evidencia\",\n        \"accountId\": 2778,\n        \"productId\": 78,\n        \"endDate\": \"9999-12-01T00:00:00.000+0100\",\n        \"accountName\": \"ARCANO ASESORES FINANCIEROS, S.L.\",\n        \"secondLastName\": \"\",\n        \"productName\": \"ARCANO CAPITAL X, FCR   \\\"D\\\"\",\n        \"contactId\": 15,\n        \"name\": \"contacto\"\n    }\n]"
								}
							]
						},
						{
							"name": "createContactAndRelationTest",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"contacto\",\r\n    \"lastName\":\"evidencia\",\r\n    \"secondLastName\":\"\",\r\n    \"email\":\"prueba.a.contacto@test.com\",\r\n    \"accountsId\":[2778,2510],\r\n    \"productsId\":[78,331],\r\n    \"terminationDate\":\"01/12/9999\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/contact/createContact",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"contact",
										"createContact"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "createContactAndRelationTest",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"name\":\"contacto\",\r\n    \"lastName\":\"evidencia\",\r\n    \"secondLastName\":\"\",\r\n    \"email\":\"prueba.a.contacto@test.com\",\r\n    \"accountsId\":[2778,2510],\r\n    \"productsId\":[78,331],\r\n    \"terminationDate\":\"01/12/9999\"\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/user/contact/createContact",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"user",
												"contact",
												"createContact"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 08 Jul 2022 13:28:53 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
						},
						{
							"name": "updateTerminationDateTest",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											"var moment = require('moment');\r",
											"pm.variables.set('currentdate', moment().format((\"YYYY-MM-DD\")));"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "urlencoded",
									"urlencoded": [
										{
											"key": "contactId",
											"value": "15",
											"type": "text"
										},
										{
											"key": "accountId",
											"value": "2510",
											"type": "text"
										},
										{
											"key": "productId",
											"value": "331",
											"type": "text"
										},
										{
											"key": "terminationDate",
											"value": "{{currentdate}}",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/contact/updateTerminationDate",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"contact",
										"updateTerminationDate"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "updateTerminationDate Copy 2",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "urlencoded",
											"urlencoded": [
												{
													"key": "contactId",
													"value": "15",
													"type": "text"
												},
												{
													"key": "accountId",
													"value": "2510",
													"type": "text"
												},
												{
													"key": "productId",
													"value": "331",
													"type": "text"
												},
												{
													"key": "terminationDate",
													"value": "2022-07-06",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/user/contact/updateTerminationDate",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"user",
												"contact",
												"updateTerminationDate"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Fri, 08 Jul 2022 13:37:29 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
						}
					]
				},
				{
					"name": "Documentos",
					"item": [
						{
							"name": "userApi/documentos Test",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"accounts\": [],\r\n    \"initDate\": \"\",\r\n    \"endDate\": \"\",\r\n    \"literal\": \"\",\r\n    \"tiposDocumentos\": [],\r\n    \"onlyUnread\": false,\r\n    \"pageNo\": 9,\r\n    \"pageSize\": 15,\r\n    \"sortBy\": \"date\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/documentos",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"documentos"
									]
								},
								"description": "```\nMetodo que retorna Documentos asociados con las cuentas y productos seleccionados para el usuario logueado, el HTTP method aqui es POST.\n```"
							},
							"response": [
								{
									"name": "userApi/documentos Test",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"accounts\": [],\r\n    \"initDate\": \"\",\r\n    \"endDate\": \"\",\r\n    \"literal\": \"ARcano\",\r\n    \"tiposDocumentos\": [],\r\n    \"onlyUnread\": false,\r\n    \"pageNo\": 9,\r\n    \"pageSize\": 15,\r\n    \"sortBy\": \"d.date\"\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentos",
											"protocol": "http",
											"host": [
												"localhost"
											],
											"port": "8082",
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"documentos"
											]
										}
									},
									"status": "Internal Server Error",
									"code": 500,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Tue, 03 May 2022 09:11:36 GMT"
										},
										{
											"key": "Connection",
											"value": "close"
										}
									],
									"cookie": [],
									"body": "{\n    \"timestamp\": \"2022-05-03T11:11:36.216+0200\",\n    \"status\": 500,\n    \"error\": \"Internal Server Error\",\n    \"message\": \"org.hibernate.QueryException: could not resolve property: d of: es.arcano.cca.commons.model.DocumentModel [SELECT d FROM es.arcano.cca.commons.model.DocumentModel d  LEFT JOIN d.product p  WHERE (d.accountId IN (:accountsId) OR d.accountId IS NULL) AND d.productId IN (:productsId) AND d.stateId = :state AND (d.title LIKE :literal OR d.comments LIKE :literal OR p.name LIKE :literal) order by d.d.date desc]; nested exception is java.lang.IllegalArgumentException: org.hibernate.QueryException: could not resolve property: d of: es.arcano.cca.commons.model.DocumentModel [SELECT d FROM es.arcano.cca.commons.model.DocumentModel d  LEFT JOIN d.product p  WHERE (d.accountId IN (:accountsId) OR d.accountId IS NULL) AND d.productId IN (:productsId) AND d.stateId = :state AND (d.title LIKE :literal OR d.comments LIKE :literal OR p.name LIKE :literal) order by d.d.date desc]\",\n    \"path\": \"/arcano-cca/api/v1/userApi/documentos\"\n}"
								}
							]
						},
						{
							"name": "perform_login raul Login",
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
											"key": "username",
											"value": "rdiaz@arcanopartners.com",
											"type": "text"
										},
										{
											"key": "password",
											"value": "Arcano2021*",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login",
									"originalRequest": {
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
													"key": "username",
													"value": "middle_adp@arcanopartners.com",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "plain",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=8D513FD0A232DDE60292A92501DEC37E; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Content-Length",
											"value": "113"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 13:47:01 GMT"
										}
									],
									"cookie": [],
									"body": "{\"result\" : \"success\",\"user\" : \"middle_adp@arcanopartners.com\", \"timestamp\" : \"Fri Apr 29 15:47:01 CEST 2022\" }\r\n"
								}
							]
						},
						{
							"name": "perform_login ArcanoRE",
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
											"key": "username",
											"value": "ArcanoRE",
											"type": "text"
										},
										{
											"key": "password",
											"value": "Arcano2021*",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								}
							},
							"response": [
								{
									"name": "perform_login",
									"originalRequest": {
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
													"key": "username",
													"value": "middle_adp@arcanopartners.com",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "plain",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=8D513FD0A232DDE60292A92501DEC37E; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Content-Length",
											"value": "113"
										},
										{
											"key": "Date",
											"value": "Fri, 29 Apr 2022 13:47:01 GMT"
										}
									],
									"cookie": [],
									"body": "{\"result\" : \"success\",\"user\" : \"middle_adp@arcanopartners.com\", \"timestamp\" : \"Fri Apr 29 15:47:01 CEST 2022\" }\r\n"
								},
								{
									"name": "perform_login ArcanoRE",
									"originalRequest": {
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
													"key": "username",
													"value": "ArcanoRE",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "plain",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=612231F6DD01529E0222B827466DC526; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "Content-Length",
											"value": "92"
										},
										{
											"key": "Date",
											"value": "Thu, 05 May 2022 07:50:46 GMT"
										}
									],
									"cookie": [],
									"body": "{\"result\" : \"success\",\"user\" : \"ArcanoRE\", \"timestamp\" : \"Thu May 05 09:50:46 CEST 2022\" }\r\n"
								}
							]
						}
					]
				},
				{
					"name": "Estrategias",
					"item": [
						{
							"name": "api/v1/userApi/estrategiasCliente Copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/v1/userApi/estrategiasCliente",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"estrategiasCliente"
									]
								},
								"description": "Metodo usado para obtener el Detalle de la(s) estrategia(s) asociadas a la(s) cuenta(s) del clietnte logueado. Metodo HTTP : GET"
							},
							"response": [
								{
									"name": "api/v1/userApi/estrategiasCliente Copy",
									"originalRequest": {
										"method": "GET",
										"header": [],
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/v1/userApi/estrategiasCliente",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"v1",
												"userApi",
												"estrategiasCliente"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "Date",
											"value": "Wed, 18 May 2022 19:14:04 GMT"
										},
										{
											"key": "Server",
											"value": "Apache/2.4.37 (centos)"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Keep-Alive",
											"value": "timeout=5, max=100"
										},
										{
											"key": "Connection",
											"value": "Keep-Alive"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										}
									],
									"cookie": [],
									"body": "{\n    \"strategies\": [\n        {\n            \"names\": [\n                {\n                    \"language\": \"ES\",\n                    \"name\": \"Infraestructuras\"\n                },\n                {\n                    \"language\": \"EN\",\n                    \"name\": \"Infrastructures\"\n                }\n            ],\n            \"productIdList\": [\n                281,\n                312,\n                266,\n                122,\n                269,\n                121,\n                123\n            ]\n        },\n        {\n            \"names\": [\n                {\n                    \"language\": \"ES\",\n                    \"name\": \"Inmobiliario\"\n                },\n                {\n                    \"language\": \"EN\",\n                    \"name\": \"Real Estate\"\n                }\n            ],\n            \"productIdList\": [\n                205,\n                230,\n                228,\n                210,\n                232,\n                236\n            ]\n        },\n        {\n            \"names\": [\n                {\n                    \"language\": \"ES\",\n                    \"name\": \"Private Equity\"\n                },\n                {\n                    \"language\": \"EN\",\n                    \"name\": \"Private Equity\"\n                }\n            ],\n            \"productIdList\": [\n                163,\n                162,\n                147,\n                372,\n                106,\n                172,\n                75,\n                92,\n                86,\n                161,\n                103,\n                102,\n                77,\n                371,\n                394,\n                461,\n                85,\n                255,\n                339,\n                91,\n                383,\n                140,\n                374,\n                354,\n                373,\n                254,\n                256,\n                164,\n                253,\n                324,\n                74,\n                78,\n                132,\n                386,\n                322,\n                72,\n                109,\n                110,\n                104\n            ]\n        },\n        {\n            \"names\": [\n                {\n                    \"language\": \"ES\",\n                    \"name\": \"Crédito\"\n                },\n                {\n                    \"language\": \"EN\",\n                    \"name\": \"High Yield\"\n                }\n            ],\n            \"productIdList\": [\n                21,\n                49,\n                32,\n                4,\n                35,\n                24,\n                31,\n                36,\n                2,\n                47,\n                34,\n                45\n            ]\n        },\n        {\n            \"names\": [\n                {\n                    \"language\": \"ES\",\n                    \"name\": \"Multi-estrategia\"\n                },\n                {\n                    \"language\": \"EN\",\n                    \"name\": \"Multi-Strategy\"\n                }\n            ],\n            \"productIdList\": [\n                14\n            ]\n        },\n        {\n            \"names\": [\n                {\n                    \"language\": \"ES\",\n                    \"name\": \"Venture Capital\"\n                },\n                {\n                    \"language\": \"EN\",\n                    \"name\": \"Venture Capital\"\n                }\n            ],\n            \"productIdList\": [\n                188,\n                180,\n                331,\n                403,\n                179,\n                189,\n                187,\n                190,\n                290,\n                192\n            ]\n        }\n    ]\n}"
								}
							]
						}
					]
				},
				{
					"name": "Actualizacion de usuario API",
					"item": [
						{
							"name": "getUserData",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/getUserData",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"getUserData"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "getUserData",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/user/getUserData",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"user",
												"getUserData"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Tue, 24 May 2022 18:01:11 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"id\": 9,\n    \"email\": \"alfredo.limon@optimissa.com\",\n    \"phone\": \"(0034) 676 388 488\"\n}"
								}
							]
						},
						{
							"name": "sendValidationCode",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "formdata",
									"formdata": [
										{
											"key": "sendType",
											"value": "1",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/sendValidationCode",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"sendValidationCode"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "sendValidationCode",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "formdata",
											"formdata": [
												{
													"key": "sendType",
													"value": "1",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/user/sendValidationCode",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"user",
												"sendValidationCode"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Tue, 24 May 2022 18:02:06 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
						},
						{
							"name": "updateUserData",
							"request": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"id\":\"9\",\r\n    \"phone\" : \"\",\r\n    \"email\" : \"alfredo.limon@optimissa.com\",\r\n    \"validationCode\" : \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4RUNJNFMiLCJleHAiOjE2NTM0MTU5MjIsImlhdCI6MTY1MzQxNTMyMn0.AelhV1rkFJfGHeSqQGmBMedSjl9Kchboy9ZOR7_tKQbZl3zvMOjYtpt26q2Af_8Ru1kNoD4FoM3knifLVoM9OQ\",\r\n    \"password\" : \"\",\r\n    \"oldPassword\" : \"\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/api/user/updateInfo",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"api",
										"user",
										"updateInfo"
									]
								},
								"description": "```\nDetalle de posiciones de todas la cuentas, Detalle de posicion para la(s) cuenta(s) asociada(s) en la fecha pasada. Si no se indica la fecha, se toma la posición más reciente.\n```"
							},
							"response": [
								{
									"name": "updateUserData",
									"originalRequest": {
										"method": "POST",
										"header": [],
										"body": {
											"mode": "raw",
											"raw": "{\r\n    \"id\":\"9\",\r\n    \"phone\" : \"\",\r\n    \"email\" : \"alfredo.limon@optimissa.com\",\r\n    \"validationCode\" : \"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI4RUNJNFMiLCJleHAiOjE2NTM0MTU5MjIsImlhdCI6MTY1MzQxNTMyMn0.AelhV1rkFJfGHeSqQGmBMedSjl9Kchboy9ZOR7_tKQbZl3zvMOjYtpt26q2Af_8Ru1kNoD4FoM3knifLVoM9OQ\",\r\n    \"password\" : \"Arcano2021*\",\r\n    \"oldPassword\" : \"Arcano2021*\"\r\n}",
											"options": {
												"raw": {
													"language": "json"
												}
											}
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/api/user/updateInfo",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"api",
												"user",
												"updateInfo"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "json",
									"header": [
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Type",
											"value": "application/json;charset=UTF-8"
										},
										{
											"key": "Transfer-Encoding",
											"value": "chunked"
										},
										{
											"key": "Date",
											"value": "Tue, 24 May 2022 18:04:50 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"success\": true,\n    \"message\": \"Success\"\n}"
								}
							]
						},
						{
							"name": "Login_Usuario_8ECI4S",
							"event": [
								{
									"listen": "test",
									"script": {
										"exec": [
											""
										],
										"type": "text/javascript"
									}
								}
							],
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
											"key": "username",
											"value": "8ECI4S",
											"description": "nombre de usuario",
											"type": "text"
										},
										{
											"key": "password",
											"value": "Arcano2021*",
											"description": "clave del usuario",
											"type": "text"
										}
									]
								},
								"url": {
									"raw": "http://{{server}}/arcano-cca/perform_login",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"perform_login"
									]
								},
								"description": "Metodo usado para dar acceso a la API Comsulta. Establece el proceso de auntenticacion del usuario."
							},
							"response": [
								{
									"name": "Login_Usuario_8ECI4S",
									"originalRequest": {
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
													"key": "username",
													"value": "8ECI4S",
													"description": "nombre de usuario",
													"type": "text"
												},
												{
													"key": "password",
													"value": "Arcano2021*",
													"description": "clave del usuario",
													"type": "text"
												}
											]
										},
										"url": {
											"raw": "http://{{server}}/arcano-cca/perform_login",
											"protocol": "http",
											"host": [
												"{{server}}"
											],
											"path": [
												"arcano-cca",
												"perform_login"
											]
										}
									},
									"status": "OK",
									"code": 200,
									"_postman_previewlanguage": "plain",
									"header": [
										{
											"key": "Set-Cookie",
											"value": "JSESSIONID=E1E3C1FCA1C2CE868FC6B6DE3CF05965; Path=/arcano-cca; HttpOnly"
										},
										{
											"key": "X-Content-Type-Options",
											"value": "nosniff"
										},
										{
											"key": "X-XSS-Protection",
											"value": "1; mode=block"
										},
										{
											"key": "Cache-Control",
											"value": "no-cache, no-store, max-age=0, must-revalidate"
										},
										{
											"key": "Pragma",
											"value": "no-cache"
										},
										{
											"key": "Expires",
											"value": "0"
										},
										{
											"key": "X-Frame-Options",
											"value": "DENY"
										},
										{
											"key": "Content-Length",
											"value": "90"
										},
										{
											"key": "Date",
											"value": "Tue, 24 May 2022 18:10:01 GMT"
										}
									],
									"cookie": [],
									"body": "{\"result\" : \"success\",\"user\" : \"8ECI4S\", \"timestamp\" : \"Tue May 24 20:10:01 CEST 2022\" }\r\n"
								}
							]
						}
					]
				},
				{
					"name": "Usuarios",
					"item": []
				},
				{
					"name": "/users/api/usersManagement",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/users/api/usersManagement",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"users",
								"api",
								"usersManagement"
							]
						}
					},
					"response": [
						{
							"name": "/users/api/usersManagement",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://{{server}}/arcano-cca/users/api/usersManagement",
									"protocol": "http",
									"host": [
										"{{server}}"
									],
									"path": [
										"arcano-cca",
										"users",
										"api",
										"usersManagement"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "Date",
									"value": "Wed, 18 May 2022 20:01:15 GMT"
								},
								{
									"key": "Server",
									"value": "Apache/2.4.37 (centos)"
								},
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "X-XSS-Protection",
									"value": "1; mode=block"
								},
								{
									"key": "Cache-Control",
									"value": "no-cache, no-store, max-age=0, must-revalidate"
								},
								{
									"key": "Pragma",
									"value": "no-cache"
								},
								{
									"key": "Expires",
									"value": "0"
								},
								{
									"key": "X-Frame-Options",
									"value": "DENY"
								},
								{
									"key": "Content-Type",
									"value": "application/json;charset=UTF-8"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5, max=99"
								},
								{
									"key": "Connection",
									"value": "Keep-Alive"
								},
								{
									"key": "Transfer-Encoding",
									"value": "chunked"
								}
							],
							"cookie": [],
						}
					]
				},
				{
					"name": "/users/api/usersManagement ids",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/users/api/usersManagementIds",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"users",
								"api",
								"usersManagementIds"
							]
						}
					},
					"response": [
						{
							"name": "/users/api/usersManagement ids",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/users/api/usersManagementIds",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"usersManagementIds"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "X-XSS-Protection",
									"value": "1; mode=block"
								},
								{
									"key": "Cache-Control",
									"value": "no-cache, no-store, max-age=0, must-revalidate"
								},
								{
									"key": "Pragma",
									"value": "no-cache"
								},
								{
									"key": "Expires",
									"value": "0"
								},
								{
									"key": "X-Frame-Options",
									"value": "DENY"
								},
								{
									"key": "Content-Type",
									"value": "application/json;charset=UTF-8"
								},
								{
									"key": "Transfer-Encoding",
									"value": "chunked"
								},
								{
									"key": "Date",
									"value": "Fri, 29 Apr 2022 10:51:11 GMT"
								}
							],
							"cookie": [],
							"body": "[\n    \"rdiaz@arcanopartners.com\",\n    \"csarria\",\n    \"pablosanz@yahoo.com\",\n    \"jcepa@arcanopartners.com\",\n    \"ehunolt\",\n    \"egildesantivanes\",\n    \"Pierre Saenz\",\n    \"migueldorio@hotmail.com\",\n    \"rmiroquesada\",\n    \"Alberto\",\n    \"lrobledano@arcanopartners.com\",\n    \"isusaeta\",\n    \"toaddy\",\n    \"Jmallo\",\n    \"MVELASCO\",\n    \"558800\",\n    \"Pedro Hamparzoumian\",\n    \"smendes@arcanopartners.com\",\n    \"mcerero@arcanopartners.com\",\n    \"bchozas@arcanopartners.com\",\n    \"arubio@arcanopartners.com\",\n    \"jduran@bluebull.ventures\",\n    \"XMWP6W\",\n    \"alainuceda@bigdatil.com\",\n    \"operacionesespeciales@orientacapital.com\",\n    \"Ignacio.ruiz-Camara@allenovery.com\",\n    \"Luisaprietoalvarez\",\n    \"aderemedios\",\n    \"Rafapgf\",\n    \"15896195K\",\n    \"Ana Bolado\",\n    \"FERNANDO\",\n    \"14929972M\",\n    \"051096\",\n    \"J5PCXD\",\n    \"ALVARO74916021\",\n    \"61FBH1\",\n    \"Rzlarrea\",\n    \"MANOLO GARRIDO\",\n    \"carlosamselem\",\n    \"Maesje\",\n    \"LEPANT345\",\n    \"dominoneo\",\n    \"ARNavarro\",\n    \"5O0X7M\",\n    \"Martindeabbad\",\n    \"16028624Q\",\n    \"jjoaquim\",\n    \"28453190M\",\n    \"jferrus@gmail.com\",\n    \"Isabel70\",\n    \"Erredetres\",\n    \"72807668h\",\n    \"JUANPAS\",\n    \"Iprado\",\n    \"40955196Q\",\n    \"jordi_george@hotmail.com\",\n    \"FER010\",\n    \"conxitasimonmiranda@gmail.com\",\n    \"Ahuertas\",\n    \"14933242D\",\n    \"GabrielMHOZ\",\n    \"72480638\",\n    \"Borja Balanzategui\",\n    \"16295792Q\",\n    \"Juan Carrillo\",\n    \"Cesar20004@gmail.com\",\n    \"MAMIFERO1975\",\n    \"Rsimel\",\n    \"HEBTKG\",\n    \"xipeyra@economiates.com\",\n    \"Makatxeta\",\n    \"aremacham\",\n    \"26TG81\",\n    \"33992113E\",\n    \"jllopis@iese.edu\",\n    \"Arcano\",\n    \"MAA82Z\",\n    \"14920531\",\n    \"MAROTA\",\n    \"d.saezrodriguez@gmail.com\",\n    \"JAESTRADA1\",\n    \"manolorioscampo\",\n    \"23308704K\",\n    \"260886\",\n    \"15981045R\",\n    \"Toni1972\",\n    \"FSBHC0\",\n    \"jfrojo\",\n    \"lflarumbea\",\n    \"SContreras\",\n    \"38805946R\",\n    \"AJPNT7\",\n    \"manuel.cobodel@yahoo.es\",\n    \"ignaciomunozg\",\n    \"Martaram\",\n    \"bursanma@gmail.com\",\n    \"rocio@fernandezfuncia.com\",\n    \"JLDSGP\",\n    \"ASalvador\",\n    \"Bernie\",\n    \"francesco@admaiorem.com\",\n    \"karraska\",\n    \"jzu@zubicar.es\",\n    \"luisfgoula@telefonica.net\",\n    \"Jrodriguezfi@telefonica.net\",\n    \"SM0VEJ1\",\n    \"QW7Q5A\",\n    \"jmanzanares\",\n    \"igor.arrizabalaga@outlook.com\",\n    \"RAZNAR\",\n    \"NF22HT\",\n    \"878B8H\",\n    \"BieleteMamomo\",\n    \"CRPCEC\",\n    \"JAMALPA\",\n    \"8DJCKE\",\n    \"ignacio.ms@reimaninversiones.com\",\n    \"tecnico@jpilan.com\",\n    \"jbarrero\",\n    \"mbruix\",\n    \"34089669N\",\n    \"jacampos@notacor.com\",\n    \"baddigor@hotmail.com\",\n    \"44141151B\",\n    \"Horacio1\",\n    \"albertoplatz@gmail.com\",\n    \"Jose Antonio\",\n    \"Rubenfg\",\n    \"72452959S\",\n    \"ROTEDAMA\",\n    \"79RST80\",\n    \"SANSINENA1971\",\n    \"jurbea\",\n    \"alvaro.acebron@telefonica.net\",\n    \"matovarm\",\n    \"jbmarin\",\n    \"JVGS66\",\n    \"Txeja20\",\n    \"72032126J\",\n    \"jgcordon\",\n    \"ESPEL2021\",\n    \"992D7M\",\n    \"54024321N\",\n    \"8MNR4O\",\n    \"jvera@addvaloraglobal.com\",\n    \"ICALIF\",\n    \"00405375T\",\n    \"45624052X\",\n    \"sebas@koex.es\",\n    \"G48491880\",\n    \"soniapibrillas\",\n    \"O2XSFB\",\n    \"ArEsEv\",\n    \"05346752B\",\n    \"ayagüe\",\n    \"advilchez\",\n    \"Pilarcanigo\",\n    \"39032624Z\",\n    \"amuniz\",\n    \"PVQUIM\",\n    \"46109486Y\",\n    \"ENTREARROYOS-\",\n    \"jbatanero@outlook.com\",\n    \"Jose*1856=\",\n    \"JJMartin\",\n    \"mparra@kpmg.es\",\n    \"davidalty88\",\n    \"carlos92\",\n    \"lferrandiz@dnadigital.es\",\n    \"nalobera@hotmail,com\",\n    \"15775804N\",\n    \"Ramon68\",\n    \"B62954771\",\n    \"Ezoido\",\n    \"PaulDumont684\",\n    \"Ignacio F\",\n    \"Cristinaocio202@gmail.com\",\n    \"DrJMRO\",\n    \"IE01877\",\n    \"DINKA88\",\n    \"24763394F\",\n    \"CL2323\",\n    \"YOTOY6\",\n    \"todonuevo\",\n    \"fundacioncarmengandarias.com\",\n    \"jose352eg\",\n    \"FABREGAT\",\n    \"ealvargar\",\n    \"xispatrue\",\n    \"edetoro@fundacioncarmengandarias.com\",\n    \"JGarciaMoreno\",\n    \"77283423L\",\n    \"josemariasierra@laes.com\",\n    \"BUF8BU\",\n    \"fidelgo@telefonica.net\",\n    \"AJOVAL\",\n    \"JMCORCE\",\n    \"aruizblanco\",\n    \"648LG3\",\n    \"Jmgarrido\",\n    \"lodavila\",\n    \"jesusgalindo01@gmail.com\",\n    \"MERCEDES\",\n    \"NBAZ2B\",\n    \"albert@ventgraf.cat\",\n    \"ABURBANO\",\n    \"carmenlogoss@hotmail.com\",\n    \"theokreutzer@gmail.com\",\n    \"ACalsina\",\n    \"juanjo\",\n    \"14238597\",\n    \"AnderGuevara\",\n    \"richard.marsanse@gmail.com\",\n    \"sardinar\",\n    \"amigosderimkieta@gmail.com\",\n    \"17698556X\",\n    \"ANQN5G\",\n    \"JRamosCarrasco\",\n    \"PFTIL9\",\n    \"RESILIAN\",\n    \"15996285S\",\n    \"05357612S\",\n    \"LABRANTERRA\",\n    \"WIOVVB\",\n    \"quimbcn\",\n    \"Gabriel Rull\",\n    \"1VJD2T\",\n    \"RCortizo\",\n    \"Juanmanuelcrespo@barbinter.com\",\n    \"carmen.pascual@uria.com\",\n    \"35116478D\",\n    \"2R2642\",\n    \"KSL6966BZR\",\n    \"cesaragreda@live.com\",\n    \"rafafesta@movistar.es\",\n    \"jjarmero@gmail.com\",\n    \"Jmsanchez\",\n    \"50819469A\",\n    \"guillermo@besa.es\",\n    \"RoArca12\",\n    \"50024569Y\",\n    \"zozaya@ub.edu\",\n    \"pedrourreta@gmail.com\",\n    \"malabert\",\n    \"ESESOLESESOL\",\n    \"antonio_angalia@hotmail.com\",\n    \"miguelpuertas\",\n    \"14870873\",\n    \"felipepolo\",\n    \"05244412K\",\n    \"franrosber@gmail.com\",\n    \"45662492V\",\n    \"41081273F\",\n    \"1NRKCI\",\n    \"barandiaran.eduardo@gmail.com\",\n    \"sergioguerrerogomez@yahoo.es\",\n    \"UGOSM3\",\n    \"E44Z9X\",\n    \"Marconi\",\n    \"YGPSSV\",\n    \"DZEXPK\",\n    \"G54C6S\",\n    \"70V1BE\",\n    \"HRPZWR\",\n    \"iantriay@telefonica.net\",\n    \"C9ZUSI\",\n    \"565Z6U\",\n    \"dmata@quota.es\",\n    \"JM1U7O\",\n    \"05210077W\",\n    \"VJJKLH\",\n    \"RI9ZD5\",\n    \"Q7N62F\",\n    \"CG6ELI\",\n    \"00824015V\",\n    \"ZYC5VN\",\n    \"JM041S\",\n    \"5REDXK\",\n    \"OC7OS5\",\n    \"59CC3A\",\n    \"N859N8\",\n    \"37UOSP\",\n    \"13764212T\",\n    \"ZZ7CQP\",\n    \"serraj54@outlook.com\",\n    \"V4C0U9\",\n    \"4RDTAL\",\n    \"misionerascorazonmaria\",\n    \"JIEMUT\",\n    \"2B5RLI\",\n    \"16044626x\",\n    \"GUSTAVO@FPA.ES\",\n    \"luis.sala@aiqs.es\",\n    \"39646783G\",\n    \"PepLlados\",\n    \"22633386Y\",\n    \"INVERSIONESARCANO\",\n    \"fmonasterio@fundacionmonasterio.org\",\n    \"FJ.DIEZJUAREZ@GMAIL.COM\",\n    \"raulburgosacn@gmail.com\",\n    \"urjxrku\",\n    \"Eulàlia\",\n    \"rtorres950@yahoo.es\",\n    \"ricard.torres\",\n    \"16035519B\",\n    \"38526jimazv\",\n    \"46310514Z\",\n    \"cescgresa@gmail.com\",\n    \"29710934V\",\n    \"julius1441@gmail.com\",\n    \"mario@aitenet.com\",\n    \"javierArcano\",\n    \"ILinaza\",\n    \"Josep Ingles\",\n    \"21447426H\",\n    \"pacolopez\",\n    \"avadxrb\",\n    \"SOLING\",\n    \"carlos.llamazares@gmail.com\",\n    \"implica\",\n    \"TALDEA INALPE\",\n    \"MARIA LLUCH\",\n    \"monfortsenar@gmail.com\",\n    \"U126888\",\n    \"ilcantero\",\n    \"GENTARESPAÑA\",\n    \"francescdepablo@gmail.com\",\n    \"8IS6YQ\",\n    \"simon.amselem@disney.com\",\n    \"llobetguim@gmail.com\",\n    \"jcebey@nolabey.com\",\n    \"B64222862\",\n    \"felipe.andonegui@gmail.com\",\n    \"vgh.proseur@gmail.com\",\n    \"011079\",\n    \"DBW1R0\",\n    \"Lola2019\",\n    \"javiermatesanzsa@hotmail.com\",\n    \"vdelriogalan@gmail.com\",\n    \"Eugenio\",\n    \"cherosil\",\n    \"jordi-rigau@telefonica.net\",\n    \"adiezhandino\",\n    \"PI4HGP\",\n    \"SPGCOS\",\n    \"Mafecaro\",\n    \"NUR8KY\",\n    \"72749385V\",\n    \"53356543Q\",\n    \"josediaz@asesoriadiaz.es\",\n    \"JALAEZ\",\n    \"21771075B\",\n    \"rovIraFelius63&\",\n    \"ARABER\",\n    \"RobertoSantos07\",\n    \"28375325H\",\n    \"rgmpba\",\n    \"37366397\",\n    \"ANARCANO\",\n    \"alex.terme\",\n    \"T097YL\",\n    \"DSMI4J\",\n    \"marildss@hotmail.com\",\n    \"ja_ponsseres@grn.es\",\n    \"D0M1N0\",\n    \"cristinapriyanka@gmail.com\",\n    \"39869442T\",\n    \"JCMAMPASO@SIGRE.ES\",\n    \"roman60\",\n    \"iglesiasme@outlook.es\",\n    \"HERVAS\",\n    \"abel@espaidinversions.com\",\n    \"josemariapassola@gmail.com\",\n    \"JMmuñoz\",\n    \"lasuenjoseramon@gmail.com\",\n    \"bealodu\",\n    \"A2GFY6\",\n    \"villarcar@gmail.com\",\n    \"535557\",\n    \"rralonso@hotmail.com\",\n    \"Olsoca\",\n    \"LEHPCP\",\n    \"santiagosolanas\",\n    \"52718082N\",\n    \"jamorcill@hotmail.com\",\n    \"fernandito\",\n    \"00362844L\",\n    \"clara.torres@hotmail.es\",\n    \"JMBIRRIBARRIA\",\n    \"Juanra74\",\n    \"47654775V\",\n    \"16027201L\",\n    \"mays77\",\n    \"motorrami@gmail.com\",\n    \"IYbarra\",\n    \"50057029J\",\n    \"tmasip@yahoo.es\",\n    \"19995996A\",\n    \"Cpascual\",\n    \"jm1930@gmail.com\",\n    \"W6PI1U\",\n    \"rrddff\",\n    \"05378983L\",\n    \"MagicChorla\",\n    \"jdc@javierdelcampo.com\",\n    \"danielyaraceli@gmail.com\",\n    \"marcos@talleresmorte.com\",\n    \"RH4836\",\n    \"2857023D\",\n    \"R0LH3L\",\n    \"F2OXI3\",\n    \"al_cuallado@msn.com\",\n    \"Sacael123\",\n    \"IPCQN6\",\n    \"77895384L\",\n    \"eskmobel@gmail.com\",\n    \"jcolas@valorensalud.es\",\n    \"HOMT2E\",\n    \"L9TL3Y\",\n    \"anamariamendavia@hotmail.com\",\n    \"Adelita03\",\n    \"INAKII\",\n    \"isaroca@gmail.com\",\n    \"78076035m\",\n    \"ARCANOJ\",\n    \"alfa666\",\n    \"adame.martinez@gmail.com\",\n    \"2BRULD\",\n    \"Ceugenio\",\n    \"carmensp54@gmail.com\",\n    \"equevedo@arcanopartners.com\",\n    \"cenece\",\n    \"44612731E\",\n    \"plozano\",\n    \"vicentefr@telefonica.net\",\n    \"lanajupi\",\n    \"REPALU\",\n    \"X530ZR\",\n    \"40960664X\",\n    \"pasvanugar@hotmail.com\",\n    \"amarrieta09\",\n    \"JCABEDO\",\n    \"Manuel Pereda\",\n    \"mperez@telefonica.net\",\n    \"H5LMO7\",\n    \"REUS01\",\n    \"Arkano\",\n    \"jlmanez\",\n    \"araGon01\",\n    \"albmaguirre@gmail.com\",\n    \"xavier.blasco@gmail.com\",\n    \"90SDVE\",\n    \"pcambas@etl.es\",\n    \"4WVUZ6\",\n    \"ge@eldrachersl.es\",\n    \"Alf-73\",\n    \"jacoboroa2@gmail.com\",\n    \"VENTURA\",\n    \"Juancarlos.ruizlopez@gmail.com \",\n    \"33876241R\",\n    \"joeida\",\n    \"lubri@telefonica.net\",\n    \"vicente.estrada@gmail.com\",\n    \"ZamoraD\",\n    \"teremanel\",\n    \"DGILGARCIA\",\n    \"aurorachavez@sevilla.es\",\n    \"bs3171@telefonica.net\",\n    \"MANUGL\",\n    \"gestcap@gestcap.es\",\n    \"imari@uoc.edu\",\n    \"jcnabal@inabesa.com\",\n    \"4GRTOC\",\n    \"feprados\",\n    \"OLEAGA\",\n    \"oriolrafanell@gmail.com\",\n    \"94RBFC\",\n    \"EGallego\",\n    \"ifernandez\",\n    \"Rauldv14\",\n    \"VLJAAP\",\n    \"cgomez@arcanopartners.com\",\n    \"magdaseuva@gmail.com\",\n    \"THL0E3\",\n    \"ANADEQUESADA\",\n    \"CMP1965\",\n    \"santander\",\n    \"Chazas\",\n    \"36892549C\",\n    \"egiro@giro.es\",\n    \"15805568Z\",\n    \"BFalcones\",\n    \"juanemilio\",\n    \"mcta62\",\n    \"1S74MD\",\n    \"beatrizdurfer\",\n    \"luismarimm@gmail.com\",\n    \"HRZ48V\",\n    \"Fernandel\",\n    \"ELVIRAMR\",\n    \"Maite77\",\n    \"37308555W\",\n    \"JavierGeis\",\n    \"Fgaspar0\",\n    \"06936098B\",\n    \"CAPODEVILA\",\n    \"damb91\",\n    \"36174334\",\n    \"ANDBANK\",\n    \"15785292R\",\n    \"LUCILA\",\n    \"01183196F\",\n    \"JUBIMA\",\n    \"Contabilidad\",\n    \"sassola\",\n    \"JMLX49\",\n    \"18947500P\",\n    \"cmenendezc\",\n    \"MGArcano\",\n    \"mmangada\",\n    \"3VSPUE\",\n    \"ZLKNKP\",\n    \"6MMFCM\",\n    \"cindy.pang\",\n    \"jgalceran@regex.es\",\n    \"PIGASOL\",\n    \"bruno.perez@orpecom.es\",\n    \"bperera@nayox.com\",\n    \"46108751F\",\n    \"raulpisano@gmail.com\",\n    \"ingelmo1945@yahoo.es\",\n    \"pugaplano@gmail.com\",\n    \"Luis Mas\",\n    \"14908886x\",\n    \"icapital\",\n    \"bbva-pensiones\",\n    \"mconcepcion\",\n    \"9YTAOJ\",\n    \"38991621C\",\n    \"B0RR4B\",\n    \"jc@royalfil.com\",\n    \"jarquerons\",\n    \"MOME_INVESTMENTS\",\n    \"EVA CODINA\",\n    \"SantiagoLes\",\n    \"37302336\",\n    \"PabloVillanueva\",\n    \"44684064D\",\n    \"santiagoproust@outlook.es\",\n    \"mmcmiralles@gmail.com\",\n    \"amorosarbaiza\",\n    \"37680186E\",\n    \"JULIOGS\",\n    \"carlosfisch\",\n    \"OKN36Q\",\n    \"37644797F\",\n    \"B61708160\",\n    \"SABADELL\",\n    \"torres@claretianos.es\",\n    \"FIIMAZ18\",\n    \"VG2KQ5\",\n    \"ghasesorepatrimonial\",\n    \"Mario1957\",\n    \"72490668G\",\n    \"alfons.calderon@alumni.esade.edu\",\n    \"pmezza\",\n    \"50669683q\",\n    \"Caixa_Arcano\",\n    \"renta4\",\n    \"vgutierrez@swalali.com\",\n    \"eloy@clavofoodfactory.com\",\n    \"ItaloDurazzo\",\n    \"john@gacjac.com\",\n    \"ndiezhandino@gmail.com\",\n    \"JJAlonso\",\n    \"ACTIVECOMPASS\",\n    \"TALENTA\",\n    \"UCTNTW\",\n    \"TR5N1F\",\n    \"aperezdura\",\n    \"35090514N\",\n    \"jzsaiz68\",\n    \"AncesMei\",\n    \"37316484L\",\n    \"PE975E\",\n    \"Robelop\",\n    \"JDSCapital\",\n    \"ROCIOGE1\",\n    \"FXRAGULL\",\n    \"jsanchism@gmail.com\",\n    \"IUssía\",\n    \"FJFACAS\",\n    \"welzia\",\n    \"Wealthsolutions\",\n    \"adhocasesores\",\n    \"norzpatrimonia\",\n    \"obdulia.agustin@gmail.com\",\n    \"02690846\",\n    \"mtlcarbo2014@gmail.com\",\n    \"cmazoy@plastifer.es\",\n    \"climens\",\n    \"presijager\",\n    \"LABRAXGUSTAVO\",\n    \"LABRAXPABLO\",\n    \"LABRAXEVA\",\n    \"joseandr@yahoo.es\",\n    \"LW6FIF\",\n    \"71337995E\",\n    \"flab12\",\n    \"Eduardo63\",\n    \"Avanzacapital\",\n    \"Tressis\",\n    \"Y8W20A\",\n    \"miguelunzalu\",\n    \"FQUESADA\",\n    \"ybarra.ig@gmail.com\",\n    \"VMLDHI\",\n    \"TPPLVI\",\n    \"2706965A\",\n    \"anagalles\",\n    \"aznarpatrimonio\",\n    \"Rsanchezmoran@gmail.com\",\n    \"iarregui13@hotmail.com\",\n    \"AFSFinance\",\n    \"LouridoPartners\",\n    \"KuanCapital\",\n    \"14958739E\",\n    \"18915523R\",\n    \"cestevan\",\n    \"CATsocarrats\",\n    \"goicobil@gmail.com\",\n    \"jviladot001@cofb.net\",\n    \"fhenares@telefonica.net\",\n    \"enceca\",\n    \"semunoguera@gmail.com\",\n    \"B50049576\",\n    \"chervera@minsait.com\",\n    \"rogelio fuertes\",\n    \"77286988l\",\n    \"Pedro1957!\",\n    \"mmozolobato@gmail.com\",\n    \"blarda47\",\n    \"santi_castella@yahoo.es\",\n    \"geguiagaray@arcanopartners.com\",\n    \"rz@zubiri.biz\",\n    \"B9HBA9\",\n    \"2812Arcano\",\n    \"ecelorio\",\n    \"JC19RO\",\n    \"Brimtec\",\n    \"aroviraj\",\n    \"G46220206\",\n    \"alexbelaus\",\n    \"antonio mañas\",\n    \"JORDIAM\",\n    \"jmtarratsf@yahoo.es\",\n    \"14940472\",\n    \"U4OIH2\",\n    \"infelix@inverin.net\",\n    \"mfuvel@gmail.com\",\n    \"F9M8PI\",\n    \"potelesueco\",\n    \"B61675013\",\n    \"Facedo\",\n    \"nina@nimbly.es\",\n    \"fernando.arruga@webespai.com\",\n    \"Z87SNL\",\n    \"elisabetgarriga.mizuki.spain@gmail.com\",\n    \"jdelrio\",\n    \"aleonlambea@gmail.com\",\n    \"josemariabach@yahoo.es\",\n    \"spyph@telefonica.net\",\n    \"Mjmartinez\",\n    \"monicabettschen@gmail.com\",\n    \"alexander.economon@gmail.com\",\n    \"43795217C\",\n    \"HT2R8M\",\n    \"CSUSALA\",\n    \"16027952B\",\n    \"MZE7P7\",\n    \"jordigonzalezsegura@hotmail.com\",\n    \"B83588665\",\n    \"270S47\",\n    \"JavierPerea\",\n    \"jcamacho\",\n    \"gcarrero\",\n    \"72320Rch\",\n    \"JRetolaza\",\n    \"FRNAXV\",\n    \"fpascual\",\n    \"JBONET\",\n    \"Munartis\",\n    \"jorge cobian\",\n    \"MDM2022\",\n    \"gnanclares\",\n    \"G9C4EE\",\n    \"fflucientes\",\n    \"camilo@1930\",\n    \"05389145s\",\n    \"pllpllmm@googlemail.com\",\n    \"1531TI\",\n    \"csolerduffo@gmail.com\",\n    \"ManuelArcano\",\n    \"23221367S\",\n    \"LUR5553\",\n    \"jiazpiroz\",\n    \"JoanCervera\",\n    \"apolanco@iies.es\",\n    \"jegomola\",\n    \"BI26598\",\n    \"charo.magarzo@gmail.com\",\n    \"VLANDALUCE\",\n    \"Sofia-Arcano\",\n    \"osfortis@telefonica.net\",\n    \"Titorace\",\n    \"cristina-robles@telefonica.net\",\n    \"ardosia inversiones\",\n    \"PEDRSA\",\n    \"SGSGGIG\",\n    \"rsalvatierraarrano@gmail.com\",\n    \"jmalvarez@ymail.com\",\n    \"24746203C\",\n    \"duacsol@hotmail.com\",\n    \"quintana.paco@hotmail.com\",\n    \"TQ6HYA\",\n    \"nacho.somalo@gmail.com\",\n    \"r.gonzalez@barcelo.com\",\n    \"srotellar@hotmail.com\",\n    \"jordi.giro@enginyers.net\",\n    \"mmatheu@bcmtributaris.com\",\n    \"carmengmeana\",\n    \"j.tc@telefonica.net\",\n    \"victor.manchado@linklaters.com\",\n    \"marina@basculassanz.es\",\n    \"vmarliza@gmail.com\",\n    \"alfredo.limon@optimissa.com\",\n    \"test@opti.com\",\n    \"TEST\",\n    \"asdf\",\n    \"qwer\",\n    \"zxcv\",\n    \"pou\",\n    \"asdfasdf\",\n    \"asdfasdfasdf\",\n    \"oaisbdvgf\",\n    \"qwerty\",\n    \"zxcvb\",\n    \"poiu\",\n    \"ñlkj\",\n    \"asdf;\",\n    \"sdfg\",\n    \"a\",\n    \"gfnadreb\",\n    \"b\",\n    \"aisdhbaifbrveqaiy\",\n    \"yuiop\",\n    \"dsfg\",\n    \"bgdf\",\n    \"erty\",\n    \"xcvb\",\n    \"tre\",\n    \"tres\",\n    \"adbgnf\",\n    \"dyjhnsz\",\n    \"nrgbds\",\n    \"psm pgobnpvonesv\",\n    \"asdfoievbaiubvoewbfv\",\n    \"asdfoieubvfouvhywefbo9\",\n    \"aoiwerhfboawuvy\",\n    \"bponjdfavqeibh\",\n    \"u4eiwboq9v\",\n    \"qwerbthebouasw\",\n    \"brvgfa\",\n    \"ebrvhaw\",\n    \"rwoibgnowae\"\n]"
						}
					]
				},
				{
					"name": "api/v1/userApi/Accouts/BasicSearch",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://{{server}}/arcano-cca/api/v1/userApi/Accounts/BasicSearch?literal=AR",
							"protocol": "http",
							"host": [
								"{{server}}"
							],
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"userApi",
								"Accounts",
								"BasicSearch"
							],
							"query": [
								{
									"key": "literal",
									"value": "AR"
								}
							]
						}
					},
					"response": [
						{
							"name": "api/v1/userApi/Accouts/BasicSearch",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts/BasicSearch?literal=AR",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"userApi",
										"Accounts",
										"BasicSearch"
									],
									"query": [
										{
											"key": "literal",
											"value": "AR"
										}
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Content-Type-Options",
									"value": "nosniff"
								},
								{
									"key": "X-XSS-Protection",
									"value": "1; mode=block"
								},
								{
									"key": "Cache-Control",
									"value": "no-cache, no-store, max-age=0, must-revalidate"
								},
								{
									"key": "Pragma",
									"value": "no-cache"
								},
								{
									"key": "Expires",
									"value": "0"
								},
								{
									"key": "X-Frame-Options",
									"value": "DENY"
								},
								{
									"key": "Content-Type",
									"value": "application/json;charset=UTF-8"
								},
								{
									"key": "Transfer-Encoding",
									"value": "chunked"
								},
								{
									"key": "Date",
									"value": "Fri, 29 Apr 2022 11:34:21 GMT"
								}
							],
							"cookie": [],
							"body": "{\n    \"timestamp\": \"2022-04-29T13:34:21.719+0200\",\n    \"status\": 403,\n    \"error\": \"Forbidden\",\n    \"message\": \"Forbidden\",\n    \"path\": \"/arcano-cca/api/v1/userApi/Accounts/BasicSearch\"\n}"
						}
					]
				}
			]
		},
		{
			"name": "perform_login",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							""
						],
						"type": "text/javascript"
					}
				}
			],
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
							"key": "username",
							"value": "alfredo.test",
							"description": "nombre de usuario",
							"type": "text"
						},
						{
							"key": "password",
							"value": "Arcano2021*",
							"description": "clave del usuario",
							"type": "text"
						}
					]
				},
				"url": {
					"raw": "http://{{server}}/arcano-cca/perform_login",
					"protocol": "http",
					"host": [
						"{{server}}"
					],
					"path": [
						"arcano-cca",
						"perform_login"
					]
				},
				"description": "Metodo usado para dar acceso a la API Comsulta. Establece el proceso de auntenticacion del usuario."
			},
			"response": []
		},
		{
			"name": "perform_logout",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://{{server}}/arcano-cca/perform_logout?",
					"protocol": "http",
					"host": [
						"{{server}}"
					],
					"path": [
						"arcano-cca",
						"perform_logout"
					],
					"query": [
						{
							"key": "",
							"value": ""
						}
					]
				},
				"description": "Metodo usado para dar el cierre de sesion."
			},
			"response": []
		},
		{
			"name": "is_authenticated",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "urlencoded",
					"urlencoded": []
				},
				"url": {
					"raw": "http://{{server}}/arcano-cca/security/isAuthenticated",
					"protocol": "http",
					"host": [
						"{{server}}"
					],
					"path": [
						"arcano-cca",
						"security",
						"isAuthenticated"
					]
				},
				"description": "Metodo usado para retornar resultado de acceso del usuario al aplicativo, si es true accede sino no puede acceder al sistema."
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					"pm.test(\"Status code is 200\", function () {",
					"    pm.response.to.have.status(200);",
					"});",
					"pm.test(\"Successful POST request\", function () {",
					"    pm.expect(pm.response.code).to.be.oneOf([201, 202]);",
					"});",
					"pm.test(\"Response time is less than 200ms\", function () {",
					"    pm.expect(pm.response.responseTime).to.be.below(200);",
					"});"
				]
			}
		}
	],
	"variable": [
		{
			"key": "server",
			"value": "localhost:8082",
			"type": "string"
		},
		{
			"value": "",
			"type": "string",
			"disabled": true
		}
	]
}