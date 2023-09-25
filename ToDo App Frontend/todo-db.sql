-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 25, 2023 at 11:05 AM
-- Server version: 8.0.34
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `userId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `title`, `description`, `status`, `userId`) VALUES
(3, 'abcd', 'sadeesha bandara new', 'OPEN', 1),
(4, 'admin', 'sadeee', 'WIP', 3),
(11, 'ravindu', 'Damith', 'COMPLETED', 3),
(23, 'Test', 'Tested', 'COMPLETED', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`) VALUES
(1, 'thimira', '$2a$12$Xb0L8P2LjQX.VgylisSuk.jVp2ijBBg9LuzQD3WD6pNx9a9ZrEKiK', '$2a$12$Xb0L8P2LjQX.VgylisSuk.'),
(2, 'thimira', '$2a$12$a/n8YEqgVqnrfI.ocOM7guZ8MPTpBtynp0NYwq0Abw5rYycHKHi6y', '$2a$12$a/n8YEqgVqnrfI.ocOM7gu'),
(3, 'Admin', '$2a$12$k/CY8.nvgtXj6XAsfJFziuJvWMdByj.EgQDDL0/YPIs7EKbY5hxv.', '$2a$12$k/CY8.nvgtXj6XAsfJFziu'),
(5, 'Admin', '$2a$12$ocnrh6DPzpVE7pwSNo.ZaeKUAUUd54QN0g2fL68b0iuDX.HNlsoNe', '$2a$12$ocnrh6DPzpVE7pwSNo.Zae');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
