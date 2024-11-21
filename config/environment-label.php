<?php

use craft\helpers\App;

return [
    '*' => [
        'showLabel' => true,
        'labelText' => App::env('ENVIRONMENT'),
        'prefixText' => 'Webdigitales :: ',
        'suffixText' => ' environment',
        'textColor' => '#fff',
			'targetSelector' => '#page-container:before',
    ],

    // Dev environment settings
    'dev' => [
        'labelColor' => '#000',
    ],

    // Staging environment settings
    'staging' => [
        'labelColor' => '#fc3',
        'textColor' => '#000',
    ],

    // Production environment settings
    'production' => [
        'labelColor' => '#cc5643',
    ]
];
