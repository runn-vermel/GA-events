<?php
   /*
   Plugin Name: Google Analytics Event Tracker
   Description: Track events using google analytics by just adding a class, and an optional explanation
   Version: 0.1
   Author: Runn Vermel
   */

   $ga_url = plugins_url( 'js/index.js', __FILE__ );
   wp_enqueue_script('ga_events',$ga_url,array('jquery'));