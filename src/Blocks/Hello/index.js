import { registerBlockType } from '@wordpress/blocks';
import {
    InspectorControls,
    useBlockProps,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

registerBlockType( 'blockforge/hello', {
    title: __( 'Hello', 'blockforge' ),

    edit: ( { attributes, setAttributes } ) => {
        const blockProps = useBlockProps();

        return (
            <>
                <InspectorControls>
                    <PanelBody title={ __( 'BlockForge Hello Message Settings', 'blockforge' ) }
                    >
                        <TextControl
                            label={ __( 'Message', 'blockforge' ) }
                            value={ attributes.message }
                            onChange={ ( message ) => setAttributes( { message } ) }
                        />
                    </PanelBody>
                </InspectorControls>

                <p { ...blockProps }>
                    { attributes.message }
                </p>
            </>
        );
    },

    save: ( { attributes } ) => {
        const blockProps = useBlockProps.save();

        return (
            <p { ...blockProps }>
                { attributes.message }
            </p>
        );
    },
} );