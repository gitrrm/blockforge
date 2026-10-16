<?php

namespace BlockForge\Blocks;

class BlockRegistry
{

    public function register(): void {
        register_block_type( dirname( __DIR__, 2 ) . '/build/Blocks/Hello' );
    }
}
