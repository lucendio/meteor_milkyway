
Package.describe({
    name: 'lucendio:rtc',
    summary: 'putting DDP on top of a WebRTC to sync minimongos directly between clients',
    version: '0.0.0',
    git: 'https://github.com/lucendio/meteor_milkyway.git',
    documentation: 'README.md'
});




Package.onUse( function( api ){

    api.versionsFrom( 'METEOR@1.3' );
    
    
    Npm.depends({
        
    });


    api.use([
        'random',
        'check',

        'ecmascript',
        'es5-shim',
        'modules'
    ], [ 'server', 'client' ] );


    api.use([
        'tracker'
    ], 'client' );


    api.use([

    ], 'server' );
    
    
    
    api.mainModule( './client/main.js', 'client' );

});




Package.onTest( function( api ){
    // TODO
});
