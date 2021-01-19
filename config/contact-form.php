<?php

$config = [];
$request = Craft::$app->request;

if (
	!$request->getIsConsoleRequest() &&
	($prependSubject = $request->getValidatedBodyParam('prependSubject')) !== null
) {
	$config['prependSubject'] = $prependSubject;
}

return $config;
