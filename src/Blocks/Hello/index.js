import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

registerBlockType( 'blockforge/hello', {
    title: 'Hello',
    edit: ( { attributes, setAttributes }) => {
        const blockProps = useBlockProps();

        return (
            <>
                <InspectorControls>
                    <PanelBody title="BlockForge Hello Message Settings">
                    <TextControl
                        label="Message"
                        value={ attributes.message }
                        onChange={ ( message ) => setAttributes( { message } ) }
                    />
                </PanelBody>
                </InspectorControls>

                <p>
                    { attributes.message}
                </p>
            </>
        );
    },
    save: () => {
        
        const blockProps = useBlockProps.save();

        return (
            <p{ ...blockProps }>
                Hello from BlockForge Frontend!
            </p>
        );
    },
} );