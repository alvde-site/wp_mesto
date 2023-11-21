<?php
/**
 * Шаблон шапки (header.php)
 * @package WordPress
 * @subpackage your-clean-template-3
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); // вывод атрибутов языка ?>>

<head>
	<meta charset="<?php bloginfo('charset'); // кодировка ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php /* RSS и всякое */?>
	<link rel="alternate" type="application/rdf+xml" title="RDF mapping" href="<?php bloginfo('rdf_url'); ?>">
	<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php bloginfo('rss_url'); ?>">
	<link rel="alternate" type="application/rss+xml" title="Comments RSS"
		href="<?php bloginfo('comments_rss2_url'); ?>">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
	<meta name="description" content="проектная работа 'mesto' Демиденко Александра на Яндекс Практикуме" />
	<meta name="keywords" content="проектная" />
	<meta name="author" content="Демиденко Александр" />
	<title>Mesto</title>

	<?php /* Все скрипты и стили теперь подключаются в functions.php */?>

	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<?php wp_head(); // необходимо для работы плагинов и функционала ?>
</head>

<body <?php body_class(['root', 'page']); // все классы для body ?>>
<!-- Начало блока header -->
	<header class="header">
		<div class="header__logo"></div>
	</header>
<!-- Конец блока header -->

<!-- Начало блока main -->
	<main class="content">