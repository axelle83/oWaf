<?php

$lieu = get_field('lieu');

if( !empty($lieu) ):
?>
<div class="acf-map">
	<div class="marker" data-lat="<?php echo $lieu['lat']; ?>" data-lng="<?php echo $lieu['lng']; ?>"></div>
</div>
<?php endif; ?>
