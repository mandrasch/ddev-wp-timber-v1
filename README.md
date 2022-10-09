# DDEV + WordPress + Timber v2 + LaravelMix / Vite

- [DDEV](https://ddev.readthedocs.io/en/latest/)
- [Timber v1](https://upstatement.com/timber/)
    - [Timber v1 starter theme](https://github.com/timber/starter-theme)
- Currently runs on PHP 7.4 (composer had errors for 8.0)

🚧 Work in progress 🚧

See more experiments: https://my-ddev-lab.mandrasch.eu/

## Setup for local development

Clone this repo, then:

```bash
ddev start
ddev wp core download
# Finish installation in browser:
ddev launch

# Jump into DDEV container to work in sub-dir
ddev ssh
cd wp-content/themes/timber-starter-theme
composer install
exit

ddev wp theme activate timber-starter-theme/theme
ddev launch
```

## How was this created?

```bash
# https://ddev.readthedocs.io/en/stable/users/quickstart/#wp-cli
ddev config --project-type=wordpress --php-version=7.4
ddev start
ddev wp core download

# Finish install in browser
ddev launch

# https://timber.github.io/docs/v2
# jump into DDEV container to work with composer in sub-directory
ddev ssh
cd wp-content/themes/
# TODO: is this the correct way to install via composer?
composer create-project upstatement/timber-starter-theme
exit

ddev wp theme activate timber-starter-theme
ddev launch
```

Added `.gitignore` afterwards to only track the child theme.