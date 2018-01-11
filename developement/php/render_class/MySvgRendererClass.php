<?php

class MySvgRenderer
{
  private $tree;
  private $htmlCode;

  function __construct()
  {
    $this->tree['element'] = [
      'tagName' => 'svg',
      'children' => [],
      'attributes' => [],
      'style' => []
    ];
  }

  public function render ()
  {
    $this->htmlCode = "<".$this->tree['element']['tagName']."></".$this->tree['element']['tagName'].">";
  }

  public function getHtmlCode() {
    return $this->htmlCode;
  }
}
