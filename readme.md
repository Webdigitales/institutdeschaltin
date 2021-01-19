# Craft Boilerplate
This project is based on the official [Craft 3 starter project](https://github.com/craftcms/craft/)

Table of Contents
=================
* [Environment Considerations](#environment-considerations)
  * [xcode Installation](#mac-osx-only-xcode-installation)
  * [MAMP Installation](#mamp-installation)
  * [Composer Installation](#composer-installation)
  * [Node Installation](#node-installation)
* [New Project Setup](#new-project-setup)
* [Miscellaneous Information](#miscellaneous-information)
* [Project Specific Information](#project-specific-information)
* [About Craft CMS](#about-craft-cms)


## (Mac OSX only) xcode Installation

Run: `$ xcode-select --install` and follow the instructions. It can take a few minutes to install.


## MAMP Installation

You can download MAMP [here](https://www.mamp.info/en/downloads/) and find the installation instructions [here](https://documentation.mamp.info/).


## Composer Installation

CraftCMS v3 now uses [PHP Composer](https://getcomposer.org/) to manage Craft updates, plugins, and other things related to CraftCMS. While there are [installation instructions](https://getcomposer.org/doc/00-intro.md) for various operating systems, we have found that the most common setup (i.e. MacOSX and Ubuntu Linux) can be installed by doing the following:

1. Ensure that you have PHP installed
1. Download and save the Composer installer here: https://getcomposer.org/installer
1. Open a terminal and go to the directory in which you saved the Composer installer.
1. Run the following command from the terminal in order to install Composer globally (assuming the file you downloaded and saved is named "installer":<br /> `$ php installer --install-dir=/usr/local/bin --filename=composer`
1. Run `$ composer --version` to verify that the installation was successful.

If all goes well and you were able to install Composer globally, then this is the only time you will have to install Composer.


## Node installation

CraftCMS v3 projects based on `craft-boilerplate` utilize `nodejs`, `npm`, and `laravel mix`, in order to run SASS processing, javascript minifcation, and autoprefixing.

Find out how to download and install `node` for your environment here (which includes `npm`): https://nodejs.org/en/download/


# New Project Setup

Follow these instructions when you need to start a brand new CraftCMS from scratch, utilizing this bootstrap project as a foundation and a starting point.

## New Project Setup
1. Ensure that you have installed all required software - see [Environment Considerations](#environment-considerations)
1. Download the latest archive master version of the craft-boilerplate project, found [here](https://github.com/Webdigitales/wdi-craftcms-starterkit/archive/master.zip)
1. Create a new directory for the new project and unzip the craft-boilerplate archive into this directory.
1. Open up a terminal and change the directory where you unzipped the archive above.
1. Run `$ composer install --no-scripts`, which will download Craft and all associated plugins
1. Run `$ composer run-script post-create-project-cmd`, which will guide you through the "CraftCMS Initialization" steps that ultimately create an .env file and set your security key.
1. Add a new site/database to MAMP and make sure a database is available for Craft to be installed into.
1. MAMP users need to make sure and uncomment a line in the `.env` for `BACKUP_COMMAND`, `RESTORE_COMMAND`, and `DB_SOCKET`
1. Run `$ ./craft setup` and follow the instructions, which will fill out the rest of the fields in your .env file and set up the database for first-time use.
1. Run `$ composer run-script post-install-cmd`, which will apply starterkit project config to the newest database.
1. Run `$ npm install`, which will install all Node dependencies for this project.

# Miscellaneous Information
### File/Directory Structure

This CraftCMS project expects certain files to be in specific locations in order to be used.

* [src/](src/) - Parent directory where javascripts/sass/images/fonts files are stored
  * [src/js/](src/js/) - Your project's javascript files go here.
  * [src/img/](src/img/) - Your project's images files go here.
  * [src/fonts/](src/fonts/) - Your project's fonts files go here.
  * [src/scss/](src/scss/) - Your project's SASS files go here ([Tailwind CSS](https://github.com/tailwindcss/tailwindcss) by default).
* [config/](config/) - Parent directory which holds configuration files
  * [config/db.php](config/db.php) - Database configuration, but mostly pulled from `.env`
  * [config/general.php](config/general.php) - General CraftCMS configuration file
  * [config/image-optimize.php](config/image-optimize.php) - General Image Optimize plugin configuration file (https://nystudio107.com/docs/image-optimize/Configuring.html#native-craft-images)
  * [config/license.key](config/license.key) - License key that gets generated upon site bootstrap.
  * [config/project.yaml](config/project.yaml) - Project Config settings to help sync your fields/sections/settings across environments.
* [modules/](modules/) - Holds any custom Yii modules you might be using
* [web/](web/) - Project's site root according to your webserver
  * [web/images/](web/images/) - Project's non-asset images are stored here (git controlled)
  * [web/index.php](web/index.php) - Root PHP file read by the webserver
  * [web/uploads/](web/uploads/) - Parent directory for all uploaded assets (not git controlled)
  * [web/assets/](web/assets/) - **Compiled** assets (js/sass/etc) get put here (not git controlled)
* [scripts/](scripts/) - Utility shell scripts to perform various functions
* [storage/](storage/) - CraftCMS dynamically generated files, such as logs and backups.
* [templates/](templates/) - The location for all Twig templates
* [.env.example](.env.example) - Example `.env` file
* [composer.json](composer.json) - PHP Composer configuration file
* [composer.lock](composer.lock) - PHP Composer package information lock file
* [craft](craft) - CraftCMS PHP console application
* [craft.bat](craft.bat) - CraftCMS console loader for Windows
* [tailwind.config.js](tailwind.config.js) - Tailwind css configuration
* [webpack.mix.js](webpack.mix.js) - Laravel Mix configuration (sass/js compilation, etc)
* [package.json](package.json) - npm packages configuration file
* [package-lock.json](package-lock.json) - npm packages information lock file

More detailed information about the default structure can be found here: https://docs.craftcms.com/v3/directory-structure.html

### .env
 - Database and environment name are set in the .env file when you craft setup
 - This file is not tracked in git, helping to keep passwords more secure

### [Nginx](https://github.com/nystudio107/nginx-craft)
 - My development environment is setup using apache which I find a tad simpler to work with locally
 - Refer to this repo if the staging/prod environment is not using our setup scripts
 - It may be a little heavy handed so an alternative with the least amount of required bits is [here](https://craftcms.stackexchange.com/a/980/107)

### [NPM/Laravel Mix](https://laravel-mix.com/)
 - Laravel Mix makes webpack implementation very easy and has a fairly basic setup for Sass and JS merging

### Database
 - No database is included.
 - Add a blank database to your local host and then fill in the details of that when running `./craft setup`
 - Go to yourdomain.test/admin and craft will install a new version into that empty database

### SASS
 - [Tailwind CSS](https://github.com/tailwindcss/tailwindcss) is included in the project

### [Craft Scripts](https://github.com/nystudio107/craft-scripts)
 - Use these scripts to pull down db and assets
 - Change the settings in the `/scripts/.env.sh` file to match your local machine and the remote server
 
# Project Specific Information
## Admin customization
 - Modify the system name in /admin/settings/general
 - Modify the sites names in /admin/settings/sites
 - Modify email address and name in /admin/settings/email
 - Modify email address and text in Contact form plugin /admin/settings/plugins/contact-form
 - Add google tag manager in /admin/settings/plugins/google-tag-manager
 - Create links in navigations /admin/navigation
 - Create client user account in /admin/users/new and assign "Client" group into "access" tab. You can modify user group access in /admin/settings/users
 - Modify required datas in /admin/globals/fr/companyInfo

<hr style="margin: 80px 0;">

<a href="https://craftcms.com/" rel="noopener" target="_blank"><img width="247" height="60" src="https://craftcms.com/craftcms.svg" alt="Craft CMS"></a>

<br>

## About Craft CMS

Craft is a flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.

It features:

- An intuitive, user-friendly control panel for content creation and administrative tasks.
- A clean-slate approach to content modeling that doesn’t make any assumptions about the content you need to manage.
- An auto-generated [GraphQL API](https://docs.craftcms.com/v3/graphql.html) that can be consumed for building headless applications.
- A fast and flexible [templating system](https://docs.craftcms.com/v3/dev/) based on Twig for building traditional websites.
- A powerful [ecommerce platform](https://craftcms.com/commerce) for building bespoke ecommerce experiences.
- A built-in Plugin Store with hundreds of free and commercial [plugins](https://plugins.craftcms.com/).
- A robust framework for [module and plugin development](https://docs.craftcms.com/v3/extend/).
- An active, vibrant [community](https://craftcms.com/community).

You can learn more about it at [craftcms.com](https://craftcms.com), and documentation is available at [docs.craftcms.com](https://docs.craftcms.com/v3/).

## Tech Specs

Craft is a self-hosted PHP 7 application. It can connect to MySQL and PostgreSQL for content storage. See [Server Requirements](https://docs.craftcms.com/v3/requirements.html) for more details.

## Popular Resources

- **[Documentation](http://docs.craftcms.com/v3/)** – Read the official docs.
- **[Guides](https://craftcms.com/guides)** – Follow along with the official guides.
- **[#craftcms](https://twitter.com/hashtag/craftcms)** – See the latest tweets about Craft.
- **[Discord](https://craftcms.com/discord)** – Meet the community.
- **[Stack Exchange](http://craftcms.stackexchange.com/)** – Get help and help others.
- **[CraftQuest](https://craftquest.io/)** – Watch unlimited video lessons and courses.
- **[Craft Link List](http://craftlinklist.com/)** – Stay in-the-know.
- **[nystudio107 Blog](https://nystudio107.com/blog)** – Learn Craft and modern web development.
