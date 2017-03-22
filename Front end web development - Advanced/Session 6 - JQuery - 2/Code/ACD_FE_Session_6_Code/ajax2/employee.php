<?php
sleep(4);
$list = array();
$ob1 = new StdClass();
$ob1->name  = "Smith";
$ob1->location  = "Bangalore";
$ob1->technologies = "LAMP UI UX";
$list[] = $ob1;
$ob2 = new StdClass();
$ob2->name  = "James";
$ob2->location  = "Bangalore";
$ob2->technologies = "Astrology Palmistry Numberology";
$list[] = $ob2;
echo json_encode($list);