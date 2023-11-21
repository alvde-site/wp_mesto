<?php
/**
 * Шаблон подвала (footer.php)
 * @package WordPress
 * @subpackage your-clean-template-3
 */
?>

<!-- Конец блока main -->
</main>

<!-- Начало блока footer -->

<footer class="footer">
	<p class="footer__copyright">© 2020 Mesto Russia</p>
</footer>
<!-- Конец блока footer -->
<!-- Начало popup форм -->
<div class="popup popup_handle_profile">
	<div class="popup__container">
		<button class="popup__close" type="button" aria-label="Закрыть"></button>
		<form action="#" name="profileform" class="form" novalidate>
			<h2 class="form__title">Редактировать профиль</h2>
			<label for="profilename" class="form__field"><input id="profilename"
					class="form__input form__input_profile_name" name="profilename" placeholder="Введите имя" required
					minlength="2" maxlength="40" />
				<span id="error-profilename" class="form__input-error"></span></label>
			<label for="profilejob" class="form__field"><input id="profilejob"
					class="form__input form__input_profile_job" name="profilejob" placeholder="Введите профессию"
					required minlength="2" maxlength="200" />
				<span id="error-profilejob" class="form__input-error"></span></label>
			<button class="form__submit" type="submit">Сохранить</button>
		</form>
	</div>
</div>
<div class="popup popup_handle_add-element">
	<div class="popup__container">
		<button class="popup__close" type="button" aria-label="Закрыть"></button>
		<form action="#" name="cardform" class="form" novalidate>
			<h2 class="form__title">Новое место</h2>
			<label for="addname" class="form__field"><input id="addname" class="form__input form__input_add_name"
					name="name" placeholder="Название" required minlength="2" maxlength="30" />
				<span id="error-addname" class="form__input-error"></span></label>
			<label for="addlink" class="form__field"><input id="addlink" type="url"
					class="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
				<span id="error-addlink" class="form__input-error"></span></label>
			<button class="form__submit" type="submit">Сохранить</button>
		</form>
	</div>
</div>
<div class="popup popup_handle_image-viewing">
	<div class="image-viewing">
		<button class="popup__close" type="button" aria-label="Закрыть"></button>
		<figure class="image-viewing__img-card">
			<img src="#" alt="#" class="image-viewing__image" />
			<figcaption class="image-viewing__caption"></figcaption>
		</figure>
	</div>
</div>
<div class="popup popup_handle_remove-confirm">
	<div class="popup__container">
		<button class="popup__close" type="button" aria-label="Закрыть"></button>
		<form action="#" name="confirmform" class="form" novalidate>
			<h2 class="form__title">Вы уверены?</h2>
			<button class="form__submit" type="submit">Да</button>
		</form>
	</div>
</div>
<div class="popup popup_handle_edit-avatar">
	<div class="popup__container">
		<button class="popup__close" type="button" aria-label="Закрыть"></button>
		<form action="#" name="avatarform" class="form" novalidate>
			<h2 class="form__title">Обновить аватар</h2>
			<label for="addavatar" class="form__field"><input id="addavatar" type="url"
					class="form__input form__input_add_link" name="link" placeholder="Ссылка на картинку" required />
				<span id="error-addavatar" class="form__input-error"></span></label>
			<button class="form__submit" type="submit">Сохранить</button>
		</form>
	</div>
</div>
</div>
<template id="element_template">
	<li class="element">
		<button class="element__remove-button" type="button" aria-label="Удалить"></button>
		<img src="#" alt="#" class="element__img" />
		<div class="element__description">
			<h2 class="element__description-text"></h2>
			<div class="element__like-block">
				<button class="element__like-button" type="button" aria-label="Понравилось"></button>
				<span class="element__like-count">0</span>
			</div>
		</div>
	</li>
</template>
<!-- Конец popup форм -->
<?php wp_enqueue_script('mainscript', get_template_directory_uri() . '/js/main.js'); ?>
<?php wp_footer(); // необходимо для работы плагинов и функционала  ?>
</body>

</html>