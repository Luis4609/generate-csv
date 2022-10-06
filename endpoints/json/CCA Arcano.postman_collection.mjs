export const ccaArcano = {
	"info": {
		"_postman_id": "00cfb59b-99e8-467f-9bd4-48c736280165",
		"name": "CCA Arcano",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "23669636"
	},
	"items": [
		{
			"name": "Escenario1",
			"item": [
				{
					"name": "perform_login Tribeca Arcano Copy",
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
							"raw": "http://localhost:8082/arcano-cca/perform_login?username=rdiaz@arcanopartners.com&password=Arcano2021*",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8082",
							"path": [
								"arcano-cca",
								"perform_login"
							],
							"query": [
								{
									"key": "username",
									"value": "rdiaz@arcanopartners.com"
								},
								{
									"key": "password",
									"value": "Arcano2021*"
								}
							]
						},
						"description": "Metodo usado para dar acceso a la API Comsulta. Establece el proceso de auntenticacion del usuario."
					},
					"response": []
				},
				{
					"name": "is_authenticated Copy",
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
							"raw": "http://localhost:8082/arcano-cca/security/isAuthenticated?=",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8082",
							"path": [
								"arcano-cca",
								"security",
								"isAuthenticated"
							],
							"query": [
								{
									"key": null,
									"value": "",
									"description": "\n"
								}
							]
						},
						"description": "Metodo usado para retornar resultado de acceso del usuario al aplicativo, si es true accede sino no puede acceder al sistema."
					},
					"response": []
				},
				{
					"name": "perform_logout Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/perform_logout?=",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8082",
							"path": [
								"arcano-cca",
								"perform_logout"
							],
							"query": [
								{
									"key": null,
									"value": ""
								}
							]
						},
						"description": "Metodo usado para dar el cierre de sesion."
					},
					"response": []
				},
				{
					"name": "api/v1/getInfo Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/getInfo?=",
							"protocol": "http",
							"host": [
								"localhost"
							],
							"port": "8082",
							"path": [
								"arcano-cca",
								"api",
								"v1",
								"getInfo"
							],
							"query": [
								{
									"key": null,
									"value": ""
								}
							]
						},
						"description": "Metodo usado para obtener la Informacion detallada del usuario, Obtención de la información básica asociada con el usuario logueado."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accounts Copy",
					"request": {
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
						},
						"description": "Metodo usado Retorna un Listado de cuentas. Obtención de las cuentas asociadas al usuario logueado."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accounts/BasicInformation Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts/BasicInformation",
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
								"BasicInformation"
							]
						},
						"description": "Obtención de los datos para el buscador basico y los valores acumulativos del usuario logueado, retorna una lista de cuentas, con datos de nombres de las cuentas."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/Accouts/AdvancedSearch Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts/AdvancedSearch?literal=ARCANO&pageNo=0&pageSize=10&sortBy=id",
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
								"AdvancedSearch"
							],
							"query": [
								{
									"key": "literal",
									"value": "ARCANO",
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
					"response": []
				},
				{
					"name": "api/v1/userApi/descarga_documentos Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentos/16046",
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
								"documentos",
								"16046"
							],
							"query": [
								{
									"key": "documentId",
									"value": "16046",
									"description": "EL Id del documento, es opcional.",
									"disabled": true
								}
							]
						},
						"description": "Metodo diseñado para Descarga del documento indicado como parámetro. Metodo HTTP GET."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/documentos/categorias Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentos/categorias",
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
								"documentos",
								"categorias"
							]
						},
						"description": "Metodo diseñado para obtener Categorias de documentos asociados con las cuentas seleccionadas para el usuario logueado. Metodo HTTP GET. Recibe como parametro la autenticacion del usuario."
					},
					"response": []
				},
				{
					"name": "api/v1/userApi/estrategiasCliente Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/estrategiasCliente",
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
								"estrategiasCliente"
							]
						},
						"description": "Metodo usado para obtener el Detalle de la(s) estrategia(s) asociadas a la(s) cuenta(s) del clietnte logueado. Metodo HTTP : GET"
					},
					"response": []
				},
				{
					"name": "userApi/posicionIntegrada Copy",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"accounts\":[],\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/posicionIntegrada",
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
								"posicionIntegrada"
							]
						},
						"description": "```\nMetodo que obtiene la Posicion integrada de las cuentas seleccionadas para el usuario logueado, peticion realizada : POST METHOD.\n\n```"
					},
					"response": []
				},
				{
					"name": "userApi/posicionesUsuario Copy",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"endDate\" : \"\"\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/posicionesUsuario",
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
								"posicionesUsuario"
							]
						},
						"description": "```\nA partir del usuario logueaddo, este metofo devuelve las fechas en las que tiene participaciones y los productos asociados con esas participaciones\nLa fecha es opcional. Si se usa se buscaran las posiciones anteirores a dicha fecha\nparametro : authentication\nretorna : Las posiciones que se pueden analizar hasta la fecha indicada \nHTTP Methos : POST\n\n```"
					},
					"response": []
				},
				{
					"name": "userApi/detallePosicion Copy",
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
							"raw": "http://192.168.1.41:8082/arcano-cca/api/v1/userApi/detallePosicion",
							"protocol": "http",
							"host": [
								"192",
								"168",
								"1",
								"41"
							],
							"port": "8082",
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
					"response": []
				},
				{
					"name": "createContact Copy",
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
					"name": "getUserData Copy",
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
					"name": "updateUserData Copy",
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
					"name": "userApi/documentos Copy",
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
				},
				{
					"name": "documentsUnread Copy",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentos/documentsUnread",
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
								"documentos",
								"documentsUnread"
							]
						},
						"description": "```\nMetodo diseñado para obtener el numero de documentos no leidos, con este se obtiene el total de documentos no leidos por usuario, metodo HTTP : POST\n\n```"
					},
					"response": []
				},
				{
					"name": "updateReadingStatus Copy",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"method": "GET",
						"header": [],
						"body": {
							"mode": "formdata",
							"formdata": [
								{
									"key": "docLeidoId",
									"value": "50",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/documentos/updateReadingStatus?docLeidoId=50",
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
								"documentos",
								"updateReadingStatus"
							],
							"query": [
								{
									"key": "docLeidoId",
									"value": "50"
								}
							]
						},
						"description": "```\nActualiza a leido el documento.\n```"
					},
					"response": []
				}
			]
		},
		{
			"name": "rest ws",
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
											"key": "Set-Cookie",
											"value": "JSESSIONID=D6493CC72B31DC931EABE592D06446B0; Path=/arcano-cca; HttpOnly"
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
											"value": "94"
										},
										{
											"key": "Date",
											"value": "Tue, 19 Apr 2022 15:20:28 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"result\": \"success\",\n    \"user\": \"usuariodev\",\n    \"timestamp\": \"Tue Apr 19 17:20:28 CEST 2022\"\n}"
								},
								{
									"name": "perform_login_error",
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
													"value": "usuariodev2",
													"type": "text"
												},
												{
													"key": "password",
													"value": "usuariodev2",
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
											"value": "Wed, 20 Apr 2022 07:27:20 GMT"
										}
									],
									"cookie": [],
									"body": "{\n    \"result\": \"error\",\n    \"message\": \"User not found or inactive user\",\n    \"timestamp\": \"Wed Apr 20 09:27:20 CEST 2022\"\n}"
								}
							]
						},
						{
							"name": "perform_logout localhost",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/perform_logout",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"perform_logout"
									]
								}
							},
							"response": []
						},
						{
							"name": "is_authenticated local",
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
									"raw": "http://localhost:8082/arcano-cca/security/isAuthenticated",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"security",
										"isAuthenticated"
									]
								}
							},
							"response": []
						},
						{
							"name": "product_accounts/accounts local Copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/product_accounts/accounts",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product_accounts",
										"accounts"
									]
								}
							},
							"response": []
						},
						{
							"name": "product_accounts/rolesApi local Copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/product_accounts/rolesApi",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product_accounts",
										"rolesApi"
									]
								}
							},
							"response": []
						},
						{
							"name": "/users/api/usersManagement local Copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/users/api/usersManagement",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"usersManagement"
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/getInfo",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/getInfo",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"api",
										"v1",
										"getInfo"
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/userApi/Accounts",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts",
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
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/userApi/Accounts/AdvancedSearch?dateIni copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts/AdvancedSearch?dateIni=2020-03-12&dateFin=2020-03-15",
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
										"AdvancedSearch"
									],
									"query": [
										{
											"key": "dateIni",
											"value": "2020-03-12"
										},
										{
											"key": "dateFin",
											"value": "2020-03-15"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/userApi/Accounts/BasicInformation",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts/BasicInformation",
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
										"BasicInformation"
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/userApi/Accounts/BasicSearch ej producto",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/Accounts/BasicSearch?literal=Arcano Global Opportunity Fund II, FCR",
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
											"value": "Arcano Global Opportunity Fund II, FCR"
										}
									]
								}
							},
							"response": []
						},
						{
							"name": "api/v1/userApi/AccountsAnalizeDetallePosicion",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/api/v1/userApi/AccountsAnalizeDetallePosicion?accounts=1,2,3",
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
										"AccountsAnalizeDetallePosicion"
									],
									"query": [
										{
											"key": "accounts",
											"value": "1,2,3"
										}
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Product & Accounts",
					"item": [
						{
							"name": "products Copy",
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/products",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"products"
									]
								}
							},
							"response": []
						},
						{
							"name": "accounts paged Copy",
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
							"response": []
						},
						{
							"name": "accounts Copy",
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/accounts",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"accounts"
									]
								}
							},
							"response": []
						},
						{
							"name": "last_products copy",
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
									"raw": "http://localhost:8082/arcano-cca/products/latest",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"products",
										"latest"
									]
								}
							},
							"response": []
						},
						{
							"name": "new-all-accounts Copy",
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
									"raw": "http://localhost:8082/arcano-cca/accounts/new-all",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
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
							"name": "get all accounts paged Copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/accounts/new-accounts?search=MANU&pageNo=0&pageSize=15",
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
											"value": "MANU"
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
							"response": []
						}
					]
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/capital-calls/calculateTotals",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"capital-calls",
										"calculateTotals"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/capital-calls/saveData",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"capital-calls",
										"saveData"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/distributions/calculateTotals",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"distributions",
										"calculateTotals"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/distributions/saveData",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"distributions",
										"saveData"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "{\r\n   \"productId\":\"56\",\r\n   \"totalReturnAmount\":\"200\",\r\n   \"recallable\":false,\r\n   \"date\":\"2021-04-12\",\r\n   \"participantAccounts\":[\r\n      {\r\n         \"accountName\":\"CAJA LABORAL POPULAR, SOC .COOP. DE CREDITO\",\r\n         \"accountId\":\"4709086ef4c7c58431d03ae3a8768ee1\",\r\n         \"paf\":0\r\n      }\r\n   ]\r\n}"
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/capital_returns/calculateTotals",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"capital_returns",
										"calculateTotals"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/capital_returns/calculateTotals",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"capital_returns",
										"calculateTotals"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/capital_returns/saveData",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"capital_returns",
										"saveData"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/overpayment_returns/calculateTotals",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"overpayment_returns",
										"calculateTotals"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/overpayment_returns/saveData",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"overpayment_returns",
										"saveData"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/participating_positions/generateRegisters",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"generateRegisters"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/participating_positions/saveData",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"saveData"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/participating_positions/obtainInfo",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"obtainInfo"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/participating_positions/updatePositions",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"updatePositions"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/participating_positions/transfer/calculateBalances",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"transfer",
										"calculateBalances"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/participating_positions/transfer/saveData",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"transfer",
										"saveData"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/product_accounts/targets",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product_accounts",
										"targets"
									]
								}
							},
							"response": []
						},
						{
							"name": "last-updating-info",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/participating_positions/last-updating-info",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"participating_positions",
										"last-updating-info"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/catalogs/operationTypes",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"operationTypes"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/catalogs/categories",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"categories"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/catalogs/recipientTypes",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"recipientTypes"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/catalogs/states",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"states"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/catalogs/profiles",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"profiles"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/catalogs/currencies",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"currencies"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/catalogs/data-loaders",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"data-loaders"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/operations/search",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"operations",
										"search"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/operations/remove",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"operations",
										"remove"
									]
								}
							},
							"response": []
						}
					]
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
											"type": "text"
										},
										{
											"key": "tittle",
											"value": "AEIF - Folleto del fondo",
											"type": "text"
										},
										{
											"key": "comments",
											"value": "Folleto del fondo ARCANO EARTH FUND, FCR",
											"type": "text"
										},
										{
											"key": "productId",
											"value": "3",
											"type": "text"
										},
										{
											"key": "stateId\n",
											"value": "1",
											"type": "text"
										},
										{
											"key": "categoryId\n",
											"value": " 1",
											"type": "text"
										},
										{
											"key": "recipientTypeId",
											"value": "1",
											"type": "text"
										},
										{
											"key": "files",
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
									"raw": "http://localhost:8082/arcano-cca/documents/uploadDocuments",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"documents",
										"uploadDocuments"
									]
								}
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
											"type": "text"
										},
										{
											"key": "titleEs",
											"value": "Prueba carga",
											"type": "text"
										},
										{
											"key": "titleEn",
											"value": "Load test",
											"type": "text"
										},
										{
											"key": "comments",
											"value": "Test del fondo ARCANO SECONDARY FUND II",
											"type": "text"
										},
										{
											"key": "productId",
											"value": "146",
											"type": "text"
										},
										{
											"key": "stateId\n",
											"value": "1",
											"type": "text"
										},
										{
											"key": "categoryId\n",
											"value": "2",
											"type": "text"
										},
										{
											"key": "files",
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
									"raw": "http://localhost:8082/arcano-cca/documents/uploadGenericDocument",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"documents",
										"uploadGenericDocument"
									]
								}
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
									"raw": "{\r\n\t\r\n}"
								},
								"url": {
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/documents/search",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"documents",
										"search"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "{\n\t\"username\":\"test\"\n}",
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
							"response": []
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
									"raw": "http://localhost:8082/arcano-cca/users/getUsersName",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"getUsersName"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/users/update",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"update"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/users/create",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"create"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/users/api/resendPassword",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"resendPassword"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/users/api/create",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"create"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/users/api/update",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"update"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/users/api/delete",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"delete"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/fx",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"fx"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/fx/create",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"fx",
										"create"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/fx/update",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"fx",
										"update"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/fx/delete",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"fx",
										"delete"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/prices",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"prices"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/prices/create",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"prices",
										"create"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/prices/update",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"prices",
										"update"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/prices/delete",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"prices",
										"delete"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://localhost:8082/arcano-cca/product-prices",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product-prices"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/product-prices/create",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product-prices",
										"create"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/product-prices/update",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product-prices",
										"update"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/product-prices/delete",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"product-prices",
										"delete"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/product-prices/prices_by_product",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/categorizations-products",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"categorizations-products"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/categorizations-products/create",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"categorizations-products",
										"create"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/categorizations/create",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"categorizations",
										"create"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/categorizations-products/update",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"categorizations-products",
										"update"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/categorizations-products/delete",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"categorizations-products",
										"delete"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://192.168.1.78/arcano-cca/metrics",
									"protocol": "http",
									"host": [
										"192",
										"168",
										"1",
										"78"
									],
									"path": [
										"arcano-cca",
										"metrics"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/metrics-products",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"metrics-products"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/metrics-products/create",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"metrics-products",
										"create"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/metrics-products/update",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"metrics-products",
										"update"
									]
								}
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
									"raw": "http://optiportmx05.optimissa.into:8082/arcano-cca/metrics-products/delete",
									"protocol": "http",
									"host": [
										"optiportmx05",
										"optimissa",
										"into"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"metrics-products",
										"delete"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "{\n\t\"dataLoader\":\"ACCOUNTS\",\n\t\"filePath\":\"C:\\\\app\\\\arcano-cca\\\\input\\\\Cuentas_2020_07_26.csv\"\n}"
								},
								"url": {
									"raw": "http://localhost:8082/arcano-cca/data-load",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"data-load"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/data-load/file",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"data-load",
										"file"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/catalogs/data-loaders",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"catalogs",
										"data-loaders"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "UserApiManagement",
					"item": [
						{
							"name": "/users/api/usersManagement",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/users/api/usersManagement",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"users",
										"api",
										"usersManagement"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Investor",
					"item": [
						{
							"name": "investor/notProcessed Copy",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/investor/notProcessed?identifier=00041156D",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"investor",
										"notProcessed"
									],
									"query": [
										{
											"key": "identifier",
											"value": "00041156D"
										}
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/investor/update",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"investor",
										"update"
									]
								}
							},
							"response": []
						}
					]
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
									"raw": "http://localhost:8082/arcano-cca/compromiso/getProducts",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"compromiso",
										"getProducts"
									]
								}
							},
							"response": []
						},
						{
							"name": "compromiso/getAccounts",
							"request": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "http://localhost:8082/arcano-cca/compromiso/getAccounts?idProduct=33",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"compromiso",
										"getAccounts"
									],
									"query": [
										{
											"key": "idProduct",
											"value": "33"
										}
									]
								}
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
									"raw": "http://192.168.102.161:8083/arcano-cca/compromiso/addCompromiso",
									"protocol": "http",
									"host": [
										"192",
										"168",
										"102",
										"161"
									],
									"port": "8083",
									"path": [
										"arcano-cca",
										"compromiso",
										"addCompromiso"
									]
								}
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
									"raw": "http://localhost:8082/arcano-cca/compromiso/deleteCompromiso",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"compromiso",
										"deleteCompromiso"
									]
								}
							},
							"response": []
						},
						{
							"name": "compromiso/deleteCompromiso copy",
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
									"raw": "http://localhost:8082/arcano-cca/compromiso/editCompromiso",
									"protocol": "http",
									"host": [
										"localhost"
									],
									"port": "8082",
									"path": [
										"arcano-cca",
										"compromiso",
										"editCompromiso"
									]
								}
							},
							"response": []
						}
					]
				}
			]
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
					"});"
				]
			}
		}
	]
}