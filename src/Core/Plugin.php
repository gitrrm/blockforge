<?php

namespace BlockForge\Core;

use BlockForge\Blocks\BlockRegistry;

class Plugin {
    private BlockRegistry $block_registry;

    public function __construct() {
        $this->block_registry = new BlockRegistry();
    }

    public function register_hooks() {
        add_action('init', [$this->block_registry, 'register']);
    }

    
}