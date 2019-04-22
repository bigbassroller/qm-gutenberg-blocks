# QM Gutenberg Blocks

Uses [https://github.com/WordPress/gutenberg-examples](https://github.com/WordPress/gutenberg-examples) as a starting point

To make new blocks use [https://github.com/bigbassroller/gutenberg-block-builder](https://github.com/bigbassroller/gutenberg-block-builder).  To run it you will need [Elixir](https://elixir-lang.org/) installed. To install Elixir, go to [https://elixir-lang.org/install.html](https://elixir-lang.org/install.html). Install the block builder inside the plugin root directory. Open up make_block.exs and change the block name in the fields :

`block_dash_name`

`block_space_name`

`block_name`

Once you've done that you can run `elixir make_block.exs` and it will create copy of two-column-callout block with the name of the new block. Copy the folder of the new block to the root of the qm-gutenberg-blocks plugin folder and run `npm install` (it takes awhile to install the dependencies) and the run `npm start`. After that all you have to do is add the block to qm-gutenberg-blocks/index.php and add for example: `include 'image-strip/index.php';`.

See `two-column-callout/src/index.js` to get a general idea of how the blocks are built. The three main parts are: 
 1. Top level registerBlockType settings and attributes
2. Edit function attributes, functions and rendered JSX 
3. Save function with data passed down from the Edit function and rendered JSX 

Each template part should be its own block. Simply add the HTML to rendered JSX and add the necessary editable fields the Edit function. See  [https://github.com/WordPress/gutenberg-examples](https://github.com/WordPress/gutenberg-examples), [https://github.com/bigbassroller/gutenberg-course](https://github.com/bigbassroller/gutenberg-course) and [https://github.com/bigbassroller/advanced-gutenberg-course](https://github.com/bigbassroller/advanced-gutenberg-course) for my examples.

For tutorial see [https://wordpress.org/gutenberg/handbook/designers-developers/](https://wordpress.org/gutenberg/handbook/designers-developers/)

Here are some example steps taken to add dynamic inputs:

**Adding a media upload button and displaying it in your template**
1. Add `MediaUpload` to the global object set by wp.editor
2. Add `MediaUpload` to the global object set by wp.editor
3. Add button object from wp.components
4. Add `mediaID` and `mediaURL` objects to the the `attributes` object inside your `registerBlockType`
5. Add `mediaID` and `mediaURL` inside the attributes object inside the  `edit`object literal,
6. Add `onSelectImage` const that is an IIFE
7. Add `MediaUpload` tag to the edit template
8. Add Add `mediaID` and `mediaURL` to save  function attributes that is set from props
9. Finally add an object inside the template that imediately invokes the image if mediaURL && image is available

**Adding Alignment and using it in your template**
1. Add `AlignmentToolbar` and `BlockControls` to the global object set by wp.editor
2. Add `alignment`  to the  `registerBlockType`’s  `attributes` object
3. Add `alignment`  to the edit function attributes
4. Add `onChangeAlignment` event listener
5. Add object with `BlockControls` tag inside of it
6. Add the value to the className 

**Adding a button link and using it inside your template**
1. Import `URLInput` from wp.editor imports
2. Import `IconButton` from wp.components
3. Add `title`, `text`, `url` to the  `registerBlockType`’s  `attributes` object
4. Add `title`, `text` and `url` to the edit function attributes
5. Add `isSelected` to objects imported from props
6. Add object with isSelected ternary with RichText
7. Add form with URLInput with `value={url}` and onChange have url equal setAttributes function with url object passed in.
8. Add `IconButton` with type=submit
9. Add if not isSelected markup with a href that uses the url and text object values















 


