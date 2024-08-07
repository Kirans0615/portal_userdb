"""Django settings for portaluserdb project.

"""

import os
from pathlib import Path
from datetime import timedelta
import configparser
from django.core.management.utils import get_random_secret_key

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


secrets = {
    "GOOGLE_KEYS":{
        "DJANGO_GOOGLE_OAUTH2_CLIENT_ID": os.environ.get('DJANGO_GOOGLE_OAUTH2_CLIENT_ID'),
        "DJANGO_GOOGLE_OAUTH2_CLIENT_SECRET": os.environ.get('DJANGO_GOOGLE_OAUTH2_CLIENT_SECRET')
    },
    "DJANGO_KEYS": {
        "SECRET_KEY": os.environ.get('SECRET_KEY')
    },
    "ORCID_KEYS": {
        "DJANGO_ORCID_OAUTH2_CLIENT_URL": os.environ.get('DJANGO_ORCID_OAUTH2_CLIENT_URL'),
        "DJANGO_ORCID_OAUTH2_CLIENT_ID": os.environ.get('DJANGO_ORCID_OAUTH2_CLIENT_ID'),
        "DJANGO_ORCID_OAUTH2_CLIENT_SECRET": os.environ.get('DJANGO_ORCID_OAUTH2_CLIENT_SECRET'),
        "DJANGO_ORCID_OAUTH2_URL": os.environ.get('DJANGO_ORCID_OAUTH2_URL'),
    },
    "SERVER":{
        "SERVER_VERSION": os.environ.get('SERVER_VERSION'),
        "SERVER_URL": os.environ.get('SERVER_URL'),
        "DATABASE": os.environ.get('DATABASE')
    }
}
if secrets['DJANGO_KEYS']['SECRET_KEY'] == None:
    secrets = configparser.ConfigParser()
    secrets.read(BASE_DIR + '/.secrets')

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!

if secrets['DJANGO_KEYS']['SECRET_KEY']:
    SECRET_KEY = secrets['DJANGO_KEYS']['SECRET_KEY']
else:
    SECRET_KEY = get_random_secret_key()

if secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_CLIENT_URL']:
    CLIENT = secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_CLIENT_URL']
if secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_CLIENT_ID']:
    ORCID_CLIENT = secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_CLIENT_ID']
if secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_CLIENT_SECRET']:
    ORCID_SECRET = secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_CLIENT_SECRET']
if secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_URL']:
    ORCID_URL = secrets['ORCID_KEYS']['DJANGO_ORCID_OAUTH2_URL']

if secrets['GOOGLE_KEYS']['DJANGO_GOOGLE_OAUTH2_CLIENT_ID']:
    GOOGLE_CLIENT = secrets['GOOGLE_KEYS']['DJANGO_GOOGLE_OAUTH2_CLIENT_ID']
if secrets['GOOGLE_KEYS']['DJANGO_GOOGLE_OAUTH2_CLIENT_SECRET']:
    GOOGLE_SECRET = secrets['GOOGLE_KEYS']['DJANGO_GOOGLE_OAUTH2_CLIENT_SECRET']

EMAIL_BACKEND = secrets['SERVER']['EMAIL_BACKEND']

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]

VERSION = secrets['SERVER']['SERVER_VERSION']

PUBLIC_HOSTNAME = secrets['SERVER']['SERVER_URL']

# Application definition
INSTALLED_APPS = [
    "corsheaders",
    "rest_framework",
    "rest_framework_jwt",
    "rest_framework_jwt.blacklist",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django_rest_passwordreset",
    "drf_yasg",
    "bcodb.apps.BcodbConfig",
    "users.apps.UsersConfig",
    "prefix.apps.PrefixConfig"
]

# allows password reset for a user that does not have a usable password (Default: True)
DJANGO_REST_MULTITOKENAUTH_REQUIRE_USABLE_PASSWORD = False

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

REST_FRAMEWORK = {
    "DEFAULT_PERMISSION_CLASSES": (
        "rest_framework.permissions.IsAuthenticated",
    ),
    "DEFAULT_AUTHENTICATION_CLASSES": (
        # "authentication.services.CustomJSONWebTokenAuthentication",
        "rest_framework_jwt.authentication.JSONWebTokenAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        "rest_framework.authentication.BasicAuthentication",
        ##this sets the default authentication classes which the server will try when it recieves a request
    ),
}

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": secrets["SERVER"]["DATABASE"]
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

STATIC_URL = "/api/static/"
# STATICFILES_DIRS = [os.path.join(BASE_DIR, 'static')]
STATIC_ROOT = "/var/www/bcoeditor/bco_api/bco_api/static/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

CORS_ORIGIN_ALL_ALL = True

# set to the origin so that JWT can make call-backs to verify
ORIGIN = "http://localhost:8080"

CORS_ORIGIN_WHITELIST = (
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "https://test.portal.biochemistry.gwu.edu",
    "https://biocomputeobject.org",
    "https://www.biocomputeobject.org",
    "https://accounts.google.com",
)

CSRF_TRUSTED_ORIGINS = ['https://*.biochemistry.gwu.edu','https://*.127.0.0.1']

JWT_AUTH = {
    "JWT_RESPONSE_PAYLOAD_HANDLER": "authentication.services.custom_jwt_handler",
    "JWT_EXPIRATION_DELTA": timedelta(seconds=604800),
    "JWT_REFRESH_EXPIRATION_DELTA": timedelta(days=14),
    "JWT_ALLOW_REFRESH": True,
    "JWT_PAYLOAD_HANDLER": 'authentication.services.custom_jwt_create_payload',
}

SWAGGER_SETTINGS = {
    "SECURITY_DEFINITIONS": {
        "Bearer": {"type": "apiKey", "name": "Authorization", "in": "header"}
    },
    "DEEP_LINKING": True,
}
