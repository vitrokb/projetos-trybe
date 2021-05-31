SELECT c.ContactName AS `Nome de contato`, IF((o.ShipperID = 1), 'Speedy Express', 'United Package') AS `Empresa que fez o envio`,
o.OrderDate AS `Data do pedido`
FROM w3schools.customers AS c
INNER JOIN w3schools.orders AS o
ON o.CustomerID = c.CustomerID
WHERE o.ShipperID = 1 OR o.ShipperID = 2
ORDER BY `Nome de contato`, `Empresa que fez o envio`, `Data do pedido`;
