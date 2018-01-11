<?php

include "MySvgRendererClass.php";

$renderer = new MySvgRenderer();
$renderer->render();

$svg = $renderer->getHtmlcode();

include "renderer.phtml";
