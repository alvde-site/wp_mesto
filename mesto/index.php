<?php
/**
 * Главная страница (index.php)
 * @package WordPress
 * @subpackage your-clean-template-3
 */?>
<?php get_header(); // подключаем header.php ?>
<section class="profile">
	<div class="profile__avatar"
		style="background-image: url(<?php echo get_template_directory_uri(); ?>/assets/images/3220aa0123cd7dc3fc11.jpg)">
		<div class="profile__edit-avatar">
			<button class="profile__edit-avatar-button" type="button" aria-label="Изменить аватар"></button>
		</div>
	</div>
	<div class="profile__info">
		<div class="profile__name-container">
			<h1 class="profile__name">Жак-Ив Кусто</h1>
			<button class="profile__edit-button" type="button" aria-label="Редактировать"></button>
		</div>
		<p class="profile__job">Исследователь океана</p>
	</div>
	<button class="profile__add-button" type="button" aria-label="Добавить"></button>
</section>
<section class="elements" aria-label="Места">
	<ul class="elements__container">
	</ul>
</section>
<?php get_footer(); // подключаем footer.php ?>