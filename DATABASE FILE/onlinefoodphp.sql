-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 06, 2023 at 03:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinefoodphp`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adm_id` int(222) NOT NULL,
  `username` varchar(222) NOT NULL,
  `password` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `code` varchar(222) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adm_id`, `username`, `password`, `email`, `code`, `date`) VALUES
(1, 'owner', '72122ce96bfec66e2396d2e25225d70a', 'admin@mail.com', '', '2023-12-06 13:52:42');

-- --------------------------------------------------------

--
-- Table structure for table `dishes`
--

CREATE TABLE `dishes` (
  `d_id` int(222) NOT NULL,
  `rs_id` int(222) NOT NULL,
  `title` varchar(222) NOT NULL,
  `slogan` varchar(222) NOT NULL,
  `price` double(50,3) NOT NULL,
  `img` varchar(222) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `dishes`
--

INSERT INTO `dishes` (`d_id`, `rs_id`, `title`, `slogan`, `price`, `img`) VALUES
(17, 5, 'Salad Cesar', 'Acai puree dengan granola, pisang, stroberi, dan madu.', 5.000, '65609ae0ef030.jpg'),
(18, 6, 'Salad Cesar', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 5.000, '656b1b64d295f.jpg'),
(19, 7, 'Salad Cesar', ' Timun, tomat, selada, keju feta, olive Kalamata, dan bawang merah dengan dressing yogurt dan rempah-rempah.', 5.000, '656b1b4c5c70a.jpg'),
(20, 8, 'Salad Cesar', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 5.000, '656b1b358cecb.jpg'),
(21, 9, 'Salad Cesar', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 5.000, '656b1b117d7b9.jpg'),
(22, 10, 'Salad Cesar', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 5.000, '65609b4c59c1d.jpg'),
(23, 5, 'Salad Tuna Nicoise', ' Ikan tuna panggang, kentang, kacang hijau, telur rebus, dan olive dengan dressing balsamic.', 500.000, '65609b7ee5ea5.jpg'),
(24, 7, 'Salad Tuna Nicoise', ' Ikan tuna panggang, kentang, kacang hijau, telur rebus, dan olive dengan dressing balsamic.', 500.000, '65609b92c3eda.jpg'),
(25, 9, 'Salad Tuna Nicoise', ' Ikan tuna panggang, kentang, kacang hijau, telur rebus, dan olive dengan dressing balsamic.', 500.000, '65609bb3ebd47.jpg'),
(26, 6, 'salad ', ' Timun, tomat, selada, keju feta, olive Kalamata, dan bawang merah dengan dressing yogurt dan rempah-rempah.', 10.000, '656b1a25b79d9.jpg'),
(27, 8, 'salad ', ' Timun, tomat, selada, keju feta, olive Kalamata, dan bawang merah dengan dressing yogurt dan rempah-rempah.', 10.000, '656b1a085ff3e.jpg'),
(28, 10, 'salad ', ' Timun, tomat, selada, keju feta, olive Kalamata, dan bawang merah dengan dressing yogurt dan rempah-rempah.', 10.000, '65609c0faad14.jpg'),
(29, 5, 'Salad Greek', 'Daun romaine dengan crouton, keju parmesan, dan dressing Cesar.', 500.000, '65609c704027d.jpg'),
(30, 6, 'Salad Greek', 'Acai puree dengan granola, pisang, stroberi, dan madu.', 10.000, '656b195ececa2.jpg'),
(31, 7, 'Salad Greek', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 10.000, '656b19408e705.jpg'),
(32, 8, 'Salad Greek', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 10.000, '656b180db736e.jpg'),
(33, 5, 'Salad Greek', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 10.000, '656b17cac0297.jpg'),
(34, 10, 'Salad Greek', 'Potongan-potongan buah seperti anggur, jeruk, apel, dan stroberi dengan saus yogurt madu.', 10.000, '65609ce784c5f.jpg'),
(35, 5, 'Salad Buah Campur', 'hidangan segar yang terdiri dari berbagai macam potongan buah yang dicampur bersama. Ini adalah kombinasi yang kaya akan rasa dan tekstur yang berbeda, seringkali disajikan sebagai hidangan penutup atau camilan sehat.', 5.000, '65609da4d31f0.jpg'),
(36, 8, 'Salad Buah Campur', 'hidangan segar yang terdiri dari berbagai macam potongan buah yang dicampur bersama. Ini adalah kombinasi yang kaya akan rasa dan tekstur yang berbeda, seringkali disajikan sebagai hidangan penutup atau camilan sehat.', 5.000, '65609dbcd0fe5.jpg'),
(37, 10, 'Salad Buah Campur', 'hidangan segar yang terdiri dari berbagai macam potongan buah yang dicampur bersama. Ini adalah kombinasi yang kaya akan rasa dan tekstur yang berbeda, seringkali disajikan sebagai hidangan penutup atau camilan sehat.', 5.000, '65609dd4ba338.jpg'),
(38, 6, 'Salad Buah Campur', 'hidangan segar yang terdiri dari berbagai macam potongan buah yang dicampur bersama. Ini adalah kombinasi yang kaya akan rasa dan tekstur yang berbeda, seringkali disajikan sebagai hidangan penutup atau camilan sehat.', 5.000, '65609deb30ff2.jpg'),
(39, 6, 'mantap', 'makanan ini sangat enak sekali', 10.000, '656dd01b5913d.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `remark`
--

CREATE TABLE `remark` (
  `id` int(11) NOT NULL,
  `frm_id` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `remark` mediumtext NOT NULL,
  `remarkDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `remark`
--

INSERT INTO `remark` (`id`, `frm_id`, `status`, `remark`, `remarkDate`) VALUES
(1, 2, 'in process', 'none', '2022-05-01 05:17:49'),
(2, 3, 'in process', 'none', '2022-05-27 11:01:30'),
(3, 2, 'closed', 'thank you for your order!', '2022-05-27 11:11:41'),
(4, 3, 'closed', 'none', '2022-05-27 11:42:35'),
(5, 4, 'in process', 'none', '2022-05-27 11:42:55'),
(6, 1, 'rejected', 'none', '2022-05-27 11:43:26'),
(7, 7, 'in process', 'none', '2022-05-27 13:03:24'),
(8, 8, 'in process', 'none', '2022-05-27 13:03:38'),
(9, 9, 'rejected', 'thank you', '2022-05-27 13:03:53'),
(10, 7, 'closed', 'thank you for your ordering with us', '2022-05-27 13:04:33'),
(11, 8, 'closed', 'thanks ', '2022-05-27 13:05:24'),
(12, 5, 'closed', 'none', '2022-05-27 13:18:03'),
(13, 10, 'closed', 'ffefiejiei', '2023-11-27 03:53:09'),
(14, 14, 'closed', 'mohon bersabar', '2023-12-03 09:41:56'),
(15, 14, 'closed', 'mohon bersabar', '2023-12-03 09:43:26');

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `rs_id` int(222) NOT NULL,
  `c_id` int(222) NOT NULL,
  `title` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `phone` varchar(222) NOT NULL,
  `url` varchar(222) NOT NULL,
  `o_hr` varchar(222) NOT NULL,
  `c_hr` varchar(222) NOT NULL,
  `o_days` varchar(222) NOT NULL,
  `address` text NOT NULL,
  `image` text NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`rs_id`, `c_id`, `title`, `email`, `phone`, `url`, `o_hr`, `c_hr`, `o_days`, `address`, `image`, `date`) VALUES
(5, 16, 'Cafe Rumah Pohon', 'dina@gmail.com', '+62 813-7598-8456', 'CafeRumahPohon.com', '8am', '6pm', 'mon-thu', '  Jl. Sei Belutu I No 114 Padang Bulan Selayang I, Medan 20131 Indonesia  ', '656ad83465972.jpg', '2023-12-02 07:09:40'),
(6, 14, 'Green Village Restaurant', 'dona@gmail.com', '+62 61 4552933', 'GreenVillageRestaurant.com', '6am', '5pm', 'mon-thu', ' Jl. Timor Blok J No.I-IV Karibia Boutique Hotel, Lantai Ground, Medan 20231 Indonesia ', '656ad6d5c0442.jpg', '2023-12-02 07:03:49'),
(7, 10, 'Kedai Kopi Restu', 'KedaiKopiRestu@gmail.com', '+62 852-6053-1168', 'KedaiKopiRestu.com', '8am', '4pm', 'mon-thu', ' Jl. Jenderal Sudirman No.113, Tanjung Pura 20853 Indonesia ', '656ad674246d7.jpg', '2023-12-02 07:02:12'),
(8, 10, 'Rumah Makan Sehat', 'RumahMakanSehat@gmail.com', '+62 622 61100', 'RumahMakanSehat.com', '7am', '4pm', 'mon-wed', '  Jl. Bandung No.45 Dwikora, Siantar Barat, Pematang Siantar 21118 Indonesia  ', '656ad60c33ebf.jpg', '2023-12-02 07:00:28'),
(9, 9, 'Moringa Noodle Bar - Coffee & Juice', 'MoringaNoodleBar@gmail.com', '+62 823-6019-6699', 'MoringaNoodleBar.com', '8am', '5pm', 'mon-thu', ' Jl. Prof. HM. Yamin Sh No.8 C Kesawan, Medan 20111 Indonesia ', '656ad59245787.jpg', '2023-12-02 06:58:26'),
(10, 13, 'LovingHut', 'LovingHut@gmail.com', '+62 61 4554041', 'LovingHut.com', '7am', '5pm', 'mon-wed', ' Jl. Mataram, Medan 20151 Indonesia ', '656ad540cb902.jpg', '2023-12-02 06:57:04'),
(11, 9, 'Fedwell', 'Fedwell@gmail.com', '0895601715128', 'Fedwell.com', '9am', '8pm', 'Mon-Thu', 'Jalan Senopati No. 82, Senopati, Kebayoran Baru, Jakarta Selatan.', '656b16c58be02.jpg', '2023-12-02 11:36:37');

-- --------------------------------------------------------

--
-- Table structure for table `res_category`
--

CREATE TABLE `res_category` (
  `c_id` int(222) NOT NULL,
  `c_name` varchar(222) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `res_category`
--

INSERT INTO `res_category` (`c_id`, `c_name`, `date`) VALUES
(9, 'Salad', '2023-12-02 06:53:31'),
(10, 'Vegetarian/Vegan', '2023-12-02 06:53:37'),
(11, 'Jus Segar dan Smoothie', '2023-12-02 06:53:43'),
(12, 'Organik', '2023-12-02 06:53:47'),
(13, 'umbi umbian', '2023-12-02 06:53:59'),
(14, 'sayur sayuran ', '2023-12-02 06:54:08'),
(15, 'poke bowl', '2023-12-02 06:54:14'),
(16, 'kacang kacangan ', '2023-12-02 06:54:23'),
(17, 'snack sehat ', '2023-12-02 06:54:44'),
(18, 'isotonik', '2023-12-02 06:55:12'),
(21, 'sehat', '2023-12-04 12:26:09');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `u_id` int(222) NOT NULL,
  `username` varchar(222) NOT NULL,
  `f_name` varchar(222) NOT NULL,
  `l_name` varchar(222) NOT NULL,
  `email` varchar(222) NOT NULL,
  `phone` varchar(222) NOT NULL,
  `password` varchar(222) NOT NULL,
  `address` text NOT NULL,
  `status` int(222) NOT NULL DEFAULT 1,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`u_id`, `username`, `f_name`, `l_name`, `email`, `phone`, `password`, `address`, `status`, `date`) VALUES
(11, 'doni', 'John', 'Doe', 'john@gmail.com', '1234567890', '482c811da5d5b4bc6d497ffa98491e38', '123 Main St', 1, '2023-12-02 05:23:09'),
(12, 'loyde ', 'loyde ', 'thioria', 'loyde@gmail.com', '08965743021', 'e10adc3949ba59abbe56e057f20f883e', 'jln kemang', 1, '2023-12-02 06:41:59'),
(13, 'dea ', 'doni', 'dea ', 'dea@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'jalan sono', 1, '2023-12-02 06:44:51'),
(14, 'roy', 'roy ', 'semantic', 'roy@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'jln nanggarjatoh', 1, '2023-12-02 06:45:49'),
(15, 'rafly ', 'rafly', 'ajah', 'rafly@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'jln.rafli', 1, '2023-12-02 06:46:59'),
(16, 'darwin', 'darwin', 'dono', 'darwin@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'jln dimana ', 1, '2023-12-02 06:48:03'),
(17, 'dinas ', 'dino', 'dinas', 'dinas@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'jln dimana saja ', 1, '2023-12-02 06:49:45'),
(18, 'tessya ', 'tessya', 'olivia ', 'olivia@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'jln disana ', 1, '2023-12-02 06:50:42'),
(19, 'nadia ', 'nadia ', 'sisis', 'nadia@gmail.com', '0895601715128', 'e10adc3949ba59abbe56e057f20f883e', 'suiii', 1, '2023-12-02 06:51:43'),
(20, 'fatahillah ', 'fatahillah', 'rahman', 'fatahillahrahman@students.polmed.ac.id', '0895601715128', '1d56bc9fc35d7da1f506ab179c542529', 'jl ninggal', 1, '2023-12-02 06:52:54');

-- --------------------------------------------------------

--
-- Table structure for table `users_orders`
--

CREATE TABLE `users_orders` (
  `o_id` int(222) NOT NULL,
  `u_id` int(222) NOT NULL,
  `title` varchar(222) NOT NULL,
  `quantity` int(222) NOT NULL,
  `price` double(10,3) NOT NULL,
  `status` varchar(222) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users_orders`
--

INSERT INTO `users_orders` (`o_id`, `u_id`, `title`, `quantity`, `price`, `status`, `date`) VALUES
(13, 1, 'Salad Cesar', 1, 5.000, NULL, '2023-12-02 04:33:30'),
(14, 20, 'Salad Cesar', 1, 5.000, 'closed', '2023-12-03 09:41:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adm_id`);

--
-- Indexes for table `dishes`
--
ALTER TABLE `dishes`
  ADD PRIMARY KEY (`d_id`);

--
-- Indexes for table `remark`
--
ALTER TABLE `remark`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`rs_id`);

--
-- Indexes for table `res_category`
--
ALTER TABLE `res_category`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`u_id`);

--
-- Indexes for table `users_orders`
--
ALTER TABLE `users_orders`
  ADD PRIMARY KEY (`o_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `adm_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `dishes`
--
ALTER TABLE `dishes`
  MODIFY `d_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `remark`
--
ALTER TABLE `remark`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `rs_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `res_category`
--
ALTER TABLE `res_category`
  MODIFY `c_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `u_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users_orders`
--
ALTER TABLE `users_orders`
  MODIFY `o_id` int(222) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
