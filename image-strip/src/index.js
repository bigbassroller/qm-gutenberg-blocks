const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText,
    		AlignmentToolbar,
    		BlockControls,
				MediaUpload,
				URLInput, 
			} = wp.editor;
const { Button, IconButton } = wp.components;

const blockStyle = {

};

registerBlockType( 'qm-gutenberg-blocks/image-strip', {
	title: __( 'image strip', 'qm-gutenberg-blocks' ),
	icon: 'universal-access-alt',
	category: 'layout',
  attributes: {
      heading: {
          type: 'array',
          source: 'children',
          selector: 'h1',
      },
      content: {
          type: 'array',
          source: 'children',
          selector: 'p',
      },
      alignment: {
          type: 'string',
          default: 'none',
      },
			mediaID: {
				type: 'number',
			},
			mediaURL: {
				type: 'string',
				source: 'attribute',
				selector: 'img',
				attribute: 'src',
			},
      text: {
          type: 'string',
          source: 'text',
          selector: 'a',
      },
      url: {
          type: 'string',
          source: 'attribute',
          attribute: 'href',
          selector: 'a',
      },
  },
  edit: ( props ) => {
      const { 
      attributes: { 
      	content,
      	heading,
      	alignment,
 				mediaID,
				mediaURL,
				text,
				url,
      }, attributes, setAttributes, className, isSelected } = props;
      const onChangeHeading = ( newHeading ) => {
          setAttributes( { heading: newHeading } );
      };
      const onChangeContent = ( newContent ) => {
          setAttributes( { content: newContent } );
      };
      const onChangeAlignment = ( newAlignment ) => {
          props.setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
      };
			const onSelectImage = ( media ) => {
				setAttributes( {
					mediaURL: media.url,
					mediaID: media.id,
				} );
			};
      return (
				<div className="image-strip">
					<div className="bg-img h-100 w-100">
					</div>
					<div className="container">
						<div className="row">
							<div className="col-md-7 d-flex align-items-center order-2 order-md-1">
								<div className="mb-5 d-flex flex-column">
		                {
	                    <BlockControls>
	                        <AlignmentToolbar
	                            value={ alignment }
	                            onChange={ onChangeAlignment }
	                        />
	                    </BlockControls>
		                }
					          <RichText
					              tagName="h1"
					              className="mb-4"
					              style={ { textAlign: alignment } }
					              onChange={ onChangeHeading }
					              value={ heading }
					          />
					          <RichText
					              tagName="p"
					              className="mb-5"
					              style={ { textAlign: alignment } }
					              onChange={ onChangeContent }
					              value={ content }
					          />
                    { isSelected ? (

                        <div>
                            <RichText
                                id="example-input-field"
                                className="button btn btn-primary btn-md mr-md-auto ml-md-0 mx-auto"
                                label={ __( 'Link Text' ) }
                                value={ text }
                                onChange={ text => setAttributes( { text } ) }
                            />
                            <p>{ __( 'Link URL' ) }</p>
                            <form
                                className=""
                                onSubmit={ event => event.preventDefault() }
                            >
                                <URLInput
                                    className="url"
                                    value={ url }
                                    onChange={ url => setAttributes( { url } ) }
                                />
                                <IconButton
                                    icon="editor-break"
                                    label={ __( 'Apply') }
                                    type="submit"
                                />
                            </form>
                        </div>

                    ) : (

                        <p>
                            <a class="btn btn-primary btn-md mr-md-auto ml-md-0 mx-auto" href={ url }>
                                { text || __( 'Edit link' ) }
                            </a>
                        </p>

                    )}
								</div>
							</div>
							<div className="col-md-5 order-1 order-md-2">
								<MediaUpload
									onSelect={ onSelectImage }
									allowedTypes="image"
									value={ mediaID }
									render={ ( { open } ) => (
										<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
											{ ! mediaID ? __( 'Upload Image', 'qm-gutenberg-blocks' ) : <img src={ mediaURL } alt={ __( 'Upload Recipe Image', 'qm-gutenberg-blocks' ) } /> }
										</Button>
									) }
								/>
							</div>
						</div>
					</div>
				</div>
      );
  },
  save: ( props ) => {
			const {
				className,
				attributes, 
				setAttributes,
				attributes: {
					mediaURL,
					url,
					text,
				},
			} = props;
      return (
				<div className="image-strip">
					<div className="bg-img h-100 w-100"></div>
					<div className="container">
						<div className="row">
							<div className="col-md-7 d-flex align-items-center order-2 order-md-1">
								<div className="mb-5 d-flex flex-column">
									<RichText.Content className={ `mb-4 gutenberg-examples-align-${ props.attributes.alignment }` } tagName="h1" value={ props.attributes.heading } />
									<RichText.Content className={ `mb-5 gutenberg-examples-align-${ props.attributes.alignment }` } tagName="p" value={ props.attributes.content } />
		              <a className="btn btn-primary btn-md mr-md-auto ml-md-0 mx-auto" href={ url }>
		                  { text }
		              </a>
								</div>
							</div>
							<div className="col-md-5 order-1 order-md-2">
								{
									mediaURL && (
										<img className="img-fluid mx-auto d-block" src={ mediaURL } alt={ __( 'Recipe Image yo', 'qm-gutenberg-blocks' ) } />
									)
								}
							</div>
						</div>
					</div>
				</div>
      );
  },
} );
