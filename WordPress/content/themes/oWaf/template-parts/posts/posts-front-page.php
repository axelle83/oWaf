<div class="posts">

    <?php
    $args_query_posts = [
      'posts_per_page' => 4
    ];
    $query_posts = new WP_Query($args_query_posts);
    if ($query_posts->have_posts()):
      while($query_posts->have_posts()):
        $query_posts->the_post();
        get_template_part('template-parts/posts/post');
      endwhile;
    endif;
    wp_reset_postdata();
   ?>
   
</div>
