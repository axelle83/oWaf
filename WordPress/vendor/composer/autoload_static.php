<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInited4789c9d3b1ec91fbaaceb4613cfb1e
{
    public static $prefixLengthsPsr4 = array (
        'C' => 
        array (
            'Composer\\Installers\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Composer\\Installers\\' => 
        array (
            0 => __DIR__ . '/..' . '/composer/installers/src/Composer/Installers',
        ),
    );

    public static $prefixesPsr0 = array (
        'j' => 
        array (
            'johnpbloch\\Composer\\' => 
            array (
                0 => __DIR__ . '/..' . '/johnpbloch/wordpress-core-installer/src',
            ),
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInited4789c9d3b1ec91fbaaceb4613cfb1e::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInited4789c9d3b1ec91fbaaceb4613cfb1e::$prefixDirsPsr4;
            $loader->prefixesPsr0 = ComposerStaticInited4789c9d3b1ec91fbaaceb4613cfb1e::$prefixesPsr0;

        }, null, ClassLoader::class);
    }
}