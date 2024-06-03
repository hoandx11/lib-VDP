createDialog().then( config => {
	return ClassicEditor
		.create( document.querySelector( '.editor' ), {
			ckbox: {
				tokenUrl: config.ckboxTokenUrl
			}
		} )
		.then( editor => {
			window.editor = editor;
		} )
		.catch( handleSampleError );
} );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "erlot424bduk-q69f34lhlka5" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}
