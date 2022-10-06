-Inicio -> isAuthenticated , perform_login

LOGIN -> isAunthenticated

# OPERACIONES

- latest

## Gestor de operaciones -> product_accounts

generar registros -> calculateTotals

## Gestor compromiso -> getProducts
Nombre fondo -> getAccounts?idProduct= (num)

.Traspaso de titularidad
Fecha -> product_accounts

Cuenta de origen -> obtainInfo , targets
Calcular saldtos (btn) -> calculateBalances

.Gestión de opreaciones -> operationTypes
Buscar (btn) -> search

# GESTOR DOCUMENTAL

.Inserccion de documentos -> recipientTypes, latest, states, categories
Cargar documentos (btn) ->uploadGenericDocument

.Visor de documentos -> recipientTypes, latest, states, categories, search

# MANTENIMIENTO

- products-prices ------- saveData

  Inicial de carteras -> <code>new-accounts?search=&pageNo=0&pageSize=10</code>
  Generar registros (btn) -> generateRegisters
  Err -> obtainInfo
  Cargar registros (btn) -> saveData

.Precios -> currencies
Guardar precio -> create
Delete(icon) -> delete
Todos los precios ( btn) -> product-prices

.Gestion de usuarios -> *profiles, *obtainInfo

.Registro de usuarios -> <code>\*profiles, rolesApi, accounts_paged?search=&pageNo=0&pageSize=7</code>
Usuarios -> obtainApiInfoSearch
Enviar -> create

.Validar datos de inversores
Validar (btn) -> <code>update, notProcessed, profiles</code>

.Categorizaciones -> <code>categorizations-products, latest, components-categorizations </code>
Crear categorización (btn) -> create, categorizations-products
Guardar cambios (btn) -> create, categorizations-products
Borrar (item) -> delete, categorizations-products

.Métricas -> <code>metrics-products, metrics, latest</code>
Crear métrica (btn) -> create, metrics-products
Guardar métrica (btn) -> create, metrics-products
Borrar (item) -> delete, metrics-products

.Carga manual -> <code>data-loaders</code>
Enviar (btn) -> file
