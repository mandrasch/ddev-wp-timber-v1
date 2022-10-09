# DDEV + WordPress + Timber v2 + LaravelMix (/ Vite)

- [DDEV](https://ddev.readthedocs.io/en/latest/)
- [Timber v1](https://upstatement.com/timber/)
    - [Timber v1 starter theme](https://github.com/timber/starter-theme)
- Currently runs on PHP 7.4 (composer had errors for 8.0)
- [Bootstrap v5.2.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [LaravelMix v6](https://laravel-mix.com/docs/6.0/installation)

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
npm install
exit

# Activate theme
ddev wp theme activate timber-starter-theme/theme
ddev launch
```

After this, you just need for local development:

```bash
ddev ssh
cd wp-content/themes/timber-starter-theme
npm run dev
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

Added LaravelMix, based on https://junaidqadir.com/wordpress-theme-using-timber-bootstrap/ and https://5balloons.info/setting-up-bootstrap-5-workflow-using-laravel-mix-webpack/ (modified):

```bash
ddev ssh
cd wp-content/themes/timber-starter-theme
npm init -y
npm install bootstrap@v5.2.2 @popperjs/core laravel-mix --save-dev
```

- Add `wp-content/themes/timber-starter-theme/webpack.mix.js`
- Add scripts to `wp-content/themes/timber-starter-theme/package.json`

```bash
ddev ssh
cd wp-content/themes/timber-starter-theme
npm run dev
```

## TODOs

- [ ] Add bootstrap HTML container, maybe https://bootscore.me/ did all this already?
- [ ] Use ACF / ACF Pro
- [ ] Test multi-lang with polylang
- [ ] Provide example build pipeline with `composer install --no-dev` && `npm run build`
- [ ] Try vite as well