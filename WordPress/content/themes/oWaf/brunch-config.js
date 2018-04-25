// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      // tout les js dans app seront réunis dans js/app.js
      'js/app.js': /^app/,
      // tout les js qui sont dans node_modules seront réunis dans js/vendor.js
      'js/vendor.js': /^(?!app)/
    }
    // joinTo: 'js/app.js'
  },
    // les fichiers de styles sont réunis dans css/app.css
  stylesheets: {joinTo: 'css/app.css'}
};

exports.plugins = {
  // Parametrage de SASS
  sass: {
    options: {
      includePaths: [
        // Je déclare à sass-brunch l'existence de bulma
        'node_modules/bulma'
      ]
    }
  },
  // Parametrage de copycat
  copycat: {
    // Je demande à copycat de créé un dossier "fonts" dans
    // public & de coller dedans le contenu de mon dossier
    // "fonts" présent dans "node_modules/font-awesome"
    'fonts': ['node_modules/font-awesome/fonts']
  },
  // Parametrage de Browser Sync
  browserSync: {
    files: [
      '*'
    ]
  }
};

exports.npm = {
  // Je déclare à npm un dossier à prendre en compte pour gérer les styles
  styles: {
    'font-awesome': ['css/font-awesome.css']
  },
  // On déclare globalement jQuery
  globals: {
    '$': 'jquery',
    'jQuery': 'jquery'
  }
};

exports.modules = {
  // on require le module "initialize" du fichier "app.js" pour éviter de le require dans le html
  autoRequire: {
    'js/app.js': ['js/initialize']
  }
};
