create database tamc;
use tamc;

DROP TABLE IF EXISTS `configuracoes`;
CREATE TABLE IF NOT EXISTS `configuracoes` (
  `id_config` int NOT NULL AUTO_INCREMENT,
  `cpu` varchar(255) DEFAULT NULL,
  `precoCpu` float DEFAULT NULL,
  `placamae` varchar(255) DEFAULT NULL,
  `precoPlacamae` float DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `precoRam` float DEFAULT NULL,
  `placavideo` varchar(255) DEFAULT NULL,
  `precoPlacavideo` float DEFAULT NULL,
  `discorigido` varchar(255) DEFAULT NULL,
  `precoDiscorigido` float DEFAULT NULL,
  `ssd` varchar(255) DEFAULT NULL,
  `precoSsd` float DEFAULT NULL,
  `cooler` varchar(255) DEFAULT NULL,
  `precoCooler` float DEFAULT NULL,
  `fonte` varchar(255) DEFAULT NULL,
  `precoFonte` float DEFAULT NULL,
  `gabinete` varchar(255) DEFAULT NULL,
  `precoGabinete` float DEFAULT NULL,
  `id` int DEFAULT NULL,
  PRIMARY KEY (`id_config`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=139 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `configuracoes`
--

INSERT INTO `configuracoes` (`id_config`, `cpu`, `precoCpu`, `placamae`, `precoPlacamae`, `ram`, `precoRam`, `placavideo`, `precoPlacavideo`, `discorigido`, `precoDiscorigido`, `ssd`, `precoSsd`, `cooler`, `precoCooler`, `fonte`, `precoFonte`, `gabinete`, `precoGabinete`, `id`) VALUES
(135, 'Ryzen 3 3200G', 600, 'A320M ASRock', 429.9, '8GB-HyperX Fury 2666Mhz', 194.92, 'null', 0, 'Hd 1TB Seagate Barracuda 7200 Rpm', 269.9, 'Ssd 240GB Kingston A400', 128.99, 'null', 0, 'Redragon RGPS-400W 80 Plus', 279.9, 'Gabinete Office Alseye Haoffice', 149.9, 45),
(137, 'Ryzen 3 3200G', 600, 'B450M ASUS PRIME', 659.91, '4GB-Crucial 2666Mhz', 100, 'null', 0, 'Hd 1TB Seagate Barracuda 7200 Rpm', 269.9, 'null', 0, 'null', 0, 'Corsair TX550M 80 Plus Gold 550W', 630.99, 'Gabinete Gamer Pichau LARK', 492.52, 42),
(138, 'Ryzen 5 4500', 499.9, 'B450M ASUS PRIME', 659.91, '(2x16) 16GB-T-Force Vulcan 3200Mhz', 898, 'Gigabyte GTX 1660 Super OC 6GB', 1599.99, 'Hd 1TB Seagate Barracuda 7200 Rpm', 269.9, 'Ssd 1TB PNY CS900', 514.89, 'Water Cooler Rise Mode Frost', 329, 'Cooler Master G700 80 Plus Gold', 600, 'Gabinete Gamer Pichau LARK', 492.52, 46);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cooler`
--

DROP TABLE IF EXISTS `cooler`;
CREATE TABLE IF NOT EXISTS `cooler` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `cooler`
--

INSERT INTO `cooler` (`id`, `nome`, `consumo`, `preco`) VALUES
(1, 'Water Cooler Corsair H60', 100, 354),
(2, 'Gamer Rise Mode X1', 10, 19.9),
(3, 'Cooler Rise Mode Gamer G200', 25, 23.9),
(4, 'Cooler Master Hyper 212 ARGB', 25, 179.9),
(5, 'Cooler Master Masterliquid ML360L V2 ARGB', 250, 699.9),
(8, 'Cooler Rise Mode Z2', 75, 26.9),
(9, 'Cooler Rise Mode G800', 130, 86.9),
(10, 'Water Cooler Rise Mode Gamer Black', 180, 415),
(11, 'Water Cooler Rise Mode Frost', 250, 329),
(12, 'Cooler Rise Mode Z1', 25, 29.9),
(13, 'Cooler Rise Mode Gamer Z4', 100, 41),
(14, 'Cooler Master MasterAir MA620P', 200, 329.9),
(15, 'Cooler Master Hyper H410R', 115, 149),
(16, 'Cooler Master Hyper T200', 40, 79.9),
(17, 'Cooler deepCool gammaxx 400 V2', 15, 99.9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `cpu`
--

DROP TABLE IF EXISTS `cpu`;
CREATE TABLE IF NOT EXISTS `cpu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `soquete` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  `integrada` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `cpu`
--

INSERT INTO `cpu` (`id`, `nome`, `soquete`, `consumo`, `preco`, `integrada`) VALUES
(1, 'i5-10400f', 'lga-1200', 65, 959.99, 'nao'),
(2, 'i7-10700f', 'lga-1200', 65, 1919.2, 'nao'),
(3, 'Ryzen 5 5600X', 'am4', 65, 1129, 'nao'),
(4, 'Ryzen 3 3200G', 'am4', 65, 600, 'sim'),
(5, 'i3-12100f', 'lga-1700', 58, 639, 'nao'),
(6, 'Ryzen 5 4500', 'am4', 65, 499.9, 'nao'),
(7, 'Ryzen 5 4600G', 'am4', 65, 600, 'sim'),
(8, 'Ryzen 7 5700X', 'am4', 65, 1190, 'nao'),
(10, 'Intel Pentium Gold G7400', 'lga-1700', 46, 509, 'sim'),
(11, 'Intel Pentium Gold G6405', 'lga-1200', 58, 359.9, 'sim'),
(12, 'Intel Core i5 11400F', 'lga-1200', 65, 859.9, 'nao'),
(13, 'Athlon 3000G', 'am4', 35, 349.9, 'sim'),
(14, 'Intel Celeron G6900 ', 'lga-1700', 46, 479.9, 'sim'),
(15, 'Ryzen 3 4100', 'am4', 65, 659.99, 'nao'),
(16, 'I5-12400', 'lga-1700', 65, 1249.9, 'sim');

-- --------------------------------------------------------

--
-- Estrutura da tabela `discorigido`
--

DROP TABLE IF EXISTS `discorigido`;
CREATE TABLE IF NOT EXISTS `discorigido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `discorigido`
--

INSERT INTO `discorigido` (`id`, `nome`, `consumo`, `preco`) VALUES
(1, 'Hd 1TB Seagate Barracuda 7200 Rpm', 15, 269.9),
(2, 'Hd 1TB WD Blue 7200 Rpm', 15, 312.29),
(3, 'Hd 2TB Seagate Barracuda 7200 Rpm', 15, 299.99),
(4, 'Hd 2tb WD Purple 7200 Rpm', 15, 389.99),
(5, 'Hd 4TB WD Purple 7200 Rpm', 15, 1094.98),
(7, 'HD 4TB IronWolf 7200Rpm', 15, 499.99),
(8, 'HD 2TB Purple Surveillance 5400Rpm', 15, 549.99),
(9, 'HD 1TB Western Digital 7200Rpm', 15, 309.9),
(10, 'HD 1TB SATA 7200Rpm', 15, 359.9),
(11, '4TB Hd wd clack', 15, 1200),
(12, '8TB Hd wd blue', 45, 1799.9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `discossd`
--

DROP TABLE IF EXISTS `discossd`;
CREATE TABLE IF NOT EXISTS `discossd` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `discossd`
--

INSERT INTO `discossd` (`id`, `nome`, `consumo`, `preco`) VALUES
(1, 'Ssd 240GB Kingston A400', 15, 128.99),
(2, 'Ssd 240GB Crucial BX500', 15, 135.89),
(3, 'Ssd 480GB WD Green', 15, 409.99),
(4, 'Ssd 512GB ADATA SU750', 15, 419.99),
(5, 'Ssd 1TB PNY CS900', 15, 514.89),
(7, 'Ssd 1TB SATA III', 15, 409.9),
(8, 'Ssd 480Gb Kingsin A400', 15, 199.9),
(9, 'Ssd 1TB T-Force Vulca G', 15, 579.9),
(10, 'Ssd pnt CS900 120GB', 15, 92.9),
(11, 'ssd 128GB lexar ns100 ', 15, 74.99),
(12, 'Ssd 120gb duex black series dx', 15, 170),
(13, 'Ssd 240gb wd green', 15, 239.9),
(14, '960gb Ssd Kingston A400', 15, 418.99),
(15, '256gb Ssd Zadak', 15, 160),
(16, '512GB Ssd Kingston KC600', 15, 525.99);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fontealimentacao`
--

DROP TABLE IF EXISTS `fontealimentacao`;
CREATE TABLE IF NOT EXISTS `fontealimentacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `tamanho` varchar(255) DEFAULT NULL,
  `potencia` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `fontealimentacao`
--

INSERT INTO `fontealimentacao` (`id`, `nome`, `tamanho`, `potencia`, `preco`) VALUES
(1, 'Corsair TX550M 80 Plus Gold 550W', 'ATX', 550, 630.99),
(2, 'Cooler Master Plus White 600W', 'ATX', 600, 534.75),
(3, 'CV650 80 Plus Bronze 650W', 'ATX', 650, 429.99),
(4, 'Corsair 80 Plus Gold 650W', 'ATX', 650, 927.08),
(5, 'EVGA  80 Plus White 700W', 'ATX', 700, 359.99),
(6, 'Redragon RGPS-400W 80 Plus', 'ATX', 400, 279.9),
(7, 'Cougar BXM850 80 Plus Bronze', 'ATX', 850, 700),
(8, 'Corsair CX750M', 'ATX', 750, 660),
(9, 'Cooler Master G700 80 Plus Gold', 'ATX', 700, 600),
(10, 'Corsair VS500 80 Plus White', 'ATX', 500, 328),
(11, 'Cooler Master V1000 1000w', 'ATX', 1000, 1379.89),
(12, 'Aigo Warrior AK500', 'ATX', 500, 160),
(13, 'Pichau Gaming Nidus 500W 80 Plus Bronze', 'ATX', 500, 298.9),
(14, 'Deepcool PQ1000M ', 'ATX', 1000, 1429.9),
(15, 'Azaa 650W RGB 80 Plus Bronze', 'ATX', 600, 320);

-- --------------------------------------------------------

--
-- Estrutura da tabela `gabinete`
--

DROP TABLE IF EXISTS `gabinete`;
CREATE TABLE IF NOT EXISTS `gabinete` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `tamanhos` varchar(255) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `gabinete`
--

INSERT INTO `gabinete` (`id`, `nome`, `tamanhos`, `preco`) VALUES
(1, 'Gabinete Gamer Pichau HX300', 'mATX|itx', 169.9),
(2, 'Gabinete Gamer Pichau LARK', 'mATX|ATX|mini-itx', 492.52),
(3, 'Gabinete Gamer Pichau APUS RGB', 'mATX|ATX|mini-itx', 299),
(4, 'Gabinite Gamer Aigo Darkflash Pollux', 'ATX', 219.9),
(5, 'Gabinete Nzxt H510I ', 'mini-itx|ATX|mATX', 879.89),
(6, 'Gabinete tgt B110', 'mATX', 129),
(7, 'Gabinete Gamer Redragon Wheeljack', 'ATX|mini-itx|mATX', 500),
(8, 'GABINETE GMERA Redragon Demolisher', 'E-ATX|ATX|mATX|mini-itx', 969.9),
(9, 'Gabinete Gamer Pichau HX300', 'mATX|itx', 189.9),
(10, 'Gabinete Gamer Deepcool CH510', 'mini-itx|mATX|ATX|E-ATX', 589.9),
(11, 'Gabinete Cooler Master Cosmos C700M', 'mini-itx|mATX|ATX|E-ATX', 4400.9),
(12, 'Gabinete Gamer Alseye Auro', 'mini-itx|mATX|ATX', 239.89),
(13, 'Gabinete Office Alseye Haoffice', 'mini-itx|mATX|ATX', 149.9),
(14, 'Gabinete Tgt Rebel', 'itx|mATX', 126.9),
(15, 'Gabinete Tgt G250', 'mATX', 119.9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `memoriaram`
--

DROP TABLE IF EXISTS `memoriaram`;
CREATE TABLE IF NOT EXISTS `memoriaram` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `memoriaram`
--

INSERT INTO `memoriaram` (`id`, `nome`, `consumo`, `preco`) VALUES
(1, '4GB-Crucial 2666Mhz', 2, 100),
(2, '8GB-HyperX Fury 2666Mhz', 3, 194.92),
(3, '8GB-Adata Xpg 3200Mhz', 3, 276.99),
(5, '16GB-T-Force Vulcan 3200Mhz', 6, 449),
(6, '(2x16) 16GB-T-Force Vulcan 3200Mhz', 12, 898),
(8, '8GB XPG Spectriz 3200Mhz', 3, 199.99),
(9, '8GB Kigston Fury 3200Mhz', 3, 199.99),
(10, '8GB Gamer Husky 2666Mhz', 6, 269.9),
(11, '(2X16gb) XPG Lancer  5200Mhz', 12, 1.699),
(12, '4GB HyperX Fury 2400Mhz', 2, 150.5),
(13, '(2X4gb) Corsair vengance', 3, 336.91),
(14, '8GB Adata xpg hunter 2666Mhz', 3, 281.5),
(15, '(2X16gb) Team groupt T-create classic 3200Mhz', 12, 936),
(16, '(2X16gb) adata xpg gammix d30', 12, 881.96),
(17, '8GB Crucial 3200Mhz', 3, 190.31);

-- --------------------------------------------------------

--
-- Estrutura da tabela `placamae`
--

DROP TABLE IF EXISTS `placamae`;
CREATE TABLE IF NOT EXISTS `placamae` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `soquete` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `tamanho` varchar(255) DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `placamae`
--

INSERT INTO `placamae` (`id`, `nome`, `soquete`, `consumo`, `tamanho`, `preco`) VALUES
(1, 'H510M ASUS PRIME', 'lga-1200', 70, 'ATX', 729.9),
(2, 'B560M AOUROS ELITE', 'lga-1200', 60, 'mATX', 1399.91),
(3, 'B450M ASUS PRIME', 'am4', 60, 'mATX', 659.91),
(4, 'A320M ASRock', 'am4', 60, 'mATX', 429.9),
(5, 'H610M ASUS PRIME', 'lga-1700', 60, 'mATX', 600),
(6, 'B550M ASUS TUF GAMING', 'am4', 60, 'mATX', 1079.9),
(7, 'Z690GTA BIOSTAR', 'lga-1700', 80, 'ATX', 2700.9),
(8, 'A520M-E ASUS PRIME', 'am4', 60, 'mATX', 559),
(9, 'X570-A MSI', 'am4', 70, 'ATX', 2099.98),
(10, 'H410MH BIOSTAR', 'lga-1200', 60, 'mATX', 599.9),
(11, 'Z790 GIGABYTE', 'lga-1700', 80, 'ATX', 3699.9),
(12, 'B660M GIGABYTE', 'lga-1700', 70, 'mATX', 1699.91),
(13, 'H510MH BIOSTAR', 'lga-1200', 60, 'mATX', 559.98),
(14, 'A520M MANCER ', 'am4', 60, 'mATX', 399.9),
(15, 'B450M GIGABYTE', 'am4', 60, 'mATX', 659.9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `placavideo`
--

DROP TABLE IF EXISTS `placavideo`;
CREATE TABLE IF NOT EXISTS `placavideo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `consumo` int DEFAULT NULL,
  `preco` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `placavideo`
--

INSERT INTO `placavideo` (`id`, `nome`, `consumo`, `preco`) VALUES
(1, 'Asus NVIDIA GeForce GTX 1650 4GB', 100, 1459),
(2, 'Galax GeForce RTX 3060 12GB', 170, 2249),
(3, 'Gigabyte GTX 1660 Super OC 6GB', 120, 1599.99),
(4, 'MSI NVIDIA GeForce RTX 3050 8GB', 130, 2064),
(5, 'Gigabyte Radeon RX 6500 XT 4GB', 107, 1299),
(6, 'Pcyes RX 550 4GB', 65, 689),
(7, 'Zotac Geforce GTX 1630 4GB', 75, 999),
(8, 'Mancer GEFORCE GTX 1060 3GB', 120, 1049.9),
(9, 'Saphire RX 6600 XT PULSE OC 8GB', 170, 2700),
(10, 'Asus Radeon RX 6750 XT 12GB', 250, 4209),
(11, 'Zotac GEFORCE RTX 3070 8GB', 220, 3700.9),
(12, 'Gainward GEFORCE GT 1030 2GB', 689, 30),
(13, 'Duex GEFORCE GT 610', 30, 195.9),
(14, 'Xfx RADEON RX 6400 4GB', 53, 899),
(15, 'Afox GEFORCE GT730 4GB', 50, 429.9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `senha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`) VALUES
(42, 'Eduardo', 'eduardo.moller@hotmail.com', '$2b$12$hjdy15zyDv0P77./5j96HON1AOYVrUzy/V/BFXRS9uTniL7O2jYHC'),
(43, 'bibi', 'biancadalbianco2004@gmail.com', '$2b$12$0XJgMNDcq2VVTwaaGBWN1uoscBqdTjGysPh7YCVJve26beVl7/WKa'),
(44, 'kkkkkkk', 'kkkkkkk@gmail.com', '$2b$12$KHqasmoGfahLUfM4u4SAIu07V5P97n3jvmEGK3bmaqW.S9gd6A9Q6'),
(45, 'igor', 'kkk@gmail.com', '$2b$12$2ZCgsvTyz9/Gd4FnsP6E5eidsiMJGYJ72f7KDT7Pu2PbJWepuXdRG'),
(46, 'igor', 'igor@gmail.com', '$2b$12$WjnXOqPImP/wxAVqjidDVOKUODsmthrFvJJ6so1vQ.G8FA6ApTBcq');

