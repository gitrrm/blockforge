<?php
/**
 * Plugin Name: BlockForge
 */

require_once __DIR__ . '/src/Core/Plugin.php';
require_once __DIR__ . '/src/Blocks/BlockRegistry.php';

$plugin = new \BlockForge\Core\Plugin();
$plugin->register_hooks();