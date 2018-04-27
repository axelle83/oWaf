<?php
function owaf_role_cap()
{
 
  add_role('writer', 'Auteur du blog', [
    'write' => true,
    'read' => true,
  ]);

  $writer = get_role('writer');

  $writer->add_cap('editor');
  $author = get_role('editor');
  $author->add_cap('list_users');
}
add_action('init', 'owaf_role_cap');
