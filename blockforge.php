<?php
/**
 * Plugin Name:       BlockForge
 * Description:       A reusable, accessible, and performance-focused Gutenberg block toolkit.
 * Version:           0.1.0
 * Requires at least: 6.3
 * Requires PHP:      7.4
 * Author:            Rashmi Ranjan Muduli
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       blockforge
 */

/*
 * Copyright (C) 2026 Rashmi Ranjan Muduli
 * Licensed under the GPL-2.0-or-later license.
 */

require_once __DIR__ . '/src/Core/Plugin.php';
require_once __DIR__ . '/src/Blocks/BlockRegistry.php';

$plugin = new \BlockForge\Core\Plugin();
$plugin->register_hooks();