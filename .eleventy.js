module.exports = function( eleventyConfig ) {
	eleventyConfig.setTemplateFormats( 'html,md,liquid' );
	eleventyConfig.setQuietMode( true );

	// eleventyConfig.addPassthroughCopy( './src/public_html/assets/' );
	// eleventyConfig.addPassthroughCopy( './src/public_html/img/' );
	// eleventyConfig.addPassthroughCopy( './src/public_html/*.png' );

	eleventyConfig.addShortcode( 'year', () => `${ new Date().getFullYear() }`);

	eleventyConfig.addFilter( 'dump', function( anything ) {
		console.log( 'dump:', anything );
	} );

	eleventyConfig.setBrowserSyncConfig( {
		...eleventyConfig.browserSyncConfig
		,ui: false
		,ghostMode: false
		,logLevel: 'silent'
	} );
};
